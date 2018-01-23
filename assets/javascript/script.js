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
    event.preventDefault();
    var search = $("#searchTerm").val();
    var records = $("#records").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    var searchYearStart = startYear + "0101";
    var searchEndYear = endYear + "1231";
    var appendDiv = $("#append");
    appendDiv.empty();


    var apiKey = "0e5cbc1fa8134deba3ce6e211baf64cf"
    // var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&page=" + records + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=" + apiKey;
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&begin_date=" + searchYearStart + "&end_date=" + searchEndYear +  "&api-key=" + apiKey;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);
        for(var i = 0; i < records; i++) {
        var mainHeadline = response.response.docs[i].headline.main;
        var author = response.response.docs[i].byline.original;
        var section = response.response.docs[i].section_name || "No Data Available";
        var date = response.response.docs[i].pub_date;
        var URL = response.response.docs[i].web_url;
        var newArticle = $("<div>");
        var urlLink = $('<a>');
        newArticle.append("<h1>"+ mainHeadline + "</h1>");
        newArticle.append("<p>" + author + "</p>");
        newArticle.append("<p>"+section+"</p>");
        newArticle.append("<p>Published: " + date + "</p>");
        urlLink.attr('href', URL);
        urlLink.html(URL);
        newArticle.append(urlLink);
        appendDiv.append(newArticle);
        console.log();
        }

      });
});



  
    