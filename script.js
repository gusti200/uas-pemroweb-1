document.addEventListener("DOMContentLoaded", function () {

    
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const message = document.getElementById("message");

            if (username === "admin" && password === "12345") {
                message.style.color = "green";
                message.textContent = "Login berhasil!";
                window.location.href = "index.html";
            } else {
                message.style.color = "red";
                message.textContent = "Username atau password salah!";
            }
        });
    }

    
    const formTransaksi = document.getElementById("formTransaksi");
    const tabelTransaksi = document.getElementById("tabelTransaksi");

    if (formTransaksi && tabelTransaksi) {

        localStorage.removeItem("transaksi");

        formTransaksi.addEventListener("submit", function (event) {
            event.preventDefault();

            const nama = document.getElementById("nama").value.trim();
            const jumlah = document.getElementById("jumlah").value;
            const kategori = document.getElementById("kategori").value;

            if (nama === "" || jumlah === "" || kategori === "") {
                alert("Semua field harus diisi!");
                return;
            }

            const transaksiBaru = {
                nama,
                jumlah,
                kategori
            };

            let dataTransaksi = JSON.parse(localStorage.getItem("transaksi")) || [];
            dataTransaksi.push(transaksiBaru);
            localStorage.setItem("transaksi", JSON.stringify(dataTransaksi));

            formTransaksi.reset();
            tampilkanTransaksi();
        });

        function tampilkanTransaksi() {
            tabelTransaksi.innerHTML = "";

            const dataTransaksi = JSON.parse(localStorage.getItem("transaksi")) || [];

            dataTransaksi.forEach(item => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${item.nama}</td>
                    <td>${item.jumlah}</td>
                    <td>${item.kategori}</td>
                `;
                tabelTransaksi.appendChild(tr);
            });
        }
    }
});
