            // var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search+ "&pub_year="+ startYear + "&pub_year=" +endYear+ "api-key=TfUkpsUh6zophYREhG9khhubSGapnKNJ"
            var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=TfUkpsUh6zophYREhG9khhubSGapnKNJ"

var search=""
var numberOfRecords=""
var startYear= ""
var endYear =""
// var url=[]
// $("button").on("click", function() {

$.ajax({
    url: queryURL,
    method: "GET",
  }).then(function(response) {
    //   console.log(response.docs.web_url)
    console.log(response)
    
          var results = response.response.docs;
    console.log(results)
          for (var i = 0; i < results.length; i++) {
        
          url= results[i].web_url;
          console.log(url)
          }
  })
       