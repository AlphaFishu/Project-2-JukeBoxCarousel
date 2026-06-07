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

// Layout State
let currentMode = 'cylinder';
document.body.classList.add('body-cylinder');

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
        <div class="vinyl-wrapper">
            <div class="vinyl-record">
                <div class="vinyl-center" style="--album-cover: url('${track.cover}')">
                    <div class="cd-spindle"></div>
                </div>
            </div>
        </div>
        <div class="card-content">
            <img src="${track.cover}" alt="${track.title} Cover" class="cover-bg">
            <div class="overlay"></div>
            <div class="fog-overlay"></div>
            <div class="info">
                <h2 class="title" title="${track.title}">${track.title}</h2>
                <p class="artist">${track.artist}</p>
            </div>
        </div>
    `;

    // Click to select/bring to front
    card.addEventListener('click', (e) => {
        // Safe modulo normalization for infinite scroll rotation
        const currentActiveFloat = targetRotation / rotationAngle;
        let activeFloat = currentActiveFloat % totalCards;
        if (activeFloat < 0) activeFloat += totalCards;
        
        let diff = index - activeFloat;

        // Wrap difference for shortest path infinite rotation
        if (diff > totalCards / 2) diff -= totalCards;
        if (diff < -totalCards / 2) diff += totalCards;

        targetRotation += diff * rotationAngle;
    });

    applyColorTheory(track, card);

    carousel.appendChild(card);
});

// 1.5 Mode Switcher Event Listeners & Sliding Pill Animations
const modeButtons = document.querySelectorAll('.mode-btn');

function updateSliderPosition(btn) {
    const slider = document.querySelector('.mode-slider');
    if (slider && btn) {
        // Offset by 5px to align with the selector's padding: 5px
        slider.style.transform = `translateX(${btn.offsetLeft - 5}px)`;
        slider.style.width = `${btn.offsetWidth}px`;
    }
}

// Initialize slider position (with font loading safety check)
const activeBtn = document.querySelector('.mode-btn.active');
if (activeBtn) {
    const initSlider = () => updateSliderPosition(activeBtn);
    
    // Trigger on different load checkpoints to ensure accuracy
    window.addEventListener('load', initSlider);
    window.addEventListener('resize', () => {
        const currentActive = document.querySelector('.mode-btn.active');
        if (currentActive) updateSliderPosition(currentActive);
    });
    
    if (document.fonts) {
        document.fonts.ready.then(initSlider);
    }
    initSlider();
}

modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and add to the clicked one
        modeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update sliding highlight position
        updateSliderPosition(btn);

        // Remove previous body mode classes
        document.body.classList.remove('body-cylinder', 'body-coverflow', 'body-depth');

        // Update mode state
        currentMode = btn.dataset.mode;
        document.body.classList.add(`body-${currentMode}`);

        // Reset scroll position when switching layouts
        targetRotation = 0;

        // Apply a temporary transition override to let cards glide into their new positions smoothly
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.transition = 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease, filter 0.8s ease';
            // Clean up temporary transition override after it finishes
            setTimeout(() => {
                card.style.transition = '';
            }, 1200);
        });
    });
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

function updateAmbientBackground(card) {
    if (card && card.dataset.domR) {
        const bgR = Math.floor(parseInt(card.dataset.domR) * 0.25); // ~25% brightness for rich color
        const bgG = Math.floor(parseInt(card.dataset.domG) * 0.25);
        const bgB = Math.floor(parseInt(card.dataset.domB) * 0.25);
        const bgStr = `rgb(${bgR}, ${bgG}, ${bgB})`;
        document.body.style.backgroundColor = bgStr;
        document.documentElement.style.setProperty('--dynamic-bg', bgStr);
    }
}

function updateCarousel() {
    // Lerp current towards target (0.08 is the smoothness factor)
    currentRotation = lerp(currentRotation, targetRotation, 0.08);

    // Calculate active index
    let normalizedRotation = currentRotation % 360;
    if (normalizedRotation < 0) normalizedRotation += 360;
    const activeIndex = Math.round(normalizedRotation / rotationAngle) % totalCards;
    const activeIndexFloat = currentRotation / rotationAngle;

    const cards = document.querySelectorAll('.card');

    if (currentMode === 'cylinder') {
        // Rotate the entire carousel container around the center of the ring
        carousel.style.transform = `translateZ(${-zTranslate}px) rotateY(${-currentRotation}deg)`;

        cards.forEach((card, index) => {
            const baseRotateY = parseFloat(card.dataset.baseRotateY);
            let distance = Math.abs(index - activeIndex);
            if (distance > totalCards / 2) {
                distance = totalCards - distance;
            }

            const fog = card.querySelector('.fog-overlay');
            card.style.visibility = 'visible';

            if (distance === 0) {
                card.classList.add('active');
                updateAmbientBackground(card);
                
                card.style.opacity = '1';
                card.style.filter = 'brightness(1) saturate(1.2)';
                if (fog) fog.style.opacity = '0';
                
                card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate + 80}px) translateY(-50px) scale(1.30)`;
            } else if (distance === 1) {
                card.classList.remove('active');
                card.style.opacity = '1';
                card.style.filter = 'brightness(0.9) saturate(1.0)';
                if (fog) fog.style.opacity = '0.35';
                
                card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate + 40}px) translateY(20px) rotateY(45deg) scale(1.15)`;
            } else if (distance === 2) {
                card.classList.remove('active');
                card.style.opacity = '1';
                card.style.filter = 'brightness(0.8) saturate(0.9)';
                if (fog) fog.style.opacity = '0.65';
                
                card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate + 10}px) translateY(70px) rotateY(65deg) scale(1.05)`;
            } else if (distance === 3) {
                card.classList.remove('active');
                card.style.opacity = '1';
                card.style.filter = 'brightness(0.7) saturate(0.8)';
                if (fog) fog.style.opacity = '0.85';
                
                card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate}px) translateY(120px) rotateY(80deg) scale(1)`;
            } else {
                card.classList.remove('active');
                card.style.opacity = '0';
                card.style.visibility = 'hidden';
                if (fog) fog.style.opacity = '1';
                card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate}px) translateY(120px) rotateY(80deg) scale(1)`;
            }

            // Dynamic z-index prevents 3D overlap bugs
            const zIndex = Math.round(20 - distance * 3);
            card.style.zIndex = zIndex;
        });

    } else if (currentMode === 'coverflow') {
        // Reset parent carousel transform
        carousel.style.transform = `translateZ(0px) rotateY(0deg)`;

        // Calculate responsive Cover Flow spacing to sit exactly 20px from screen edges
        const activeSpread = 160; // Spacing gap next to active card
        const edgeMargin = 20; // 20px border from screen end
        const cardProjectedHalfWidth = 103; // 180px * cos(55deg) = ~103px
        const maxTranslateX = (window.innerWidth / 2) - cardProjectedHalfWidth - edgeMargin;
        
        // stepSpacing is calculated so that offset = 5 lands exactly at maxTranslateX
        // Minimum step of 30px protects narrow screens
        const stepSpacing = Math.max(30, (maxTranslateX - activeSpread) / 5);

        cards.forEach((card, index) => {
            let offset = index - activeIndexFloat;
            while (offset > totalCards / 2) offset -= totalCards;
            while (offset < -totalCards / 2) offset += totalCards;

            const absOffset = Math.abs(offset);
            const fog = card.querySelector('.fog-overlay');
            let rotateY = 0;
            let translateX = 0;
            let translateZ = 0;
            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let filter = 'none';
            let fogOpacity = 0;
            
            card.style.visibility = 'visible';

            // Active coloring update
            if (Math.round(absOffset) === 0 || absOffset < 0.5) {
                card.classList.add('active');
                updateAmbientBackground(card);
            } else {
                card.classList.remove('active');
            }

            if (absOffset < 1) {
                // Smooth transition through the center
                const t = absOffset;
                rotateY = lerp(0, offset > 0 ? -55 : 55, t); // 55deg tilt prevents card edges cutting through each other
                translateX = lerp(0, offset * stepSpacing + (offset > 0 ? activeSpread : -activeSpread), t);
                translateZ = lerp(150, -50, t);
                translateY = lerp(-30, 30, t);
                scale = lerp(1.25, 1.0, t);
                opacity = 1;
                filter = `brightness(${lerp(1, 0.85, t)})`;
                fogOpacity = lerp(0, 0.2, t);
            } else if (absOffset <= 5) {
                // Side cards tilted inwards (Fog of War: submerged in background color via fog-overlay)
                rotateY = offset > 0 ? -55 : 55;
                translateX = offset * stepSpacing + (offset > 0 ? activeSpread : -activeSpread); // stretch responsive to screen edges
                translateZ = -50 - (absOffset - 1) * 120; // 120px step-back prevents physical 3D card clipping
                translateY = 30;
                scale = 0.95 - (absOffset - 1) * 0.04;
                
                // Smooth ease-out opacity only for the outermost edge items (between 4 and 5)
                if (absOffset > 4) {
                    opacity = 1 - (absOffset - 4); // smooth fade out/in at screen boundary
                } else {
                    opacity = 1;
                }
                
                filter = `brightness(${0.85 - (absOffset - 1) * 0.12})`;
                fogOpacity = 0.2 + (absOffset - 1) * 0.18; // smooth submerge into background color
            } else {
                // Beyond visual range, completely render away to prevent overlays
                opacity = 0;
                card.style.visibility = 'hidden';
                fogOpacity = 1.0;
            }

            // Real-time proportional vinyl sliding animation linked directly to scroll progress
            const vinylWrapper = card.querySelector('.vinyl-wrapper');
            if (vinylWrapper) {
                let discX = 0;
                if (absOffset < 1) {
                    discX = lerp(180, 0, absOffset); // slide out smoothly as active card reaches center
                } else {
                    discX = 0; // completely inside sleeve
                }
                vinylWrapper.style.transform = `translateX(${discX}px)`;
            }

            // High-precision stacking order sorting
            const zIndex = Math.round(20 - absOffset * 3);
            card.style.zIndex = zIndex;

            card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) translateY(${translateY}px) rotateY(${rotateY}deg) scale(${scale})`;
            card.style.opacity = opacity;
            card.style.filter = filter;
            if (fog) fog.style.opacity = fogOpacity;
        });

    } else if (currentMode === 'depth') {
        // Reset parent carousel transform
        carousel.style.transform = `translateZ(0px) rotateY(0deg)`;

        cards.forEach((card, index) => {
            let offset = index - activeIndexFloat;
            while (offset > totalCards / 2) offset -= totalCards;
            while (offset < -totalCards / 2) offset += totalCards;

            const absOffset = Math.abs(offset);
            const fog = card.querySelector('.fog-overlay');
            card.style.visibility = 'visible';

            // Active coloring update
            if (Math.round(absOffset) === 0 || absOffset < 0.5) {
                card.classList.add('active');
                updateAmbientBackground(card);
            } else {
                card.classList.remove('active');
            }

            let rotateY = 0;
            let translateX = 0;
            let translateZ = 0;
            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let filter = 'none';
            let fogOpacity = 0;

            if (offset === 0) {
                // Perfect center active card
                translateZ = 150;
                translateY = 0;
                translateX = 0;
                scale = 1.25;
                opacity = 1;
                filter = 'brightness(1) saturate(1.2)';
                fogOpacity = 0;
            } else if (offset > 0) {
                // Receding cards (tunnel going deeper)
                translateZ = 150 - offset * 250;
                translateY = -offset * 25; // Stacked upwards slightly
                translateX = 0;
                scale = Math.max(0.4, 1 - offset * 0.12);
                opacity = 1;
                filter = `brightness(${Math.max(0.3, 0.85 - (offset - 1) * 0.2)})`;
                fogOpacity = Math.min(1.0, 0.2 + offset * 0.25);
            } else {
                // offset < 0: Cards that have already been scrolled past
                // They fly forward past the camera and fade out
                translateZ = 150 - offset * 350; // closer/past camera
                translateY = -offset * 120; // flies down
                translateX = offset * 220; // flies left
                rotateY = offset * 45; // rotates slightly
                scale = 1 - offset * 0.15;
                opacity = Math.max(0, 1 + offset * 1.5);
                filter = 'none';
                fogOpacity = 0;
            }

            // Hide cards that are too far back or completely flown past
            if (offset > 4 || offset < -1.5) {
                card.style.visibility = 'hidden';
                opacity = 0;
            }

            // Layering sorting
            const zIndex = Math.round(20 - absOffset * 3);
            card.style.zIndex = zIndex;

            card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) translateY(${translateY}px) rotateY(${rotateY}deg) scale(${scale})`;
            card.style.opacity = opacity;
            card.style.filter = filter;
            if (fog) fog.style.opacity = fogOpacity;
        });
    }

    requestAnimationFrame(updateCarousel);
}

// Start the animation loop
updateCarousel();
