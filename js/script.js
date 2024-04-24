"use strict";

fetch("/data/joke.json")
    .then(resp => resp.json())
    .then(function(data){
        if (data.type === "single") {
            alert(data.joke);
        } else {
            alert(`> ${data.setup}`);
            alert(`-> ${data.delivery}`);
        }
    });