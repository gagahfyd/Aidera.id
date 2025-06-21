// Dummy data kampanye donasi pasien
const kampanyeData = [
  {
    foto: 'Asset/pasien1.jpg',
    nama: 'Rina Putri',
    penyakit: 'Kanker Darah',
    yayasan: 'Yayasan Harapan Sehat',
    danaTerkumpul: 120500000,
    target: 200000000,
    hariTersisa: 15,
    umur: 'Anak-anak',
    lokasi: 'Jakarta',
    kondisi: 'waktu',
  },
  {
    foto: 'Asset/pasien2.jpg',
    nama: 'Rizky Ramadhan',
    penyakit: 'Jantung Bawaan',
    yayasan: 'Rumah Peduli',
    danaTerkumpul: 82300000,
    target: 150000000,
    hariTersisa: 10,
    umur: 'Anak-anak',
    lokasi: 'Bandung',
    kondisi: 'dana',
  },
  {
    foto: 'Asset/pasien3.jpg',
    nama: 'Ibu Siti Aminah',
    penyakit: 'Ginjal Kronis',
    yayasan: 'Relawan Wilayah Timur',
    danaTerkumpul: 29750000,
    target: 100000000,
    hariTersisa: 5,
    umur: 'Lansia',
    lokasi: 'Papua',
    kondisi: 'waktu',
  },
  {
    foto: 'Asset/pasien4.jpg',
    nama: 'Budi Santoso',
    penyakit: 'Kecelakaan',
    yayasan: 'Yayasan Kemanusiaan',
    danaTerkumpul: 95000000,
    target: 120000000,
    hariTersisa: 3,
    umur: 'Dewasa',
    lokasi: 'Surabaya',
    kondisi: 'waktu',
  },
  {
    foto: 'Asset/pasien5.jpg',
    nama: 'Soleh Hidayat',
    penyakit: 'Katarak',
    yayasan: 'Yayasan Mata Sehat',
    danaTerkumpul: 35000000,
    target: 50000000,
    hariTersisa: 8,
    umur: 'Lansia',
    lokasi: 'Medan',
    kondisi: 'dana',
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
      <img src="${item.foto}" alt="${item.nama}" class="kampanye-img" onerror="this.src='Asset/DonasiPasien-icon.svg'">
      <div class="kampanye-info">
        <div class="kampanye-penyakit">${item.penyakit}</div>
        <div class="kampanye-title">${item.nama}</div>
        <div class="kampanye-yayasan">${item.yayasan}</div>
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
  const penyakit = document.getElementById('filter-penyakit').value;
  const umur = document.getElementById('filter-umur').value;
  const lokasi = document.getElementById('filter-lokasi').value;
  const kondisi = document.getElementById('filter-kondisi').value;
  const search = document.getElementById('search-input').value.trim().toLowerCase();

  let filtered = kampanyeData.filter(item => {
    return (
      (!penyakit || item.penyakit.toLowerCase().includes(penyakit.toLowerCase())) &&
      (!umur || item.umur === umur) &&
      (!lokasi || item.lokasi === lokasi) &&
      (!kondisi || item.kondisi === kondisi) &&
      (!search || item.nama.toLowerCase().includes(search) || item.yayasan.toLowerCase().includes(search))
    );
  });

  // Jika filter kondisi terdesak diisi, urutkan dari hariTersisa terkecil ke terbesar
  if (kondisi) {
    filtered.sort((a, b) => a.hariTersisa - b.hariTersisa);
  }

  renderKampanyeList(filtered);
}

document.addEventListener('DOMContentLoaded', function() {
  renderKampanyeList(kampanyeData);
  document.getElementById('filter-penyakit').addEventListener('change', applyFilters);
  document.getElementById('filter-umur').addEventListener('change', applyFilters);
  document.getElementById('filter-lokasi').addEventListener('change', applyFilters);
  document.getElementById('filter-kondisi').addEventListener('change', applyFilters);
  document.getElementById('search-btn').addEventListener('click', applyFilters);
  document.getElementById('search-input').addEventListener('keyup', function(e) {
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
