function tinhTrungBinh(){
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    var number3 = Number(document.getElementById("number3").value);
    var number4 = Number(document.getElementById("number4").value);
    var number5 = Number(document.getElementById("number5").value);
    var tinhtoan = (number1 + number2 + number3 +number4 +number5) / 5;
    var trungBinh = document.getElementById("ketqua")
        trungBinh.innerHTML = tinhtoan;
}