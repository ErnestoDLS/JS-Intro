(function(){
  var githubProXHR = new XMLHttpRequest();

  document.addEventListener("DOMContentLoaded", function(e){
    var profileElement = document.querySelector("[data-js='profile']");

    githubPro.addEventListener("load",function(e){
      searchData = JSON.parse(e.target.responseText);
      searchDataResultsArray = searchData.Search;

      searchDataResultsArray.forEach(function(resutl){
        var resultArticleHTML = "";
        resultArticleHTML += "<article class= 'profile'>"
        resultArticleHTML += "<h2 class='name'</h2>"
        resultArticleHTML += "<img src='" + result.avatar_url + "'/>"
       resultArticleHTML += "</article>"

       profileElement.innerHTML += resultArticleHTML;
     });

   });
 });

 githubProXHR.open("GET","https://api.github.com/users/ErnestoDLS")
 githubProXHR.send();

});
