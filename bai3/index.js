function doiTien(){
    var tienViet = 23500;
    var dollar = document.getElementById("number").value;
    var phepTinh = tienViet * dollar;
    var thanhTien = document.getElementById("ketqua")
        thanhTien.innerHTML = new Intl.NumberFormat('vn-VN').format(phepTinh)

}