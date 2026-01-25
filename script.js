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

// Menyembunyikan password di console log agar user harus "Inspect Element"
console.log("%cAUTH_CODE: OMEGA_REBORN_2007", "color: #050000; background: #050000;"); 
// Password di atas disamarkan (hitam di atas hitam), user harus memblok teks di konsol untuk membacanya.

// Atau simpan di metadata title
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = "KODE: 210907"; // Tanggal Last Updated kamu
    }
});

function checkAccess() {
    const key = document.getElementById('passkey').value;
    const loginBox = document.querySelector('.login-box');
    const content = document.getElementById('classified-content');

    // Kamu bisa menggunakan kode dari tanggal '210907' atau 'OMEGA_REBORN'
    if (key === "210907") {
        loginBox.style.display = "none";
        content.style.display = "block";
        document.body.style.backgroundColor = "#000";
        alert("ACCESS GRANTED. WELCOME, ADMINISTRATOR.");
    } else {
        alert("ACCESS DENIED. AUTHORITIES NOTIFIED.");
        document.body.style.animation = "shake 0.2s 5";
    }
}

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.getElementById("terminal-text").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true" class="cursor">_</span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 50); // Kecepatan mengetik
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

