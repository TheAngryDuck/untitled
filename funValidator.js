function funValid() {
    var guess = document.getElementById("funPass").value;
    console.log("guess: " + guess);
    if (guess.toLowerCase() === "rock and roll") {
        var answer = document.getElementById("funChar");
        answer.style.color = 'red';
    }
}