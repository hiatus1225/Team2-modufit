document.addEventListener("DOMContentLoaded", function(){
    var userSession = JSON.parse(sessionStorage.getItem("__user__"));
    document.getElementById("welcomName").innerText = userSession["name"];
});