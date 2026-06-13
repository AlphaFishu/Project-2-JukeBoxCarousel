const tracks = [
    {
        title: "Enemy (From Arcane: League of Legends) - Single",
        artist: "Imagine Dragons & JID",
        color: [110, 30, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/76/77/08/767708a7-ec93-3b3d-3bac-40086e5a265c/21UM1IM29634.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Enemy (with J.I.D)", artist: "Imagine Dragons & JID", plays: "1.2B plays", duration: "2:53", explicit: false },
            { title: "Enemy (Opening Title Version)", artist: "Imagine Dragons, JID & League of Legends", plays: "450M plays", duration: "3:06", explicit: false },
            { title: "Enemy (Solo Version)", artist: "Imagine Dragons", plays: "185M plays", duration: "2:53", explicit: false }
        ],
        lyrics: "I wake up to the sounds of the silence that allows\nFor my mind to run around, with my ear up to the ground\nI'm searching to behold the stories that are told\nWhen my back is to the world that was smiling when I turned\n\nTell you you're the greatest\nBut once you turn they hate us\n\nOh, the misery\nEverybody wants to be my enemy\nSpare the sympathy\nEverybody wants to be my enemy-y-y-y\nLook out for yourself\nMy enemy-y-y-y\nLook out for yourself\nBut I'm ready"
    },
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
        title: "GUTS",
        artist: "Olivia Rodrigo",
        color: [120, 60, 180],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9b/d8/9c/9bd89c9e-b44d-ad25-1516-b9b30f64fd2a/23UMGIM71510.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "vampire", artist: "Olivia Rodrigo", plays: "850M plays", duration: "3:39", explicit: true },
            { title: "bad idea right?", artist: "Olivia Rodrigo", plays: "420M plays", duration: "3:04", explicit: true },
            { title: "get him back!", artist: "Olivia Rodrigo", plays: "290M plays", duration: "3:30", explicit: true },
            { title: "all-american bitch", artist: "Olivia Rodrigo", plays: "180M plays", duration: "2:45", explicit: true },
            { title: "logical", artist: "Olivia Rodrigo", plays: "120M plays", duration: "3:51", explicit: false }
        ],
        lyrics: "Hate to give you satisfaction but you sunk your teeth in babe\nOh, bloodsucker, fame fucker, bleeding me dry like a goddamn vampire\n\nI went to bed in a good mood\nAnd I woke up in a bad one\nI went to bed in a good mood\nAnd I woke up in a bad one"
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
        title: "Blinding Lights - Single",
        artist: "The Weeknd",
        color: [220, 40, 30],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/6e/bf/a66ebf79-5008-8948-b352-a790fc87446b/19UM1IM04638.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Blinding Lights", artist: "The Weeknd", plays: "4.1B plays", duration: "3:20", explicit: false },
            { title: "Save Your Tears", artist: "The Weeknd", plays: "1.9B plays", duration: "3:35", explicit: false },
            { title: "In Your Eyes", artist: "The Weeknd", plays: "720M plays", duration: "3:57", explicit: false },
            { title: "Out of Time", artist: "The Weeknd", plays: "410M plays", duration: "3:34", explicit: false },
            { title: "Sacrifice", artist: "The Weeknd", plays: "320M plays", duration: "3:08", explicit: true }
        ],
        lyrics: "Yeah\nI've been tryna call\nI've been on my own for long enough\nMaybe you can show me how to love, maybe\nI'm going through withdrawals\nYou don't even have to do too much\nYou can turn me on with just a touch, baby\n\nI said, ooh, I'm blinded by the lights\nNo, I can't sleep until I feel your touch"
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
        title: "SOS",
        artist: "SZA",
        color: [30, 80, 160],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/bd/3b/a9/bd3ba9fb-9609-144f-bcfe-ead67b5f6ab3/196589564931.jpg/600x600bb.jpg",
        songs: [
            { title: "Kill Bill", artist: "SZA", plays: "1.4B plays", duration: "2:33", explicit: true },
            { title: "Snooze", artist: "SZA", plays: "820M plays", duration: "3:21", explicit: true },
            { title: "Good Days", artist: "SZA", plays: "950M plays", duration: "4:39", explicit: false },
            { title: "Shirt", artist: "SZA", plays: "340M plays", duration: "3:01", explicit: true },
            { title: "Low", artist: "SZA", plays: "420M plays", duration: "3:01", explicit: true }
        ],
        lyrics: "I might kill my ex, not the best idea\nHis new girlfriend's next, how'd I get here?\nI might kill my ex, I still love him though\nRather be in jail than alone\n\nI get the sense that it's a lost cause\nI get the sense that you might really love her\nI get the sense that you might really love her"
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
        title: "Lover",
        artist: "Taylor Swift",
        color: [240, 160, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Cruel Summer", artist: "Taylor Swift", plays: "2.1B plays", duration: "2:58", explicit: false },
            { title: "Lover", artist: "Taylor Swift", plays: "1.2B plays", duration: "3:41", explicit: false },
            { title: "The Archer", artist: "Taylor Swift", plays: "290M plays", duration: "3:31", explicit: false },
            { title: "You Need To Calm Down", artist: "Taylor Swift", plays: "850M plays", duration: "2:51", explicit: false },
            { title: "ME! (feat. Brendon Urie)", artist: "Taylor Swift", plays: "780M plays", duration: "3:13", explicit: false }
        ],
        lyrics: "We could leave the Christmas lights up 'til January\nAnd this is our place, we make the rules\nAnd there's a dazzling haze, a mysterious way about you dear\nHave I known you 20 seconds or 20 years?\n\nCan I go where you go?\nCan we always be this close forever and ever?\nAnd ah, take me out, and take me home\nYou're my, my, my, my... lover"
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
        title: "Starboy",
        artist: "The Weeknd",
        color: [220, 20, 50],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Starboy (feat. Daft Punk)", artist: "The Weeknd", plays: "3.2B plays", duration: "3:50", explicit: true },
            { title: "I Feel It Coming (feat. Daft Punk)", artist: "The Weeknd", plays: "1.9B plays", duration: "4:29", explicit: false },
            { title: "Party Monster", artist: "The Weeknd", plays: "650M plays", duration: "4:09", explicit: true },
            { title: "Reminder", artist: "The Weeknd", plays: "820M plays", duration: "3:33", explicit: true },
            { title: "Die For You", artist: "The Weeknd", plays: "2.1B plays", duration: "4:20", explicit: false }
        ],
        lyrics: "I'm tryna put you in the worst mood, ah\nP1 cleaner than your church shoes, ah\nMilli point two just to hurt you, ah\nHouse so empty, need a centerpiece\n\nLook what you've done\nI'm a motherfuckin' starboy\nLook what you've done\nI'm a motherfuckin' starboy"
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
        title: "Endless Summer Vacation",
        artist: "Miley Cyrus",
        color: [180, 210, 220],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8c/67/ff/8c67ff91-31c3-3fef-1884-ce3ec89f3af4/196589946874.jpg/600x600bb.jpg",
        songs: [
            { title: "Flowers", artist: "Miley Cyrus", plays: "1.8B plays", duration: "3:20", explicit: false },
            { title: "River", artist: "Miley Cyrus", plays: "120M plays", duration: "2:42", explicit: false },
            { title: "Jaded", artist: "Miley Cyrus", plays: "180M plays", duration: "3:03", explicit: false },
            { title: "You", artist: "Miley Cyrus", plays: "65M plays", duration: "3:07", explicit: false },
            { title: "Handstand", artist: "Miley Cyrus", plays: "45M plays", duration: "3:25", explicit: true }
        ],
        lyrics: "We were good, we were gold, kinda dream that can't be sold\nWe were right 'til we weren't, built a home and watched it burn\n\nI can buy myself flowers\nWrite my name in the sand\nTalk to myself for hours\nSay things you don't understand\nI can take myself dancing\nAnd I can hold my own hand\nYeah, I can love me better than you can"
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
        title: "Not Like Us - Single",
        artist: "Kendrick Lamar",
        color: [210, 180, 40],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/31/3a/3f/313a3fbc-bb8f-80c7-b5a2-e226869a38cd/24UMGIM51924.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Not Like Us", artist: "Kendrick Lamar", plays: "850M plays", duration: "4:34", explicit: true },
            { title: "Euphoria", artist: "Kendrick Lamar", plays: "320M plays", duration: "6:24", explicit: true },
            { title: "Meet the Grahams", artist: "Kendrick Lamar", plays: "150M plays", duration: "6:13", explicit: true },
            { title: "6:16 in LA", artist: "Kendrick Lamar", plays: "95M plays", duration: "3:40", explicit: true }
        ],
        lyrics: "Psst, I see dead people\n\nMustard on the beat, hoe\n\nDe opposition, dey not like us\nDey not like us, dey not like us\nDey not like us, dey not like us\nDey not like us\n\nStep this way, step that way\nStep this way, step that way"
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
        title: "TEXAS HOLD 'EM - Single",
        artist: "Beyoncé",
        color: [150, 110, 80],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/c2/30/40/c2304010-949a-ee6b-cb7f-d526f5e91eff/196871862509.jpg/600x600bb.jpg",
        songs: [
            { title: "TEXAS HOLD 'EM", artist: "Beyoncé", plays: "480M plays", duration: "3:53", explicit: true },
            { title: "TEXAS HOLD 'EM (Acapella)", artist: "Beyoncé", plays: "45M plays", duration: "3:48", explicit: false },
            { title: "TEXAS HOLD 'EM (Instrumental)", artist: "Beyoncé", plays: "25M plays", duration: "3:55", explicit: false }
        ],
        lyrics: "This ain't Texas (woo), ain't no hold 'em (hey)\nSo lay your cards down, down, down, down\nSo lay your cards down, down, down, down\n\nHard liquor, quick clip, catch a vibe\nLet's get it, get it"
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
        title: "THINK LATER",
        artist: "Tate McRae",
        color: [60, 60, 60],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/21/4a/c2/214ac20c-a66c-84a1-e357-f7e60b1932ca/196871542661.jpg/600x600bb.jpg",
        songs: [
            { title: "greedy", artist: "Tate McRae", plays: "920M plays", duration: "2:11", explicit: true },
            { title: "exes", artist: "Tate McRae", plays: "280M plays", duration: "2:39", explicit: true },
            { title: "run for the hills", artist: "Tate McRae", plays: "150M plays", duration: "2:23", explicit: true },
            { title: "hurt my feelings", artist: "Tate McRae", plays: "95M plays", duration: "2:02", explicit: false },
            { title: "grave", artist: "Tate McRae", plays: "45M plays", duration: "3:14", explicit: false }
        ],
        lyrics: "He said, \"I would like to get to know you\"\nI said, \"Take a number, baby, write your name\"\nI'm so greedy, baby, I'm so greedy\n\nI'm so greedy for love\nI'm so greedy for love\nI'm so greedy for love"
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
        title: "Unheard - EP",
        artist: "Hozier",
        color: [110, 90, 60],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/98/80/95/98809581-4a0e-68a6-04de-b72492e35939/196871908191.jpg/600x600bb.jpg",
        songs: [
            { title: "Too Sweet", artist: "Hozier", plays: "640M plays", duration: "4:11", explicit: false },
            { title: "Empire Now", artist: "Hozier", plays: "85M plays", duration: "3:41", explicit: false },
            { title: "Fare Well", artist: "Hozier", plays: "60M plays", duration: "3:43", explicit: false },
            { title: "Wildflower and Barley (feat. Allison Russell)", artist: "Hozier", plays: "95M plays", duration: "3:42", explicit: false }
        ],
        lyrics: "I take my whiskey neat, my coffee black and my bed at three\nYou're too sweet for me, you're too sweet for me\n\nI aim low, I aim true, and the world is blue\nI take my whiskey neat, my coffee black and my bed at three\nYou're too sweet for me, you're too sweet for me"
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
        title: "Die With A Smile - Single",
        artist: "Lady Gaga & Bruno Mars",
        color: [50, 120, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/11/ae/f2/11aef294-f57c-bab9-c9fc-529162984e62/24UMGIM85348.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Die With A Smile", artist: "Lady Gaga & Bruno Mars", plays: "820M plays", duration: "4:11", explicit: false },
            { title: "Die With A Smile (Live)", artist: "Lady Gaga & Bruno Mars", plays: "45M plays", duration: "4:20", explicit: false },
            { title: "Die With A Smile (Acoustic)", artist: "Lady Gaga & Bruno Mars", plays: "95M plays", duration: "4:11", explicit: false }
        ],
        lyrics: "If the world was ending, I'd wanna be next to you\nIf the party was over and our time on Earth was through\nI'd wanna hold you just for a while and die with a smile\n\nIf the world was ending, I'd wanna be next to you\nIf the party was over and our time on Earth was through\nI'd wanna hold you just for a while and die with a smile"
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
    },
    {
        title: "Abbey Road",
        artist: "The Beatles",
        color: [180, 160, 120],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/53/43/485343e3-dd6a-0034-faec-f4b6403f8108/13UMGIM63890.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Come Together (2019 Mix)", artist: "The Beatles", plays: "0.6B plays", duration: "4:20", explicit: false },
            { title: "Something (2019 Mix)", artist: "The Beatles", plays: "652M plays", duration: "3:02", explicit: false },
            { title: "Maxwell's Silver Hammer (2019 Mix)", artist: "The Beatles", plays: "373M plays", duration: "3:28", explicit: false },
            { title: "Oh! Darling (2019 Mix)", artist: "The Beatles", plays: "243M plays", duration: "3:27", explicit: false },
            { title: "Octopus's Garden (2019 Mix)", artist: "The Beatles", plays: "366M plays", duration: "2:51", explicit: false }
        ],
        lyrics: "Abbey Road\nThe Beatles\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Rumours",
        artist: "Fleetwood Mac",
        color: [200, 170, 130],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/600x600bb.jpg",
        songs: [
            { title: "Second Hand News", artist: "Fleetwood Mac", plays: "1.3B plays", duration: "2:56", explicit: false },
            { title: "Dreams", artist: "Fleetwood Mac", plays: "753M plays", duration: "4:18", explicit: false },
            { title: "Never Going Back Again", artist: "Fleetwood Mac", plays: "90M plays", duration: "2:14", explicit: false },
            { title: "Don't Stop", artist: "Fleetwood Mac", plays: "300M plays", duration: "3:13", explicit: false },
            { title: "Go Your Own Way", artist: "Fleetwood Mac", plays: "753M plays", duration: "3:44", explicit: false }
        ],
        lyrics: "Rumours\nFleetwood Mac\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Back in Black",
        artist: "AC/DC",
        color: [30, 30, 30],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1e/14/58/1e145814-281a-58e0-3ab1-145f5d1af421/886443673441.jpg/600x600bb.jpg",
        songs: [
            { title: "Hells Bells", artist: "AC/DC", plays: "1.2B plays", duration: "5:13", explicit: false },
            { title: "Shoot to Thrill", artist: "AC/DC", plays: "508M plays", duration: "5:18", explicit: false },
            { title: "What Do You Do for Money Honey", artist: "AC/DC", plays: "588M plays", duration: "3:36", explicit: false },
            { title: "Givin the Dog a Bone", artist: "AC/DC", plays: "751M plays", duration: "3:32", explicit: false },
            { title: "Let Me Put My Love Into You", artist: "AC/DC", plays: "208M plays", duration: "4:16", explicit: false }
        ],
        lyrics: "Back in Black\nAC/DC\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        color: [60, 50, 140],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3e/17/ec/3e17ec6d-f980-c64f-19e0-a6fd8bbf0c10/886445635850.jpg/600x600bb.jpg",
        songs: [
            { title: "In the Flesh?", artist: "Pink Floyd", plays: "1.3B plays", duration: "3:19", explicit: false },
            { title: "The Thin Ice", artist: "Pink Floyd", plays: "502M plays", duration: "2:27", explicit: false },
            { title: "Another Brick In the Wall, Pt. 1", artist: "Pink Floyd", plays: "737M plays", duration: "3:11", explicit: false },
            { title: "The Happiest Days of Our Lives", artist: "Pink Floyd", plays: "231M plays", duration: "1:51", explicit: false },
            { title: "Another Brick In the Wall, Pt. 2", artist: "Pink Floyd", plays: "524M plays", duration: "3:59", explicit: false }
        ],
        lyrics: "The Dark Side of the Moon\nPink Floyd\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Random Access Memories",
        artist: "Daft Punk",
        color: [220, 190, 90],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e8/43/5f/e8435ffa-b6b9-b171-40ab-4ff3959ab661/886443919266.jpg/600x600bb.jpg",
        songs: [
            { title: "Give Life Back to Music", artist: "Daft Punk", plays: "1.4B plays", duration: "4:34", explicit: false },
            { title: "The Game of Love", artist: "Daft Punk", plays: "509M plays", duration: "5:22", explicit: false },
            { title: "Giorgio by Moroder", artist: "Daft Punk", plays: "282M plays", duration: "9:05", explicit: false },
            { title: "Within", artist: "Daft Punk", plays: "744M plays", duration: "3:49", explicit: false },
            { title: "Instant Crush", artist: "Daft Punk & Julian Casablancas", plays: "661M plays", duration: "5:38", explicit: false }
        ],
        lyrics: "Random Access Memories\nDaft Punk\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Divide",
        artist: "Ed Sheeran",
        color: [70, 150, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/600x600bb.jpg",
        songs: [
            { title: "Eraser", artist: "Ed Sheeran", plays: "1.4B plays", duration: "3:48", explicit: false },
            { title: "Castle on the Hill", artist: "Ed Sheeran", plays: "350M plays", duration: "4:21", explicit: false },
            { title: "Dive", artist: "Ed Sheeran", plays: "445M plays", duration: "3:58", explicit: false },
            { title: "Shape of You", artist: "Ed Sheeran", plays: "95M plays", duration: "3:54", explicit: false },
            { title: "Perfect", artist: "Ed Sheeran", plays: "245M plays", duration: "4:23", explicit: false }
        ],
        lyrics: "Divide\nEd Sheeran\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "21",
        artist: "Adele",
        color: [80, 80, 90],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/ca/25/ebca2596-cd1e-b295-91a3-771c868d0a79/191404113868.png/600x600bb.jpg",
        songs: [
            { title: "Rolling in the Deep", artist: "Adele", plays: "1.8B plays", duration: "3:48", explicit: false },
            { title: "Rumour Has It", artist: "Adele", plays: "593M plays", duration: "3:43", explicit: false },
            { title: "Turning Tables", artist: "Adele", plays: "758M plays", duration: "4:10", explicit: false },
            { title: "Don't You Remember", artist: "Adele", plays: "209M plays", duration: "4:03", explicit: false },
            { title: "Set Fire to the Rain", artist: "Adele", plays: "419M plays", duration: "4:03", explicit: false }
        ],
        lyrics: "21\nAdele\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "thank u, next",
        artist: "Ariana Grande",
        color: [190, 170, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/69/07/bb6907de-8ad4-970b-3311-121320e1bf9c/19UMGIM03691.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "imagine", artist: "Ariana Grande", plays: "1.9B plays", duration: "3:32", explicit: false },
            { title: "needy", artist: "Ariana Grande", plays: "501M plays", duration: "2:52", explicit: false },
            { title: "NASA", artist: "Ariana Grande", plays: "84M plays", duration: "3:02", explicit: false },
            { title: "bloodline", artist: "Ariana Grande", plays: "293M plays", duration: "3:37", explicit: false },
            { title: "fake smile", artist: "Ariana Grande", plays: "617M plays", duration: "3:29", explicit: false }
        ],
        lyrics: "thank u, next\nAriana Grande\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Take Care",
        artist: "Drake",
        color: [120, 100, 70],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d2/53/62/d2536245-b94c-b3fd-7168-9512f655f6d4/00602527899091.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Over My Dead Body", artist: "Drake", plays: "1.9B plays", duration: "4:33", explicit: false },
            { title: "Shot for Me", artist: "Drake", plays: "722M plays", duration: "3:45", explicit: false },
            { title: "Headlines", artist: "Drake", plays: "294M plays", duration: "3:56", explicit: false },
            { title: "Crew Love (feat. The Weeknd)", artist: "Drake", plays: "544M plays", duration: "3:29", explicit: false },
            { title: "Take Care (feat. Rihanna)", artist: "Drake", plays: "466M plays", duration: "4:37", explicit: false }
        ],
        lyrics: "Take Care\nDrake\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Born to Die",
        artist: "Lana Del Rey",
        color: [150, 170, 190],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/59/10/66/591066ea-3c85-3dfe-ef82-ffdbbcdfc8b9/12UMGIM00033.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Born To Die", artist: "Lana Del Rey", plays: "1.0B plays", duration: "4:46", explicit: false },
            { title: "Off To The Races", artist: "Lana Del Rey", plays: "620M plays", duration: "5:00", explicit: false },
            { title: "Blue Jeans", artist: "Lana Del Rey", plays: "154M plays", duration: "3:31", explicit: false },
            { title: "Video Games", artist: "Lana Del Rey", plays: "198M plays", duration: "4:42", explicit: false },
            { title: "Diet Mountain Dew", artist: "Lana Del Rey", plays: "370M plays", duration: "3:43", explicit: false }
        ],
        lyrics: "Born to Die\nLana Del Rey\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "AM",
        artist: "Arctic Monkeys",
        color: [25, 25, 35],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/69/9c/b5/699cb5d6-115c-ff73-9d26-e57ea4350d72/887828031795.png/600x600bb.jpg",
        songs: [
            { title: "Do I Wanna Know?", artist: "Arctic Monkeys", plays: "1.1B plays", duration: "4:32", explicit: false },
            { title: "R U Mine?", artist: "Arctic Monkeys", plays: "609M plays", duration: "3:22", explicit: false },
            { title: "One for the Road", artist: "Arctic Monkeys", plays: "466M plays", duration: "3:26", explicit: false },
            { title: "Arabella", artist: "Arctic Monkeys", plays: "748M plays", duration: "3:27", explicit: false },
            { title: "I Want It All", artist: "Arctic Monkeys", plays: "366M plays", duration: "3:04", explicit: false }
        ],
        lyrics: "AM\nArctic Monkeys\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Currents",
        artist: "Tame Impala",
        color: [90, 140, 220],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/64/48/5c/64485cc9-968c-68cc-764e-9a7c71733def/00602567155454.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "List of People (To Try and Forget About)", artist: "Tame Impala", plays: "0.7B plays", duration: "4:40", explicit: false },
            { title: "Powerlines", artist: "Tame Impala", plays: "187M plays", duration: "4:19", explicit: false },
            { title: "Taxi’s Here", artist: "Tame Impala", plays: "285M plays", duration: "4:48", explicit: false },
            { title: "Reality in Motion (Gum Remix)", artist: "Tame Impala", plays: "698M plays", duration: "5:04", explicit: false },
            { title: "Let it Happen (Soulwax Remix)", artist: "Tame Impala", plays: "449M plays", duration: "9:18", explicit: false }
        ],
        lyrics: "Currents\nTame Impala\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Planet Her",
        artist: "Doja Cat",
        color: [230, 140, 190],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/14/f3/28/14f32832-b9d9-1ba1-e20a-18c2ff8b6a80/886449410873.jpg/600x600bb.jpg",
        songs: [
            { title: "Woman", artist: "Doja Cat", plays: "1.9B plays", duration: "2:53", explicit: false },
            { title: "Naked", artist: "Doja Cat", plays: "245M plays", duration: "3:44", explicit: false },
            { title: "Payday (feat. Young Thug)", artist: "Doja Cat", plays: "743M plays", duration: "3:33", explicit: false },
            { title: "Get Into It (Yuh)", artist: "Doja Cat", plays: "322M plays", duration: "2:18", explicit: false },
            { title: "Need To Know", artist: "Doja Cat", plays: "609M plays", duration: "3:31", explicit: false }
        ],
        lyrics: "Planet Her\nDoja Cat\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Map of the Soul: 7",
        artist: "BTS",
        color: [130, 130, 150],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/bd/68/9b/bd689bf2-ef25-4973-7ecd-7eb4965019c5/195081034713_Cover.jpg/600x600bb.jpg",
        songs: [
            { title: "Intro : Persona", artist: "BTS", plays: "0.7B plays", duration: "2:51", explicit: false },
            { title: "Boy With Luv (feat. Halsey)", artist: "BTS", plays: "175M plays", duration: "3:50", explicit: false },
            { title: "Make It Right", artist: "BTS", plays: "127M plays", duration: "3:46", explicit: false },
            { title: "Jamais Vu", artist: "BTS", plays: "228M plays", duration: "3:47", explicit: false },
            { title: "Dionysus", artist: "BTS", plays: "301M plays", duration: "4:09", explicit: false }
        ],
        lyrics: "Map of the Soul: 7\nBTS\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "The Eminem Show",
        artist: "Eminem",
        color: [140, 40, 40],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/dd/5c/e6/dd5ce621-f7d2-f767-7a08-e7a7eaa7870b/00602537526994.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Curtains Up (Skit)", artist: "Eminem", plays: "1.2B plays", duration: "0:30", explicit: false },
            { title: "White America", artist: "Eminem", plays: "458M plays", duration: "5:24", explicit: false },
            { title: "Business", artist: "Eminem", plays: "479M plays", duration: "4:12", explicit: false },
            { title: "Cleanin' Out My Closet", artist: "Eminem", plays: "114M plays", duration: "4:58", explicit: false },
            { title: "Square Dance", artist: "Eminem", plays: "384M plays", duration: "5:24", explicit: false }
        ],
        lyrics: "The Eminem Show\nEminem\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Viva la Vida",
        artist: "Coldplay",
        color: [180, 60, 60],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/52/aa/85/52aa851f-15b7-6322-f91f-df84b15b7b19/190295978044.jpg/600x600bb.jpg",
        songs: [
            { title: "Life in Technicolor", artist: "Coldplay", plays: "1.4B plays", duration: "2:29", explicit: false },
            { title: "Cemeteries of London", artist: "Coldplay", plays: "263M plays", duration: "3:21", explicit: false },
            { title: "Lost!", artist: "Coldplay", plays: "732M plays", duration: "3:55", explicit: false },
            { title: "42", artist: "Coldplay", plays: "498M plays", duration: "3:57", explicit: false },
            { title: "Lovers in Japan / Reign of Love", artist: "Coldplay", plays: "322M plays", duration: "6:51", explicit: false }
        ],
        lyrics: "Viva la Vida\nColdplay\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Hybrid Theory",
        artist: "Linkin Park",
        color: [170, 130, 60],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/53/a7/7f/53a77fab-c54c-a57b-8130-248fc12d0c80/093624948995.jpg/600x600bb.jpg",
        songs: [
            { title: "Papercut", artist: "LINKIN PARK", plays: "1.4B plays", duration: "3:04", explicit: false },
            { title: "One Step Closer", artist: "LINKIN PARK", plays: "118M plays", duration: "2:36", explicit: false },
            { title: "With You", artist: "LINKIN PARK", plays: "527M plays", duration: "3:23", explicit: false },
            { title: "Points of Authority", artist: "LINKIN PARK", plays: "418M plays", duration: "3:20", explicit: false },
            { title: "Crawling", artist: "LINKIN PARK", plays: "533M plays", duration: "3:29", explicit: false }
        ],
        lyrics: "Hybrid Theory\nLinkin Park\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "IGOR",
        artist: "Tyler, The Creator",
        color: [230, 150, 170],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6f/e3/09/6fe30938-89fb-e4ae-d67a-648746c26db1/196871668248.jpg/600x600bb.jpg",
        songs: [
            { title: "Intro", artist: "Tyla & Kelvin Momo", plays: "1.6B plays", duration: "0:41", explicit: false },
            { title: "Safer", artist: "Tyla", plays: "467M plays", duration: "2:39", explicit: false },
            { title: "Water", artist: "Tyla", plays: "71M plays", duration: "3:20", explicit: false },
            { title: "Truth or Dare", artist: "Tyla", plays: "174M plays", duration: "3:10", explicit: false },
            { title: "No.1 (feat. Tems)", artist: "Tyla", plays: "84M plays", duration: "2:27", explicit: false }
        ],
        lyrics: "IGOR\nTyler, The Creator\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Whenever You Need Somebody",
        artist: "Rick Astley",
        color: [200, 60, 60],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b3/21/d3/b321d3e4-edfe-124b-d0cd-a64ad1df3290/4050538793840.jpg/600x600bb.jpg",
        songs: [
            { title: "Never Gonna Give You Up (2022 Remaster)", artist: "Rick Astley", plays: "0.7B plays", duration: "3:34", explicit: false },
            { title: "Whenever You Need Somebody (2022 Remaster)", artist: "Rick Astley", plays: "189M plays", duration: "3:53", explicit: false },
            { title: "Together Forever (2022 Remaster)", artist: "Rick Astley", plays: "516M plays", duration: "3:26", explicit: false },
            { title: "It Would Take a Strong Strong Man (2022 Remaster)", artist: "Rick Astley", plays: "345M plays", duration: "3:40", explicit: false },
            { title: "The Love Has Gone (2022 Remaster)", artist: "Rick Astley", plays: "471M plays", duration: "4:20", explicit: false }
        ],
        lyrics: "Whenever You Need Somebody\nRick Astley\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Back to Black",
        artist: "Amy Winehouse",
        color: [40, 40, 50],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/3f/09/cf3f0994-980d-d8ed-088d-ae89af256b73/15UMGIM24224.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Rehab", artist: "Amy Winehouse", plays: "1.1B plays", duration: "3:35", explicit: false },
            { title: "You Know I'm No Good", artist: "Amy Winehouse", plays: "291M plays", duration: "4:17", explicit: false },
            { title: "Me & Mr. Jones", artist: "Amy Winehouse", plays: "64M plays", duration: "2:33", explicit: false },
            { title: "Just Friends", artist: "Amy Winehouse", plays: "646M plays", duration: "3:13", explicit: false },
            { title: "Back to Black", artist: "Amy Winehouse", plays: "545M plays", duration: "4:01", explicit: false }
        ],
        lyrics: "Back to Black\nAmy Winehouse\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "THE BOOK",
        artist: "YOASOBI",
        color: [255, 90, 140],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7f/8c/90/7f8c90dd-e11f-30d5-271d-4b72eee970bd/195497666737.jpg/600x600bb.jpg",
        songs: [
            { title: "Epilogue", artist: "YOASOBI", plays: "1.3B plays", duration: "0:51", explicit: false },
            { title: "Encore", artist: "YOASOBI", plays: "639M plays", duration: "4:31", explicit: false },
            { title: "Harujion", artist: "YOASOBI", plays: "309M plays", duration: "3:19", explicit: false },
            { title: "Ano yume wo nazotte", artist: "YOASOBI", plays: "149M plays", duration: "4:01", explicit: false },
            { title: "Probably", artist: "YOASOBI", plays: "699M plays", duration: "4:17", explicit: false }
        ],
        lyrics: "THE BOOK\nYOASOBI\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Show - Single",
        artist: "Ado",
        color: [180, 40, 60],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/80/e8/82/80e8826c-f877-9a74-0e7b-a142108feda0/23UMGIM92958.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Show", artist: "Ado", plays: "180M plays", duration: "2:58", explicit: false },
            { title: "New Genesis", artist: "Ado", plays: "320M plays", duration: "3:24", explicit: false },
            { title: "Gira Gira", artist: "Ado", plays: "210M plays", duration: "3:30", explicit: false },
            { title: "Usseewa", artist: "Ado", plays: "450M plays", duration: "3:08", explicit: true },
            { title: "Odo", artist: "Ado", plays: "280M plays", duration: "3:31", explicit: false }
        ],
        lyrics: "Show\nAdo\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "STRAY SHEEP",
        artist: "Kenshi Yonezu",
        color: [120, 180, 220],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6b/0f/0b/6b0f0b3d-e842-5ee1-83a8-1b12142a9dfd/dj.bpfbtyiy.jpg/600x600bb.jpg",
        songs: [
            { title: "カムパネルラ", artist: "Kenshi Yonezu", plays: "1.9B plays", duration: "3:56", explicit: false },
            { title: "Flamingo", artist: "Kenshi Yonezu", plays: "98M plays", duration: "3:16", explicit: false },
            { title: "Kanden", artist: "Kenshi Yonezu", plays: "599M plays", duration: "4:25", explicit: false },
            { title: "PLACEBO", artist: "Kenshi Yonezu & Yojiro Noda", plays: "265M plays", duration: "4:00", explicit: false },
            { title: "Paprika", artist: "Kenshi Yonezu", plays: "397M plays", duration: "3:23", explicit: false }
        ],
        lyrics: "STRAY SHEEP\nKenshi Yonezu\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "LOVE ALL SERVE ALL",
        artist: "Fujii Kaze",
        color: [230, 210, 90],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/85/2e/2b/852e2b6c-93ec-806a-95b2-8f5eda2f775c/22UMGIM18886.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Kirari", artist: "Fujii Kaze", plays: "1.2B plays", duration: "3:48", explicit: false },
            { title: "Matsuri", artist: "Fujii Kaze", plays: "444M plays", duration: "3:46", explicit: false },
            { title: "Hedemo Ne-Yo (LASA edit)", artist: "Fujii Kaze", plays: "120M plays", duration: "3:09", explicit: false },
            { title: "YABA", artist: "Fujii Kaze", plays: "416M plays", duration: "4:12", explicit: false },
            { title: "MO-EH-YO (Ignite)", artist: "Fujii Kaze", plays: "247M plays", duration: "4:37", explicit: false }
        ],
        lyrics: "LOVE ALL SERVE ALL\nFujii Kaze\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Editorial",
        artist: "Official HIGE DANdism",
        color: [60, 110, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9b/da/69/9bda6999-3a29-3634-c1db-d35cd95ab5c2/PCCA_06057_A.jpg/600x600bb.jpg",
        songs: [
            { title: "Editorial", artist: "OFFICIAL HIGE DANDISM", plays: "1.5B plays", duration: "2:14", explicit: false },
            { title: "Apoptosis", artist: "OFFICIAL HIGE DANDISM", plays: "177M plays", duration: "6:30", explicit: false },
            { title: "I Love...", artist: "OFFICIAL HIGE DANDISM", plays: "654M plays", duration: "4:43", explicit: false },
            { title: "Filament", artist: "OFFICIAL HIGE DANDISM", plays: "498M plays", duration: "4:05", explicit: false },
            { title: "Hello", artist: "OFFICIAL HIGE DANDISM", plays: "225M plays", duration: "4:42", explicit: false }
        ],
        lyrics: "Editorial\nOfficial HIGE DANdism\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "CEREMONY",
        artist: "King Gnu",
        color: [200, 60, 70],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c6/09/71/c609710d-85fc-8ed3-8457-ac2377a5eab0/jacket_BVCL01048B00Y_550.jpg/600x600bb.jpg",
        songs: [
            { title: "Opening Ceremony", artist: "King Gnu", plays: "1.7B plays", duration: "0:49", explicit: false },
            { title: "Doron", artist: "King Gnu", plays: "699M plays", duration: "3:03", explicit: false },
            { title: "Teenager Forever", artist: "King Gnu", plays: "218M plays", duration: "3:09", explicit: false },
            { title: "Humor", artist: "King Gnu", plays: "257M plays", duration: "3:27", explicit: false },
            { title: "Hakujitsu", artist: "King Gnu", plays: "594M plays", duration: "4:36", explicit: false }
        ],
        lyrics: "CEREMONY\nKing Gnu\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Walpurgis",
        artist: "Aimer",
        color: [90, 70, 160],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/54/af/b2/54afb286-3614-f2c8-e633-2831bd2fd76b/4547366491647.jpg/600x600bb.jpg",
        songs: [
            { title: "Walpurgis - prologue", artist: "Aimer", plays: "0.9B plays", duration: "2:24", explicit: false },
            { title: "STAND ALONE", artist: "Aimer", plays: "606M plays", duration: "4:46", explicit: false },
            { title: "cold rain", artist: "Aimer", plays: "208M plays", duration: "3:50", explicit: false },
            { title: "trill", artist: "Aimer", plays: "286M plays", duration: "5:21", explicit: false },
            { title: "chikyugi (with Vaundy)", artist: "Aimer", plays: "145M plays", duration: "3:53", explicit: false }
        ],
        lyrics: "Walpurgis\nAimer\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "LEO-NiNE",
        artist: "LiSA",
        color: [40, 40, 60],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/51/b3/58/51b35899-bda2-50d2-2c00-b2b95999b3c3/4547366473681.jpg/600x600bb.jpg",
        songs: [
            { title: "play the world! (feat. Pablo)", artist: "LiSA", plays: "1.5B plays", duration: "4:19", explicit: false },
            { title: "Gurenge", artist: "LiSA", plays: "542M plays", duration: "3:58", explicit: false },
            { title: "Harebutai", artist: "LiSA", plays: "490M plays", duration: "4:59", explicit: false },
            { title: "Makotoshiyaka", artist: "LiSA", plays: "170M plays", duration: "3:58", explicit: false },
            { title: "cancellation", artist: "LiSA", plays: "310M plays", duration: "4:11", explicit: false }
        ],
        lyrics: "LEO-NiNE\nLiSA\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "BORN PINK",
        artist: "BLACKPINK",
        color: [240, 120, 180],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/64/46/c364465f-6271-8aae-93a8-b9979d2befe5/20UMGIM82075.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "How You Like That", artist: "BLACKPINK", plays: "0.8B plays", duration: "3:01", explicit: false },
            { title: "Ice Cream", artist: "BLACKPINK & Selena Gomez", plays: "95M plays", duration: "2:56", explicit: false },
            { title: "Pretty Savage", artist: "BLACKPINK", plays: "323M plays", duration: "3:19", explicit: false },
            { title: "Bet You Wanna (feat. Cardi B)", artist: "BLACKPINK", plays: "553M plays", duration: "2:39", explicit: false },
            { title: "Lovesick Girls", artist: "BLACKPINK", plays: "152M plays", duration: "3:13", explicit: false }
        ],
        lyrics: "BORN PINK\nBLACKPINK\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Get Up",
        artist: "NewJeans",
        color: [150, 200, 230],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d3/4b/7e/d34b7e1e-af3b-43b6-2949-7a8c652a1bc9/196922462726_Cover.jpg/600x600bb.jpg",
        songs: [
            { title: "New Jeans", artist: "NewJeans", plays: "0.9B plays", duration: "1:49", explicit: false },
            { title: "Super Shy", artist: "NewJeans", plays: "678M plays", duration: "2:35", explicit: false },
            { title: "ETA", artist: "NewJeans", plays: "748M plays", duration: "2:31", explicit: false },
            { title: "Cool With You", artist: "NewJeans", plays: "364M plays", duration: "2:28", explicit: false },
            { title: "Get Up", artist: "NewJeans", plays: "439M plays", duration: "0:36", explicit: false }
        ],
        lyrics: "Get Up\nNewJeans\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "ROCK-STAR",
        artist: "Stray Kids",
        color: [200, 60, 60],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/cc/6d/36cc6d5f-1be5-188e-ce54-80f57b023791/8809928950532_Cover.jpg/600x600bb.jpg",
        songs: [
            { title: "MEGAVERSE", artist: "Stray Kids", plays: "1.1B plays", duration: "3:06", explicit: false },
            { title: "LALALALA", artist: "Stray Kids", plays: "360M plays", duration: "3:02", explicit: false },
            { title: "BLIND SPOT", artist: "Stray Kids", plays: "313M plays", duration: "3:21", explicit: false },
            { title: "COMFLEX", artist: "Stray Kids", plays: "564M plays", duration: "2:52", explicit: false },
            { title: "Cover Me", artist: "Stray Kids", plays: "121M plays", duration: "3:11", explicit: false }
        ],
        lyrics: "ROCK-STAR\nStray Kids\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "FML",
        artist: "SEVENTEEN",
        color: [80, 140, 220],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d1/66/eb/d166eb7e-7210-b3ff-be39-638cd37bfc89/196922401282_Cover.jpg/600x600bb.jpg",
        songs: [
            { title: "F*ck My Life", artist: "SEVENTEEN", plays: "1.4B plays", duration: "3:22", explicit: false },
            { title: "Super", artist: "SEVENTEEN", plays: "197M plays", duration: "3:20", explicit: false },
            { title: "Fire", artist: "SEVENTEEN", plays: "414M plays", duration: "2:38", explicit: false },
            { title: "I Don't Understand But I Luv U", artist: "SEVENTEEN", plays: "244M plays", duration: "3:30", explicit: false },
            { title: "Dust", artist: "SEVENTEEN", plays: "536M plays", duration: "2:45", explicit: false }
        ],
        lyrics: "FML\nSEVENTEEN\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Ready To Be",
        artist: "TWICE",
        color: [255, 140, 170],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8c/cf/96/8ccf96fa-afa3-c039-6e33-d19ae58ae074/738676860610_Cover.jpg/600x600bb.jpg",
        songs: [
            { title: "SET ME FREE", artist: "TWICE", plays: "1.9B plays", duration: "3:02", explicit: false },
            { title: "MOONLIGHT SUNRISE", artist: "TWICE", plays: "76M plays", duration: "3:00", explicit: false },
            { title: "GOT THE THRILLS", artist: "TWICE", plays: "249M plays", duration: "2:54", explicit: false },
            { title: "BLAME IT ON ME", artist: "TWICE", plays: "707M plays", duration: "2:41", explicit: false },
            { title: "WALLFLOWER", artist: "TWICE", plays: "579M plays", duration: "2:56", explicit: false }
        ],
        lyrics: "Ready To Be\nTWICE\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "I've IVE",
        artist: "IVE",
        color: [220, 80, 110],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/3a/23/b7/3a23b7f4-0b43-df9d-b7e4-14f992443324/197188335663.jpg/600x600bb.jpg",
        songs: [
            { title: "Blue Blood", artist: "IVE", plays: "1.0B plays", duration: "2:48", explicit: false },
            { title: "I AM", artist: "IVE", plays: "222M plays", duration: "3:04", explicit: false },
            { title: "Kitsch", artist: "IVE", plays: "477M plays", duration: "3:15", explicit: false },
            { title: "Lips", artist: "IVE", plays: "132M plays", duration: "3:01", explicit: false },
            { title: "Heroine", artist: "IVE", plays: "266M plays", duration: "2:51", explicit: false }
        ],
        lyrics: "I've IVE\nIVE\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Evolve",
        artist: "Imagine Dragons",
        color: [210, 130, 70],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Next to Me", artist: "Imagine Dragons", plays: "0.7B plays", duration: "3:50", explicit: false },
            { title: "I Don't Know Why", artist: "Imagine Dragons", plays: "588M plays", duration: "3:10", explicit: false },
            { title: "Whatever It Takes", artist: "Imagine Dragons", plays: "436M plays", duration: "3:21", explicit: false },
            { title: "Believer", artist: "Imagine Dragons", plays: "340M plays", duration: "3:24", explicit: false },
            { title: "Walking the Wire", artist: "Imagine Dragons", plays: "141M plays", duration: "3:53", explicit: false }
        ],
        lyrics: "Evolve\nImagine Dragons\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "OK Computer",
        artist: "Radiohead",
        color: [180, 190, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/600x600bb.jpg",
        songs: [
            { title: "Airbag", artist: "Radiohead", plays: "1.2B plays", duration: "4:48", explicit: false },
            { title: "Paranoid Android", artist: "Radiohead", plays: "413M plays", duration: "6:27", explicit: false },
            { title: "Subterranean Homesick Alien", artist: "Radiohead", plays: "155M plays", duration: "4:28", explicit: false },
            { title: "Exit Music (For a Film)", artist: "Radiohead", plays: "668M plays", duration: "4:27", explicit: false },
            { title: "Let Down", artist: "Radiohead", plays: "436M plays", duration: "5:00", explicit: false }
        ],
        lyrics: "OK Computer\nRadiohead\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Demon Days",
        artist: "Gorillaz",
        color: [60, 70, 90],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/1c/0f/81/1c0f818a-e458-dd84-6f1b-ccbdf5fe14d6/825646291045.jpg/600x600bb.jpg",
        songs: [
            { title: "Intro", artist: "Gorillaz", plays: "1.8B plays", duration: "1:03", explicit: false },
            { title: "Last Living Souls", artist: "Gorillaz", plays: "381M plays", duration: "3:10", explicit: false },
            { title: "Kids with Guns", artist: "Gorillaz & Neneh Cherry", plays: "715M plays", duration: "3:46", explicit: false },
            { title: "O Green World", artist: "Gorillaz", plays: "408M plays", duration: "4:32", explicit: false },
            { title: "Dirty Harry (feat. Bootie Brown)", artist: "Gorillaz", plays: "606M plays", duration: "3:44", explicit: false }
        ],
        lyrics: "Demon Days\nGorillaz\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Graduation",
        artist: "Kanye West",
        color: [120, 150, 220],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/39/25/2d/39252d65-2d50-b991-0962-f7a98a761271/00602517483507.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Good Morning", artist: "Kanye West", plays: "0.6B plays", duration: "3:15", explicit: false },
            { title: "Champion", artist: "Kanye West", plays: "470M plays", duration: "2:48", explicit: false },
            { title: "Stronger", artist: "Kanye West", plays: "703M plays", duration: "5:12", explicit: false },
            { title: "I Wonder", artist: "Kanye West", plays: "231M plays", duration: "4:03", explicit: false },
            { title: "Good Life (feat. T-Pain)", artist: "Kanye West", plays: "334M plays", duration: "3:27", explicit: false }
        ],
        lyrics: "Graduation\nKanye West\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Astroworld",
        artist: "Travis Scott",
        color: [220, 160, 60],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e7/49/8f/e7498f65-df8f-bead-d6e3-2a8d4d642a79/886447235317.jpg/600x600bb.jpg",
        songs: [
            { title: "STARGAZING", artist: "Travis Scott", plays: "1.6B plays", duration: "4:31", explicit: false },
            { title: "CAROUSEL", artist: "Travis Scott", plays: "738M plays", duration: "3:00", explicit: false },
            { title: "SICKO MODE", artist: "Travis Scott", plays: "178M plays", duration: "5:13", explicit: false },
            { title: "R.I.P. SCREW", artist: "Travis Scott", plays: "300M plays", duration: "3:06", explicit: false },
            { title: "STOP TRYING TO BE GOD", artist: "Travis Scott", plays: "658M plays", duration: "5:38", explicit: false }
        ],
        lyrics: "Astroworld\nTravis Scott\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Ctrl",
        artist: "SZA",
        color: [150, 130, 100],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg/600x600bb.jpg",
        songs: [
            { title: "Supermodel", artist: "SZA", plays: "0.7B plays", duration: "3:01", explicit: false },
            { title: "Love Galore (feat. Travis Scott)", artist: "SZA", plays: "184M plays", duration: "4:35", explicit: false },
            { title: "Doves In The Wind (feat. Kendrick Lamar)", artist: "SZA", plays: "522M plays", duration: "4:26", explicit: false },
            { title: "Drew Barrymore", artist: "SZA", plays: "163M plays", duration: "3:51", explicit: false },
            { title: "Prom", artist: "SZA", plays: "484M plays", duration: "3:16", explicit: false }
        ],
        lyrics: "Ctrl\nSZA\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "RENAISSANCE",
        artist: "Beyoncé",
        color: [190, 190, 200],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/fe/ba/43/feba43be-99e8-ad8c-9fad-1bfdea7a4e98/196589344267.jpg/600x600bb.jpg",
        songs: [
            { title: "I'M THAT GIRL", artist: "Beyoncé", plays: "1.5B plays", duration: "3:28", explicit: false },
            { title: "COZY", artist: "Beyoncé", plays: "420M plays", duration: "3:30", explicit: false },
            { title: "ALIEN SUPERSTAR", artist: "Beyoncé", plays: "255M plays", duration: "3:35", explicit: false },
            { title: "CUFF IT", artist: "Beyoncé", plays: "305M plays", duration: "3:45", explicit: false },
            { title: "ENERGY (feat. BEAM)", artist: "Beyoncé", plays: "445M plays", duration: "1:57", explicit: false }
        ],
        lyrics: "RENAISSANCE\nBeyoncé\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "good kid, m.A.A.d city",
        artist: "Kendrick Lamar",
        color: [70, 80, 110],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/36/86/ec/3686ec99-dec4-0a01-8b74-2d8a9a0263a7/12UMGIM52988.rgb.jpg/600x600bb.jpg",
        songs: [
            { title: "Sherane a.k.a Master Splinter’s Daughter", artist: "Kendrick Lamar", plays: "1.0B plays", duration: "4:33", explicit: false },
            { title: "Bitch, Don’t Kill My Vibe", artist: "Kendrick Lamar", plays: "450M plays", duration: "5:11", explicit: false },
            { title: "Backseat Freestyle", artist: "Kendrick Lamar", plays: "226M plays", duration: "3:33", explicit: false },
            { title: "The Art of Peer Pressure", artist: "Kendrick Lamar", plays: "130M plays", duration: "5:25", explicit: false },
            { title: "Money Trees (feat. Jay Rock)", artist: "Kendrick Lamar", plays: "100M plays", duration: "6:27", explicit: false }
        ],
        lyrics: "good kid, m.A.A.d city\nKendrick Lamar\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "replica",
        artist: "Vaundy",
        color: [120, 90, 70],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8a/eb/75/8aeb7526-6fe4-a81a-5dce-c5d026e7f036/4547366655728.jpg/600x600bb.jpg",
        songs: [
            { title: "Audio 007", artist: "VAUNDY", plays: "1.0B plays", duration: "1:11", explicit: false },
            { title: "ZERO", artist: "VAUNDY", plays: "730M plays", duration: "3:52", explicit: false },
            { title: "Bidenkyu", artist: "VAUNDY", plays: "68M plays", duration: "2:57", explicit: false },
            { title: "Carnival", artist: "VAUNDY", plays: "261M plays", duration: "3:24", explicit: false },
            { title: "one liter full of love", artist: "VAUNDY", plays: "622M plays", duration: "3:10", explicit: false }
        ],
        lyrics: "replica\nVaundy\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    },
    {
        title: "Your Name",
        artist: "RADWIMPS",
        color: [120, 170, 220],
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/56/b3/8c/56b38c05-1728-402c-016c-c1e4b0635be8/4988031167618_cover.jpg/600x600bb.jpg",
        songs: [
            { title: "Dream Lantern", artist: "RADWIMPS", plays: "1.2B plays", duration: "2:12", explicit: false },
            { title: "School Road", artist: "RADWIMPS", plays: "227M plays", duration: "1:08", explicit: false },
            { title: "Itomori High School", artist: "RADWIMPS", plays: "682M plays", duration: "1:52", explicit: false },
            { title: "First View of Tokyo", artist: "RADWIMPS", plays: "138M plays", duration: "1:20", explicit: false },
            { title: "Cafe at Last", artist: "RADWIMPS", plays: "231M plays", duration: "1:32", explicit: false }
        ],
        lyrics: "Your Name\nRADWIMPS\n\nDrop the needle, let it spin\nEvery groove a place we've been\nDial it up and let it play\nThe jukebox knows just what to say\n\nRound and round the record goes\nWhere it stops, the music knows"
    }
];

