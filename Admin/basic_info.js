$(document).ready(function () {
  $.when(getBasicInfo()).then(function success(data) {
    console.log(data);

    $("#num_users").html(data.numUsers);

    data.numPerRequest.forEach((value) => {
      type = Object.keys(value)[0];
      typeData = Object.values(value)[0];
      value = (type + ": " + typeData).toString();
      $("#methods").append("<p>" + value + "</p>");
    });

    data.numPerStatus.forEach((value) => {
      //$(value).appendTo('#methods');
      type = Object.keys(value)[0];
      typeData = Object.values(value)[0];
      value = (type + ": " + typeData).toString();

      $("#status").append("<p>" + value + "</p>");
    });

    $("#domains").append("<p>" + JSON.stringify(data.numDomains) + "</p>");

    data.numPerContent.forEach((value) => {
        if (Object.values(value)[0] != null) {
      type = Object.keys(value)[0];
      typeData = Object.values(value)[0];
      value = (type + ": " + typeData).toString();

      $("#age").append("<p>" + value + "</p>");
        }
    });

    var ctx = document.getElementById("myChart").getContext("2d");

    reqData = data.numPerRequest;

    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "GET",
          "POST",
          "DELETE",
          "HEAD",
          "PUT",
          "CONNECT",
          "OPTIONS",
          "PATCH",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [
              reqData[0].GET,
              reqData[1].POST,
              reqData[2].DELETE,
              reqData[3].HEAD,
              reqData[4].PUT,
              reqData[5].CONNECT,
              reqData[6].OPTIONS,
              reqData[7].PATCH,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
              "rgba(100, 159, 64, 0.5)",
              "rgba(255, 0, 64, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(100, 159, 64, 1)",
              "rgba(255, 0, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    var ctx1 = document.getElementById("chartCode").getContext("2d");
    statusData = data.numPerStatus;
    typeStatus = [];
    typeData = [];
    statusData.forEach((value) => {
      statusType = Object.keys(value)[0];

      typeStatus.push(statusType);
      typeData.push(Object.values(value)[0]);
    });

    var myChart = new Chart(ctx1, {
      type: "pie",
      data: {
        labels: typeStatus,
        datasets: [
          {
            label: "# of Votes",
            data: typeData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
              "rgba(100, 159, 64, 0.5)",
              "rgba(255, 0, 64, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(100, 159, 64, 1)",
              "rgba(255, 0, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    var ctx1 = document.getElementById("chartAge").getContext("2d");
    contentData = data.numPerContent;
    typeContent = [];
    typeData = [];
    contentData.forEach((value) => {
      if (Object.values(value)[0] != null) {
        contentType = Object.keys(value)[0];
        console.log(contentType);
        typeContent.push(contentType);
        typeData.push(Object.values(value)[0]);
      }
    });

    var myChart = new Chart(ctx1, {
      type: "pie",
      data: {
        labels: typeContent,
        datasets: [
          {
            label: "# of average age",
            data: typeData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
              "rgba(100, 159, 64, 0.5)",
              "rgba(255, 0, 64, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(100, 159, 64, 1)",
              "rgba(255, 0, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  });
});

function getBasicInfo() {
  return $.ajax({
    method: "GET",
    url: "http://localhost/Admin/basic_info_results.php",
    success: function (data) {},
  });
}
