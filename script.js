function makeChoice(choice) {
    let message;
    switch (choice) {
        case 1:
            message = "Anh nhớ em";
            break;
        case 2:
            message = "Anh yêu em";
            break;
        case 3:
            message = "Ôm 1 phát";
            break;
        case 4:
            message = "Hun 1 cái";
            break;
        case 5:
            message = "Thơm 1 miếng";
            break;
        default:
            message = "Lua chon khong hop le. Ket thuc chuong trinh.";
    }
    document.getElementById("result").innerText = message;
}
