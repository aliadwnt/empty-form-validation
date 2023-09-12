function validateForm() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var prodi = document.getElementById("prodi").value;

    if (nama === "" || nim === "" || prodi === "") {
        alert("Data tidak boleh ada yang kosong!");
    } else {
        alert("Data berhasil dikirim:\nNama: " + nama + "\nNIM: " + nim + "\nProdi: " + prodi);
    }
}

function ubahWarnaTeks(warna) {
    var hasilDiv = document.getElementById("hasil");
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var prodi = document.getElementById("prodi").value;

    hasilDiv.style.color = warna;
    hasilDiv.innerHTML = "Nama: " + nama + "<br>NIM: " + nim + "<br>Prodi: " + prodi; 
}