const carousel = document.getElementById('carousel');
const totalCards = tracks.length;

// Layout State
let currentMode = 'shuffle2';
document.body.classList.add('body-shuffle2');

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
const cardWidthApproximation = 272; // Scaled from 340
const zTranslate = Math.round((cardWidthApproximation / 2) / Math.tan(Math.PI / totalCards));

// 1. Generate Cards
tracks.forEach((track, index) => {
    const card = document.createElement('div');
    card.classList.add('card');

    // We start them in the "drowned" state leaning back (rotateX -75)
    // To match DOM element order with rotation sequence cleanly: 
    const rotateY = index * rotationAngle;
    card.style.transform = `rotateY(${rotateY}deg) translateZ(${zTranslate}px) translateY(120px) rotateX(-75deg)`; // translateY scaled from 150px to 120px
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
        <div class="card-reflection">
            <img src="${track.cover}" alt="" class="reflection-bg">
            <div class="reflection-overlay"></div>
            <div class="reflection-info">
                <h2 class="reflection-title">${track.title}</h2>
                <p class="reflection-artist">${track.artist}</p>
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
        // slider has left: 0, so offsetLeft (same reference frame as the buttons)
        // lands it exactly under the button — no magic constants to drift out of sync.
        // translateY(-50%) keeps it vertically centered within the pill.
        slider.style.transform = `translateY(-50%) translateX(${btn.offsetLeft}px)`;
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
        document.body.classList.remove('body-cylinder', 'body-coverflow', 'body-depth', 'body-shuffle', 'body-shuffle2', 'body-helix');

        // Update mode state
        currentMode = btn.dataset.mode;
        document.body.classList.add(`body-${currentMode}`);

        // Calibrated vignette applies only in the Card modes; others use the default
        applyVignette();

        // Card 2 panels follow mode changes
        stopS2Lyrics();
        if (currentMode === 'shuffle2') {
            updateShuffle2Overlay(lastActiveCardIndex >= 0 ? lastActiveCardIndex : 0);
        }

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

// 1.6 Card Shuffle camera presets — flat calibration objects. Every field is
// also a live slider in the calibration panel, so a preset is just a starting
// point you can tweak, print as JSON, and share back as a reference.
const shufflePresets = [
    { name: 'Close-Up', zoom: 40,   camX: 0, camY: 0, tiltX: 15, tiltY: -13, tiltZ: -10, lanes: 5, laneGap: 235, mainPad: 20, mainCardGap: 18, subCardGap: 26, mainScale: 1.00, subScale: 0.62, lockScale: 1.30, lockX: -16, lockY: -110, subSpeed: 1, snap: 0.4, vignette: 1, vignetteSides: 0, vignetteReach: 22 },
    { name: 'Reverse',  zoom: -20,  camX: 0, camY: 0, tiltX: 16, tiltY: 15,  tiltZ: 12,  lanes: 3, laneGap: 290, mainPad: 0,  mainCardGap: 24, subCardGap: 24, mainScale: 0.98, subScale: 0.66, lockScale: 1.24, lockX: 0,   lockY: -110, subSpeed: 1, snap: 0.4, vignette: 1, vignetteSides: 0, vignetteReach: 22 },
    { name: 'Overhead', zoom: -40,  camX: 0, camY: 0, tiltX: 40, tiltY: 0,   tiltZ: -5,  lanes: 3, laneGap: 280, mainPad: 0,  mainCardGap: 30, subCardGap: 30, mainScale: 0.95, subScale: 0.70, lockScale: 1.30, lockX: 0,   lockY: -60,  subSpeed: 1, snap: 0.4, vignette: 1, vignetteSides: 0, vignetteReach: 22 },
    { name: 'Dutch',    zoom: -10,  camX: 0, camY: 0, tiltX: 6,  tiltY: 0,   tiltZ: -24, lanes: 3, laneGap: 300, mainPad: 0,  mainCardGap: 24, subCardGap: 24, mainScale: 0.95, subScale: 0.60, lockScale: 1.26, lockX: 0,   lockY: -90,  subSpeed: 1, snap: 0.4, vignette: 1, vignetteSides: 0, vignetteReach: 22 },
    { name: 'Front',    zoom: -60,  camX: 0, camY: 0, tiltX: 0,  tiltY: 0,   tiltZ: 0,   lanes: 3, laneGap: 270, mainPad: 0,  mainCardGap: 24, subCardGap: 24, mainScale: 0.95, subScale: 0.62, lockScale: 1.22, lockX: 0,   lockY: -100, subSpeed: 1, snap: 0.4, vignette: 1, vignetteSides: 0, vignetteReach: 22 },
    { name: 'Wide',     zoom: -300, camX: 0, camY: 0, tiltX: 10, tiltY: 9,   tiltZ: 0,   lanes: 5, laneGap: 240, mainPad: 0,  mainCardGap: 20, subCardGap: 20, mainScale: 0.85, subScale: 0.55, lockScale: 1.08, lockX: 0,   lockY: -80,  subSpeed: 1, snap: 0.4, vignette: 1, vignetteSides: 0, vignetteReach: 22 }
];

// Lane direction by distance from center: middle forward, neighbours backward,
// outer lanes alternate. Speed is a separate calibration (mainSpeed/subSpeed)
// so card spacing stays uniform unless the user dials in parallax.
function laneDirection(laneDist) {
    return laneDist === 0 ? 1 : (laneDist % 2 === 1 ? -1 : 1);
}

// Defaults for newer calibration keys not present in older presets/saved state
const CALIB_EXTRA_DEFAULTS = { mainTiltX: 0, mainTiltY: 0, mainTiltZ: 0, motionBlur: 0, motionBlurAmt: 8, laneBend: 0 };

// Live calibration state (persisted in localStorage, edited via the panel)
let shuffleCalib = { ...CALIB_EXTRA_DEFAULTS, ...shufflePresets[0] };
try {
    const saved = JSON.parse(localStorage.getItem('jukebox-shuffle-calib'));
    if (saved && typeof saved.zoom === 'number') shuffleCalib = { ...shuffleCalib, ...saved };
} catch (e) { /* fresh start */ }

// The panel edits whichever object calibTarget points at: shuffleCalib for
// Card 1, or the active Card 2 preset's calib (so Flip Up etc. are tunable).
let calibTarget = shuffleCalib;

// Tabbed, grouped panel. Item kinds: slider | divider | check | button.
// Labels are explicit about Main (the frozen highlight + its lane) vs Sub.
const calibTabs = [['cam', 'Camera'], ['lay', 'Layout'], ['fx', 'Motion/FX']];
const calibPages = {
    cam: [
        { button: 'resetCamera', label: 'Reset camera' },
        { slider: 'zoom',  label: 'Camera Z (zoom)', min: -400, max: 250, step: 1 },
        { slider: 'camX',  label: 'Camera X', min: -400, max: 400, step: 2 },
        { slider: 'camY',  label: 'Camera Y', min: -400, max: 400, step: 2 },
        { slider: 'tiltX', label: 'Scene tilt X', min: -45, max: 45, step: 1 },
        { slider: 'tiltY', label: 'Scene tilt Y', min: -45, max: 45, step: 1 },
        { slider: 'tiltZ', label: 'Scene tilt Z', min: -45, max: 45, step: 1 }
    ],
    lay: [
        { slider: 'lanes',   label: 'Lanes', min: 3, max: 7, step: 2 },
        { slider: 'laneGap', label: 'Lane spacing', min: 100, max: 420, step: 2 },
        { divider: 'Main' },
        { slider: 'mainPad',     label: 'Main lane pad', min: 0, max: 220, step: 2 },
        { slider: 'mainCardGap', label: 'Main card gap', min: -160, max: 260, step: 2 },
        { slider: 'mainScale',   label: 'Main lane size', min: 0.5, max: 1.4, step: 0.01 },
        { slider: 'lockScale',   label: 'Main size', min: 0.8, max: 1.9, step: 0.01 },
        { slider: 'lockX',       label: 'Main X', min: -250, max: 250, step: 2 },
        { slider: 'lockY',       label: 'Main Y', min: -300, max: 120, step: 2 },
        { divider: 'Main tilt' },
        { slider: 'mainTiltX', label: 'Main tilt X', min: -60, max: 60, step: 1 },
        { slider: 'mainTiltY', label: 'Main tilt Y', min: -60, max: 60, step: 1 },
        { slider: 'mainTiltZ', label: 'Main tilt Z', min: -60, max: 60, step: 1 },
        { button: 'resetTilt', label: 'Reset tilt' },
        { divider: 'Sub' },
        { slider: 'subCardGap', label: 'Sub card gap', min: -160, max: 260, step: 2 },
        { slider: 'subScale',   label: 'Sub lane size', min: 0.3, max: 1.1, step: 0.01 }
    ],
    fx: [
        { slider: 'subSpeed', label: 'Sub lane speed', min: 0.2, max: 2, step: 0.05 },
        { slider: 'snap',     label: 'Scroll snap', min: 0, max: 1, step: 0.02 },
        { slider: 'laneBend', label: 'Lane curve', min: 0, max: 100, step: 1 },
        { divider: 'Vignette' },
        { slider: 'vignette',      label: 'Vignette radial', min: 0, max: 2, step: 0.02 },
        { slider: 'vignetteSides', label: 'Side strength', min: 0, max: 2, step: 0.02 },
        { slider: 'vignetteReach', label: 'Side reach %', min: 5, max: 48, step: 1 },
        { divider: 'Motion blur' },
        { check: 'motionBlur', label: 'Sub-lane blur' },
        { slider: 'motionBlurAmt', label: 'Blur strength', min: 0, max: 30, step: 0.5, dep: 'motionBlur' }
    ]
};
const vignetteEl = document.querySelector('.vignette-overlay');

// Composes the vignette from two controllable shadows: the classic radial and
// straight left/right side bars. Both can go past 1 for heavy looks. Only
// active in Card Shuffle; other modes keep the stylesheet default. The radial
// is transparent at the center, so the highlighted card is never darkened.
function applyVignette() {
    if (!vignetteEl) return;
    if (currentMode === 'shuffle' || currentMode === 'shuffle2') {
        const sc = currentMode === 'shuffle2' ? shuffle2Presets[shuffle2Idx].calib : shuffleCalib;
        const r = Math.min(0.95, 0.42 * sc.vignette);
        const sAlpha = Math.min(0.92, 0.5 * sc.vignetteSides);
        const reach = Math.min(48, Math.max(5, sc.vignetteReach || 22));
        vignetteEl.style.background =
            `linear-gradient(90deg, rgba(0,0,0,${sAlpha}) 0%, rgba(0,0,0,0) ${reach}%, rgba(0,0,0,0) ${100 - reach}%, rgba(0,0,0,${sAlpha}) 100%), ` +
            `radial-gradient(ellipse at 50% 42%, rgba(0,0,0,0) 52%, rgba(0,0,0,${r}) 100%)`;
        vignetteEl.style.opacity = 1;
    } else {
        vignetteEl.style.background = '';
        vignetteEl.style.opacity = '';
    }
}

function applyCalibSideEffects() {
    applyVignette();
    if (calibTarget === shuffleCalib) {
        try { localStorage.setItem('jukebox-shuffle-calib', JSON.stringify(shuffleCalib)); } catch (e) {}
    } else {
        // Editing a Card 2 preset live: re-lay panels and refresh proxies
        applyShuffle2Layout();
        if (s2OverlayEl && !s2OverlayEl.classList.contains('s2-hidden')) syncS2Proxies();
    }
}

// Build the tabbed calibration panel from calibPages
const calibRowsEl = document.getElementById('calibRows');
const calibInputs = {};
const calibChecks = {};
const calibDepRows = {}; // depKey -> [rows shown only when that checkbox is on]
let lastPresetIdx = 0;

function setDepVisibility(depKey) {
    (calibDepRows[depKey] || []).forEach(r => { r.style.display = calibTarget[depKey] ? 'grid' : 'none'; });
}

// Reset camera restores ONLY the camera rig (position + scene tilt). Reset tilt
// clears ONLY the main-card tilt. They're separate, and act on calibTarget.
function resetCamera() {
    const p = calibTarget === shuffleCalib ? shufflePresets[lastPresetIdx] : {};
    ['zoom', 'camX', 'camY', 'tiltX', 'tiltY', 'tiltZ'].forEach(k => { calibTarget[k] = p[k] || 0; });
    syncCalibPanel();
    applyCalibSideEffects();
}
function resetTilt() {
    calibTarget.mainTiltX = 0;
    calibTarget.mainTiltY = 0;
    calibTarget.mainTiltZ = 0;
    syncCalibPanel();
    applyCalibSideEffects();
}

if (calibRowsEl) {
    const tabBar = document.createElement('div');
    tabBar.className = 'calib-tabs';
    const pages = {};
    calibTabs.forEach(([id, label], i) => {
        const tabBtn = document.createElement('button');
        tabBtn.className = 'calib-tab' + (i === 0 ? ' active' : '');
        tabBtn.textContent = label;
        tabBtn.addEventListener('click', () => {
            tabBar.querySelectorAll('.calib-tab').forEach(b => b.classList.remove('active'));
            tabBtn.classList.add('active');
            Object.values(pages).forEach(pg => pg.classList.remove('active'));
            pages[id].classList.add('active');
        });
        tabBar.appendChild(tabBtn);
        const page = document.createElement('div');
        page.className = 'calib-page' + (i === 0 ? ' active' : '');
        pages[id] = page;
    });
    calibRowsEl.appendChild(tabBar);

    Object.keys(calibPages).forEach(tabId => {
        calibPages[tabId].forEach(item => {
            if (item.divider) {
                const d = document.createElement('div');
                d.className = 'calib-divider';
                d.innerHTML = `<span>${item.divider}</span>`;
                pages[tabId].appendChild(d);
            } else if (item.button) {
                const b = document.createElement('button');
                b.className = 'calib-btn';
                b.textContent = item.label;
                b.addEventListener('click', item.button === 'resetCamera' ? resetCamera : resetTilt);
                pages[tabId].appendChild(b);
            } else if (item.check) {
                const row = document.createElement('label');
                row.className = 'calib-check';
                row.innerHTML = `<input type="checkbox"><span>${item.label}</span>`;
                const chk = row.querySelector('input');
                chk.checked = !!calibTarget[item.check];
                chk.addEventListener('change', () => {
                    calibTarget[item.check] = chk.checked ? 1 : 0;
                    setDepVisibility(item.check);
                    applyCalibSideEffects();
                });
                calibChecks[item.check] = chk;
                pages[tabId].appendChild(row);
            } else {
                const row = document.createElement('div');
                row.className = 'calib-row';
                row.innerHTML = `<label>${item.label}</label><input type="range" min="${item.min}" max="${item.max}" step="${item.step}"><output></output>`;
                const input = row.querySelector('input');
                const out = row.querySelector('output');
                input.value = calibTarget[item.slider];
                out.textContent = calibTarget[item.slider];
                input.addEventListener('input', () => {
                    calibTarget[item.slider] = parseFloat(input.value);
                    out.textContent = input.value;
                    applyCalibSideEffects();
                });
                calibInputs[item.slider] = { input, out };
                if (item.dep) (calibDepRows[item.dep] = calibDepRows[item.dep] || []).push(row);
                pages[tabId].appendChild(row);
            }
        });
    });

    calibTabs.forEach(([id]) => calibRowsEl.appendChild(pages[id]));
    Object.keys(calibDepRows).forEach(setDepVisibility);
}

function syncCalibPanel() {
    Object.keys(calibInputs).forEach(key => {
        calibInputs[key].input.value = calibTarget[key];
        calibInputs[key].out.textContent = calibTarget[key];
    });
    Object.keys(calibChecks).forEach(key => {
        calibChecks[key].checked = !!calibTarget[key];
        setDepVisibility(key);
    });
}

// Preset buttons load their values into the live calibration
document.querySelectorAll('.angle-btn[data-angle]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.angle-btn[data-angle]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const idx = parseInt(btn.dataset.angle, 10) || 0;
        lastPresetIdx = idx;
        shuffleCalib = { ...CALIB_EXTRA_DEFAULTS, ...shufflePresets[idx] };
        calibTarget = shuffleCalib;
        syncCalibPanel();
        applyCalibSideEffects();
    });
});

