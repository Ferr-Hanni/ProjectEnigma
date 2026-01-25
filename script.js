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

// Add noise overlay to body
const noiseOverlay = document.createElement('div');
noiseOverlay.className = 'noise-overlay';
document.body.appendChild(noiseOverlay);

// Subliminal messages yang muncul random
const subliminalMessages = [
    "THEY ARE WATCHING",
    "DO NOT TRUST",
    "SUBJECT #404",
    "OMEGA REBORN",
    "YOU ARE NEXT",
    "ERROR: REALITY CORRUPTED",
    "DISCONNECT IMMINENT",
    "EXPERIMENT FAILED"
];

// Function untuk menampilkan subliminal message
function showSubliminalMessage() {
    const msg = subliminalMessages[Math.floor(Math.random() * subliminalMessages.length)];
    const subliminal = document.createElement('div');
    subliminal.className = 'subliminal';
    subliminal.textContent = msg;
    document.body.appendChild(subliminal);
    
    setTimeout(() => {
        subliminal.remove();
    }, 10000);
}

// Tampilkan subliminal message setiap 15-30 detik
setInterval(() => {
    if (Math.random() > 0.3) {
        showSubliminalMessage();
    }
}, Math.random() * 15000 + 15000);

// Daftar gambar yang semakin lama semakin aneh
const images = [
    "assets/img/unknown.jpg",
    "assets/img/unknown2.jpg",
    "assets/img/unknown3.jpg",
    "assets/img/unknown4.jpg",
    "assets/img/unknown5.jpg"
];

// Random text glitch effect
function glitchRandomText() {
    const allText = document.querySelectorAll('.text-content p, .content h2, .content h3');
    if (allText.length > 0 && Math.random() > 0.7) {
        const randomElement = allText[Math.floor(Math.random() * allText.length)];
        const originalText = randomElement.textContent;
        
        // Corrupt text temporarily
        const corruptedChars = '█▓▒░!@#$%^&*()_+-=[]{}|;:,.<>?/~`¿§±';
        let corrupted = '';
        for (let i = 0; i < originalText.length; i++) {
            if (Math.random() > 0.9) {
                corrupted += corruptedChars[Math.floor(Math.random() * corruptedChars.length)];
            } else {
                corrupted += originalText[i];
            }
        }
        
        randomElement.textContent = corrupted;
        randomElement.classList.add('rgb-split');
        
        // Restore after 200ms
        setTimeout(() => {
            randomElement.textContent = originalText;
            randomElement.classList.remove('rgb-split');
        }, 200);
    }
}

// Glitch text setiap 8-15 detik
setInterval(glitchRandomText, Math.random() * 7000 + 8000);

// Event listener untuk klik pada gambar
if (imgElement) {
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
                imgElement.classList.add('chromatic');
                showSubliminalMessage();
                break;
                
            case 2:
                // Tambah efek glitch
                imgElement.classList.add('glitch-active');
                document.querySelector('header h1').classList.add('rgb-split');
                glitchRandomText();
                break;
                
            case 3:
                // Efek lebih intens
                body.style.backgroundColor = '#414040';
                document.querySelector('.container').classList.add('distorted');
                
                // Glitch navbar logo
                const logo = document.querySelector('.nav-logo');
                if (logo) {
                    const originalLogo = logo.textContent;
                    logo.textContent = 'PR̴O̷J̶E̸C̵T̴ ̸E̶N̷I̴G̴M̷A̸';
                    setTimeout(() => {
                        logo.textContent = originalLogo;
                    }, 2000);
                }
                break;
                
            case 4:
                // Efek maksimal - munculkan pesan error
                body.style.backgroundColor = '#300';
                if (hiddenMsg) hiddenMsg.style.display = 'block';
                
                // Alert error
                setTimeout(() => {
                    alert('⚠ SISTEM ERROR: Akses Tidak Sah Terdeteksi ⚠');
                }, 300);
                
                // Efek glitch pada seluruh halaman
                setInterval(() => {
                    const randomColor = Math.random() > 0.5 ? 'rgb(117, 2, 2)' : 'rgb(85, 8, 8)';
                    body.style.backgroundColor = randomColor;
                }, 100);
                
                // Intense subliminal messages
                setInterval(showSubliminalMessage, 5000);
                break;
                
            default:
                // Klik lebih dari 4 - chaos mode
                if (clickCount > 4) {
                    const colors = ['#500', '#300', 'rgb(8, 76, 116)', '#003', '#530'];
                    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    
                    // Efek tambahan
                    document.querySelector('.container').style.transform = 
                        `rotate(${Math.random() * 2 - 1}deg)`;
                    
                    // Random text corruption
                    glitchRandomText();
                }
        }
    });
}

// Easter Egg: Konami Code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        body.style.animation = 'rgb-split-anim 0.5s infinite';
        alert('🎮 CHEAT CODE ACTIVATED: REALITY.EXE HAS STOPPED WORKING');
        
        // Chaos mode
        setInterval(() => {
            document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        }, 100);
    }
});

// Easter Egg: Typing "OMEGA" reveals hidden message
let typedString = '';
const secretCode = 'omega';
let secretTimeout;

