$(document).ready(function() {
    $.when(getInfo()).then(function success(data) {
        console.log(data);







        fixedEntries = getDay(data.entries)
        days = getDay(data.Datetime)
        hours = getHours(data.Datetime)
        console.log(hours)

        allDatetime = [];
        allcontent_typeResponse = [];
        allmethod = [];
        allisp = [];


        //unique.forEach([...new Set(value)])




        data.Datetime.forEach(function(Datetime) {
            value = JSON.stringify(Datetime.startedDateTime);
            value = value.slice(1, -1);
            allDatetime.push(value);
        });

        /*
                function sort_days(allDatetime) {
                    var day_of_week = new Date().getDay();
                    var list = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    var sorted_list = list.slice(day_of_week).concat(list.slice(0, day_of_week));
                    return allDatetime.sort(function(a, b) { return sorted_list.indexOf(a) > sorted_list.indexOf(b); });
                };
        */
        allDatetime = ([...new Set(allDatetime)]);
        //allDatetime = sort_days(allDatetime);
        //console.log(allDatetime);

        allDatetime.forEach(function(allDatetime, index) {
            element =
                '<input type="checkbox" id="boxDatetime-' +
                index +
                '" value="Datetime"> <label for="boxDatetime-' +
                index +
                '">' +
                allDatetime +
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

        $("#button").click(function(event) {

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
                selectedDatetime = allDatetime;
            }
            if (selectedisp.length < 1) {
                selectedisp = allisp;
            }
            if (selectedmethod.length < 1) {
                selectedmethod = allmethod;
            }
        });

        var ctx = document.getElementById('Chart').getContext('2d');
        reqData = data.method;
        method_filtered = data.method_filtered;
        isp_filtered = data.isp_filtered;
        content_typeResponse_filtered = data.content_typeResponse_filtered

        //console.log(method_filtered, isp_filtered, content_typeResponse_filtered);


        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: allDatetime,
                datasets: [{
                        label: 'Dataset 1',
                        data: method_filtered,
                        backgroundColor: "rgba(255, 99, 132, 0.5)",
                        stack: 'Stack 1',
                    },
                    {
                        label: 'Dataset 2',
                        data: isp_filtered,
                        backgroundColor: "rgba(54, 162, 235, 0.5)",
                        stack: 'Stack 2',
                    },
                    {
                        label: 'Dataset 3',
                        data: content_typeResponse_filtered,
                        backgroundColor: "rgba(255, 206, 86, 0.5)",
                        stack: 'Stack 3',
                    },
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'wait time'
                    },
                },
                responsive: true,
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true
                    }
                }
            }
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



        value.startedDateTime = weekday[day]

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
        console.log(m[0])

        var date = new Date(m[0])

        hours = date.getHours()

        value.startedDateTime = hours[hours]


    });

    return data;
};





/*

function getStaleAndFresh(entries, contents, isps) {
    var num_stale = 0;
    var num_fresh = 0;

    entries = entries.filter((data) => isps.includes(data.isp));




    console.log(entries);

}
*/