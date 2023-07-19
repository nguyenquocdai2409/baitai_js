function tinhTongHaiSo(){
    var number = document.getElementById("number").value;
    var hangDonvi = number % 10;
    var hangChuc = Math.floor(number / 10 );
    var phepTinh = hangChuc + hangDonvi;
    document.getElementById("ketqua").innerHTML = phepTinh;
}