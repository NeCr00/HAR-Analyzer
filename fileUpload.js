$(document).ready(function () {
  const harFile = document.getElementById("harFile");
  var editedHar;
  var serverIPs = [];

  $(document).on("click", 'input[type="checkbox"]', function () {
    $('input[type="checkbox"]').not(this).prop("checked", false);
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
        serverIPs.push(serverIP);
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
    };
    reader.readAsText(file);
  });

  document.getElementById("upload").addEventListener("click", (event) => {
    var serverIP = serverIPAddressFilter(serverIPs);
    serverIpsInfo = {};
    var info = {};
    var num = 0;
    $.when(IpInfo()).then(function success(data) {
      info["userIpInfo"] = {
        IpInfo: {
          ip: data.ip,
          isp: data.isp,
          lat: data.location.lat,
          lng: data.location.lng,
        },
      };
      // console.log(info);
      for (ip in serverIP) {
        $.when(getserverIP(serverIP[ip])).then(function success(data) {
          serverIpsInfo[num] = data;
          num++;
        });
      }

      setTimeout(function () {
        UserInfo = { info, serverIpsInfo, editedHar };
        
        $.ajax({
          type: "POST",
          url: "http://localhost/User/harUpload.php",
          data:{ "data": JSON.stringify(UserInfo) },
          success: function (data) {
            console.log(data);
            console.log(UserInfo);
          },
          error: function (err) {
            console.log(err);
          },
        });
      }, 3500);
    });
  });
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

function IpInfo() {
  var api_key = "at_qZhoSREYPDst7AqtUAZK5kt5PklLy";

  return $.ajax({
    url: "https://geo.ipify.org/api/v1",
    data: { apiKey: api_key, ip: "10.10.10.10" },
    success: function (data) {
      userIP = data["ip"];
    },
  });
}

function getserverIP(ip) {
  var api_key = "at_qZhoSREYPDst7AqtUAZK5kt5PklLy";
  return $.ajax({
    url: "https://geo.ipify.org/api/v1",
    data: { apiKey: api_key, ipAddress: ip },
    success: function (data) {
      //console.log(data);
    },
  });
}

function serverIPAddressFilter(serverIPs) {
  let uniqueServerIP = [...new Set(serverIPs)];
  for (ip in uniqueServerIP) {
    uniqueServerIP[ip] = uniqueServerIP[ip].replace(/[\[\]']+/g, "");
  }
  return uniqueServerIP;
}