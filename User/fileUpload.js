$(document).ready(function () {
  const harFile = document.getElementById("harFile");
  var editedHar;
  var userInfo = getUserInfo();



$(document).on('click', 'input[type="checkbox"]', function() {      
    $('input[type="checkbox"]').not(this).prop('checked', false);      
});

  harFile.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      var har = JSON.parse(e.target.result);
      var entries = har.log.entries;
      var harInfo = {};

      for (var entrie in entries) {
        myEntrie = entries[entrie];

        const startedDateTime = myEntrie.startedDateTime;
        const timings = myEntrie.timings.wait;
        const serverIP = myEntrie.serverIPAddress;

        //request
        const methodReq = myEntrie.request.method;
        const domainReq = new URL(myEntrie.request.url).hostname;
        //request headers
        var headers = myEntrie.request.headers;
        var requestHeader = extractHeaders(headers);
        // if (Object.keys(requestHeader).length)
        //     console.log(requestHeader)

        //response
        const statusRes = myEntrie.response.status;
        const statusTextRes = myEntrie.response.statusText;
        headers = myEntrie.response.headers;
        var responseHeader = extractHeaders(headers);
        // console.log(entries[entrie].request.headers);
        var entry = {};
        entry["info"] = { startedDateTime, timings, serverIP };
        entry["requestInfo"] = { methodReq, domainReq, requestHeader };
        entry["responseInfo"] = { statusRes, statusTextRes, responseHeader };

        //console.log(entry);
        harInfo[entrie] = entry;
      }
      editedHar = { HarInformation: harInfo };
      console.log(editedHar);
    };
    reader.readAsText(file);
  });

  document.getElementById("upload").addEventListener("click", (event) => {});
});

function extractHeaders(headers) {
  var requestHeader = {};

  for (var header in headers) {
    myheader = headers[header].name;

    if (myheader == "content-type") {
      requestHeader["content-type"] = headers[header].value;
    }

    if (myheader == "cache-control") {
      requestHeader["cache-control"] = headers[header].value;
    }

    if (myheader == "pragma") {
      requestHeader["pragma"] = headers[header].value;
    }

    if (myheader == "expires") {
      requestHeader["expires"] = headers[header].value;
    }

    if (myheader == "age") {
      requestHeader["age"] = headers[header].value;
    }

    if (myheader == "last-modified") {
      requestHeader["last-modified"] = headers[header].value;
    }

    if (myheader == "host") {
      requestHeader["host"] = headers[header].value;
    }
  }
  //console.log(requestHeader)
  return requestHeader;
}

function getUserInfo() {
  $.when(userInfo()).then(function success(data) {
    var info =  {"userInfo":{"ip": data.ip, "isp":data.isp}}
    console.log(info)
    return info;
  });
}

function userInfo() {
  var api_key = "at_QikthQswy6mAel03gqPXoOjc0SvH8";

  return $.ajax({
    url: "https://geo.ipify.org/api/v1",
    data: { apiKey: api_key },
    success: function (data) {
      userIP = data["ip"];
    },
  });
}
