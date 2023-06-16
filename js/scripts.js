


document.getElementById("rollButton").onclick = function() {
    let numInput = parseInt(document.getElementById("numInput").value);
    let numOutput = (Math.floor(Math.random() * numInput) + 1);


    document.getElementById("numOutput").innerHTML = numOutput;

}