// Panel toggle + print/load JSON. Card 1 gear edits shuffleCalib...
const calibToggleBtn = document.getElementById('calibToggle');
if (calibToggleBtn) {
    calibToggleBtn.addEventListener('click', () => {
        calibTarget = shuffleCalib;
        syncCalibPanel();
        document.body.classList.toggle('calib-open');
        calibToggleBtn.classList.toggle('active', document.body.classList.contains('calib-open'));
    });
}

// ...Card 2 gear edits the active Card 2 preset's calib live (e.g. Flip Up)
const calib2ToggleBtn = document.getElementById('calib2Toggle');
if (calib2ToggleBtn) {
    calib2ToggleBtn.addEventListener('click', () => {
        calibTarget = shuffle2Presets[shuffle2Idx].calib;
        syncCalibPanel();
        document.body.classList.toggle('calib-open');
        calib2ToggleBtn.classList.toggle('active', document.body.classList.contains('calib-open'));
    });
}

const calibJsonEl = document.getElementById('calibJson');
const calibPrintBtn = document.getElementById('calibPrint');
const calibApplyBtn = document.getElementById('calibApply');
if (calibPrintBtn && calibJsonEl) {
    calibPrintBtn.addEventListener('click', () => {
        const json = JSON.stringify(calibTarget);
        calibJsonEl.value = json;
        calibJsonEl.select();
        if (navigator.clipboard) navigator.clipboard.writeText(json).catch(() => {});
        console.log('[Shuffle calibration]', json);
    });
}
if (calibApplyBtn && calibJsonEl) {
    calibApplyBtn.addEventListener('click', () => {
        try {
            const parsed = JSON.parse(calibJsonEl.value);
            Object.assign(calibTarget, parsed);
            syncCalibPanel();
            applyCalibSideEffects();
        } catch (e) {
            calibJsonEl.value = 'Invalid JSON: ' + e.message;
        }
    });
}

