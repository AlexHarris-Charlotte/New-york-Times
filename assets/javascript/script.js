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

    var appendDiv = $("#append");


    var apiKey = "0e5cbc1fa8134deba3ce6e211baf64cf"
    // var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&page=" + records + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=" + apiKey;
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=" + apiKey;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);
        var mainHeadline = response.response.docs[0].headline.main;
        var author = response.response.docs[0].byline.person[0];
        var section = response.response.docs[0].section_name;
        var date = response.response.docs[0].pub_date;
        var URL = response.response.docs[0].web_url;
        var newArticle = $("<div>");
        var urlLink = $('<a>');
        newArticle.append("<h1>"+ mainHeadline + "</h1>");
        newArticle.append("<p>By: " + author + "</p>");
        newArticle.append("<p>"+section+"</p>");
        newArticle.append("<p>Published: " + date + "</p>");
        urlLink.attr('href', URL);
        urlLink.html(URL);
        newArticle.append(urlLink);
        appendDiv.append(newArticle);
        console.log();
    
      });
});



  
    