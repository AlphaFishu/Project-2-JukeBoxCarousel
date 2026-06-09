// Authentic Pop Showcase with true 600x600 iTunes API covers
const tracks = [
    {
        title: "Thriller",
        artist: "Michael Jackson",
        color: [220, 30, 40],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/600x600bb.jpg",
        songs: [
            { title: "Thriller", artist: "Michael Jackson", plays: "450M plays", duration: "5:57", explicit: false },
            { title: "Billie Jean", artist: "Michael Jackson", plays: "1.2B plays", duration: "4:54", explicit: false },
            { title: "Beat It", artist: "Michael Jackson", plays: "850M plays", duration: "4:18", explicit: false },
            { title: "Wanna Be Startin' Somethin'", artist: "Michael Jackson", plays: "120M plays", duration: "6:02", explicit: false },
            { title: "Human Nature", artist: "Michael Jackson", plays: "180M plays", duration: "4:07", explicit: false }
        ],
        lyrics: "It's close to midnight\nAnd something evil's lurking in the dark\nUnder the moonlight\nYou see a sight that almost stops your heart\nYou try to scream\nBut terror takes the sound before you make it\nYou start to freeze\nAs horror looks you right between the eyes\nYou're paralyzed\n\n'Cause this is thriller, thriller night\nAnd no one's gonna save you from the beast about to strike\nYou know it's thriller, thriller night\nYou're fighting for your life inside a killer, thriller tonight"
    },
    {
        title: "Like a Virgin",
        artist: "Madonna",
        color: [240, 100, 150],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8e/80/32/8e803264-c925-14dd-3412-2d7652c3df7b/mzi.wxptosaa.jpg/600x600bb.jpg",
        songs: [
            { title: "Like a Virgin", artist: "Madonna", plays: "280M plays", duration: "3:38", explicit: false },
            { title: "Material Girl", artist: "Madonna", plays: "340M plays", duration: "4:00", explicit: false },
            { title: "Angel", artist: "Madonna", plays: "45M plays", duration: "3:56", explicit: false },
            { title: "Dress You Up", artist: "Madonna", plays: "65M plays", duration: "4:01", explicit: false },
            { title: "Love Don't Live Here Anymore", artist: "Madonna", plays: "30M plays", duration: "5:50", explicit: false }
        ],
        lyrics: "I made it through the wilderness\nSomehow I made it through\nDidn't know how lost I was\nUntil I found you\n\nI was beat, incomplete\nI'd been had, I was sad and blue\nBut you made me feel\nYeah, you made me feel shiny and new\n\nLike a virgin\nTouched for the very first time\nLike a virgin\nWhen your heart beats next to mine"
    },
    {
        title: "Purple Rain",
        artist: "Prince",
        color: [130, 40, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/00/17/f2/0017f24f-e580-b77a-71a8-1bc7b75881bf/603497822065.jpg/600x600bb.jpg",
        songs: [
            { title: "Purple Rain", artist: "Prince", plays: "480M plays", duration: "8:41", explicit: false },
            { title: "When Doves Cry", artist: "Prince", plays: "320M plays", duration: "5:52", explicit: false },
            { title: "Let's Go Crazy", artist: "Prince", plays: "150M plays", duration: "4:39", explicit: false },
            { title: "I Would Die 4 U", artist: "Prince", plays: "95M plays", duration: "2:49", explicit: false },
            { title: "The Beautiful Ones", artist: "Prince", plays: "60M plays", duration: "5:13", explicit: false }
        ],
        lyrics: "I never meant to cause you any sorrow\nI never meant to cause you any pain\nI only wanted to one time to see you laughing\nI only wanted to see you\nLaughing in the purple rain\n\nPurple rain, purple rain\nPurple rain, purple rain\nPurple rain, purple rain\nI only wanted to see you\nBathing in the purple rain"
    },
    {
        title: "I Wanna Dance",
        artist: "Whitney Houston",
        color: [50, 180, 220],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/86/b5/25/86b525b1-bff1-4bf6-6112-531251b3d672/dj.hthdmusj.jpg/600x600bb.jpg",
        songs: [
            { title: "I Wanna Dance with Somebody", artist: "Whitney Houston", plays: "720M plays", duration: "4:51", explicit: false },
            { title: "How Will I Know", artist: "Whitney Houston", plays: "310M plays", duration: "4:35", explicit: false },
            { title: "Greatest Love of All", artist: "Whitney Houston", plays: "250M plays", duration: "4:49", explicit: false },
            { title: "One Moment in Time", artist: "Whitney Houston", plays: "180M plays", duration: "4:46", explicit: false },
            { title: "Saving All My Love for You", artist: "Whitney Houston", plays: "210M plays", duration: "3:57", explicit: false }
        ],
        lyrics: "Clock strikes upon the hour\nAnd the sun begins to fade\nStill enough time to figure out\nHow to chase my blues away\n\nI've done all right up to now\nIt's the light of day that shows me how\nAnd when the night falls, loneliness calls\n\nOh, I wanna dance with somebody\nI wanna feel the heat with somebody\nYeah, I wanna dance with somebody\nWith somebody who loves me"
    },
    {
        title: "Toxic",
        artist: "Britney Spears",
        color: [160, 220, 50],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/38/8b/7a/388b7a8f-10ff-a4e0-7624-65e29ac6a793/828765374828.jpg/600x600bb.jpg",
        songs: [
            { title: "Toxic", artist: "Britney Spears", plays: "980M plays", duration: "3:21", explicit: false },
            { title: "Everytime", artist: "Britney Spears", plays: "320M plays", duration: "3:53", explicit: false },
            { title: "Me Against the Music", artist: "Britney Spears", plays: "110M plays", duration: "3:44", explicit: false },
            { title: "Outrageous", artist: "Britney Spears", plays: "45M plays", duration: "3:21", explicit: false },
            { title: "Showdown", artist: "Britney Spears", plays: "25M plays", duration: "3:17", explicit: false }
        ],
        lyrics: "Baby, can't you see I'm calling?\nA guy like you should wear a warning\nIt's dangerous, I'm falling\n\nThere's no escape, I can't wait\nI need a hit, baby, give me it\nYou're dangerous, I'm loving it\n\nToo high, can't come down\nLosing my head, spinning 'round and 'round\nDo you feel me now?\n\nWith a taste of your lips, I'm on a ride\nYou're toxic, I'm slipping under\nWith a taste of a poison paradise\nI'm addicted to you\nDon't you know that you're toxic?"
    },
    {
        title: "Bye Bye Bye",
        artist: "NSYNC",
        color: [40, 100, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/36/22/d6/3622d665-873c-57b8-392b-971292e6086f/012414170224.jpg/600x600bb.jpg",
        songs: [
            { title: "Bye Bye Bye", artist: "NSYNC", plays: "420M plays", duration: "3:20", explicit: false },
            { title: "It's Gonna Be Me", artist: "NSYNC", plays: "350M plays", duration: "3:11", explicit: false },
            { title: "This I Promise You", artist: "NSYNC", plays: "210M plays", duration: "4:43", explicit: false },
            { title: "Space In My Heart", artist: "NSYNC", plays: "15M plays", duration: "4:02", explicit: false },
            { title: "No Strings Attached", artist: "NSYNC", plays: "30M plays", duration: "3:30", explicit: false }
        ],
        lyrics: "Hey, hey\nBye, bye, bye\nBye, bye\n\nI'm doing this tonight\nYou're probably gonna start a fight\nI know this can't be right\nHey baby, come on\n\nI loved you endless, yes, it's true\nI don't wanna be a fool for you\nJust another player in your game for two\nYou may hate me but it ain't no lie\n\nBaby bye bye bye"
    },
    {
        title: "FutureSex/LoveSounds",
        artist: "Justin Timberlake",
        color: [240, 240, 240],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4c/44/30/4c4430dd-150b-d393-ec70-4894975f4b16/888880422095.jpg/600x600bb.jpg",
        songs: [
            { title: "SexyBack", artist: "Justin Timberlake", plays: "680M plays", duration: "4:02", explicit: true },
            { title: "What Goes Around... Comes Around", artist: "Justin Timberlake", plays: "480M plays", duration: "7:28", explicit: false },
            { title: "My Love", artist: "Justin Timberlake", plays: "290M plays", duration: "4:36", explicit: false },
            { title: "LoveStoned / I Think She Knows", artist: "Justin Timberlake", plays: "180M plays", duration: "7:24", explicit: false },
            { title: "Summer Love", artist: "Justin Timberlake", plays: "150M plays", duration: "4:12", explicit: false }
        ],
        lyrics: "I'm bringin' sexy back\nThem other boys don't know how to act\nI think it's special, what's behind your back\nSo turn around and I'll pick up the slack\n\nDirty babe\nYou see these shackles, baby, I'm your slave\nI'll let you whip me if I misbehave\nIt's just that no one makes me feel this way\n\nTake 'em to the bridge"
    },
    {
        title: "The Fame Monster",
        artist: "Lady Gaga",
        color: [200, 200, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/e9/1a/4e/e91a4eb9-31e7-89fb-3aad-e8172e534bb6/09UMGIM42295.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Bad Romance", artist: "Lady Gaga", plays: "920M plays", duration: "4:54", explicit: false },
            { title: "Telephone", artist: "Lady Gaga", plays: "450M plays", duration: "3:41", explicit: false },
            { title: "Alejandro", artist: "Lady Gaga", plays: "380M plays", duration: "4:34", explicit: false },
            { title: "Monster", artist: "Lady Gaga", plays: "110M plays", duration: "4:09", explicit: false },
            { title: "Speechless", artist: "Lady Gaga", plays: "90M plays", duration: "6:02", explicit: false }
        ],
        lyrics: "Oh-oh-oh-oh-oh, oh-oh-oh-oh, oh-oh-oh\nCaught in a bad romance\nOh-oh-oh-oh-oh, oh-oh-oh-oh, oh-oh-oh\nCaught in a bad romance\n\nRah, rah, ah-ah-ah\nRoma, roma-ma\nGaga, ooh-la-la\nWant your bad romance\n\nI want your ugly, I want your disease\nI want your everything as long as it's free\nI want your love\nLove, love, love, I want your love"
    },
    {
        title: "Teenage Dream",
        artist: "Katy Perry",
        color: [255, 140, 180],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7c/cb/c1/7ccbc1a3-9476-8f85-3c14-4e7e91f67f25/13UABIM57788.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Teenage Dream", artist: "Katy Perry", plays: "680M plays", duration: "3:47", explicit: false },
            { title: "Firework", artist: "Katy Perry", plays: "1.1B plays", duration: "3:47", explicit: false },
            { title: "California Gurls", artist: "Katy Perry", plays: "540M plays", duration: "3:56", explicit: false },
            { title: "Last Friday Night (T.G.I.F.)", artist: "Katy Perry", plays: "780M plays", duration: "3:50", explicit: true },
            { title: "The One That Got Away", artist: "Katy Perry", plays: "710M plays", duration: "3:47", explicit: false }
        ],
        lyrics: "You think I'm pretty without any makeup on\nYou think I'm funny when I tell the punchline wrong\nI know you get me, so I let my walls come down, down\n\nBefore you met me, I was alright but things were kinda heavy\nYou brought me to life, now every February\nYou'll be my Valentine, Valentine\n\nLet's go all the way tonight\nNo regrets, just love\nWe can dance, until we die\nYou and I, we'll be young forever\n\nYou make me feel like I'm livin' a teenage dream"
    },
    {
        title: "24K Magic",
        artist: "Bruno Mars",
        color: [255, 200, 50],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e3/47/a0/e347a0cc-87ce-5d05-d560-176c7d48f66e/075679904119.jpg/600x600bb.jpg",
        songs: [
            { title: "24K Magic", artist: "Bruno Mars", plays: "1.2B plays", duration: "3:46", explicit: false },
            { title: "That's What I Like", artist: "Bruno Mars", plays: "1.8B plays", duration: "3:26", explicit: false },
            { title: "Versace on the Floor", artist: "Bruno Mars", plays: "650M plays", duration: "4:21", explicit: false },
            { title: "Chunky", artist: "Bruno Mars", plays: "180M plays", duration: "3:06", explicit: false },
            { title: "Finesse", artist: "Bruno Mars", plays: "420M plays", duration: "3:11", explicit: false }
        ],
        lyrics: "Tonight\nI just want to take you higher\nThrow your hands up in the sky\nLet's set this party off right\n\nPlayers, put yo' pinky rings up to the moon\nGirls, what y'all trying to do?\n24 karat magic in the air\nHead to toe so soul player\nLook out!\n\nPop pop, it's show time (show time)\nShow time (show time)\nGuess who's back again?"
    },
    {
        title: "1989",
        artist: "Taylor Swift",
        color: [170, 210, 240],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/89/4a/4a/894a4ab9-b0b0-9ea5-ca41-8da0b9b79453/14UMDIM03405.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Blank Space", artist: "Taylor Swift", plays: "1.6B plays", duration: "3:51", explicit: false },
            { title: "Shake It Off", artist: "Taylor Swift", plays: "1.1B plays", duration: "3:39", explicit: false },
            { title: "Style", artist: "Taylor Swift", plays: "850M plays", duration: "3:51", explicit: false },
            { title: "Bad Blood", artist: "Taylor Swift", plays: "580M plays", duration: "3:31", explicit: false },
            { title: "Wildest Dreams", artist: "Taylor Swift", plays: "790M plays", duration: "3:40", explicit: false }
        ],
        lyrics: "Nice to meet you, where you been?\nI could show you incredible things\nMagic, madness, heaven, sin\nSaw you there and I thought\n\"Oh, my God, look at that face\"\nYou look like my next mistake\nLove's a game, wanna play?\n\nNew money, suit and tie\nI can read you like a magazine\nAin't it funny, rumors fly\nAnd I know you heard about me\nSo hey, let's be friends\nI'm dying to see how this one ends"
    },
    {
        title: "After Hours",
        artist: "The Weeknd",
        color: [220, 20, 20],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2b/b9/fe/2bb9fef5-d7f3-8345-25a9-db0e79fde4e4/20UMGIM11048.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Blinding Lights", artist: "The Weeknd", plays: "4.1B plays", duration: "3:20", explicit: false },
            { title: "Save Your Tears", artist: "The Weeknd", plays: "1.9B plays", duration: "3:35", explicit: true },
            { title: "In Your Eyes", artist: "The Weeknd", plays: "720M plays", duration: "3:57", explicit: true },
            { title: "After Hours", artist: "The Weeknd", plays: "6:01", duration: "6:01", explicit: true },
            { title: "Heartless", artist: "The Weeknd", plays: "890M plays", duration: "3:18", explicit: true }
        ],
        lyrics: "Yeah\nI've been tryin' to call\nI've been on my own for long enough\nMaybe you can show me how to love, maybe\nI'm going through withdrawals\nYou don't even have to do too much\nYou can turn me on with just a touch, baby\n\nI look around and Sin City's cold and empty\nNo one's around to judge me\nI can't see clearly when you're gone\n\nI said, ooh, I'm blinded by the lights\nNo, I can't sleep until I feel your touch"
    },
    {
        title: "Future Nostalgia",
        artist: "Dua Lipa",
        color: [255, 100, 180],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e9/c5/a8/e9c5a8a0-d698-137b-2e85-cf3a8d9548f8/190295303372.jpg/600x600bb.jpg",
        songs: [
            { title: "Don't Start Now", artist: "Dua Lipa", plays: "2.4B plays", duration: "3:03", explicit: false },
            { title: "Levitating", artist: "Dua Lipa", plays: "2.1B plays", duration: "3:23", explicit: false },
            { title: "Physical", artist: "Dua Lipa", plays: "980M plays", duration: "3:13", explicit: false },
            { title: "Break My Heart", artist: "Dua Lipa", plays: "1.1B plays", duration: "3:41", explicit: false },
            { title: "Love Again", artist: "Dua Lipa", plays: "620M plays", duration: "4:18", explicit: false }
        ],
        lyrics: "If you don't wanna see me dancing with somebody\nIf you wanna believe that anything could stop me\n\nDon't show up, don't come out\nDon't start caring about me now\nWalk away, you know how\nDon't start caring about me now\n\nAren't you the guy who tried to\nHurt me with the word \"goodbye\"?\nThough it took some time to survive you\nI'm better on the other side"
    },
    {
        title: "Harry's House",
        artist: "Harry Styles",
        color: [240, 230, 190],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
        songs: [
            { title: "As It Was", artist: "Harry Styles", plays: "3.2B plays", duration: "2:47", explicit: false },
            { title: "Late Night Talking", artist: "Harry Styles", plays: "850M plays", duration: "2:57", explicit: false },
            { title: "Music for a Sushi Restaurant", artist: "Harry Styles", plays: "390M plays", duration: "3:14", explicit: false },
            { title: "Matilda", artist: "Harry Styles", plays: "310M plays", duration: "4:05", explicit: false },
            { title: "Satellite", artist: "Harry Styles", plays: "420M plays", duration: "3:37", explicit: false }
        ],
        lyrics: "Holdin' me back\nGravity's holdin' me back\nI want you to hold out the palm of your hand\nWhy don't we leave it at that?\nNothin' to say\nWhen everything gets in the way\nSeems you cannot be replaced\nAnd I'm the one who will stay, oh\n\nIn this world, it's just us\nYou know it's not the same as it was\nIn this world, it's just us\nYou know it's not the same as it was\nAs it was, as it was\nYou know it's not the same"
    },
    {
        title: "Short n' Sweet",
        artist: "Sabrina Carpenter",
        color: [180, 230, 255],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a1/1c/ca/a11ccab6-7d4c-e041-d028-998bcebeb709/24UMGIM61704.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Espresso", artist: "Sabrina Carpenter", plays: "820M plays", duration: "2:55", explicit: true },
            { title: "Please Please Please", artist: "Sabrina Carpenter", plays: "640M plays", duration: "3:06", explicit: true },
            { title: "Taste", artist: "Sabrina Carpenter", plays: "410M plays", duration: "2:37", explicit: true },
            { title: "Bed Chem", artist: "Sabrina Carpenter", plays: "280M plays", duration: "2:51", explicit: true },
            { title: "Sharpest Tool", artist: "Sabrina Carpenter", plays: "190M plays", duration: "3:38", explicit: false }
        ],
        lyrics: "Now he's thinkin' 'bout me every night, oh\nIs it that sweet? I guess so\nSay you can't sleep, baby, I know\nThat's that me, espresso\n\nWalked in and came upright\nFifty-five in a fifty-four\nI'm high on layout light\nAnd I know that you're wantin' more\n\nNow he's thinkin' 'bout me every night, oh\nIs it that sweet? I guess so\nSay you can't sleep, baby, I know\nThat's that me, espresso"
    },
    {
        title: "Hit Me Hard and Soft",
        artist: "Billie Eilish",
        color: [40, 60, 180],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "LUNCH", artist: "Billie Eilish", plays: "580M plays", duration: "3:00", explicit: true },
            { title: "CHIHIRO", artist: "Billie Eilish", plays: "490M plays", duration: "5:03", explicit: false },
            { title: "BIRDS OF A FEATHER", artist: "Billie Eilish", plays: "890M plays", duration: "3:30", explicit: false },
            { title: "WILDFLOWER", artist: "Billie Eilish", plays: "320M plays", duration: "4:21", explicit: false },
            { title: "L'AMOUR DE MA VIE", artist: "Billie Eilish", plays: "5:33", duration: "5:33", explicit: true }
        ],
        lyrics: "I want you to stay\n'Til I'm in the grave\n'Til I'm rot and decay, dead on the floor\nKeep you like a secret, but I wanna tell more\nAs long as I'm breathing, you're what I'm living for\n\nAnd I don't know what I'm crying for\nI don't think I could love you more\nIt might not be long, but baby, I\n\nI'll love you 'til the day that I die\n'Til the day that I die\n'Til the light leaves my eyes\n'Til the day that I die"
    }
];