// ============================================================================
// Card 2: user-directed shuffle presets (printed JSONs) + contextual panels.
// Card 1 keeps the free calibration; Card 2 runs these fixed compositions.
// ============================================================================
const shuffle2Presets = [
    {
        name: 'Dynamic',
        calib: { "mainTiltX": -3, "mainTiltY": 16, "mainTiltZ": -17, "motionBlur": 0, "motionBlurAmt": 8, "zoom": -100, "camX": -146, "camY": 0, "tiltX": 12, "tiltY": -17, "tiltZ": 19, "lanes": 7, "laneGap": 294, "mainPad": 52, "mainCardGap": 34, "subCardGap": 18, "mainScale": 1.21, "subScale": 1.09, "lockScale": 1.3, "lockX": 162, "lockY": -92, "subSpeed": 0.65, "snap": 0.74, "vignette": 1, "vignetteSides": 0.88, "vignetteReach": 26 },
        // Song list right, anchored at the main card's top; lyrics at its bottom-left
        ui: { songs: { anchor: 'right-top', w: 330 }, lyrics: { anchor: 'left-bottom', w: 380 } }
    },
    {
        name: 'Intro',
        calib: { "mainTiltX": 50, "mainTiltY": 0, "mainTiltZ": 0, "motionBlur": 0, "motionBlurAmt": 26.5, "zoom": 2, "camX": 0, "camY": 0, "tiltX": -37, "tiltY": 0, "tiltZ": 0, "lanes": 7, "laneGap": 156, "mainPad": 56, "mainCardGap": 28, "subCardGap": 20, "mainScale": 0.97, "subScale": 0.63, "lockScale": 1.03, "lockX": 6, "lockY": -190, "subSpeed": 1, "snap": 0.84, "vignette": 1.06, "vignetteSides": 2, "vignetteReach": 48 },
        // Song list top-left, aligned with the main card's top edge; no lyrics
        ui: { songs: { anchor: 'left-top', w: 320 } }
    },
    {
        name: 'Maison',
        calib: { "mainTiltX": -18, "mainTiltY": 21, "mainTiltZ": 15, "motionBlur": 0, "motionBlurAmt": 9.5, "zoom": 142, "camX": -68, "camY": 0, "tiltX": 15, "tiltY": -15, "tiltZ": -10, "lanes": 5, "laneGap": 228, "mainPad": 0, "mainCardGap": 18, "subCardGap": 18, "mainScale": 0.94, "subScale": 0.84, "lockScale": 0.94, "lockX": 74, "lockY": -4, "subSpeed": 1.5, "snap": 0.62, "vignette": 0, "vignetteSides": 2, "vignetteReach": 32 },
        ui: {}
    },
    {
        name: 'Flip Up',
        calib: { "mainTiltX": -60, "mainTiltY": -2, "mainTiltZ": -1, "motionBlur": 0, "motionBlurAmt": 20, "zoom": -131, "camX": -30, "camY": -62, "tiltX": 45, "tiltY": 0, "tiltZ": 0, "lanes": 3, "laneGap": 280, "mainPad": 42, "mainCardGap": 182, "subCardGap": 20, "mainScale": 1.12, "subScale": 1.1, "lockScale": 1.21, "lockX": 2, "lockY": 120, "subSpeed": 0.25, "snap": 0.4, "vignette": 1, "vignetteSides": 0.6, "vignetteReach": 25, "laneBend": 75 },
        ui: {}
    }
];
shuffle2Presets.forEach(p => { p.calib = { ...CALIB_EXTRA_DEFAULTS, ...p.calib }; });

