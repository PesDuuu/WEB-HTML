$(".submit").click(function (e) {
    e.preventDefault();
    const taikhoan = $(".tai-khoan").val().trim()
    const matkhau = $(".mat-khau").val().trim()
    console.log(taikhoan)
    console.log(matkhau)
    fetch("http://localhost:5500/api/getAllUser").then(data => data.json()).then(result => {
        let check = false
        result.forEach((val) => {
            if (val.phone === taikhoan && val.password === matkhau) {
                alert("Chào mừng " + val.name);
                check = true;
            }
        });
        if (check === false) {
            console.log("Sai tài khoản hoặc mật khẩu!")
        }
    })
})