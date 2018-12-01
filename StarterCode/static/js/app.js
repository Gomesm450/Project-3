// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);
var tbody = d3.select("tbody");

data.forEach((tableData) => {
    var row = tbody.append("tr").attr("class", "active");
    // tr.setAttribute("class", "active");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


  var button = d3.select("#filter-btn");
  var input_date = d3.select("#datetime");
    

  function getData(dataset) {

    // Initialize empty arrays to contain our axes
    
    // var x=[];
    // var y=[];
    // Fill the x and y arrays as a function of the selected dataset
    switch (dataset) {
    case "dataset1":
    input_date.on("change", function() {
        var newText = d3.event.target.value;
        button.on("click", function() {
          d3.event.preventDefault()
            var dates_filtered = tableData.filter(function (a) { return 
              ; });
            console.log(dates_filtered);
            tbody.selectAll('tr').remove();
            dates_filtered.forEach((tableData) => {
                var row = tbody.append("tr").attr("class", "active");
                // tr.setAttribute("class", "active");
                Object.entries(tableData).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
            
                });
              });
    
        });
      });
      break;

    case "dataset2":
      var svg = d3.select('#fill2').text("Enter a city");
      var col= d3.select('#datetime').attr('placeholder','benton');
      input_date.on("change", function() {
        var newText = d3.event.target.value;
        button.on("click", function() {
            d3.event.preventDefault();
            var dates_filtered = tableData.filter(function (a) { return a.city === newText; });
            console.log(dates_filtered);
            tbody.selectAll('tr').remove();
            dates_filtered.forEach((tableData) => {
                var row = tbody.append("tr").attr("class", "active");
                // tr.setAttribute("class", "active");
                Object.entries(tableData).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
            
                });
              });
    
        });
      });
      
      break;
    case "dataset3":
    var svg = d3.select('#fill2').text("Enter a state");
    var col= d3.select('#datetime').attr('placeholder','ar');
    input_date.on("change", function() {
      var newText = d3.event.target.value;
      button.on("click", function() {
          d3.event.preventDefault();
          var dates_filtered = tableData.filter(function (a) { return a.state === newText; });
          console.log(dates_filtered);
          tbody.selectAll('tr').remove();
          dates_filtered.forEach((tableData) => {
              var row = tbody.append("tr").attr("class", "active");
              // tr.setAttribute("class", "active");
              Object.entries(tableData).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
          
              });
            });
  
      });
    });
    
    break;
    case "dataset4":
    var svg = d3.select('#fill2').text("Enter a country");
    var col= d3.select('#datetime').attr('placeholder','us');
    input_date.on("change", function() {
      var newText = d3.event.target.value;
      button.on("click", function() {
          d3.event.preventDefault();
          var dates_filtered = tableData.filter(function (a) { return a.country === newText; });
          console.log(dates_filtered);
          tbody.selectAll('tr').remove();
          dates_filtered.forEach((tableData) => {
              var row = tbody.append("tr").attr("class", "active");
              // tr.setAttribute("class", "active");
              Object.entries(tableData).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
          
              });
            });
  
      });
    });
    
    break;
    case "dataset5":
    var svg = d3.select('#fill2').text("Enter a shape");
    var col= d3.select('#datetime').attr('placeholder','circle');
    input_date.on("change", function() {
      var newText = d3.event.target.value;
      button.on("click", function() {
          d3.event.preventDefault();
          var dates_filtered = tableData.filter(function (a) { return a.shape === newText; });
          console.log(dates_filtered);
          tbody.selectAll('tr').remove();
          dates_filtered.forEach((tableData) => {
              var row = tbody.append("tr").attr("class", "active");
              // tr.setAttribute("class", "active");
              Object.entries(tableData).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
          
              });
            });
  
      });
    });
    
    
    break;
    
    default: d3.event.preventDefault();
      
    }};
  

  


 


 
