function tinhLuong(){
    var luongCoban = 100000;
    var soNgayLam = document.getElementById("soNgay").value;
    var tinhTienLuong = luongCoban * soNgayLam;
    var tongLuong = document.getElementById("luong")
        tongLuong.innerHTML = tinhTienLuong.toLocaleString();
}