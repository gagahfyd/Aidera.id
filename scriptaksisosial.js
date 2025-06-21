// Dummy data kampanye donasi pasien
const kampanyeData = [
    {
      foto: '../Asset/aksisosial1.jpg',
      judul: 'Bantu Korban Bencana Alam di Aceh',
      yayasan: 'Relawan Indonesia',
      danaTerkumpul: 150000000,
      target: 200000000,
      hariTersisa: 20,
      kategori: 'Bencana',
      lokasi: 'Aceh',
      status: 'Sedang Berlangsung',
    },
    {
      foto: '../Asset/aksisosial2.jpg',
      judul: 'Bantu Pembangunan Masjid di Papua',
      yayasan: 'Yayasan Amal Sejahtera',
      danaTerkumpul: 95000000,
      target: 210000000,
      hariTersisa: 25,
      kategori: 'Pendidikan',
      lokasi: 'Papua',
      status: 'Sedang Berlangsung',
    },
    {
      foto: '../Asset/aksisosial3.jpg',
      judul: 'Bantu Pendidikan Anak Yatim',
      yayasan: 'Yayasan Peduli Anak',
      danaTerkumpul: 45000000,
      target: 130000000,
      hariTersisa: 15,
      kategori: 'Pendidikan',
      lokasi: 'Jakarta',
      status: 'Sedang Berlangsung',
    },
    {
      foto: '../Asset/aksisosial4.jpg',
      judul: 'Bantu Korban Gempa di Maluku',
      yayasan: 'Tim Relawan Nasional',
      danaTerkumpul: 120000000,
      target: 200000000,
      hariTersisa: 18,
      kategori: 'Bencana',
      lokasi: 'Maluku',
      status: 'Sedang Berlangsung',
    },
    {
      foto: '../Asset/aksisosial5.jpg',
      judul: 'Bantu Pembangunan Sekolah di NTT',
      yayasan: 'Yayasan Pendidikan Indonesia',
      danaTerkumpul: 85000000,
      target: 150000000,
      hariTersisa: 22,
      kategori: 'Pendidikan',
      lokasi: 'NTT',
      status: 'Sedang Berlangsung',
    },
    {
      foto: '../Asset/aksisosial6.jpg',
      judul: 'Bantu Korban Banjir di Jakarta',
      yayasan: 'Relawan Jakarta',
      danaTerkumpul: 75000000,
      target: 120000000,
      hariTersisa: 12,
      kategori: 'Bencana',
      lokasi: 'Jakarta',
      status: 'Sedang Berlangsung',
    },
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
        <img src="${item.foto}" alt="${item.judul}" class="kampanye-img" onerror="this.src='../Asset/AksiSosial-icon.svg'">
        <div class="kampanye-info">
          <div class="kampanye-kategori">${item.kategori}</div>
          <div class="kampanye-title">${item.judul}</div>
          <div class="kampanye-penyelenggara">${item.yayasan}</div>
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
  
    let filtered = kampanyeData.filter(item => {
      let matchKondisi = true;
      if (kondisi === 'waktu') {
        matchKondisi = item.hariTersisa <= 7;
      } else if (kondisi === 'dana') {
        const percent = Math.min(100, Math.round(item.danaTerkumpul / item.target * 100));
        matchKondisi = percent >= 80;
      }
      return (
        (!kategori || item.kategori === kategori) &&
        (!lokasi || item.lokasi === lokasi) &&
        (!status || item.status === status) &&
        (!kondisi || matchKondisi) &&
        (!search || item.judul.toLowerCase().includes(search) || item.yayasan.toLowerCase().includes(search))
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
  