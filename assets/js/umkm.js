// mendeklarasikan variabel untuk menampung data umkm
const umkms = [
    {
        nama: "Warung Ibu Khodijah",
        detail: "detail-khodijah.html",
        foto: "warung1.jpg",
        kategori: "Makanan",
        alamat: "Jl. Raya Cibadak No. 1, Cibadak, Kab. Bandung, Jawa Barat 40552",
        deskripsi: "Warung Ibu Khodijah adalah sebuah warung makan yang berada di Cibadak, Kabupaten Bandung Barat. Warung ini menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain. Warung ini juga menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain.",
        gmaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d107.6561113147693!3d-6.850000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0f8f8f8f8f8%3A0x2e69f0f8f8f8f8f8!2sWarung%20Ibu%20Khodijah!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid",
        wa: 628123456789,
        fb: "Warung Ibu Khodijah",
        ig: "khodijah_store",
    }, {
        nama: "Warung Ibu Khodijah",
        detail: "detail-khodijah.html",
        foto: "warung1.jpg",
        kategori: "Makanan",
        alamat: "Jl. Raya Cibadak No. 1, Cibadak, Kab. Bandung, Jawa Barat 40552",
        deskripsi: "Warung Ibu Khodijah adalah sebuah warung makan yang berada di Cibadak, Kabupaten Bandung Barat. Warung ini menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain. Warung ini juga menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain.",
        gmaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d107.6561113147693!3d-6.850000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0f8f8f8f8f8%3A0x2e69f0f8f8f8f8f8!2sWarung%20Ibu%20Khodijah!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid",
        wa: 628123456789,
        fb: "Warung Ibu Khodijah",
        ig: "khodijah_store",
    }, {
        nama: "Warung Ibu Khodijah",
        detail: "detail-khodijah.html",
        foto: "warung1.jpg",
        kategori: "Makanan",
        alamat: "Jl. Raya Cibadak No. 1, Cibadak, Kab. Bandung, Jawa Barat 40552",
        deskripsi: "Warung Ibu Khodijah adalah sebuah warung makan yang berada di Cibadak, Kabupaten Bandung Barat. Warung ini menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain. Warung ini juga menyediakan berbagai macam makanan khas Bandung, seperti sate, soto, dan lain-lain. Warung ini juga menyediakan berbagai macam minuman khas Bandung, seperti es teh, es jeruk, dan lain-lain.",
        gmaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0000000000005!2d107.6561113147693!3d-6.850000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0f8f8f8f8f8%3A0x2e69f0f8f8f8f8f8!2sWarung%20Ibu%20Khodijah!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid",
        wa: 628123456789,
        fb: "Warung Ibu Khodijah",
        ig: "khodijah_store",
    }
];

// template card umkm
const html = umkms.map(umkm => {
    return `<div class="card">
                <a href="${umkm.detail}"><img src="assets/images/${umkm.foto}" alt="${umkm.nama}"></a>
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