function makeChoice(choice) {
    let message;
    switch (choice) {
        case 1:
            message = "Anh nho em";
            break;
        case 2:
            message = "Anh yeu em";
            break;
        case 3:
            message = "Om 1 phat";
            break;
        case 4:
            message = "Hun 1 cai";
            break;
        case 5:
            message = "Thom 1 mieng";
            break;
        default:
            message = "Lua chon khong hop le. Ket thuc chuong trinh.";
    }
    document.getElementById("result").innerText = message;
}
