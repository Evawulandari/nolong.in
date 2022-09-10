// mendeklarasikan variabel untuk menampung data umkm
const umkms = [
    {
        nama: "Toko Warna",
        detail:"tokowarna.html",
        foto: "tokowarna.jpg",
        kategori: "aksesoris",
        alamat: "Jln Moch Noh Noer Kp. Sinar Jaya No.Rt 02/01, Purasari, Leuwiliang 16640",
        deskripsi: "Toko Warna adalah UMKM yang menjual berbagai mainana anak, seperti boneka, mobil, dan lain-lain. Selain itu toko warna juga menjual alat tulis seperti pensil, penghapus, danlain-lain. Toko warna juga membuka jasa kirim dan tarik uang baik baik dengan ATM ataupun tanpa ATM.",
        wa: 6281513784029,
        fb: "",
        ig: "",
        produk: [
            {
                nama: "mobilan",
                foto: "mainan.jpg",
            },
            {
                nama: "Aksesoris",
                foto: "aksesoris.jpg",
            },
            {
                nama: "Kecantikan",
                foto: "kecantikan.jpg",
            }
        ],
    }, {
        nama: "Pacha Macha",
        detail: "pachamacha.html",
        foto: "pacha1.jpg",
        kategori: "Makanan",
        alamat: "Jln Moch Noh Noer Kp. Kaum, Puraseda, Leuwiliang 16640",
        deskripsi: "Warung Ibu Khodijah adalah sebuah warung makan yang berada di Cibadak, Kabupaten Bandung Barat. Warung ini menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain. Warung ini juga menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain.",
        wa: 6281383430176,
        fb: "Pacha Macha",
        ig: "",
        produk: [
            {
                nama: "Mainan Anak",
                foto: "mainan.jpg",
            },
            {
                nama: "Aksesoris",
                foto: "aksesoris.jpg",
            },
            {
                nama: "Kecantikan",
                foto: "kecantikan.jpg",
            }
        ],
    }, {
        nama: "Monambih",
        detail: "monambih.html",
        foto: "monambih.jpg",
        kategori: "Makanan",
        alamat: "Jln Moch Noh Noer Kp. Neglasari, Karyasari, Leuwiliang 16640",
        deskripsi: "Warung Ibu Khodijah adalah sebuah warung makan yang berada di Cibadak, Kabupaten Bandung Barat. Warung ini menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain. Warung ini juga menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain.",
        wa: 6285771984178,
        fb: "Monambih Street Food",
        ig: "monambih",
        produk: [
            {
                nama: "Mainan Anak",
                foto: "mainan.jpg",
            },
            {
                nama: "Aksesoris",
                foto: "aksesoris.jpg",
            },
            {
                nama: "Kecantikan",
                foto: "kecantikan.jpg",
            }
        ],
    }, {
        nama: "Dapoer Pelangi",
        detail: "dapurpelangi.html",
        foto: "dapurpelangi.jpg",
        kategori: "Makanan",
        alamat: "Jln Moch Noh Noer Kp. Neglasari, Karyasari, Leuwiliang 16640",
        deskripsi: "Warung Ibu Khodijah adalah sebuah warung makan yang berada di Cibadak, Kabupaten Bandung Barat. Warung ini menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain. Warung ini juga menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain.",
        wa: 6281285853904,
        fb: "Diah R Maulana",
        ig: "dapoerpelangi_diah",
        produk: [
            {
                nama: "Mainan Anak",
                foto: "mainan.jpg",
            },
            {
                nama: "Aksesoris",
                foto: "aksesoris.jpg",
            },
            {
                nama: "Kecantikan",
                foto: "kecantikan.jpg",
            }
        ],
    }, 

];

// template card umkm
const html = umkms.map(umkm => {
    return `<div class="card">
                <a href="${umkm.detail}"><img src="assets/images/${umkm.foto}" title="${umkm.nama}" alt="${umkm.nama}"></a>
                <div class="card-text">
                    <a href="#" class="category">
                        <span>${umkm.kategori}</span>
                    </a>

                    <a href="${umkm.detail}">
                        <h3>${umkm.nama}</h3>
                    </a>
                    <p><i class="fa-solid fa-location-dot"></i> <span>${umkm.alamat}</span></p>
                </div>
            </div>`;
});

// menangkap class elemen yang akan ditambahkan card umkm kedalamnya
const cardOri = document.querySelector('.card-ori');

// mengubah template card umkm menjadi element
cardOri.innerHTML = html.join('');

// fungsi untuk mendapatkan data umkm berdasarkan nama file detail
function getUmkm(detail){
    return umkms.find(umkm => umkm.detail === detail);
}

// fungsi untuk mendapatkan umkm tanpa umkm yang sama dengan parameter
function getUmkmWithOut(detail, limit){
    let umkmWithOut = umkms.filter(umkm => umkm.detail !== detail);

    if(umkmWithOut.length > limit){
        umkmWithOut = umkmWithOut.slice(0, limit);
    }
    return umkmWithOut;
}