const carousel = document.getElementById('carousel');
const totalCards = tracks.length;

// Layout State
let currentMode = 'coverflow';
document.body.classList.add('body-coverflow');

// Details Panel State
let lastActiveIndex = -1;
let lastActiveCardIndex = -1;
let lastCoverflowIndex = -1;
const detailsPanel = document.getElementById('detailsPanel');
let lyricsInterval = null;
let lyricsTimeout = null;
let lyricsScrollAnimFrame = null;

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

        // Reset active index states when switching layouts to force visual re-render on the same card
        lastActiveIndex = -1;
        lastActiveCardIndex = -1;
        lastCoverflowIndex = -1;

        // Clean up lyrics animations and intervals when changing modes
        if (lyricsInterval) {
            clearInterval(lyricsInterval);
            lyricsInterval = null;
        }
        if (lyricsTimeout) {
            clearTimeout(lyricsTimeout);
            lyricsTimeout = null;
        }
        if (lyricsScrollAnimFrame) {
            cancelAnimationFrame(lyricsScrollAnimFrame);
            lyricsScrollAnimFrame = null;
        }

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

// RGB to HSL conversion helper for dynamic color analysis
function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h * 360, s * 100, l * 100];
}

// Global cache to prevent re-extracting for same cover image
const extractedColorCache = {};

