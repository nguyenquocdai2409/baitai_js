function tinh(){
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    var chuVi = (number1 + number2) * 2;
    var dienTich = number1 * number2;
    var phepTinh = document.getElementById("ketquachuvi")
        phepTinh.innerHTML =  chuVi;
    var phepTinh = document.getElementById("ketquadientich")
        phepTinh.innerHTML = dienTich;
        
}