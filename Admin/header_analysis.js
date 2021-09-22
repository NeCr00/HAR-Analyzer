$(document).ready(function () {
  $.when(getInfo()).then(function success(data) {
    console.log(data);

    allIsp = [];
    allContent = [];

    data.Isps.forEach(function (isp, index) {
      value = JSON.stringify(isp.isp);

      value = value.slice(1, -1);
      allIsp.push(value);
      index = index + 100;
      element =
        '<input type="checkbox" id="boxcontent-' +
        index +
        '" value="isp"> <label for="boxcontent-' +
        index +
        '">' +
        value +
        "</label>";

      element1 =
        '<input type="checkbox" id="box1-' +
        index +
        '" value="isp"> <label for="box1-' +
        index +
        '">' +
        value +
        "</label>";

     
      $("#isp").append(element);
    });

    data.content_type.forEach(function (content, index) {
      value = JSON.stringify(content.content_typeResponse);

      value = value.slice(1, -1);
      allContent.push(value);
      element =
        '<input type="checkbox" id="boxcontent-' +
        index +
        '" value="content"> <label for="boxcontent-' +
        index +
        '">' +
        value +
        "</label>";
      $("#contentType").append(element);
    });

    var filteredData = getAge(allContent, allIsp, data.entries);
    makeHistogram(filteredData);
    getCacheability(data.cache_entries, allContent, allIsp);
    getStaleAndFresh(data.cache_entries, allContent, allIsp)

    $("#button").click(function (event) {
      var selectedContent = [];
      var selectedIsp = [];
      var checkboxes = document.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      checkboxes.forEach(function (checkbox) {
        inputAtrr = checkbox.id;
        if (checkbox.value == "content") {
          var contentType = $("label[for='" + inputAtrr + "']").text();
          selectedContent.push(contentType);
        } else {
          var isp = $("label[for='" + inputAtrr + "']").text();
          selectedIsp.push(isp);
        }
      });

      if (selectedContent.length < 1) {
        selectedContent = allContent;
      }

      if (selectedIsp.length < 1) {
        selectedIsp = allIsp;
      }

      filteredData = getAge(selectedContent, selectedIsp, data.entries);

      makeHistogram(filteredData);
      getCacheability(data.cache_entries, selectedContent, selectedIsp);
      getStaleAndFresh(data.cache_entries, selectedContent, selectedIsp)
    });
  });
});

function getInfo() {
  return $.ajax({
    method: "GET",
    url: "http://localhost/Admin/header_analysis_results.php",
    success: function (data) {},
  });
}

function getAge(contents, isps, entries) {
  var xValues = Array(["Content-Type", "Age"]);


  entries = entries.filter((value) =>
  isps.find(data=>data.includes(value.isp))
);

  entries = entries.filter((value) =>
    contents.find(data=>data.includes(value.content_typeResponse))
  );

 
  entries.forEach((value) => {
    
    var content = value.content_typeResponse; //take content type response
    var maxAge = 0;
    var cache_control = value.cache_controlResponse; //get max-age from string
    cache_control = cache_control.split(",");
   
    cache_control.forEach((data) => {
      if (data.includes("max-age")) {
        data = data.replace(/\D/g, "");
        maxAge = parseInt(data);
        
      }

    });

    if(maxAge == 0){
      maxAge = getAgeExpires(
        value.expiresResponse,
        value.last_modifiedResponse
        
      );
    }
       
    
     if(maxAge > 0)
      xValues.push(Array(content, maxAge));
    
  });

  return xValues;
}

function getAgeExpires(date1, date2) {
  date1 = new Date (date1)
  date2 = new Date (date2)
  var difference = (Math.abs(date2-date1));
  
  return difference /1000;
 
}

function makeHistogram(filteredData) {

  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable(filteredData);

    var options = {
      title: "Lengths of Age per Content-Type",
      legend: { position: "none" },
      colors: ["#fc5001"],
      fontSize: 12,
      hAxis: {
        title: 'Max-Age to Seconds'
      },
      vAxis: {
        title: 'Number of entries'
      },
      backgroundColor: "#E1E1E1",
      histogram: {
        maxNumBuckets: 10,
        numBucketsRule: "rice",
      },
    };

    var chart = new google.visualization.Histogram(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  }
}

function getCacheability(entries, contents, isps) {
  var num_public = 0;
  var num_private = 0;
  var num_cache = 0;
  var num_store = 0;

  entries = entries.filter((value) =>
  isps.find(data=>data.includes(value.isp))
);

  entries = entries.filter((value) =>
    contents.find(data=>data.includes(value.content_typeResponse))
  );
  
  var num_entries = entries.length;
  setTimeout(function () {
    entries.forEach((value) => {
     
      cache_info = value.cache_controlResponse.split(",");

      if (cache_info.indexOf("public") > -1) {
        num_public++;
      }

      if (cache_info.indexOf("private") > -1) {
        num_private++;
      }

      if (cache_info.indexOf("no-store") > -1) {
        num_store++;
      }
      
      if (cache_info.indexOf("no-cache") > -1) {
        num_cache++;
      }
    });
  }, 500);

  setTimeout(function () {
    $("#public").html(((num_public / num_entries) * 100).toFixed(2) + "%");
    $("#private").html(((num_private / num_entries) * 100).toFixed(2) + "%");
    $("#no-cache").html(((num_cache / num_entries) * 100).toFixed(2) + "%");
    $("#no-store").html(((num_store / num_entries) * 100).toFixed(2) + "%");
  }, 1000);
}

function getStaleAndFresh(entries, contents, isps) {
  var num_stale = 0;
  var num_fresh = 0;

  entries = entries.filter((data) => isps.includes(data.isp));

  entries = entries.filter((data) =>
    JSON.stringify(contents).includes(JSON.stringify(data.content_typeResponse))
  );

  var num_entries = entries.length;
  entries.forEach((data) => {
    
    cache_info_req = data.cache_controlRequest.split(",");
    cache_info_res = data.cache_controlResponse.split(",");

    
    if (cache_info_req.find(data=>data.includes("max-stale")) || cache_info_res.find(data=>data.includes("max-stale")) ) {  
      num_stale++;
    }

    if (cache_info_req.find(data=>data.includes("min-fresh")) || cache_info_res.find(data=>data.includes("min-fresh")) ) {  
      num_fresh++;
    }
  });

  setTimeout(function () {
    $("#max_stales").html(((num_stale / num_entries) * 100).toFixed(2) + "%");
    $("#min_fresh").html(((num_fresh / num_entries) * 100).toFixed(2) + "%");
    console.log(num_stale)
  }, 1000);

}
