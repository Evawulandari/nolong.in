// import data umkm lainnya
const umkmLain = getUmkmWithOut(data.detail, 4);

// menangkap element yang akan diisi data
const foto_umkm = document.querySelector('#foto_umkm');
const nama_umkm = document.querySelector('#nama_umkm');
const address = document.querySelector('.address');
const wa = document.querySelector('.wa');
const fb = document.querySelector('.fb');
const ig = document.querySelector('.ig');
const deskripsi_umkm = document.querySelector('.desc');
const umkm_produk = document.querySelector('#umkm_produk');
const umkm_lainnya = document.querySelector('#umkm_lainnya');

// mengisi data ke element
foto_umkm.src = `assets/images/${data.foto}`;
nama_umkm.textContent = data.nama;
address.textContent = data.alamat;
wa.href = `https://wa.me/${data.wa}`;
fb.href = `https://facebook.com/${data.fb}`;
ig.href = `https://instagram.com/${data.ig}`;
deskripsi_umkm.textContent = data.deskripsi;

// looping data produk ke template card
const produk = data.produk.map(produk => {
    return `<div class="card">
                <div class="title">
                    <img src="assets/images/${produk.foto}" alt="">
                    <div class="text">
                        <p>${produk.nama}</p>
                    </div>
                </div>
            </div>`;

});

// mengisi data produk hasil looping ke element
umkm_produk.innerHTML = produk.join('');

// looping data umkm lainnya ke template card
const umkm = umkmLain.map(umkm => {
    return `<div class="card">
                <div class="title">
                    <a href="${umkm.detail}"><img src="assets/images/${umkm.foto}" title="${umkm.nama}" alt=""></a>
                    <div class="card-text">
                        <a href="${umkm.detail}">
                            <h3>${umkm.nama}</h3>
                        </a>
                        <p class="card-desc">
                            ${umkm.deskripsi.slice(0, 55)}... <br>
                            <a href="${umkm.detail}">Lihat selengkapnya >></a>
                        </p>
                    </div>
                </div>
            </div>`;
});

// mengisi data umkm lainnya hasil looping ke element
umkm_lainnya.innerHTML = umkm.join('');