function extractVibrantColor(imgUrl, callback, fallbackColor) {
    if (extractedColorCache[imgUrl]) {
        callback(extractedColorCache[imgUrl]);
        return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
        try {
            const canvas = document.createElement('canvas');
            canvas.width = 30;
            canvas.height = 30;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, 30, 30);
            
            const imgData = ctx.getImageData(0, 0, 30, 30).data;
            const length = imgData.length;
            
            const vibrantColors = [];
            const mutedColors = [];
            
            for (let i = 0; i < length; i += 4) {
                const r = imgData[i];
                const g = imgData[i + 1];
                const b = imgData[i + 2];
                const a = imgData[i + 3];
                
                if (a < 200) continue;
                
                const [h, s, l] = rgbToHsl(r, g, b);
                
                if (s > 35 && l > 25 && l < 70) {
                    vibrantColors.push({ r, g, b, s, l, h });
                } else if (l > 15 && l < 80) {
                    mutedColors.push({ r, g, b, s, l, h });
                }
            }
            
            let finalColor;
            if (vibrantColors.length > 0) {
                const hueBuckets = Array(12).fill(0).map(() => []);
                vibrantColors.forEach(c => {
                    const bucketIdx = Math.floor(c.h / 30) % 12;
                    hueBuckets[bucketIdx].push(c);
                });
                
                let maxIdx = 0;
                let maxCount = 0;
                hueBuckets.forEach((bucket, idx) => {
                    if (bucket.length > maxCount) {
                        maxCount = bucket.length;
                        maxIdx = idx;
                    }
                });
                
                const dominantGroup = hueBuckets[maxIdx];
                let sumR = 0, sumG = 0, sumB = 0;
                dominantGroup.forEach(c => {
                    sumR += c.r;
                    sumG += c.g;
                    sumB += c.b;
                });
                finalColor = [
                    Math.round(sumR / dominantGroup.length),
                    Math.round(sumG / dominantGroup.length),
                    Math.round(sumB / dominantGroup.length)
                ];
            } else if (mutedColors.length > 0) {
                let sumR = 0, sumG = 0, sumB = 0;
                mutedColors.forEach(c => {
                    sumR += c.r;
                    sumG += c.g;
                    sumB += c.b;
                });
                finalColor = [
                    Math.round(sumR / mutedColors.length),
                    Math.round(sumG / mutedColors.length),
                    Math.round(sumB / mutedColors.length)
                ];
            } else {
                finalColor = [120, 120, 120];
            }
            
            extractedColorCache[imgUrl] = finalColor;
            callback(finalColor);
        } catch (err) {
            console.error("Canvas read failed:", err);
            callback(fallbackColor);
        }
    };
    
    img.onerror = () => {
        console.warn("Cover image failed to load via CORS, using fallback color");
        callback(fallbackColor);
    };
    img.src = imgUrl;
}
let currentGradLayer = 1;

