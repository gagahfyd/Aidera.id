function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Mobile dropdown menu functionality
  const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
  const mobileDropdown = document.querySelector('.mobile-dropdown');

  if (mobileDropdownToggle && mobileDropdown) {
    mobileDropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      mobileDropdown.classList.toggle('active');
    });
  }

  // Setup scroll for Donasi Pasien
  const donasiPasienContainer = document.querySelector('#donasi-pasien .scroll-container');
  const donasiPasienCards = donasiPasienContainer.querySelector('.donasi-cards');
  const donasiPasienLeftBtn = donasiPasienContainer.querySelector('.left-btn');
  const donasiPasienRightBtn = donasiPasienContainer.querySelector('.right-btn');

  donasiPasienLeftBtn.addEventListener('click', () => {
    donasiPasienCards.scrollBy({
      left: -324,
      behavior: 'smooth'
    });
  });

  donasiPasienRightBtn.addEventListener('click', () => {
    donasiPasienCards.scrollBy({
      left: 324,
      behavior: 'smooth'
    });
  });

  // Setup scroll for Aksi Sosial
  const aksiSosialContainer = document.querySelector('#aksi-sosial .scroll-container');
  const aksiSosialCards = aksiSosialContainer.querySelector('.donasi-cards');
  const aksiSosialLeftBtn = aksiSosialContainer.querySelector('.left-btn');
  const aksiSosialRightBtn = aksiSosialContainer.querySelector('.right-btn');

  aksiSosialLeftBtn.addEventListener('click', () => {
    aksiSosialCards.scrollBy({
      left: -324,
      behavior: 'smooth'
    });
  });

  aksiSosialRightBtn.addEventListener('click', () => {
    aksiSosialCards.scrollBy({
      left: 324,
      behavior: 'smooth'
    });
  });

  // Setup scroll for Galang Dana
  const galangDanaContainer = document.querySelector('#galang-dana .scroll-container');
  const galangDanaCards = galangDanaContainer.querySelector('.donasi-cards');
  const galangDanaLeftBtn = galangDanaContainer.querySelector('.left-btn');
  const galangDanaRightBtn = galangDanaContainer.querySelector('.right-btn');

  galangDanaLeftBtn.addEventListener('click', () => {
    galangDanaCards.scrollBy({
      left: -324,
      behavior: 'smooth'
    });
  });

  galangDanaRightBtn.addEventListener('click', () => {
    galangDanaCards.scrollBy({
      left: 324,
      behavior: 'smooth'
    });
  });

  // Setup scroll for Artikel & Laporan Donasi
  const artikelContainer = document.querySelector('#artikel-laporan .scroll-container');
  const artikelCards = artikelContainer.querySelector('.donasi-cards');
  const artikelLeftBtn = artikelContainer.querySelector('.left-btn');
  const artikelRightBtn = artikelContainer.querySelector('.right-btn');

  artikelLeftBtn.addEventListener('click', () => {
    artikelCards.scrollBy({
      left: -324,
      behavior: 'smooth'
    });
  });

  artikelRightBtn.addEventListener('click', () => {
    artikelCards.scrollBy({
      left: 324,
      behavior: 'smooth'
    });
  });

  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  if (hamburgerBtn && mobileMenuOverlay) {
    hamburgerBtn.addEventListener('click', function() {
      mobileMenuOverlay.classList.toggle('active');
    });
    mobileMenuOverlay.addEventListener('click', function(e) {
      if (e.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
      }
    });
  }

  // Data dummy Donasi Pasien
  const donasiPasienData = [
    {
      foto: '../Asset/pasien1.jpg',
      nama: 'Rina Putri',
      penyakit: 'Kanker Darah',
      yayasan: 'Yayasan Harapan Sehat',
      danaTerkumpul: 120500000,
      target: 200000000,
      hariTersisa: 15
    },
    {
      foto: '../Asset/pasien2.jpg',
      nama: 'Rizky Ramadhan',
      penyakit: 'Jantung Bawaan',
      yayasan: 'Rumah Peduli',
      danaTerkumpul: 82300000,
      target: 150000000,
      hariTersisa: 10
    },
    {
      foto: '../Asset/pasien3.jpg',
      nama: 'Ibu Siti Aminah',
      penyakit: 'Ginjal Kronis',
      yayasan: 'Relawan Wilayah Timur',
      danaTerkumpul: 29750000,
      target: 100000000,
      hariTersisa: 5
    },
    {
      foto: '../Asset/pasien4.jpg',
      nama: 'Budi Santoso',
      penyakit: 'Kanker Payudara',
      yayasan: 'Yayasan Kanker Indonesia',
      danaTerkumpul: 95000000,
      target: 120000000,
      hariTersisa: 12
    },
    {
      foto: '../Asset/pasien5.jpg',
      nama: 'Soleh Hidayat',
      penyakit: 'Katarak',
      yayasan: 'Yayasan Mata Sehat',
      danaTerkumpul: 35000000,
      target: 50000000,
      hariTersisa: 8
    },
    {
      foto: '../Asset/pasien6.jpg',
      nama: 'Arga Pratama',
      penyakit: 'Transplantasi Ginjal',
      yayasan: 'Rumah Sakit Umum Nasional',
      danaTerkumpul: 150000000,
      target: 200000000,
      hariTersisa: 20
    }
  ];

  function formatRupiah(angka) {
    return 'Rp ' + angka.toLocaleString('id-ID') + ',00';
  }

  function renderDonasiPasienCards() {
    const container = document.querySelector('#donasi-pasien .donasi-cards');
    if (!container) return;
    container.innerHTML = '';
    donasiPasienData.forEach(item => {
      const percent = Math.min(100, Math.round(item.danaTerkumpul / item.target * 100));
      const card = document.createElement('div');
      card.className = 'donasi-card';
      card.innerHTML = `
        <img src="${item.foto}" alt="${item.nama}">
        <div class="donasi-card-content">
          <h3>${item.nama}</h3>
          <div class="donasi-card-details">
            <img src="../Asset/YayasanPenerima-icon.svg" alt="Yayasan Icon" class="icon">
            <p>${item.yayasan}</p>
          </div>
          <div class="donasi-progress">
            <div class="donasi-progress-bar">
              <div style="width: ${percent}%;"></div>
            </div>
          </div>
          <div class="donasi-footer">
            <span>${formatRupiah(item.danaTerkumpul)}</span>
            <span>${item.hariTersisa} hari lagi</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderDonasiPasienCards();

  // Data dummy Aksi Sosial
  const aksiSosialData = [
    {
      foto: '../Asset/aksisosial1.jpg',
      judul: 'Bantu Korban Bencana Alam di Aceh',
      yayasan: 'Relawan Indonesia',
      danaTerkumpul: 150000000,
      target: 200000000,
      hariTersisa: 20
    },
    {
      foto: '../Asset/aksisosial2.jpg',
      judul: 'Bantu Pembangunan Masjid di Papua',
      yayasan: 'Yayasan Amal Sejahtera',
      danaTerkumpul: 95000000,
      target: 210000000,
      hariTersisa: 25
    },
    {
      foto: '../Asset/aksisosial3.jpg',
      judul: 'Bantu Pendidikan Anak Yatim',
      yayasan: 'Yayasan Peduli Anak',
      danaTerkumpul: 45000000,
      target: 130000000,
      hariTersisa: 15
    },
    {
      foto: '../Asset/aksisosial4.jpg',
      judul: 'Bantu Korban Gempa di Maluku',
      yayasan: 'Tim Relawan Nasional',
      danaTerkumpul: 120000000,
      target: 200000000,
      hariTersisa: 18
    },
    {
      foto: '../Asset/aksisosial5.jpg',
      judul: 'Bantu Pembangunan Sekolah di NTT',
      yayasan: 'Yayasan Pendidikan Indonesia',
      danaTerkumpul: 85000000,
      target: 150000000,
      hariTersisa: 22
    },
    {
      foto: '../Asset/aksisosial6.jpg',
      judul: 'Bantu Korban Banjir di Jakarta',
      yayasan: 'Relawan Jakarta',
      danaTerkumpul: 75000000,
      target: 120000000,
      hariTersisa: 12
    }
  ];

  function renderAksiSosialCards() {
    const container = document.querySelector('#aksi-sosial .donasi-cards');
    if (!container) return;
    container.innerHTML = '';
    aksiSosialData.forEach(item => {
      const percent = Math.min(100, Math.round(item.danaTerkumpul / item.target * 100));
      const card = document.createElement('div');
      card.className = 'donasi-card';
      card.innerHTML = `
        <img src="${item.foto}" alt="${item.judul}">
        <div class="donasi-card-content">
          <h3>${item.judul}</h3>
          <div class="donasi-card-details">
            <img src="../Asset/YayasanPenerima-icon.svg" alt="Yayasan Icon" class="icon">
            <p>${item.yayasan}</p>
          </div>
          <div class="donasi-progress">
            <div class="donasi-progress-bar">
              <div style="width: ${percent}%;"></div>
            </div>
          </div>
          <div class="donasi-footer">
            <span>${formatRupiah(item.danaTerkumpul)}</span>
            <span>${item.hariTersisa} hari lagi</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderAksiSosialCards();

  // Data dummy Galang Dana
  const galangDanaData = [
    {
      foto: '../Asset/galangdana1.jpg',
      judul: 'Bantu Biayai Pembuatan Film Dokumenter Sejarah Kabupaten Klaten',
      yayasan: 'Rumah Dokumenter',
      danaTerkumpul: 33750000,
      target: 75000000,
      hariTersisa: 22
    },
    {
      foto: '../Asset/galangdana2.jpg',
      judul: 'Bantu Produksi Album Musik Indie Lokal',
      yayasan: 'Komunitas Musik Indonesia',
      danaTerkumpul: 45000000,
      target: 75000000,
      hariTersisa: 15
    },
    {
      foto: '../Asset/galangdana3.jpg',
      judul: 'Bantu Penerbitan Buku Sejarah Indonesia',
      yayasan: 'Penerbit Sejarah Nusantara',
      danaTerkumpul: 28500000,
      target: 80000000,
      hariTersisa: 18
    },
    {
      foto: '../Asset/galangdana4.jpg',
      judul: 'Bantu Produksi Film Pendek Dokumenter',
      yayasan: 'Studio Film Dokumenter',
      danaTerkumpul: 52000000,
      target: 95000000,
      hariTersisa: 20
    },
    {
      foto: '../Asset/galangdana5.jpg',
      judul: 'Bantu Pameran Seni Rupa Kontemporer',
      yayasan: 'Galeri Seni Indonesia',
      danaTerkumpul: 38000000,
      target: 95000000,
      hariTersisa: 25
    },
    {
      foto: '../Asset/galangdana6.jpg',
      judul: 'Bantu Festival Budaya Nusantara',
      yayasan: 'Yayasan Budaya Indonesia',
      danaTerkumpul: 75000000,
      target: 115000000,
      hariTersisa: 30
    },
    {
      foto: '../Asset/galangdana7.jpg',
      judul: 'Bantu Pembangunan Masjid di Desa Terpencil',
      yayasan: 'Yayasan Masjid Indonesia',
      danaTerkumpul: 125000000,
      target: 200000000,
      hariTersisa: 45
    },
    {
      foto: '../Asset/galangdana8.jpg',
      judul: 'Bantu Renovasi Gereja Tua',
      yayasan: 'Komunitas Kristen Indonesia',
      danaTerkumpul: 85000000,
      target: 150000000,
      hariTersisa: 35
    },
    {
      foto: '../Asset/galangdana9.jpg',
      judul: 'Bantu Pembangunan Vihara',
      yayasan: 'Yayasan Buddha Indonesia',
      danaTerkumpul: 95000000,
      target: 180000000,
      hariTersisa: 40
    },
    {
      foto: '../Asset/galangdana10.jpg',
      judul: 'Bantu Pembangunan Jembatan Desa',
      yayasan: 'Komunitas Peduli Desa',
      danaTerkumpul: 180000000,
      target: 250000000,
      hariTersisa: 60
    },
    {
      foto: '../Asset/galangdana11.jpg',
      judul: 'Bantu Pembangunan Perpustakaan Desa',
      yayasan: 'Yayasan Literasi Indonesia',
      danaTerkumpul: 65000000,
      target: 120000000,
      hariTersisa: 28
    },
    {
      foto: '../Asset/galangdana12.jpg',
      judul: 'Bantu Pembangunan Posyandu',
      yayasan: 'Komunitas Kesehatan Desa',
      danaTerkumpul: 45000000,
      target: 80000000,
      hariTersisa: 25
    },
    {
      foto: '../Asset/galangdana13.jpg',
      judul: 'Bantu Program Pelatihan Wirausaha',
      yayasan: 'Komunitas Pengusaha Muda',
      danaTerkumpul: 75000000,
      target: 100000000,
      hariTersisa: 20
    },
    {
      foto: '../Asset/galangdana14.jpg',
      judul: 'Bantu Program Konservasi Lingkungan',
      yayasan: 'Komunitas Hijau Indonesia',
      danaTerkumpul: 55000000,
      target: 90000000,
      hariTersisa: 32
    },
    {
      foto: '../Asset/galangdana15.jpg',
      judul: 'Bantu Program Beasiswa Mahasiswa',
      yayasan: 'Yayasan Pendidikan Indonesia',
      danaTerkumpul: 120000000,
      target: 200000000,
      hariTersisa: 50
    }
  ];

  function renderGalangDanaCards() {
    const container = document.querySelector('#galang-dana .donasi-cards');
    if (!container) return;
    container.innerHTML = '';
    galangDanaData.forEach(item => {
      const percent = Math.min(100, Math.round(item.danaTerkumpul / item.target * 100));
      const card = document.createElement('div');
      card.className = 'donasi-card';
      card.innerHTML = `
        <img src="${item.foto}" alt="${item.judul}">
        <div class="donasi-card-content">
          <h3>${item.judul}</h3>
          <div class="donasi-card-details">
            <img src="../Asset/YayasanPenerima-icon.svg" alt="Yayasan Icon" class="icon">
            <p>${item.yayasan}</p>
          </div>
          <div class="donasi-progress">
            <div class="donasi-progress-bar">
              <div style="width: ${percent}%;"></div>
            </div>
          </div>
          <div class="donasi-footer">
            <span>${formatRupiah(item.danaTerkumpul)}</span>
            <span>${item.hariTersisa} hari lagi</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderGalangDanaCards();

  // Data dummy Artikel & Berita
  const artikelData = [
    {
      foto: '../Asset/artikel1.jpg',
      judul: 'Kisah Sukses: Bantuan Pendidikan untuk Anak-anak di Papua',
      tanggal: '15 Maret 2024'
    },
    {
      foto: '../Asset/artikel2.jpg',
      judul: 'Laporan Akhir: Pembangunan Masjid di Desa Terpencil',
      tanggal: '10 Maret 2024'
    },
    {
      foto: '../Asset/artikel3.jpg',
      judul: 'Dampak Donasi: Bantuan Kesehatan untuk Korban Bencana',
      tanggal: '5 Maret 2024'
    },
    {
      foto: '../Asset/artikel4.jpg',
      judul: 'Sukses: Program Beasiswa untuk 100 Anak Yatim',
      tanggal: '1 Maret 2024'
    },
    {
      foto: '../Asset/artikel5.jpg',
      judul: 'Laporan Akhir: Bantuan Pangan untuk Daerah Terdampak',
      tanggal: '25 Februari 2024'
    },
    {
      foto: '../Asset/artikel6.jpg',
      judul: 'Kisah Sukses: Program Pelatihan Wirausaha',
      tanggal: '20 Februari 2024'
    }
  ];

  function renderArtikelCards() {
    const container = document.querySelector('#artikel-laporan .donasi-cards');
    if (!container) return;
    container.innerHTML = '';
    artikelData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'donasi-card';
      card.innerHTML = `
        <img src="${item.foto}" alt="${item.judul}">
        <div class="donasi-card-content">
          <h3>${item.judul}</h3>
          <div class="donasi-footer">
            <span>${item.tanggal}</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderArtikelCards();
}); 