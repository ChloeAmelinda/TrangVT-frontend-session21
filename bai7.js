let tiengui = +prompt("Nhap so tien gui :")
while (tiengui < 0) {
    alert("Nhap lai")
    tiengui = +prompt("Nhap so tien gui :")
}
let thang = + prompt("Nhap so thang")
while (thang < 0) {
    alert("Nhap lai")
    thang = + prompt("Nhap so thang")
}
let lai = +prompt("Nhap so lai:")
while (lai < 0) {
    alert("Nhap lai")
    lai = +prompt("Nhap so lai:")
}
let tienlai= ((tiengui*(lai/100)) /12) *thang
alert("so tien lai la"+tienlai)
let tiennhan= tiengui+tienlai
alert("So tien nhan la:" +tiennhan)