function updateCoverflowBackground(rgbColor) {
    let [r, g, b] = rgbColor;
    
    // Relative luminance: Y = 0.2126*R + 0.7152*G + 0.0722*B
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    
    // Clamp/darken if it exceeds readability limits for white text / selectors
    if (luminance > 0.6) {
        const factor = 0.6 / luminance;
        r = Math.floor(r * factor);
        g = Math.floor(g * factor);
        b = Math.floor(b * factor);
    }
    
    const accentColor = `rgb(${r}, ${g}, ${b})`;
    // darkBase = accent RGB multiplied by ~0.12 (or clamp toward #121212 / rgb(18, 18, 18))
    const darkR = Math.max(18, Math.floor(r * 0.12));
    const darkG = Math.max(18, Math.floor(g * 0.12));
    const darkB = Math.max(18, Math.floor(b * 0.12));
    const darkBase = `rgb(${darkR}, ${darkG}, ${darkB})`;
    
    const nextGradLayer = currentGradLayer === 1 ? 2 : 1;
    const currentEl = document.getElementById(`gradLayer${currentGradLayer}`);
    const nextEl = document.getElementById(`gradLayer${nextGradLayer}`);
    
    if (currentEl && nextEl) {
        // Linear gradient: Top = accent, Bottom = near-black darkBase. Accent dominates top 30-40%, lower half is dark.
        nextEl.style.backgroundImage = `linear-gradient(to bottom, ${accentColor} 0%, ${accentColor} 30%, ${darkBase} 100%)`;
        nextEl.style.opacity = '1';
        currentEl.style.opacity = '0';
        currentGradLayer = nextGradLayer;
    }
    
    // Set body background to accentColor so Safari colors the address bar accentColor, matching the top of the gradient.
    document.body.style.backgroundColor = accentColor;
    document.documentElement.style.setProperty('--dynamic-bg', darkBase);
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

function smoothScrollTo(element, target, duration) {
    if (lyricsScrollAnimFrame) {
        cancelAnimationFrame(lyricsScrollAnimFrame);
    }
    const start = element.scrollTop;
    const change = target - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        if (elapsed < duration) {
            const t = elapsed / duration;
            // cubic ease-in-out curve for smoothest easing
            const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            element.scrollTop = start + change * ease;
            lyricsScrollAnimFrame = requestAnimationFrame(animateScroll);
        } else {
            element.scrollTop = target;
            lyricsScrollAnimFrame = null;
        }
    }
    lyricsScrollAnimFrame = requestAnimationFrame(animateScroll);
}

