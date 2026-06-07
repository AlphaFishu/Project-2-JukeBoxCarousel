// Authentic Pop Showcase with true 600x600 iTunes API covers
const tracks = [
    { title: "Thriller", artist: "Michael Jackson", color: [220, 30, 40], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/600x600bb.jpg" },
    { title: "Like a Virgin", artist: "Madonna", color: [240, 100, 150], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8e/80/32/8e803264-c925-14dd-3412-2d7652c3df7b/mzi.wxptosaa.jpg/600x600bb.jpg" },
    { title: "Purple Rain", artist: "Prince", color: [130, 40, 200], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/00/17/f2/0017f24f-e580-b77a-71a8-1bc7b75881bf/603497822065.jpg/600x600bb.jpg" },
    { title: "I Wanna Dance", artist: "Whitney Houston", color: [50, 180, 220], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/86/b5/25/86b525b1-bff1-4bf6-6112-531251b3d672/dj.hthdmusj.jpg/600x600bb.jpg" },
    { title: "Toxic", artist: "Britney Spears", color: [160, 220, 50], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/38/8b/7a/388b7a8f-10ff-a4e0-7624-65e29ac6a793/828765374828.jpg/600x600bb.jpg" },
    { title: "Bye Bye Bye", artist: "NSYNC", color: [40, 100, 200], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/36/22/d6/3622d665-873c-57b8-392b-971292e6086f/012414170224.jpg/600x600bb.jpg" },
    { title: "FutureSex/LoveSounds", artist: "Justin Timberlake", color: [240, 240, 240], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4c/44/30/4c4430dd-150b-d393-ec70-4894975f4b16/888880422095.jpg/600x600bb.jpg" },
    { title: "The Fame Monster", artist: "Lady Gaga", color: [200, 200, 200], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/e9/1a/4e/e91a4eb9-31e7-89fb-3aad-e8172e534bb6/09UMGIM42295.rgb.jpg/600x600bb.jpg" },
    { title: "Teenage Dream", artist: "Katy Perry", color: [255, 140, 180], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7c/cb/c1/7ccbc1a3-9476-8f85-3c14-4e7e91f67f25/13UABIM57788.rgb.jpg/600x600bb.jpg" },
    { title: "24K Magic", artist: "Bruno Mars", color: [255, 200, 50], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e3/47/a0/e347a0cc-87ce-5d05-d560-176c7d48f66e/075679904119.jpg/600x600bb.jpg" },
    { title: "1989", artist: "Taylor Swift", color: [170, 210, 240], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/89/4a/4a/894a4ab9-b0b0-9ea5-ca41-8da0b9b79453/14UMDIM03405.rgb.jpg/600x600bb.jpg" },
    { title: "After Hours", artist: "The Weeknd", color: [220, 20, 20], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2b/b9/fe/2bb9fef5-d7f3-8345-25a9-db0e79fde4e4/20UMGIM11048.rgb.jpg/600x600bb.jpg" },
    { title: "Future Nostalgia", artist: "Dua Lipa", color: [255, 100, 180], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e9/c5/a8/e9c5a8a0-d698-137b-2e85-cf3a8d9548f8/190295303372.jpg/600x600bb.jpg" },
    { title: "Harry's House", artist: "Harry Styles", color: [240, 230, 190], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg" },
    { title: "Short n' Sweet", artist: "Sabrina Carpenter", color: [180, 230, 255], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a1/1c/ca/a11ccab6-7d4c-e041-d028-998bcebeb709/24UMGIM61704.rgb.jpg/600x600bb.jpg" },
    { title: "Hit Me Hard and Soft", artist: "Billie Eilish", color: [40, 60, 180], cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/600x600bb.jpg" }
];

const carousel = document.getElementById('carousel');
const totalCards = tracks.length;

// How many degrees apart each card is
const rotationAngle = 360 / totalCards;

// The radius of our cylinder. 
// Calculated using standard polygon math: radius = (width / 2) / tan(PI / num_cards)
// Card width is 280px + gaps. Let's use 300px for calculation to give spacing.
const cardWidthApproximation = 340;
const zTranslate = Math.round((cardWidthApproximation / 2) / Math.tan(Math.PI / totalCards));

// 1. Generate Cards
tracks.forEach((track, index) => {
    const card = document.createElement('div');
    card.classList.add('card');

    // We start them in the "drowned" state leaning back (rotateX -75)
    // To match DOM element order with rotation sequence cleanly: 
    const rotateY = index * rotationAngle;
    card.style.transform = `rotateY(${rotateY}deg) translateZ(${zTranslate}px) translateY(150px) rotateX(-75deg)`;
    card.dataset.baseRotateY = rotateY; // Store base rotation for easy access in loop

    // Build internal HTML structure - Apply Color Theory immediately
    card.innerHTML = `
        <div class="card-content">
            <img src="${track.cover}" alt="${track.title} Cover" class="cover-bg">
            <div class="overlay"></div>
            <div class="info">
                <h2 class="title" title="${track.title}">${track.title}</h2>
                <p class="artist">${track.artist}</p>
            </div>
        </div>
    `;

    applyColorTheory(track, card);

    carousel.appendChild(card);
});

// 2. Infinite Virtual Scroll Logic

let currentRotation = 0;
let targetRotation = 0;

// Configurable speed modifier for mouse wheel
const scrollSensitivity = 0.5;

// Listen for mouse wheel (desktop)
window.addEventListener('wheel', (e) => {
    targetRotation += (e.deltaY * scrollSensitivity);
}, { passive: true });

// Listen for touch swipe (mobile)
let touchStartY = 0;
window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', (e) => {
    const touchCurrentY = e.touches[0].clientY;
    const deltaY = touchStartY - touchCurrentY;
    targetRotation += (deltaY * 0.8); // Slightly different sensitivity for touch
    touchStartY = touchCurrentY;
}, { passive: true });

// Linear interpolation function
function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

// Color passing for ambient background setup
function applyColorTheory(trackData, cardElement) {
    const r = trackData.color[0];
    const g = trackData.color[1];
    const b = trackData.color[2];

    // Save pure dominant hue on the element for ambient background effects
    cardElement.dataset.domR = r;
    cardElement.dataset.domG = g;
    cardElement.dataset.domB = b;

    const title = cardElement.querySelector('.title');
    const artist = cardElement.querySelector('.artist');

    // Pure white crisp text without glow per user preference
    title.style.color = '#ffffff';
    title.style.textShadow = '0 2px 4px rgba(0,0,0,0.8)';
    artist.style.color = 'rgba(255,255,255,0.7)';
}

function updateCarousel() {
    // Lerp current towards target (0.05 is the smoothness factor)
    currentRotation = lerp(currentRotation, targetRotation, 0.08);

    // Rotate the entire carousel container
    carousel.style.transform = `translateZ(${-zTranslate}px) rotateY(${-currentRotation}deg)`;

    // Calculate which card is currently at the front
    // We normalize the rotation to a 0-360 range (handling negative infinite scroll)
    let normalizedRotation = currentRotation % 360;
    if (normalizedRotation < 0) normalizedRotation += 360;

    // Find the closest card index
    const activeIndex = Math.round(normalizedRotation / rotationAngle) % totalCards;

    // Apply active class AND the dynamic lift-off wave effect
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        const baseRotateY = parseFloat(card.dataset.baseRotateY);

        // Calculate circular distance from the active card
        let distance = Math.abs(index - activeIndex);
        if (distance > totalCards / 2) {
            distance = totalCards - distance;
        }

        if (distance === 0) {
            card.classList.add('active');

            // Update the website ambient background to an artistic darkened version of the cover art
            if (card.dataset.domR) {
                const bgR = Math.floor(parseInt(card.dataset.domR) * 0.2); // ~20% brightness
                const bgG = Math.floor(parseInt(card.dataset.domG) * 0.2);
                const bgB = Math.floor(parseInt(card.dataset.domB) * 0.2);
                document.body.style.backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;
            }

            // Full 100% opacity, standard brightness
            card.style.opacity = '1';
            card.style.filter = 'brightness(1) saturate(1.2)';

            // Active Card: Pop up out of the ring, facing the camera perfectly, expanded by 30%
            card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate + 80}px) translateY(-50px) rotateY(0deg) scale(1.30)`;
        } else if (distance === 1) {
            card.classList.remove('active');
            card.style.opacity = '1';
            card.style.filter = 'brightness(0.9) saturate(1.05)';

            // Immediate neighbor: Lift up halfway, turn slightly towards camera
            card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate + 40}px) translateY(20px) rotateY(45deg) scale(1.15)`;
        } else if (distance === 2) {
            card.classList.remove('active');
            card.style.opacity = '1';
            card.style.filter = 'brightness(0.85) saturate(0.95)';

            // 2nd neighbor: Lift up slightly, turn further sideways
            card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate + 10}px) translateY(70px) rotateY(65deg) scale(1.05)`;
        } else {
            card.classList.remove('active');
            // Full depth Submergence limit
            card.style.opacity = '1';
            card.style.filter = 'brightness(0.8) saturate(0.9)';

            // Domino effect: fully submerged, standing strongly sideways
            card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate}px) translateY(120px) rotateY(80deg) scale(1)`;
        }
    });

    // Loop the animation
    requestAnimationFrame(updateCarousel);
}

// Start the animation loop
updateCarousel();
