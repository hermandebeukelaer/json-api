"use strict";

fetch("https://v2.jokeapi.dev/joke/Any")
    .then(resp => resp.json())
    .then(function(data){
        if (data.type === "single") {
            alert(data.joke);
        } else {
            alert(`> ${data.setup}`);
            alert(`-> ${data.delivery}`);
        }
    });