$(document).ready(function () {
  $.when(getInfo()).then(function success(data) {
    console.log(data);

    
    allDatetime =[];
    allcontent_typeResponse = [];
    allmethod = [];    
    allisp = [];

    data.Datetime.forEach(function (Datetime, index) {
      value = JSON.stringify(Datetime);

      value = value.slice(1,-1);
      allDatetime.push(value);
      element =
        '<input type="checkbox" id="boxDatetime-' +
        index +
        '" value="Datetime"> <label for="boxDatetime-' +
        index +
        '">' +
        value +
        "</label>";
      $("#Datetime").append(element);
    });

    data.content_typeResponse.forEach(function (content_typeResponse, index) {
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

    data.method.forEach(function (method, index) {
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
        
    data.isp.forEach(function (isp, index) {
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

    






    $("#button").click(function (event) {
      
      var selectedDatetime =[];
      var selectedcontent_typeResponse = [];
      var selectedmethod = [];    
      var selectedisp = [];
      var checkboxes = document.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      checkboxes.forEach(function (checkbox) {
        inputAtrr = checkbox.id;
        if (checkbox.value == "Datetime") {
          var Datetime = $("label[for='" + inputAtrr + "']").text();
          selectedDatetime.push(Datetime);
        } else if (checkbox.value == "content_typeResponse"){
          var content_typeResponse = $("label[for='" + inputAtrr + "']").text();
          selectedcontent_typeResponse.push(content_typeResponse);
        } else if (checkbox.value == "method"){
          var method = $("label[for='" + inputAtrr + "']").text();
          selectedmethod.push(method);
        } else if (checkbox.value == "isp"){
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
  });
});

  function getInfo() {
    return $.ajax({
      method: "GET",
      url: "http://localhost/Admin/response_analysis_results.php",
      success: function (data) {data},
    });
  };
