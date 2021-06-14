document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'PageHome') {
        PageHome_Load(page);
        
  } else if (page.id === 'PageLogin') {
    
  }
});



function GetMarketValue(indx, element) {

    var outputstring = "";
  
    var data1 = JSON.stringify({
      CategoryId: sessionStorage.getItem("ItemCategory"),
      Flag: "P",
      CompanyID: sessionStorage.getItem("SelectedCompanyID"),
      Search: "",
      MemberID: sessionStorage.getItem("MemberID"),
      Start: indx,
    });
  
    request = $.ajax({
      type: "POST",
      url: url + "Basket_ItemLoad",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: data1,
      async: true,
  
      success: function (result) {
        var colcount = 0;
        $.each(result.records, function (i, item) {
 
          element.appendChild(ons.createElement(outputstring));
        });
   
        ItemListindex = ItemListindex + colcount;
      },
      error: function (result) {
        console.log("GetitemList", result);
        outputstring = "<ons-list-item>" + result.status + "</ons-list-item>";
      },
    });
  
    // return outputstring.toString();
  }