function updateDetailsPanel(index) {
    if (!detailsPanel) return;
    const track = tracks[index];
    if (!track) return;

    // Clear previous lyrics autoscrolling interval & timeout
    if (lyricsInterval) {
        clearInterval(lyricsInterval);
        lyricsInterval = null;
    }
    if (lyricsTimeout) {
        clearTimeout(lyricsTimeout);
        lyricsTimeout = null;
    }
    if (lyricsScrollAnimFrame) {
        cancelAnimationFrame(lyricsScrollAnimFrame);
        lyricsScrollAnimFrame = null;
    }

    // Update dynamic ambient blurred background (frosted cover art)
    const blurredBg = document.getElementById('ambientBgBlurred');
    if (blurredBg) {
        blurredBg.style.backgroundImage = `url('${track.cover}')`;
    }

    const eqColor = `rgb(${track.color[0]}, ${track.color[1]}, ${track.color[2]})`;

    // Process lyrics: split by line breaks to allow line-by-line active highlighting
    const lines = track.lyrics.split('\n');
    let lyricsHtml = `<div class="lyrics-scroll-container">`;
    lines.forEach((line, lineIdx) => {
        // Render empty lines as spaces to preserve rhythm spacing
        const displayLine = line.trim() === '' ? '&nbsp;' : line;
        lyricsHtml += `<div class="lyric-line" data-line-index="${lineIdx}">${displayLine}</div>`;
    });
    lyricsHtml += `</div>`;

    let html = `
        <div class="details-content fade-out" id="detailsContent">
            <div class="song-list-section">
                <div class="section-label">Tracks</div>
                <div class="song-list">
    `;

    track.songs.forEach((song, sIndex) => {
        const isFirst = sIndex === 0;
        const explicitBadge = song.explicit ? `<span class="explicit-badge">E</span>` : '';
        const equalizerHtml = isFirst ? `
            <div class="equalizer" style="--equalizer-color: ${eqColor}">
                <div class="equalizer-bar"></div>
                <div class="equalizer-bar"></div>
                <div class="equalizer-bar"></div>
                <div class="equalizer-bar"></div>
            </div>
        ` : '';

        html += `
            <div class="track-item">
                <img src="${track.cover}" class="track-cover" alt="${song.title} thumbnail">
                <div class="track-info">
                    <h4 class="track-title">${song.title}</h4>
                    <div class="track-meta-row">
                        ${explicitBadge}
                        <p class="track-metadata">${song.artist} • ${song.plays} • ${track.title}</p>
                    </div>
                </div>
                ${equalizerHtml}
                <span class="track-duration">${song.duration}</span>
            </div>
        `;
    });

    html += `
                </div>
            </div>
            <div class="lyrics-section">
                <div class="section-label">Lyrics</div>
                <div class="lyrics-container" id="lyricsContainer">
                    ${lyricsHtml}
                </div>
            </div>
        </div>
    `;

    detailsPanel.innerHTML = html;

    // Force lyrics scroll reset to 0 to override browser scroll restoration optimizations
    const lyricsContainer = document.getElementById('lyricsContainer');
    if (lyricsContainer) {
        lyricsContainer.scrollTop = 0;
    }

    // Trigger smooth fade in on next layout frame
    requestAnimationFrame(() => {
        const content = document.getElementById('detailsContent');
        if (content) {
            content.classList.remove('fade-out');
        }
    });

    // Start live lyrics highlighting and center-aligned autoscrolling
    if (lyricsContainer && lines.length > 0) {
        let activeLineIdx = 0;
        const totalLines = lines.length;

        const highlightLine = (idx) => {
            const allLines = lyricsContainer.querySelectorAll('.lyric-line');
            allLines.forEach(l => l.classList.remove('active'));

            const activeLineEl = lyricsContainer.querySelector(`.lyric-line[data-line-index="${idx}"]`);
            if (activeLineEl) {
                activeLineEl.classList.add('active');

                // Align the active lyric line to the 2nd line position dynamically
                const secondLineEl = lyricsContainer.querySelector('.lyric-line[data-line-index="1"]');
                const scrollOffset = secondLineEl ? secondLineEl.offsetTop : 45;
                const elemTop = activeLineEl.offsetTop;
                const scrollTarget = elemTop - scrollOffset;

                smoothScrollTo(lyricsContainer, Math.max(0, scrollTarget), 800);
            }
        };

        // Render buffer: wait for DOM dimensions layout before calculating offsetTop positions
        lyricsTimeout = setTimeout(() => {
            highlightLine(0);
        }, 150);

        // Auto-play interval scrolling: cycle through lines every 2.5 seconds for a more active experience
        lyricsInterval = setInterval(() => {
            activeLineIdx = (activeLineIdx + 1) % totalLines;
            highlightLine(activeLineIdx);
        }, 2500);
    }
}

