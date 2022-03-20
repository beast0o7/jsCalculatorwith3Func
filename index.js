function input(value) {
    document.getElementById("calc").value += value
}

let solve = function () {
    if (document.getElementById("calc").value.length === 0) {
        alert("input needed")
    } else {
        let x = document.getElementById("calc").value
        let y = eval(x)
        document.getElementById("calc").value = y
    }
    // console.log(document.getElementById("calc").value.length);

}


