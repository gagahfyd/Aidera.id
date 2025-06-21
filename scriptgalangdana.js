// Dummy data kampanye galang dana
const kampanyeData = [
  {
    foto: 'Asset/galangdana1.jpg',
    judul: 'Bantu Biayai Pembuatan Film Dokumenter Sejarah Kabupaten Klaten',
    penyelenggara: 'Rumah Dokumenter',
    danaTerkumpul: 33750000,
    target: 75000000,
    hariTersisa: 22,
    kategori: 'Budaya',
    lokasi: 'Klaten',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana2.jpg',
    judul: 'Bantu Produksi Album Musik Indie Lokal',
    penyelenggara: 'Komunitas Musik Indonesia',
    danaTerkumpul: 45000000,
    target: 75000000,
    hariTersisa: 15,
    kategori: 'Komunitas',
    lokasi: 'Jakarta',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana3.jpg',
    judul: 'Bantu Penerbitan Buku Sejarah Indonesia',
    penyelenggara: 'Penerbit Sejarah Nusantara',
    danaTerkumpul: 28500000,
    target: 80000000,
    hariTersisa: 18,
    kategori: 'Budaya',
    lokasi: 'Surabaya',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana4.jpg',
    judul: 'Bantu Produksi Film Pendek Dokumenter',
    penyelenggara: 'Studio Film Dokumenter',
    danaTerkumpul: 52000000,
    target: 95000000,
    hariTersisa: 20,
    kategori: 'Komunitas',
    lokasi: 'Bandung',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana5.jpg',
    judul: 'Bantu Pameran Seni Rupa Kontemporer',
    penyelenggara: 'Galeri Seni Indonesia',
    danaTerkumpul: 38000000,
    target: 95000000,
    hariTersisa: 25,
    kategori: 'Budaya',
    lokasi: 'Yogyakarta',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana6.jpg',
    judul: 'Bantu Festival Budaya Nusantara',
    penyelenggara: 'Yayasan Budaya Indonesia',
    danaTerkumpul: 75000000,
    target: 115000000,
    hariTersisa: 30,
    kategori: 'Budaya',
    lokasi: 'Semarang',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana7.jpg',
    judul: 'Bantu Pembangunan Masjid di Desa Terpencil',
    penyelenggara: 'Yayasan Masjid Indonesia',
    danaTerkumpul: 125000000,
    target: 200000000,
    hariTersisa: 45,
    kategori: 'Keagamaan',
    lokasi: 'Lombok',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana8.jpg',
    judul: 'Bantu Renovasi Gereja Tua',
    penyelenggara: 'Komunitas Kristen Indonesia',
    danaTerkumpul: 85000000,
    target: 150000000,
    hariTersisa: 35,
    kategori: 'Keagamaan',
    lokasi: 'Manado',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana9.jpg',
    judul: 'Bantu Pembangunan Vihara',
    penyelenggara: 'Yayasan Buddha Indonesia',
    danaTerkumpul: 95000000,
    target: 180000000,
    hariTersisa: 40,
    kategori: 'Keagamaan',
    lokasi: 'Medan',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana10.jpg',
    judul: 'Bantu Pembangunan Jembatan Desa',
    penyelenggara: 'Komunitas Peduli Desa',
    danaTerkumpul: 180000000,
    target: 250000000,
    hariTersisa: 60,
    kategori: 'Sarana Umum',
    lokasi: 'Kalimantan',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana11.jpg',
    judul: 'Bantu Pembangunan Perpustakaan Desa',
    penyelenggara: 'Yayasan Literasi Indonesia',
    danaTerkumpul: 65000000,
    target: 120000000,
    hariTersisa: 28,
    kategori: 'Sarana Umum',
    lokasi: 'Jawa Barat',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana12.jpg',
    judul: 'Bantu Pembangunan Posyandu',
    penyelenggara: 'Komunitas Kesehatan Desa',
    danaTerkumpul: 45000000,
    target: 80000000,
    hariTersisa: 25,
    kategori: 'Sarana Umum',
    lokasi: 'Sulawesi',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana13.jpg',
    judul: 'Bantu Program Pelatihan Wirausaha',
    penyelenggara: 'Komunitas Pengusaha Muda',
    danaTerkumpul: 75000000,
    target: 100000000,
    hariTersisa: 20,
    kategori: 'Lainnya',
    lokasi: 'Jakarta',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana14.jpg',
    judul: 'Bantu Program Konservasi Lingkungan',
    penyelenggara: 'Komunitas Hijau Indonesia',
    danaTerkumpul: 55000000,
    target: 90000000,
    hariTersisa: 32,
    kategori: 'Lainnya',
    lokasi: 'Bali',
    status: 'Sedang Berlangsung',
  },
  {
    foto: 'Asset/galangdana15.jpg',
    judul: 'Bantu Program Beasiswa Mahasiswa',
    penyelenggara: 'Yayasan Pendidikan Indonesia',
    danaTerkumpul: 120000000,
    target: 200000000,
    hariTersisa: 50,
    kategori: 'Lainnya',
    lokasi: 'Indonesia',
    status: 'Sedang Berlangsung',
  }
];
  
  function formatRupiah(angka) {
    return 'Rp ' + angka.toLocaleString('id-ID') + ',00';
  }
  
  function renderKampanyeList(data) {
    const list = document.getElementById('kampanye-list');
    list.innerHTML = '';
    if (data.length === 0) {
      list.innerHTML = '<div style="text-align:center;color:#888;padding:40px 0;">Tidak ada kampanye ditemukan.</div>';
      return;
    }
  
    data.forEach(item => {
      const percent = Math.min(100, Math.round(item.danaTerkumpul / item.target * 100));
      const card = document.createElement('div');
      card.className = 'kampanye-card';
      card.innerHTML = `
        <img src="${item.foto}" alt="${item.judul}" class="kampanye-img" onerror="this.src='Asset/AksiSosial-icon.svg'">
        <div class="kampanye-info">
          <div class="kampanye-kategori">${item.kategori}</div>
          <div class="kampanye-title">${item.judul}</div>
          <div class="kampanye-penyelenggara">${item.penyelenggara}</div>
          <div class="kampanye-progress">
            <div class="kampanye-progress-bar" style="width:${percent}%;"></div>
          </div>
          <div class="kampanye-stats">
            <span>${formatRupiah(item.danaTerkumpul)} / ${formatRupiah(item.target)}</span>
            <span>${percent}% tercapai</span>
          </div>
          <div class="kampanye-footer">
            <span class="kampanye-days">${item.hariTersisa} hari lagi</span>
            <a href="#" class="kampanye-donasi-btn">Donasi Sekarang</a>
          </div>
        </div>
      `;
      list.appendChild(card);
    });
  }
  
  
  function applyFilters() {
    const kategori = document.getElementById('filter-kategori').value;
    const lokasi = document.getElementById('filter-lokasi').value;
    const status = document.getElementById('filter-status').value;
    const kondisi = document.getElementById('filter-kondisi').value;
    const search = document.getElementById('search-input').value.trim().toLowerCase();
  
    // Define main locations that are in the filter dropdown
    const mainLocations = ['Jakarta', 'Bandung', 'Surabaya', 'Klaten'];
  
    let filtered = kampanyeData.filter(item => {
      let matchKondisi = true;
      if (kondisi === 'waktu') {
        matchKondisi = item.hariTersisa <= 7;
      } else if (kondisi === 'dana') {
        const percent = Math.min(100, Math.round(item.danaTerkumpul / item.target * 100));
        matchKondisi = percent >= 80;
      }

      // Handle location filtering
      let matchLokasi = true;
      if (lokasi) {
        if (lokasi === 'Lainnya') {
          // Show items that are NOT in the main locations list
          matchLokasi = !mainLocations.includes(item.lokasi);
        } else {
          // Show items that match the selected main location
          matchLokasi = item.lokasi === lokasi;
        }
      }

      return (
        (!kategori || item.kategori === kategori) &&
        matchLokasi &&
        (!status || item.status === status) &&
        (!kondisi || matchKondisi) &&
        (!search || item.judul.toLowerCase().includes(search) || item.penyelenggara.toLowerCase().includes(search))
      );
    });
  
    renderKampanyeList(filtered);
  }
  
  
  document.addEventListener('DOMContentLoaded', function () {
    renderKampanyeList(kampanyeData);
  
    document.getElementById('filter-kategori').addEventListener('change', applyFilters);
    document.getElementById('filter-lokasi').addEventListener('change', applyFilters);
    document.getElementById('filter-status').addEventListener('change', applyFilters);
    document.getElementById('filter-kondisi').addEventListener('change', applyFilters);
    document.getElementById('search-btn').addEventListener('click', applyFilters);
    document.getElementById('search-input').addEventListener('keyup', function (e) {
      if (e.key === 'Enter') applyFilters();
    });
  });
  
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
  
  function navigateToAbout() {
    // Store the target section in sessionStorage
    sessionStorage.setItem('scrollToSection', 'about-section');
    // The actual navigation will be handled by the href
  }
  
  // Add this to your existing code
  window.addEventListener('load', function() {
    // Check if we need to scroll to a section
    const sectionToScroll = sessionStorage.getItem('scrollToSection');
    if (sectionToScroll) {
      const element = document.getElementById(sectionToScroll);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the stored section
      sessionStorage.removeItem('scrollToSection');
    }
  });
  