let shuffle2Idx = 0;

const s2SongsEl = document.getElementById('s2Songs');
const s2LyricsEl = document.getElementById('s2Lyrics');
let s2LyricsInterval = null;
let s2LineIdx = 0;

function stopS2Lyrics() {
    if (s2LyricsInterval) {
        clearInterval(s2LyricsInterval);
        s2LyricsInterval = null;
    }
}

const s2RigEl = document.getElementById('s2Rig');
const s2OverlayEl = document.getElementById('shuffle2Overlay');

// Panels live in a mirror of the real 3D rig: the overlay shares the scene's
// perspective, the rig carries the exact camera transform, and each panel gets
// the main card's plate transform (position + main tilt) plus an in-plane
// offset to its anchor corner — so position AND perspective match the card.
function applyShuffle2Layout() {
    const p = shuffle2Presets[shuffle2Idx];
    const c = p.calib;
    if (s2RigEl) {
        s2RigEl.style.transform =
            `translate3d(${c.camX || 0}px, ${c.camY || 0}px, ${c.zoom}px) rotateX(${c.tiltX}deg) rotateY(${c.tiltY}deg) rotateZ(${c.tiltZ}deg)`;
    }

    const s = c.lockScale || 1;
    const halfW = 112 * s; // card is 224x320, scaled by the plate size
    const halfH = 160 * s;
    const gap = 16; // tight to the card — no long-distance drift
    const plate = `translate3d(${112 + c.lockX}px, ${160 + c.lockY}px, 150px) ` +
        `rotateX(${c.mainTiltX}deg) rotateY(${c.mainTiltY}deg) rotateZ(${c.mainTiltZ}deg)`;

    [['songs', s2SongsEl], ['lyrics', s2LyricsEl]].forEach(([key, el]) => {
        if (!el) return;
        const cfg = p.ui && p.ui[key];
        if (!cfg) {
            el.style.display = 'none';
            return;
        }
        el.style.display = 'block';
        // Responsive clamp: panels never exceed ~22% of the window width
        const w = Math.min(cfg.w, Math.round(window.innerWidth * 0.22));
        el.style.width = `${w}px`;
        let inPlane = '';
        if (cfg.anchor === 'right-top') inPlane = `translateX(${halfW + gap}px) translateY(${-halfH}px)`;
        else if (cfg.anchor === 'left-top') inPlane = `translateX(${-halfW - gap - w}px) translateY(${-halfH}px)`;
        else if (cfg.anchor === 'left-bottom') inPlane = `translateX(${-halfW - gap - w}px) translateY(${halfH}px) translateY(-100%)`;
        else if (cfg.anchor === 'right-bottom') inPlane = `translateX(${halfW + gap}px) translateY(${halfH}px) translateY(-100%)`;
        el.style.transform = `${plate} ${inPlane}`;
    });
}

