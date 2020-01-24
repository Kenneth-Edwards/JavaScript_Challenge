// from data.js
var tableData = data;
// var table = d3.select(".ufo-table");
var tbody = d3.select("tbody");

// Style & Build Inital Data Table with all data
function buildTable(data){
    //  Clear tbody
    tbody.html("");
    //Styling
    var table1 = d3.select(".ufo-table");
    table1.attr("class", "ufo-table table-striped");
    var thead1 = d3.select(".thead1");
    thead1.attr("class", "thead1 thead-dark")
    // build table
    data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td").text(value).style('color', 'yellowgreen');
  });
});
}

////////////////////////////////////////////////////////////////////////////
// Event handler to create table with ONLY data filtered on date once the "Filter Table" button is clicked

function handleClick(){
  // Prevent html page refresh
  d3.event.preventDefault();
  // Select the value entered by a user
  var date = d3.select("#datetime").property("value");
  var filteredData = tableData;
  //Styling
    var table1 = d3.select(".ufo-table");
    table1.attr("class", "ufo-table table-striped");
    var thead1 = d3.select(".thead1");
    thead1.attr("class", "thead1 thead-dark")
  // Conditional to select only data with the date a user has entered
  if(date) {filteredData = filteredData.filter((row) => row.datetime === date);} 
  // Build New Table using the buildTable function but this time with filteredData
  buildTable(filteredData);
};

// Eventlistener which will activate the handleClick function once the Filter Table button is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);


