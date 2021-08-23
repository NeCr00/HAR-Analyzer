$(document).ready(function () {


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
    createHistogram();
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


function createHistogram(){

  data = [300,244,333333,31536000,733,4000000,9,822,733,3,4,5,2,1,9,7,822,4,0,2,3,8,7,6,11,10];
  min = d3.min(data);
  max = d3.max(data);
  domain = [min,max];
  
  var margin = { top: 30, right: 30, bottom: 30, left: 50 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
  
  // The number of bins
  Nbin = 8;
  
  var x = d3
    .scaleLinear()
    .domain(domain)
    .range([0, width]);
 
  var histogram = d3
    .histogram()
    .domain(x.domain()) // then the domain of the graphic
    .thresholds(x.ticks(Nbin)); // then the numbers of bins
  
  // And apply this function to data to get the bins
  var bins = histogram(data);
  

  // Add the svg element to the body and set the dimensions and margins of the graph
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
  
  var y = d3
    .scaleLinear()
    .range([height, 0])
    .domain([
      0,
      d3.max(bins, function(d) {
        return d.length;
      })
    ]);
  
  svg.append("g").call(d3.axisLeft(y));

  svg
    .selectAll("rect")
    .data(bins)
    .enter()
    .append("rect")
    .attr("x", 1)
    .attr("transform", function(d) {
      return "translate(" + x(d.x0) + "," + y(d.length) + ")";
    })
    .attr("width", function(d) {
      return x(d.x1) - x(d.x0) - 1;
    })
    .attr("height", function(d) {
      return height - y(d.length);
    })
    .style("fill", "#69b3a2");
 
}


function getAgeExpires(date1,date2) {
var day1 = new Date("Sat, 21 Aug 2021 12:21:16 GMT"); 
var day2 = new Date("Sat, 21 Aug 2021 10:21:16 GMT");

var difference= Math.abs(day2-day1);
days = difference/(1000 * 3600 * 24)

console.log(days*3600*24)
}