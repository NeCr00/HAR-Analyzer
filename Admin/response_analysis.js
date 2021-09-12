$(document).ready(function() {
    $.when(getInfo()).then(function success(data) {
        console.log(data);
        destroy = 0;

        fixedEntries = getDay(data.entries)
        console.log(fixedEntries);
        fixedEntries = getHours(data.entries);
        console.log(fixedEntries);

        var ctx = document.getElementById('Chart').getContext('2d');

        
        allDatetime = [];
        allcontent_typeResponse = [];
        allmethod = [];
        allisp = [];

          

      allDatetime = getDay(data.Datetime)
      distinctDays = getDistinctDays(allDatetime)



  
       
    
      distinctDays.forEach(function(distinctDays, index) {
            element =
                '<input type="checkbox" id="boxDatetime-' +
                index +
                '" value="Datetime"> <label for="boxDatetime-' +
                index +
                '">' +
                distinctDays +
                "</label>";
            $("#Datetime").append(element);
        });


        data.content_typeResponse.forEach(function(content_typeResponse, index) {
            value = JSON.stringify(content_typeResponse.content_typeResponse);
            value = value.slice(1, -1);
            allcontent_typeResponse.push(value);
            element =
                '<input type="checkbox" id="boxcontent-' +
                index +
                '" value="content_typeResponse"> <label for="boxcontent-' +
                index +
                '">' +
                value +
                "</label>";
            $("#content_typeResponse").append(element);
        });

        data.method.forEach(function(method, index) {
            value = JSON.stringify(method.method);
            value = value.slice(1, -1);
            allmethod.push(value);
            element =
                '<input type="checkbox" id="boxmethod-' +
                index +
                '" value="method"> <label for="boxmethod-' +
                index +
                '">' +
                value +
                "</label>";
            $("#method").append(element);
        });

        data.isp.forEach(function(isp, index) {
            value = JSON.stringify(isp.isp);

            value = value.slice(1, -1);
            allisp.push(value);
            index = index + 100;
            element =
                '<input type="checkbox" id="boxisp-' +
                index +
                '" value="isp"> <label for="boxisp-' +
                index +
                '">' +
                value +
                "</label>";

            //$("#ispsCheck").append(element);
            $("#isp").append(element);
        });

        filteredData = filterData(fixedEntries, allisp,allmethod,allcontent_typeResponse,distinctDays)
        dataset = makeDataset(filteredData)
        myChart = makeLineChart(dataset,ctx);


        $("#button").click(function(event) {

          myChart.destroy()

            var selectedDatetime = [];
            var selectedcontent_typeResponse = [];
            var selectedmethod = [];
            var selectedisp = [];
            var checkboxes = document.querySelectorAll(
                "input[type=checkbox]:checked"
            );
            checkboxes.forEach(function(checkbox) {
                inputAtrr = checkbox.id;
                if (checkbox.value == "Datetime") {
                    var Datetime = $("label[for='" + inputAtrr + "']").text();
                    selectedDatetime.push(Datetime);
                } else if (checkbox.value == "content_typeResponse") {
                    var content_typeResponse = $("label[for='" + inputAtrr + "']").text();
                    selectedcontent_typeResponse.push(content_typeResponse);
                } else if (checkbox.value == "method") {
                    var method = $("label[for='" + inputAtrr + "']").text();
                    selectedmethod.push(method);
                } else if (checkbox.value == "isp") {
                    var isp = $("label[for='" + inputAtrr + "']").text();
                    selectedisp.push(isp);
                }
            });


            if (selectedcontent_typeResponse.length < 1) {
                selectedcontent_typeResponse = allcontent_typeResponse;
            }
            if (selectedDatetime.length < 1) {
                selectedDatetime = distinctDays;
            }
            if (selectedisp.length < 1) {
                selectedisp = allisp;
            }
            if (selectedmethod.length < 1) {
                selectedmethod = allmethod;
            }
            
            
            filteredData = filterData(fixedEntries, selectedisp,selectedmethod,selectedcontent_typeResponse,selectedDatetime)
            dataset = makeDataset(filteredData)
            myChart =  makeLineChart(dataset,ctx);
            
            
        });

      

      
    });
});

function getInfo() {
    return $.ajax({
        method: "GET",
        url: "http://localhost/Admin/response_analysis_results.php",
        success: function(data) { data },
    });
};

function getDay(data) {

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    data.forEach(function(value) {
        var date = value.startedDateTime

        var m = date.match(/^\d{4}[-/.]\d{1,2}[-/.]\d{1,2}/)
            //console.log(m[0])

        var date = new Date(m[0])

        day = date.getDay()



       // value.startedDateTime = weekday[day]
      value["day"] = weekday[day]
    });

    return data;
};




function getHours(data) {

    var hours = new Array(24);
    for (let i = 0; i < 24; i++) {
        hours[i] = i;
    }

    data.forEach(function(value) {
        var time = value.startedDateTime
        var m = time.match(/\d{2}[:]/)
        var hour = m[0];

      value["hour"] = hour[0]+hour[1];
    });

    return data;
};





function getDistinctDays (dateTime) {

  var distinctDays = []

  dateTime.forEach( value =>{

    distinctDays.push(value.day)
  })


  distinctDays = ([...new Set(distinctDays)]);
  console.log(distinctDays)
  return distinctDays
}

function makeLineChart ( dataset,ctx){
 

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    
        labels: ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
        datasets: [{
          
           label: "# of average response times ",
          data: dataset,
          fill: false,
         
          tension: 0.3,
          borderColor: 'rgb(235, 107, 52)',
        }]
    },
    options: {
      legend: {
           labels: {
                fontColor: 'orange'
               }
            },
      title: {
          display: true,
          fontColor: 'blue',
          text: 'Custom Chart Title'
      }     ,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true,
                  fontColor: 'red'
              },
          }],
        xAxes: [{
              ticks: {
                  fontColor: 'green'
              },
          }]
      } 

  },
});

return myChart;
}


function filterData(entries, selectedisp,selectedmethod,selectedContent,selectedDay) {

  entries = entries.filter((value) =>selectedContent.find (data => data.includes(value.content_typeResponse)) );
  entries = entries.filter((value) =>selectedisp.find (data => data.includes(value.isp)));
  entries = entries.filter((value) =>selectedDay.find (data => data.includes(value.day)));
  entries = entries.filter((value) =>selectedmethod.find (data => data.includes(value.method)));
  
 return entries;
}

function makeDataset (entries){
hours = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]

console.log()
total_wait_per_hour = new Array(24).fill(0);
num_wait_per_hour =  new Array(24).fill(0);


hours.forEach((value,index) => {

  entries.forEach(data =>{
   
     if(value == data.hour){
       
      total_wait_per_hour[index] = total_wait_per_hour[index] + parseFloat(data.wait)
      num_wait_per_hour[index] = num_wait_per_hour[index] + 1;
     }
  })
})

dataset = new Array(24).fill(0);
total_wait_per_hour.forEach((value,index) => {

  if(num_wait_per_hour[index])
  dataset[index] = value /num_wait_per_hour[index]

})


return dataset;

}