function updateActiveCardMarquees(activeIndex) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, idx) => {
        const titleEl = card.querySelector('.title');
        const artistEl = card.querySelector('.artist');
        
        // Reset marquee on all cards
        if (titleEl) {
            titleEl.classList.remove('animate-marquee');
            titleEl.style.removeProperty('--scroll-dist');
        }
        if (artistEl) {
            artistEl.classList.remove('animate-marquee');
            artistEl.style.removeProperty('--scroll-dist');
        }
        
        // If this is the newly active card, calculate scrollWidth and clientWidth to trigger marquee
        if (idx === activeIndex) {
            requestAnimationFrame(() => {
                if (titleEl) {
                    const diff = titleEl.scrollWidth - titleEl.clientWidth;
                    if (diff > 0) {
                        titleEl.style.setProperty('--scroll-dist', `-${diff + 12}px`);
                        titleEl.classList.add('animate-marquee');
                    }
                }
                if (artistEl) {
                    const diff = artistEl.scrollWidth - artistEl.clientWidth;
                    if (diff > 0) {
                        artistEl.style.setProperty('--scroll-dist', `-${diff + 12}px`);
                        artistEl.classList.add('animate-marquee');
                    }
                }
            });
        }
    });
}

function updateCarousel() {
    // Lerp current towards target (0.08 is the smoothness factor)
    currentRotation = lerp(currentRotation, targetRotation, 0.08);

    // Calculate active index
    let normalizedRotation = currentRotation % 360;
    if (normalizedRotation < 0) normalizedRotation += 360;
    const activeIndex = Math.round(normalizedRotation / rotationAngle) % totalCards;
    const activeIndexFloat = currentRotation / rotationAngle;

    // Trigger card text marquee animations when landing on a card
    if (activeIndex !== lastActiveCardIndex) {
        lastActiveCardIndex = activeIndex;
        updateActiveCardMarquees(activeIndex);
    }

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

        // Trigger dynamic color extraction and background updates on active coverflow item changes
        const activeCard = cards[activeIndex];
        if (activeIndex !== lastCoverflowIndex && activeCard) {
            lastCoverflowIndex = activeIndex;
            const track = tracks[activeIndex];
            extractVibrantColor(track.cover, (color) => {
                updateCoverflowBackground(color);
            }, track.color);
        }

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
                translateZ = 200;
                translateY = -15; // Lifted slightly for alignment with details panel
                translateX = 0;
                scale = 1.40;
                opacity = 1;
                filter = 'brightness(1) saturate(1.2)';
                fogOpacity = 0;
            } else if (offset > 0) {
                // Receding cards (tunnel going deeper)
                translateZ = 200 - offset * 250;
                translateY = -15 - offset * 25; // Stacked upwards slightly
                translateX = 0;
                scale = Math.max(0.4, 1.40 - offset * 0.15);
                opacity = 1;
                filter = `brightness(${Math.max(0.3, 0.85 - (offset - 1) * 0.2)})`;
                fogOpacity = Math.min(1.0, 0.2 + offset * 0.25);
            } else {
                // offset < 0: Cards that have already been scrolled past
                // They fly forward past the camera and fade out
                translateZ = 200 - offset * 350; // closer/past camera
                translateY = -15 - offset * 120; // flies down
                translateX = offset * 220; // flies left
                rotateY = offset * 45; // rotates slightly
                scale = 1.40 - offset * 0.20;
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

        // Only update details panel when active index changes
        if (activeIndex !== lastActiveIndex) {
            lastActiveIndex = activeIndex;
            updateDetailsPanel(activeIndex);
        }
    }

    requestAnimationFrame(updateCarousel);
}

// Start the animation loop
updateCarousel();
