$(document).ready(function () {
  var x1 = [10000, 22000];
  var trace1 = {
    x: x1,
    name: "control",
    autobinx: false,
    histnorm: "count",
    marker: {
      color: "rgba(255, 100, 102, 0.7)",
      line: {
        color: "rgba(255, 100, 102, 1)",
        width: 1,
      },
    },
    opacity: 0.9,
    type: "histogram",
    xbins: {
      end: 40000,
      size: 200,
      start: 10000,
    },
  };
  var data = [trace1];
  var layout = {
    barmode: "overlay",
    title: "Sampled Results",
    xaxis: {
      title: "Max-Age",
    },
    yaxis: { title: "# of Responses" },
  };
  Plotly.newPlot("myDiv", data, layout);

  $.when(getInfo()).then(function success(data) {
    console.log(data);

    data.Isps.forEach(function (isp, index) {
      value = JSON.stringify(isp.isp);
      value = value.slice(1, -1);
      index= index + 100;
      element =
      '<input type="checkbox" id="boxcontent-' +
      index +
      '" value="isp"> <label for="boxcontent-' +
      index +
      '">' +
      value +
      "</label>";

        element1 = '<input type="checkbox" id="box1-'+index+'" value="isp"> <label for="box1-'+index+'">'+value+'</label>'

      //$("#ispsCheck").append(element);
      $("#isp").append(element);
    });

    data.content_type.forEach(function (content, index) {
      value = JSON.stringify(content.content_typeResponse);
      value = value.slice(1, -1);
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

      console.log(selectedContent);
      console.log(selectedIsp);

      var filteredData = getAge(selectedContent, selectedIsp, data.entries);
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
  var xValues = [];

  entries.forEach((value) => {
    var isp = value.isp; //take isp
    var content = value.content_typeResponse; //take content type response
    var maxAge =0
    var cache_control = value.cache_controlResponse; //get max-age from string
    cache_control = cache_control.split(",");
    cache_control.forEach((value) => {
      if (value.includes("max-age")) {
        value = value.replace(/\D/g, "");
        maxAge = parseInt(value);
       
      }
    });

    //check filters
    if( contents.indexOf(content)> -1){
        xValues.push( maxAge)
    }
  });
  console.log(xValues)
}