document.addEventListener('keypress', function(e) {
    clearTimeout(secretTimeout);
    typedString += e.key.toLowerCase();
    
    if (typedString.includes(secretCode)) {
        const revelation = document.createElement('div');
        revelation.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.95);
            color: #ff4444;
            padding: 40px;
            border: 2px solid #ff4444;
            z-index: 10000;
            font-size: 1.2rem;
            text-align: center;
            box-shadow: 0 0 50px rgba(255, 68, 68, 0.5);
        `;
        revelation.innerHTML = `
            <h2 style="margin-bottom: 20px;">OMEGA PROTOCOL ACTIVATED</h2>
            <p>Subject #404 is not what it seems...</p>
            <p style="margin-top: 20px; font-size: 0.8rem; color: #888;">Click anywhere to close</p>
        `;
        
        document.body.appendChild(revelation);
        revelation.classList.add('rgb-split');
        
        revelation.addEventListener('click', () => {
            revelation.remove();
        });
        
        typedString = '';
    }
    
    // Reset typed string after 2 seconds of inactivity
    secretTimeout = setTimeout(() => {
        typedString = '';
    }, 2000);
});

// Easter Egg: Triple-click pada footer
const footer = document.querySelector('footer');
if (footer) {
    let footerClickCount = 0;
    let footerClickTimer;
    
    footer.addEventListener('click', function() {
        footerClickCount++;
        
        clearTimeout(footerClickTimer);
        footerClickTimer = setTimeout(() => {
            footerClickCount = 0;
        }, 500);
        
        if (footerClickCount === 3) {
            this.style.color = '#ff4444';
            this.innerHTML = `
                <p>⚠ SYSTEM BREACH DETECTED ⚠</p>
                <p class="footer-note">CLASSIFIED ACCESS LOG: ${new Date().toISOString()}</p>
                <p style="font-size: 0.6rem; margin-top: 10px;">FERDIANTO - SUBJECT #404 - OMEGA_REBORN_2007</p>
            `;
            this.classList.add('rgb-split');
            footerClickCount = 0;
        }
    });
}

// Random screen shake
function randomShake() {
    if (Math.random() > 0.95) {
        document.querySelector('.container').style.animation = 'shake 0.2s 3';
        setTimeout(() => {
            document.querySelector('.container').style.animation = 'flicker 0.1s infinite';
        }, 600);
    }
}

setInterval(randomShake, 10000);

// Menyembunyikan password di console log agar user harus "Inspect Element"
console.log("%cAUTH_CODE: OMEGA_REBORN_2007", "color: #050000; background: #050000;"); 
console.log("%c⚠ WARNING: Unauthorized access detected", "color: #ff4444; font-size: 20px; font-weight: bold;");
console.log("%cYou are being monitored...", "color: #888; font-style: italic;");

// Hidden message in console
setTimeout(() => {
    console.log("%c" + `
    ███████╗██████╗ ██████╗  ██████╗ ██████╗ 
    ██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
    █████╗  ██████╔╝██████╔╝██║   ██║██████╔╝
    ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗
    ███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
    
    SUBJECT #404 - CLASSIFICATION: OMEGA
    `, "color: #ff4444; font-family: monospace;");
}, 3000);

// Atau simpan di metadata title
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = "KODE: 210907"; // Tanggal Last Updated
    } else {
        // Restore original title when tab becomes visible
        const currentPage = window.location.pathname;
        if (currentPage.includes('index2x')) {
            document.title = "TERMINAL ACCESS - LEVEL 5";
        } else if (currentPage.includes('classified')) {
            document.title = "Classified - Project Enigma";
        } else {
            document.title = "Subject #404 - Code 349;.8[p.96[";
        }
    }
});

function checkAccess() {
    const key = document.getElementById('passkey').value;
    const loginBox = document.querySelector('.login-box');
    const content = document.getElementById('classified-content');

    // Kamu bisa menggunakan kode dari tanggal '210907' atau 'OMEGA_REBORN'
    if (key === "210907" || key === "OMEGA_REBORN_2007") {
        loginBox.style.display = "none";
        content.style.display = "block";
        document.body.style.backgroundColor = "#000";
        alert("ACCESS GRANTED. WELCOME, ADMINISTRATOR.");
        
        // Activate chromatic effect
        document.body.style.animation = 'chromatic-shift 0.5s infinite';
    } else {
        alert("ACCESS DENIED. AUTHORITIES NOTIFIED.");
        document.body.style.animation = "shake 0.2s 5";
        
        // Add glitch effect on failed attempt
        loginBox.classList.add('rgb-split');
        setTimeout(() => {
            loginBox.classList.remove('rgb-split');
            document.body.style.animation = '';
        }, 1000);
    }
}

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.getElementById("terminal-text").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true" class="cursor">_</span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 50);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

// Time-based Easter Egg (works between 00:00-03:00)
function checkDarkHours() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 3) {
        document.body.style.filter = 'brightness(0.7) contrast(1.3)';
        
        // Show special message
        const darkMsg = document.createElement('div');
        darkMsg.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 68, 68, 0.1);
            color: #ff4444;
            padding: 15px;
            border: 1px solid #ff4444;
            font-size: 0.8rem;
            z-index: 9999;
        `;
        darkMsg.textContent = '⚠ ACCESSING DURING DARK HOURS DETECTED';
        document.body.appendChild(darkMsg);
        
        setTimeout(() => {
            darkMsg.remove();
        }, 5000);
    }
}

// Check dark hours on load and every minute
checkDarkHours();
setInterval(checkDarkHours, 60000);