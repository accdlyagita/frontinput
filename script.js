function checkText() {
    let inputText = document.getElementById("inputText").value;
    if (inputText === "Hello") {
        document.body.style.backgroundColor = "lightgreen";
    } else if (inputText === "World") {
        document.body.style.backgroundColor = "	#00BFFF";
    } else {
        document.body.style.backgroundColor = "	#FF6347";
    }
}