// Watermark: drop below the mode pill if the window narrows into a collision
const watermarkEl = document.querySelector('.watermark');
function checkWatermarkOverlap() {
    if (!watermarkEl) return;
    const sel = document.querySelector('.mode-selector');
    if (!sel) return;
    watermarkEl.classList.remove('wm-below');
    const w = watermarkEl.getBoundingClientRect();
    const sRect = sel.getBoundingClientRect();
    if (w.right + 14 > sRect.left) watermarkEl.classList.add('wm-below');
}
checkWatermarkOverlap();
window.addEventListener('resize', () => {
    checkWatermarkOverlap();
    if (currentMode === 'shuffle2') applyShuffle2Layout();
});

// Rolling-Album behavior: while the reels are moving fast the panels fade out
// completely; once the scroll settles, content updates and fades back in
let s2PendingIndex = -1;
let s2RevealTimer = null;

function requestShuffle2Overlay(index) {
    s2PendingIndex = index;
    clearTimeout(s2RevealTimer);
    const fast = Math.abs(targetRotation - currentRotation) > 55;
    if (fast) {
        // Only truly fast flicks blank the panels (anti motion-sickness)
        if (s2OverlayEl) s2OverlayEl.classList.add('s2-hidden');
        s2RevealTimer = setTimeout(() => requestShuffle2Overlay(s2PendingIndex), 160);
    } else {
        // Slow scroll: update the song list/lyrics live with each album, no delay
        updateShuffle2Overlay(s2PendingIndex);
        if (s2OverlayEl) s2OverlayEl.classList.remove('s2-hidden');
    }
}

// BG style dropdown: None / Blur / Glass (default Blur). Opens upward.
let s2BgMode = 'blur';
document.body.classList.add('s2bg-blur');
const s2BgDd = document.getElementById('s2BgDd');
const s2BgBtn = document.getElementById('s2BgBtn');
const s2BgMenu = document.getElementById('s2BgMenu');
const s2BgLabels = { none: 'No BG', blur: 'Blur', glass: 'Glass' };

if (s2BgBtn && s2BgDd) {
    s2BgBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        s2BgDd.classList.toggle('open');
    });
    document.addEventListener('click', () => s2BgDd.classList.remove('open'));
}
if (s2BgMenu) {
    s2BgMenu.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', (e) => {
            e.stopPropagation();
            s2BgMode = b.dataset.bg;
            document.body.classList.remove('s2bg-none', 's2bg-blur', 's2bg-glass');
            document.body.classList.add(`s2bg-${s2BgMode}`);
            s2BgMenu.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
            s2BgBtn.innerHTML = `BG: ${s2BgLabels[s2BgMode]} &#9652;`;
            s2BgDd.classList.remove('open');
        });
    });
}

// Position each flat blur proxy over its panel's projected (3D) footprint.
// The panel's getBoundingClientRect is the screen-space bounds of the rotated
// quad; feathered proxy edges hide the axis-aligned-vs-skewed mismatch.
const s2ProxySongsEl = document.getElementById('s2ProxySongs');
const s2ProxyLyricsEl = document.getElementById('s2ProxyLyrics');
function placeProxy(proxy, panel) {
    if (!proxy || !panel) return;
    if (s2BgMode === 'none' || panel.style.display === 'none' ||
        (s2OverlayEl && s2OverlayEl.classList.contains('s2-hidden'))) {
        proxy.style.opacity = '0';
        return;
    }
    const r = panel.getBoundingClientRect();
    if (!r.width || !r.height) { proxy.style.opacity = '0'; return; }
    const pad = 6;
    proxy.style.left = `${r.left - pad}px`;
    proxy.style.top = `${r.top - pad}px`;
    proxy.style.width = `${r.width + pad * 2}px`;
    proxy.style.height = `${r.height + pad * 2}px`;
    proxy.style.opacity = '1';
}
function syncS2Proxies() {
    placeProxy(s2ProxySongsEl, s2SongsEl);
    placeProxy(s2ProxyLyricsEl, s2LyricsEl);
}

function updateShuffle2Overlay(index) {
    if (currentMode !== 'shuffle2') return;
    const track = tracks[index];
    if (!track) return;
    const p = shuffle2Presets[shuffle2Idx];
    applyShuffle2Layout();

    if (p.ui && p.ui.songs && s2SongsEl) {
        s2SongsEl.innerHTML = track.songs.map((song, i) => `
            <div class="s2-track">
                <img src="${track.cover}" alt="">
                <div class="s2-track-info">
                    <div class="s2-track-title">${song.title}</div>
                    <div class="s2-track-meta">${song.explicit ? '<span class="explicit-badge">E</span>' : ''}${song.artist} &bull; ${song.plays} &bull; ${track.title}</div>
                </div>
                ${i === 0 ? '<div class="equalizer" style="--equalizer-color: rgb(var(--accent-rgb))"><div class="equalizer-bar"></div><div class="equalizer-bar"></div><div class="equalizer-bar"></div><div class="equalizer-bar"></div></div>' : ''}
                <span class="s2-track-dur">${song.duration}</span>
            </div>`).join('');
    }

    stopS2Lyrics();
    if (p.ui && p.ui.lyrics && s2LyricsEl) {
        // Rolling-Album-style live lyric window: 4 lines, active highlighted, cycling
        const lines = track.lyrics.split('\n').filter(l => l.trim() !== '');
        s2LineIdx = 0;
        const render = () => {
            const win = [];
            for (let d = -1; d <= 2; d++) {
                const li = (s2LineIdx + d + lines.length) % lines.length;
                win.push(`<div class="lyric-line${d === 0 ? ' active' : ''}">${lines[li]}</div>`);
            }
            s2LyricsEl.innerHTML = `<div class="s2-lyrics-box">${win.join('')}</div>`;
        };
        render();
        s2LyricsInterval = setInterval(() => {
            s2LineIdx = (s2LineIdx + 1) % lines.length;
            render();
        }, 2600);
    } else if (s2LyricsEl) {
        s2LyricsEl.innerHTML = '';
    }
}

// Card 2 preset buttons
document.querySelectorAll('.angle-btn[data-angle2]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.angle-btn[data-angle2]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        shuffle2Idx = parseInt(btn.dataset.angle2, 10) || 0;
        applyVignette();
        updateShuffle2Overlay(lastActiveCardIndex >= 0 ? lastActiveCardIndex : 0);
        // If the calibration panel is open, retarget it to this preset
        if (document.body.classList.contains('calib-open')) {
            calibTarget = shuffle2Presets[shuffle2Idx].calib;
            syncCalibPanel();
        }
    });
});

// 2. Infinite Virtual Scroll Logic
let currentRotation = 0;
let targetRotation = 0;

// Background color interpolation states (reverse engineered from 80% zoom visual weight)
let currentBgColor = [18, 18, 18];
let targetBgColor = [18, 18, 18];

// Configurable speed modifier for mouse wheel
const scrollSensitivity = 0.5;

// Listen for mouse wheel (desktop)
window.addEventListener('wheel', (e) => {
    const isScrollable = e.target.closest('.lyrics-container');
    if (!isScrollable) {
        e.preventDefault();
        targetRotation += (e.deltaY * scrollSensitivity);
        document.body.classList.add('has-scrolled'); // dismiss the scroll hint chip
    }
}, { passive: false });

// Listen for touch swipe (mobile)
let touchStartY = 0;
window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', (e) => {
    const isScrollable = e.target.closest('.lyrics-container');
    if (!isScrollable) {
        e.preventDefault();
        const touchCurrentY = e.touches[0].clientY;
        const deltaY = touchStartY - touchCurrentY;
        targetRotation += (deltaY * 0.8); // Slightly different sensitivity for touch
        touchStartY = touchCurrentY;
        document.body.classList.add('has-scrolled'); // dismiss the scroll hint chip
    }
}, { passive: false });

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

    // Expose the dominant color as element-scoped CSS vars so the active-card
    // aura (.card::before) actually glows in the album's color instead of the
    // grey :root fallback values
    cardElement.style.setProperty('--amb-r', r);
    cardElement.style.setProperty('--amb-g', g);
    cardElement.style.setProperty('--amb-b', b);

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
// Second dominant hue of each cover (e.g. Enemy = red primary + purple-blue
// secondary) — drives the marquee/halo so they always match the artwork
const extractedSecondaryCache = {};

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

                // Second dominant hue: the biggest bucket at least 60° away from
                // the primary — the artwork's own companion color
                let secondIdx = -1, secondCount = 0;
                hueBuckets.forEach((bucket, idx) => {
                    const dist = Math.min(Math.abs(idx - maxIdx), 12 - Math.abs(idx - maxIdx));
                    if (dist >= 2 && bucket.length > secondCount) {
                        secondCount = bucket.length;
                        secondIdx = idx;
                    }
                });
                if (secondIdx >= 0 && secondCount >= 6) {
                    let s2R = 0, s2G = 0, s2B = 0;
                    hueBuckets[secondIdx].forEach(c => { s2R += c.r; s2G += c.g; s2B += c.b; });
                    extractedSecondaryCache[imgUrl] = [
                        Math.round(s2R / secondCount),
                        Math.round(s2G / secondCount),
                        Math.round(s2B / secondCount)
                    ];
                }
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

// Pre-extract colors for all tracks on startup to cache them.
// When the real vibrant color arrives, upgrade the card's hand-tuned fallback color
// so the ambient background and active-card aura match the actual artwork.
tracks.forEach((track, index) => {
    extractVibrantColor(track.cover, (color) => {
        const card = carousel.children[index];
        if (!card) return;
        card.dataset.domR = color[0];
        card.dataset.domG = color[1];
        card.dataset.domB = color[2];
        card.style.setProperty('--amb-r', color[0]);
        card.style.setProperty('--amb-g', color[1]);
        card.style.setProperty('--amb-b', color[2]);
        // If this album is currently on stage, upgrade the live accent/aurora palette too
        if (index === lastDockIndex) setAccentPalette(color, extractedSecondaryCache[track.cover] || null);
    }, track.color);
});

// Helper to adjust saturation of an RGB color (interpolates towards its relative luminance grayscale value)
function adjustSaturation(rgb, saturationFactor) {
    const [r, g, b] = rgb;
    const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const rNew = L + (r - L) * saturationFactor;
    const gNew = L + (g - L) * saturationFactor;
    const bNew = L + (b - L) * saturationFactor;
    return [
        Math.max(0, Math.min(255, rNew)),
        Math.max(0, Math.min(255, gNew)),
        Math.max(0, Math.min(255, bNew))
    ];
}

let currentGradLayer = 1;

function updateThemeColor(colorStr) {
    const meta = document.getElementById('themeColorMeta');
    if (meta) {
        meta.setAttribute('content', colorStr);
    }
}

function applyInterpolatedCoverflowBackground(rgbColor) {
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
    
    const accentColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    const darkR = Math.max(18, Math.floor(r * 0.12));
    const darkG = Math.max(18, Math.floor(g * 0.12));
    const darkB = Math.max(18, Math.floor(b * 0.12));
    const darkBase = `rgb(${Math.round(darkR)}, ${Math.round(darkG)}, ${Math.round(darkB)})`;
    
    const bgContainer = document.getElementById('coverflowBgGradient');
    if (bgContainer) {
        bgContainer.style.backgroundImage = `linear-gradient(to bottom, ${accentColor} 0%, ${accentColor} 30%, ${darkBase} 100%)`;
    }
    
    document.documentElement.style.backgroundColor = accentColor;
    document.body.style.backgroundColor = darkBase;
    document.documentElement.style.setProperty('--dynamic-bg', darkBase);
    updateThemeColor(accentColor);
}

function updateAmbientBackground(card) {
    if (card && card.dataset.domR) {
        const bgR = Math.floor(parseInt(card.dataset.domR) * 0.25); // ~25% brightness for rich color
        const bgG = Math.floor(parseInt(card.dataset.domG) * 0.25);
        const bgB = Math.floor(parseInt(card.dataset.domB) * 0.25);
        const bgStr = `rgb(${bgR}, ${bgG}, ${bgB})`;
        document.documentElement.style.backgroundColor = bgStr;
        document.body.style.backgroundColor = bgStr;
        document.documentElement.style.setProperty('--dynamic-bg', bgStr);
        updateThemeColor(bgStr);
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

// YouTube-Music-style seamless loop for overflowing text: duplicate the text into
// two segments that scroll translateX(-100%) in a continuous conveyor. Restores
// plain ellipsis text when the element fits or loses focus.
function resetLoopingText(el) {
    if (el && el.dataset.loopText !== undefined) {
        el.textContent = el.dataset.loopText;
        delete el.dataset.loopText;
        el.classList.remove('loop-marquee');
        el.style.removeProperty('--loop-duration');
    }
}

function applyLoopingText(el) {
    if (!el) return;
    resetLoopingText(el);
    if (el.scrollWidth - el.clientWidth <= 1) return; // fits — no loop needed

    const text = el.textContent;
    el.dataset.loopText = text;
    const safe = text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    el.innerHTML = `<span class="loop-seg">${safe}</span><span class="loop-seg" aria-hidden="true">${safe}</span>`;
    el.classList.add('loop-marquee');

    // Constant scroll speed regardless of text length: duration scales with width
    const seg = el.querySelector('.loop-seg');
    const duration = Math.max(6, seg.offsetWidth / 36);
    el.style.setProperty('--loop-duration', `${duration.toFixed(2)}s`);
}

function updateActiveCardMarquees(activeIndex) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, idx) => {
        const titleEl = card.querySelector('.title');
        const artistEl = card.querySelector('.artist');

        if (idx === activeIndex) {
            // Measure after this frame's layout settles
            requestAnimationFrame(() => {
                applyLoopingText(titleEl);
                applyLoopingText(artistEl);
            });
        } else {
            resetLoopingText(titleEl);
            resetLoopingText(artistEl);
        }
    });
}

