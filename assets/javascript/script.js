// API Key = 0e5cbc1fa8134deba3ce6e211baf64cf

// On submit click
    // Get the input value from the search term input
    // Get the input value from number of records 
    // Get the input value from start year 
    // Get the input value from end year
// store this value to a variable that we add into the query string
// make the query string
// use Ajax to call
//


$("#submit").on("click", function(event){
    preventDefault(event);
    var search = $("#searchTerm").val();
    var records = $("#records").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();


    var apiKey = "0e5cbc1fa8134deba3ce6e211baf64cf"
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + search + "&page=" + records + "begin_date=" + startYear + "&end_date=" + endYear + "&api-key=" + apiKey;

})



    });
    $.ajax({
    url: url,
    method: 'GET',
    }).done(function(result) {
    console.log(result);
    }).fail(function(err) {
    throw err;
    });