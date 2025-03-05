let number = +prompt("Nhap so bat ki:")
let bientam = number
let sum = 0
let r
while (bientam > 0) {
    r = bientam % 10
    sum += r * r * r
    bientam = Math.floor(bientam /10)
}
if (number == sum) {
    alert("la so amstrong")
} else {
    alert("ko la so amstrong")
}

// let number = +prompt("Nhập số bất kỳ:");
// let bientam = number; // Lưu giá trị ban đầu của số
// let sum = 0;
// let r;

// // Tính tổng lập phương các chữ số
// while (bientam > 0) {
//     r = bientam % 10; // Lấy chữ số cuối
//     sum += r * r * r; // Tính lập phương và cộng vào tổng
//     bientam = Math.floor(bientam / 10); // Loại bỏ chữ số cuối
// }

// // Kiểm tra nếu tổng lập phương bằng chính số đó
// if (sum === number) {
//     alert(number + " là số Armstrong");
// } else {
//     alert(number + " không là số Armstrong");
// }