function updateCarousel() {
    // Lerp current towards target (0.08 is the base smoothness factor).
    // In Card Shuffle, the snap calibration magnetizes the target to the
    // nearest card and stiffens the follow speed for a crisper landing.
    let lerpFactor = 0.08;
    if (currentMode === 'shuffle' || currentMode === 'shuffle2') {
        const sc = currentMode === 'shuffle2' ? shuffle2Presets[shuffle2Idx].calib : shuffleCalib;
        if (sc.snap > 0) {
            const snapTarget = Math.round(targetRotation / rotationAngle) * rotationAngle;
            targetRotation = lerp(targetRotation, snapTarget, sc.snap * 0.18);
            lerpFactor = 0.08 + sc.snap * 0.14;
        }
    }
    currentRotation = lerp(currentRotation, targetRotation, lerpFactor);

    if (currentMode === 'coverflow') {
        // Calculate dynamic desaturation & darkening based on rotation scroll speed
        const speed = Math.abs(targetRotation - currentRotation);
        
        // Two-tiered speed mapping:
        // - Speed <= 80 (Rest to Mid-Speed): Saturation 0.92 -> 0.25, Dark scale 0.96 -> 0.94
        // - Speed > 80 (Mid-Speed to High-Speed): Saturation 0.25 -> 0.18, Dark scale 0.94 -> 0.86
        let currentSat;
        let darkScale;
        if (speed <= 80) {
            const factor = speed / 80;
            currentSat = lerp(0.92, 0.25, factor);
            darkScale = lerp(0.96, 0.94, factor);
        } else {
            const factor = Math.min(1, (speed - 80) / 120);
            currentSat = lerp(0.25, 0.18, factor); // keep subtle color tint at high speed, not too grey
            darkScale = lerp(0.94, 0.86, factor);
        }

        // Lerp background color values smoothly to prevent strobe flashing
        const colorLerpSpeed = 0.08; // Matched to rotation lerp responsiveness
        currentBgColor[0] = lerp(currentBgColor[0], targetBgColor[0], colorLerpSpeed);
        currentBgColor[1] = lerp(currentBgColor[1], targetBgColor[1], colorLerpSpeed);
        currentBgColor[2] = lerp(currentBgColor[2], targetBgColor[2], colorLerpSpeed);

        const desaturatedColor = adjustSaturation(currentBgColor, currentSat);
        // Apply dynamic speed-based darkening to lower luminance during fast scroll
        const darkerColor = desaturatedColor.map(c => Math.max(0, Math.min(255, c * darkScale)));
        applyInterpolatedCoverflowBackground(darkerColor);
    }

    // Calculate active index
    let normalizedRotation = currentRotation % 360;
    if (normalizedRotation < 0) normalizedRotation += 360;
    const activeIndex = Math.round(normalizedRotation / rotationAngle) % totalCards;
    const activeIndexFloat = currentRotation / rotationAngle;

    // Trigger card text marquee animations when landing on a card
    if (activeIndex !== lastActiveCardIndex) {
        lastActiveCardIndex = activeIndex;
        updateActiveCardMarquees(activeIndex);
        updateNowPlaying(activeIndex);
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

            // Scaled all translateY/translateZ parameters to 80% to reverse engineer zoom proportion
            if (distance === 0) {
                card.classList.add('active');
                updateAmbientBackground(card);
                
                card.style.opacity = '1';
                card.style.filter = 'brightness(1) saturate(1.2)';
                if (fog) fog.style.opacity = '0';
                
                card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate + 64}px) translateY(-40px) scale(1.30)`;
            } else if (distance === 1) {
                card.classList.remove('active');
                card.style.opacity = '1';
                card.style.filter = 'brightness(0.9) saturate(1.0)';
                if (fog) fog.style.opacity = '0.35';
                
                card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate + 32}px) translateY(16px) rotateY(45deg) scale(1.15)`;
            } else if (distance === 2) {
                card.classList.remove('active');
                card.style.opacity = '1';
                card.style.filter = 'brightness(0.8) saturate(0.9)';
                if (fog) fog.style.opacity = '0.65';
                
                card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate + 8}px) translateY(56px) rotateY(65deg) scale(1.05)`;
            } else if (distance === 3) {
                card.classList.remove('active');
                card.style.opacity = '1';
                card.style.filter = 'brightness(0.7) saturate(0.8)';
                if (fog) fog.style.opacity = '0.85';
                
                card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate}px) translateY(96px) rotateY(80deg) scale(1)`;
            } else {
                card.classList.remove('active');
                card.style.opacity = '0';
                card.style.visibility = 'hidden';
                if (fog) fog.style.opacity = '1';
                card.style.transform = `rotateY(${baseRotateY}deg) translateZ(${zTranslate}px) translateY(96px) rotateY(80deg) scale(1)`;
            }

            // Dynamic z-index prevents 3D overlap bugs
            const zIndex = Math.round(20 - distance * 3);
            card.style.zIndex = zIndex;
        });

    } else if (currentMode === 'coverflow') {
        // Reset parent carousel transform
        carousel.style.transform = `translateZ(0px) rotateY(0deg)`;

        // Responsive Cover Flow spacing: outermost visible cards land on the 5% screen margins.
        // Side cards recede in Z (translateZ < 0), and perspective shrinks their on-screen
        // position by P/(P - z) — that was the "invisible wall" keeping edge cards away from
        // the margin. So we lay cards out in apparent (on-screen) space first, then divide
        // out the perspective factor per card to get the real translateX for the transform.
        const activeSpread = 128; // Apparent gap next to the active card
        const scenePerspective = 960; // Must match .scene { perspective } in style.css
        const edgeMargin = window.innerWidth * 0.05; // 5% screen-width margin on each side

        // Geometry of the outermost fully-visible card (offset 4): after the 55° tilt its
        // outer edge leans toward the viewer, so perspective projects it wider than a flat
        // cos(55°) estimate. Solve the exact translateX that puts that projected outer edge
        // on the 5% margin line, then derive the per-step spacing from it.
        const tilt = 55 * Math.PI / 180;
        const edgeScale = 0.95 - 3 * 0.04; // scale at offset 4
        const edgeZ = -40 - 3 * 96; // translateZ at offset 4
        const edgeHalfW = 144 * edgeScale; // half width of the scaled card
        const edgeDX = edgeHalfW * Math.cos(tilt); // outer-edge x offset from card center
        const edgeDZ = edgeHalfW * Math.sin(tilt); // outer edge leans toward the viewer
        const targetEdgeX = (window.innerWidth / 2) - edgeMargin;
        const tx4 = targetEdgeX * (scenePerspective - (edgeZ + edgeDZ)) / scenePerspective - edgeDX;
        const apparentX4 = tx4 * scenePerspective / (scenePerspective - edgeZ);
        const apparentStep = Math.max(24, (apparentX4 - activeSpread) / 4);

        // Cards are anchored at left:0 of the 224px-wide carousel but are 288px wide in this
        // mode, so every card's center sits 32px right of the scene center. Cancel that
        // pre-projection so the layout is truly symmetric around the screen center.
        const centerCorrection = (288 - 224) / 2;

        cards.forEach((card, index) => {
            let offset = index - activeIndexFloat;
            while (offset > totalCards / 2) offset -= totalCards;
            while (offset < -totalCards / 2) offset += totalCards;

            const absOffset = Math.abs(offset);
            const fog = card.querySelector('.fog-overlay');
            let rotateY = 0;
            let apparentX = 0; // Desired on-screen X; converted to translateX once Z is known
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
                apparentX = lerp(0, offset * apparentStep + (offset > 0 ? activeSpread : -activeSpread), t);
                translateZ = lerp(120, -40, t); // Scaled from 150, -50
                translateY = lerp(-24, 24, t); // Scaled from -30, 30
                scale = lerp(1.25, 1.0, t);
                opacity = 1;
                filter = `brightness(${lerp(1, 0.85, t)})`;
                fogOpacity = lerp(0, 0.2, t);
            } else if (absOffset <= 5) {
                // Side cards tilted inwards (Fog of War: submerged in background color via fog-overlay)
                rotateY = offset > 0 ? -55 : 55;
                apparentX = offset * apparentStep + (offset > 0 ? activeSpread : -activeSpread); // stretch responsive to screen edges
                translateZ = -40 - (absOffset - 1) * 96; // Scaled from -50, 120
                translateY = 24; // Scaled from 30
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
                    discX = lerp(144, 0, absOffset); // slide out smoothly (scaled from 180)
                } else {
                    discX = 0; // completely inside sleeve
                }
                vinylWrapper.style.transform = `translateX(${discX}px)`;
            }

            // Convert apparent (on-screen) X into the real translateX by dividing out the
            // perspective shrink factor P/(P - z) at this card's depth
            translateX = apparentX * (scenePerspective - translateZ) / scenePerspective - centerCorrection;

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
            // Instantly resolve color from cache if present, else trigger async extraction
            if (extractedColorCache[track.cover]) {
                targetBgColor = extractedColorCache[track.cover];
            } else {
                targetBgColor = track.color;
                extractVibrantColor(track.cover, (color) => {
                    if (activeIndex === lastCoverflowIndex) {
                        targetBgColor = color;
                    }
                }, track.color);
            }
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
                translateZ = 160; // Scaled from 200
                translateY = -12; // Lifted slightly (scaled from -15)
                translateX = 0;
                scale = 1.40;
                opacity = 1;
                filter = 'brightness(1) saturate(1.2)';
                fogOpacity = 0;
            } else if (offset > 0) {
                // Receding cards (tunnel going deeper)
                translateZ = 160 - offset * 200; // Scaled from 200 - offset * 250
                translateY = -12 - offset * 20; // Scaled from -15 - offset * 25
                translateX = 0;
                scale = Math.max(0.4, 1.40 - offset * 0.15);
                opacity = 1;
                filter = `brightness(${Math.max(0.3, 0.85 - (offset - 1) * 0.2)})`;
                fogOpacity = Math.min(1.0, 0.2 + offset * 0.25);
            } else {
                // offset < 0: Cards that have already been scrolled past
                // They fly forward past the camera and fade out
                translateZ = 160 - offset * 280; // Scaled from 200 - offset * 350
                translateY = -12 - offset * 96; // Scaled from -15 - offset * 120
                translateX = offset * 176; // Scaled from offset * 220
                rotateY = offset * 45;
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

    } else if (currentMode === 'shuffle' || currentMode === 'shuffle2') {
        // Card 1 / Card 2: film reels on a tilted product-shot plane. Card 1 is
        // driven by the live calibration; Card 2 by its directed preset JSONs.
        // The highlighted card is captured and FROZEN at the plate while reels roll.
        const c = currentMode === 'shuffle2' ? shuffle2Presets[shuffle2Idx].calib : shuffleCalib;
        carousel.style.transform =
            `translate3d(${c.camX || 0}px, ${c.camY || 0}px, ${c.zoom}px) rotateX(${c.tiltX}deg) rotateY(${c.tiltY}deg) rotateZ(${c.tiltZ}deg)`;

        // Live scroll speed drives the optional sub-lane motion blur
        const shuffleSpeed = Math.abs(targetRotation - currentRotation);

        const laneCount = Math.max(3, Math.round(c.lanes) | 1); // odd: 3, 5, or 7
        const midLane = Math.floor(laneCount / 2);
        const laneLen = totalCards / laneCount;
        const yLimit = window.innerHeight * 0.8;

        cards.forEach((card, index) => {
            // Serpentine loop coordinate: leftmost lane -> ... -> rightmost -> wraps.
            // The active card always lands mid-way through the middle lane.
            let s = (activeIndexFloat - index + totalCards / 2) % totalCards;
            if (s < 0) s += totalCards;
            const lane = Math.min(laneCount - 1, Math.floor(s / laneLen));
            const local = s - lane * laneLen;
            const laneD = lane - midLane;               // signed distance from center
            const laneDist = Math.abs(laneD);

            let offset = index - activeIndexFloat;
            while (offset > totalCards / 2) offset -= totalCards;
            while (offset < -totalCards / 2) offset += totalCards;
            const absOffset = Math.abs(offset);
            const isActive = absOffset < 0.5;

            // Lane scale first: spacing is defined as the visible EDGE gap, so the
            // per-card step = scaled card height + gap (equal gaps regardless of size)
            const laneScale = lane === midLane ? c.mainScale : Math.max(0.25, c.subScale * (1 - 0.08 * (laneDist - 1)));
            const cardGap = lane === midLane ? c.mainCardGap : c.subCardGap;
            const stepY = 320 * laneScale + cardGap;

            // Sub-lane speed = phase drift: the lane's whole content scrolls
            // faster/slower (wrapping within the lane) while spacing stays put.
            // The middle lane is locked to the real scroll — the frozen-plate
            // capture depends on its neighbors arriving in true positions.
            let slotLocal = local;
            const subSpd = c.subSpeed || 1;
            if (lane !== midLane && subSpd !== 1) {
                const phase = ((subSpd - 1) * activeIndexFloat * (1 + 0.08 * (laneDist - 1))) % laneLen;
                slotLocal = ((local + phase) % laneLen + laneLen) % laneLen;
            }

            // mainPad pushes both side groups away from the main lane only.
            // stackBase centers the reels; the plate (lockX/lockY) moves ONLY
            // the captured card, never the stack.
            const stackBase = -60;
            const flowX = laneD * c.laneGap + Math.sign(laneD) * (c.mainPad || 0);
            const flowY = (slotLocal - laneLen / 2) * stepY * laneDirection(laneDist) + stackBase;

            // Fade near the lane's wrap point so phase-wrapped cards never pop
            const edgeSlots = Math.min(slotLocal, laneLen - slotLocal);
            const wrapFade = lane === midLane ? 1 : Math.min(1, edgeSlots / 0.6);

            // Lane bend (film-roll curvature): the reels arc away like a strip
            // of film on a drum — a slice of circumference, not a full cylinder.
            // The captured main card stays flat (the bend fades with capture t).
            let bentY = flowY;
            let bentZ = lane === midLane ? 20 : -80 - laneDist * 40;
            let bendRX = 0;
            if (c.laneBend) {
                // "Lane curve" 0..100 (higher = tighter). Convert to a drum radius:
                // 75 reproduces the original Flip-Up arc (radius ~800).
                const bendR = 60000 / c.laneBend;
                const a = (flowY - (-60)) / bendR; // arc angle from the stack base
                bentY = -60 + Math.sin(a) * bendR;
                bentZ += (Math.cos(a) - 1) * bendR;
                bendRX = -a * 57.2958 * 0.8; // tangent tilt along the curve
            }

            // Capture: smoothstep-blend into the frozen plate as a card nears the
            // highlight, and release it back into the reel as it leaves — so the
            // center stays locked while the reels stay loose
            const tRaw = Math.min(1, absOffset);
            const t = tRaw * tRaw * (3 - 2 * tRaw);
            const x = lerp(c.lockX, flowX, t);
            const y = lerp(c.lockY, bentY, t);
            const z = lerp(150, bentZ, t);
            const scale = lerp(c.lockScale, laneScale, t);
            const bright = lerp(1, lane === midLane ? 0.72 : Math.max(0.34, 0.56 - (laneDist - 1) * 0.14), t);

            const fog = card.querySelector('.fog-overlay');
            if (Math.abs(y) > yLimit + 340) {
                card.style.visibility = 'hidden';
                card.style.opacity = 0;
                return;
            }

            card.style.visibility = 'visible';
            card.classList.toggle('active', isActive);
            if (isActive) updateAmbientBackground(card);

            // Main-card tilt: rotate ONLY the captured plate (faded out by 1-t,
            // so reel cards stay flat). Custom 3D pose for the highlighted album.
            const mt = 1 - t;
            const tiltStr = (c.mainTiltX || c.mainTiltY || c.mainTiltZ)
                ? ` rotateX(${(c.mainTiltX * mt).toFixed(2)}deg) rotateY(${(c.mainTiltY * mt).toFixed(2)}deg) rotateZ(${(c.mainTiltZ * mt).toFixed(2)}deg)`
                : '';
            const bendStr = bendRX ? ` rotateX(${(bendRX * t).toFixed(2)}deg)` : '';
            card.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)${bendStr}${tiltStr} scale(${scale})`;
            const edgeFade = Math.abs(y) > yLimit ? Math.max(0, 1 - (Math.abs(y) - yLimit) / 340) : 1;
            card.style.opacity = isActive ? 1 : edgeFade * wrapFade;

            // Optional motion blur: sub-lane cards blur with scroll speed (off by
            // default; strength sets the ceiling). Main lane stays sharp.
            let blurStr = '';
            if (c.motionBlur && lane !== midLane && !isActive) {
                const blurPx = Math.min(c.motionBlurAmt, shuffleSpeed * 0.06);
                if (blurPx > 0.3) blurStr = ` blur(${blurPx.toFixed(1)}px)`;
            }
            card.style.filter = `brightness(${bright}) saturate(${isActive ? 1.15 : 0.9})${blurStr}`;
            card.style.zIndex = isActive ? 40 : Math.round((lane === midLane ? 25 : 12 - laneDist * 3) - absOffset);
            if (fog) fog.style.opacity = isActive ? 0 : Math.min(0.45, 0.1 + t * 0.3);
        });

    } else if (currentMode === 'helix') {
        // Helix Tower: covers spiral up around a 3D axis. Each card sits on a
        // circle (billboarded to face the viewer) and rises with its offset, so
        // scrolling rides the camera along the spiral.
        const R = Math.min(470, window.innerWidth * 0.38);
        carousel.style.transform = `translateZ(${-R}px) rotateY(0deg)`;

        const stepDeg = 24; // angular spacing per album
        const stepY = 52;   // vertical rise per album

        cards.forEach((card, index) => {
            let offset = index - activeIndexFloat;
            while (offset > totalCards / 2) offset -= totalCards;
            while (offset < -totalCards / 2) offset += totalCards;

            const absOffset = Math.abs(offset);
            const fog = card.querySelector('.fog-overlay');

            if (absOffset > 6.5) {
                card.style.visibility = 'hidden';
                card.style.opacity = 0;
                return;
            }

            card.style.visibility = 'visible';
            const isActive = absOffset < 0.5;
            card.classList.toggle('active', isActive);
            if (isActive) updateAmbientBackground(card);

            const theta = offset * stepDeg;
            const scale = absOffset < 1 ? lerp(1.18, 0.96, absOffset) : 0.96;
            // rotateY(theta) translateZ(R) places the card on the circle;
            // rotateY(-theta) billboards it back to face the viewer
            card.style.transform =
                `rotateY(${theta}deg) translateZ(${R}px) rotateY(${-theta}deg) ` +
                `translateY(${offset * stepY - 30}px) scale(${scale})`;

            card.style.opacity = absOffset > 5.5 ? 1 - (absOffset - 5.5) : 1;
            card.style.filter = `brightness(${Math.max(0.45, 1 - absOffset * 0.13)}) saturate(${isActive ? 1.15 : 0.9})`;
            card.style.zIndex = Math.round(20 - absOffset * 2);
            if (fog) fog.style.opacity = Math.min(0.6, absOffset * 0.11);
        });
    }

    // Cursor parallax: ease the perspective origin toward the mouse so the whole
    // 3D stage subtly re-angles itself toward the viewer
    povX = lerp(povX, 50 + mouseNX * 5, 0.06);
    povY = lerp(povY, 50 + mouseNY * 3.5, 0.06);
    if (sceneEl) sceneEl.style.perspectiveOrigin = `${povX.toFixed(2)}% ${povY.toFixed(2)}%`;
    // Keep the Card 2 panel rig's vanishing point identical to the scene's,
    // and track the flat blur proxies onto the panels' projected footprints
    if (currentMode === 'shuffle2' && s2OverlayEl) {
        s2OverlayEl.style.perspectiveOrigin = `${povX.toFixed(2)}% ${povY.toFixed(2)}%`;
        syncS2Proxies();
    }

    // Kinetic marquee: drifts opposite to scroll plus a slight mouse offset.
    // Helix pins the text to the left edge (mouse shift only, no scroll drift,
    // so the first letters stay reliably visible at the left).
    if (backdropMarqueeEl) {
        if (currentMode === 'helix') {
            const drift = -mouseNX * 14;
            backdropMarqueeEl.style.transform = `translateX(${drift.toFixed(1)}px)`;
        } else {
            const drift = -normalizedRotation * 0.8 - mouseNX * 14;
            backdropMarqueeEl.style.transform = `translateX(calc(-50% + ${drift.toFixed(1)}px))`;
        }
    }

    requestAnimationFrame(updateCarousel);
}

// ============================================================================
// Stage system: Now Playing dock, aurora palette, kinetic marquee, parallax
// ============================================================================
const dockTitleEl = document.getElementById('dockTitle');
const dockArtistEl = document.getElementById('dockArtist');
const dockStepsEl = document.getElementById('dockSteps');
const backdropMarqueeEl = document.getElementById('backdropMarquee');
const marqueeTextEl = document.getElementById('marqueeText');
const sceneEl = document.querySelector('.scene');
let marqueeSwapTimer = null;
let lastDockIndex = -1;
let lastStepIdx = -1;

// Shortest-path jump to an album index (same wrap math as clicking a card)
function jumpToIndex(index) {
    const currentActiveFloat = targetRotation / rotationAngle;
    let activeFloat = currentActiveFloat % totalCards;
    if (activeFloat < 0) activeFloat += totalCards;
    let diff = index - activeFloat;
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;
    targetRotation += diff * rotationAngle;
}

// Build one clickable step per album for the dock's segmented indicator
if (dockStepsEl) {
    for (let i = 0; i < totalCards; i++) {
        const step = document.createElement('div');
        step.className = 'dock-step';
        step.title = `${tracks[i].title} — ${tracks[i].artist}`;
        step.addEventListener('click', () => jumpToIndex(i));
        dockStepsEl.appendChild(step);
    }
}

// HSL -> RGB helper (h: 0-360, s/l: 0-100) — companion to rgbToHsl above
function hslToRgb(h, s, l) {
    s /= 100; l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

// Derive the UI accents + aurora stage lights from the album's own palette.
// The secondary accent comes from the artwork's second dominant hue whenever
// the extractor found one (Enemy: red + purple-blue; Purple Rain: orange +
// purple); only when a cover is truly monochrome do we fall back to an
// analogous shade 50° away — never an arbitrary complementary that breaks theme.
function setAccentPalette(rgb, rgb2) {
    const [h, s] = rgbToHsl(rgb[0], rgb[1], rgb[2]);
    const root = document.documentElement.style;

    // Accent stays bright and readable regardless of how dark the album art is
    const accent = hslToRgb(h, Math.min(85, Math.max(45, s)), 62);
    root.setProperty('--accent-rgb', accent.join(', '));

    let h2, s2;
    if (rgb2) {
        [h2, s2] = rgbToHsl(rgb2[0], rgb2[1], rgb2[2]);
    } else {
        h2 = (h + 310) % 360;
        s2 = s;
    }
    const accent2 = hslToRgb(h2, Math.min(85, Math.max(50, s2)), 62);
    root.setProperty('--accent2-rgb', accent2.join(', '));

    // Stage lights: primary hue, the artwork's companion hue, and one analogous
    const c1 = hslToRgb(h, Math.min(80, s + 10), 30);
    const c2 = hslToRgb(h2, Math.min(75, s2 + 5), 24);
    const c3 = hslToRgb((h + 40) % 360, Math.min(70, s), 26);
    root.setProperty('--aurora-c1', `rgb(${c1.join(',')})`);
    root.setProperty('--aurora-c2', `rgb(${c2.join(',')})`);
    root.setProperty('--aurora-c3', `rgb(${c3.join(',')})`);
}

function updateNowPlaying(index) {
    const track = tracks[index];
    if (!track || index === lastDockIndex) return;
    lastDockIndex = index;

    if (dockTitleEl) {
        resetLoopingText(dockTitleEl);
        dockTitleEl.textContent = track.title;
        requestAnimationFrame(() => applyLoopingText(dockTitleEl));
    }
    if (dockArtistEl) dockArtistEl.textContent = track.artist;

    // Skip the highlight along the segmented steps, flashing every step on the
    // path so fast scrolls leave a white fading trail instead of vanishing
    if (dockStepsEl) {
        const steps = dockStepsEl.children;
        if (lastStepIdx >= 0 && lastStepIdx !== index && steps.length) {
            let d = index - lastStepIdx;
            if (d > totalCards / 2) d -= totalCards;
            if (d < -totalCards / 2) d += totalCards;
            const dir = d > 0 ? 1 : -1;
            for (let k = lastStepIdx; k !== index; k = (k + dir + totalCards) % totalCards) {
                if (steps[k]) steps[k].classList.add('flash');
            }
            requestAnimationFrame(() => requestAnimationFrame(() => {
                for (const s of steps) s.classList.remove('flash');
            }));
        }
        lastStepIdx = index;
        for (let i = 0; i < steps.length; i++) {
            steps[i].classList.toggle('active', i === index);
        }
    }

    setAccentPalette(
        extractedColorCache[track.cover] || track.color,
        extractedSecondaryCache[track.cover] || null
    );

    // Card 2 contextual panels follow the active album like Rolling Album does
    // (skeleton-gated: data hides during fast scroll, eases back in on settle)
    if (currentMode === 'shuffle2') requestShuffle2Overlay(index);

    // Crossfade the giant marquee to the new artist (fast — landing should pop)
    if (backdropMarqueeEl && marqueeTextEl) {
        backdropMarqueeEl.classList.add('swapping');
        clearTimeout(marqueeSwapTimer);
        marqueeSwapTimer = setTimeout(() => {
            marqueeTextEl.textContent = track.artist.toUpperCase();
            backdropMarqueeEl.classList.remove('swapping');
        }, 160);
    }
}

// Dock prev/next rotate the carousel by exactly one card
const dockPrevBtn = document.getElementById('dockPrev');
const dockNextBtn = document.getElementById('dockNext');
if (dockPrevBtn) dockPrevBtn.addEventListener('click', () => { targetRotation -= rotationAngle; });
if (dockNextBtn) dockNextBtn.addEventListener('click', () => { targetRotation += rotationAngle; });

// Cursor parallax: the 3D camera gently follows the mouse (lerped in the rAF loop)
let mouseNX = 0, mouseNY = 0, povX = 50, povY = 50;
window.addEventListener('mousemove', (e) => {
    mouseNX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseNY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// Start the animation loop
updateCarousel();

// ============================================================================
// Liquid Glass: TRUE light refraction (not just frosted blur)
// ----------------------------------------------------------------------------
// How it works:
//   1. We generate a "displacement map" image sized exactly to the element:
//      the Red channel encodes horizontal shift, the Blue channel encodes
//      vertical shift (127 = no shift). The map is neutral grey in the middle
//      and ramps to full shift at the edges — the profile of a convex lens.
//   2. An SVG <feDisplacementMap> uses that map to bend whatever is BEHIND the
//      element (via backdrop-filter: url(#filter)), so the background visually
//      refracts through the rim like real curved glass.
//   3. We run the displacement 3 times at slightly different strengths for the
//      R / G / B channels and screen-blend them back together — that produces
//      the faint chromatic aberration (color fringing) Apple's material has.
// Only Chromium supports SVG filters inside backdrop-filter, so Safari and
// Firefox keep the frosted-blur fallback declared in style.css.
// ============================================================================
const lensDefs = document.getElementById('liquidGlassDefs');
const supportsLensRefraction = !!window.chrome &&
    typeof CSS !== 'undefined' &&
    CSS.supports('backdrop-filter', 'url(#lens)');

function buildLensFilter(id, width, height, radius, bezel, strength, aberration) {
    const w = Math.round(width);
    const h = Math.round(height);
    const coreRadius = Math.max(0, radius - bezel);

    // The displacement map: black base + red X-gradient + blue Y-gradient,
    // with a blurred neutral core so only the rim (the "bezel") refracts
    const mapSvg =
        `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">` +
        `<defs>` +
        `<linearGradient id="gx" x1="0" y1="0" x2="1" y2="0">` +
        `<stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#f00"/>` +
        `</linearGradient>` +
        `<linearGradient id="gy" x1="0" y1="0" x2="0" y2="1">` +
        `<stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#00f"/>` +
        `</linearGradient>` +
        `<filter id="soften" x="-50%" y="-50%" width="200%" height="200%">` +
        `<feGaussianBlur stdDeviation="${(bezel / 2).toFixed(1)}"/>` +
        `</filter>` +
        `</defs>` +
        `<rect width="${w}" height="${h}" fill="#000"/>` +
        `<rect width="${w}" height="${h}" fill="url(#gx)" style="mix-blend-mode:screen"/>` +
        `<rect width="${w}" height="${h}" fill="url(#gy)" style="mix-blend-mode:screen"/>` +
        `<rect x="${bezel}" y="${bezel}" width="${w - bezel * 2}" height="${h - bezel * 2}" ` +
        `rx="${coreRadius}" fill="rgb(127,0,127)" filter="url(#soften)"/>` +
        `</svg>`;
    const mapHref = `data:image/svg+xml,${encodeURIComponent(mapSvg)}`;

    let filter = document.getElementById(id);
    if (!filter) {
        filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        filter.setAttribute('id', id);
        lensDefs.appendChild(filter);
    }
    filter.setAttribute('filterUnits', 'userSpaceOnUse');
    filter.setAttribute('color-interpolation-filters', 'sRGB');
    filter.setAttribute('x', '0');
    filter.setAttribute('y', '0');
    filter.setAttribute('width', w);
    filter.setAttribute('height', h);

    // Refract each color channel at a slightly different strength, then
    // screen-blend them back together for chromatic aberration on the rim
    filter.innerHTML =
        `<feImage href="${mapHref}" x="0" y="0" width="${w}" height="${h}" result="map"/>` +
        `<feDisplacementMap in="SourceGraphic" in2="map" scale="${strength + aberration}" xChannelSelector="R" yChannelSelector="B" result="dispR"/>` +
        `<feColorMatrix in="dispR" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="chanR"/>` +
        `<feDisplacementMap in="SourceGraphic" in2="map" scale="${strength}" xChannelSelector="R" yChannelSelector="B" result="dispG"/>` +
        `<feColorMatrix in="dispG" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="chanG"/>` +
        `<feDisplacementMap in="SourceGraphic" in2="map" scale="${strength - aberration}" xChannelSelector="R" yChannelSelector="B" result="dispB"/>` +
        `<feColorMatrix in="dispB" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="chanB"/>` +
        `<feBlend in="chanR" in2="chanG" mode="screen" result="blendRG"/>` +
        `<feBlend in="blendRG" in2="chanB" mode="screen"/>`;
}

function applyLiquidGlass(el, id, options = {}) {
    if (!el || !lensDefs) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const radius = options.radius ?? rect.height / 2; // both glass elements are pills
    const bezel = options.bezel ?? Math.min(15, rect.height * 0.34);
    const strength = options.strength ?? 64;
    const aberration = options.aberration ?? 10;

    buildLensFilter(id, rect.width, rect.height, radius, bezel, strength, aberration);

    // url() refraction first, then a whisper of blur to soften the bent edges,
    // then saturate/brighten so the glass "lifts" colors like Apple's material
    el.style.backdropFilter = `url(#${id}) blur(1.5px) saturate(1.7) brightness(1.06)`;
}

function refreshLiquidGlass() {
    if (!supportsLensRefraction) return;
    applyLiquidGlass(document.querySelector('.mode-selector'), 'lens-selector', { radius: 16 });
    applyLiquidGlass(document.querySelector('.title-overlay p'), 'lens-hint', { strength: 48, aberration: 8 });
    applyLiquidGlass(document.querySelector('.now-playing-dock'), 'lens-dock', { radius: 16, strength: 56, aberration: 9 });
}

if (supportsLensRefraction) {
    window.addEventListener('load', refreshLiquidGlass);

    let lensResizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(lensResizeTimer);
        lensResizeTimer = setTimeout(refreshLiquidGlass, 150);
    });

    if (document.fonts) {
        document.fonts.ready.then(refreshLiquidGlass);
    }
    refreshLiquidGlass();
}
