let btnClick = document.getElementById("btn");
btnClick.addEventListener("click", Convert);

function Convert() {
    let number = document.getElementById("number").value;
    let moneyFrom = document.getElementById("moneyFrom").value;
    let moneyTo = document.getElementById("moneyTo").value;
    let convert;
    if (moneyFrom == "vnd" && moneyTo == "usd") {
        convert = number / 23000;
    } else if (moneyFrom == "usd" && moneyTo == "vnd") {
        convert = number * 23000;
    } else {
        convert = number;
    }
    document.getElementById("result").innerHTML = convert;

}