let jokeTextELe = document.getElementById("jokeText");
let jokeBtnEle = document.getElementById("jokeBtn");
let toShowLoadingIcon = document.getElementById('spinner');

function getJokesDisplay() {
    toShowLoadingIcon.classList.remove("d-none")
    let url ="https://apis.ccbp.in/jokes/random";//"https://api.api-ninjas.com/v1/jokes?limit=";
    let option = {
        method: "GET"
    };
    fetch(url,option)
    .then (function(response) {
        return response.json()
    })
    .then(function(jsonData) {
        toShowLoadingIcon.classList.add("d-none");
        let textDisplay=jsonData.value;
        jokeTextELe.textContent=textDisplay;
    })
}

jokeBtnEle.addEventListener("click",getJokesDisplay);