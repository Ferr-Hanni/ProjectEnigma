let clickCount = 0;
const imgElement = document.getElementById('glitch-image');
const hiddenMsg = document.getElementById('hidden-message');
const counterDisplay = document.getElementById('counter');
const body = document.body;

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu saat klik link
const allNavLinks = document.querySelectorAll('.nav-menu a');
allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Daftar gambar yang semakin lama semakin aneh
const images = [
    "assets/img/unknown.jpg",
    "assets/img/unknown2.jpg",
    "assets/img/unknown3.jpg",
    "assets/img/unknown4.jpg",
    "assets/img/unknown5.jpg"
];

// Event listener untuk klik pada gambar
imgElement.addEventListener('click', function() {
    clickCount++;
    counterDisplay.textContent = clickCount;

    // Ganti gambar sesuai jumlah klik
    if (clickCount < images.length) {
        imgElement.src = images[clickCount];
    }

    // Efek berdasarkan jumlah klik
    switch(clickCount) {
        case 1:
            // Mulai sedikit efek
            imgElement.style.filter = 'contrast(1.2)';
            break;
            
        case 2:
            // Tambah efek glitch
            imgElement.classList.add('glitch');
            break;
            
        case 3:
            // Efek lebih intens
            body.style.backgroundColor = '#414040';
            break;
            
        case 4:
            // Efek maksimal - munculkan pesan error
            body.style.backgroundColor = '#300';
            hiddenMsg.style.display = 'block';
            
            // Alert error
            setTimeout(() => {
                alert('⚠ SISTEM ERROR: Akses Tidak Sah Terdeteksi ⚠');
            }, 300);
            
            // Efek glitch pada seluruh halaman
            setInterval(() => {
                const randomColor = Math.random() > 0.5 ? 'rgb(117, 2, 2)' : 'rgb(85, 8, 8)';
                body.style.backgroundColor = randomColor;
            }, 100);
            break;
            
        default:
            // Klik lebih dari 4 - chaos mode
            if (clickCount > 4) {
                const colors = ['#500', '#300', 'rgb(8, 76, 116)', '#003', '#530'];
                body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Efek tambahan
                document.querySelector('.container').style.transform = 
                    `rotate(${Math.random() * 2 - 1}deg)`;
            }
    }
});

// Fungsi untuk halaman navbar yang error
const navLinks = document.querySelectorAll('.nav-menu a:not(.active)');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Tunggu 7 detik dulu
        setTimeout(() => {
            
            // 1. Background jadi merah gelap
            body.style.backgroundColor = '#1a0000';
            
            // 2. Gambar jadi terbalik + blur
            imgElement.style.transform = 'rotate(180deg) scale(1.1)';
            imgElement.style.filter = 'blur(2px) brightness(0.6)';
            imgElement.style.transition = 'all 2s ease';
            
            // 3. Semua teks jadi merah
            document.querySelectorAll('p, h2, h3').forEach(el => {
                el.style.color = '#ff6666';
                el.style.textShadow = '0 0 10px red';
            });
            
            // 4. Container bergetar sedikit
            document.querySelector('.container').style.animation = 'shake 0.5s infinite';
            
            // 5. Munculkan pesan tersembunyi
            hiddenMsg.style.display = 'block';
            
            // 6. Navbar jadi merah
            document.querySelector('.navbar').style.backgroundColor = '#300';
            document.querySelector('.navbar').style.borderColor = '#ff0000';
            
            // 7. Alert misterius
            setTimeout(() => {
                alert('⚠️ SISTEM DIKOMPROMIKAN ⚠️\n\nAnda tidak seharusnya berada di sini...');
            }, 1000);
            
        }, 4000); // 7 detik
    });
});

