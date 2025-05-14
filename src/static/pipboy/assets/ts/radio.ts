// List of songs
const songs: string[] = [
    "A Wonderful Guy - Diamond City Radio - Fallout 4.mp3",
    "Accentuate the Positive - Bing Crosby - Fallout 4.mp3",
    "Anything Goes - Diamond City Radio - Fallout 4.mp3",
    "Atom Bomb Baby - Diamond City Radio - Fallout 4.mp3",
    "Butcher Pete - Roy Brown.mp3",
    "Crazy He Calls Me - Billie Holiday - Fallout 3.mp3",
    "Civilization - Fallout 3.mp3",
    "The End of the World - Skeeter Davis - Fallout 4.mp3",
    "The Wanderer - Dion And Belmonts.mp3",
    "Uranium Fever - Fallout 4.mp3",
    "A Kiss to Build a Dream On - Louis Armstrong.mp3",
    "Ain't That A Kick In The Head.mp3",
    "Big Iron - Marty Robbins.mp3",
    "Rocket 69 - Connie Allen .mp3",
    "Take Me Home, Country Roads - Fallout 76.mp3"
];

// Click event for music selection
$('a').on('click', function(e: JQuery.ClickEvent): void {
    $('a').removeClass('music-focus');
    $(e.currentTarget).addClass('music-focus');
});

// Audio player elements and state
const songSlider: HTMLInputElement = document.getElementById('songSlider') as HTMLInputElement;
const song: HTMLAudioElement = new Audio();
let currentSong: number = 0;

/**
 * Load and play a song
 * @param which - Index of the song to load
 */
function loadSong(which: number): void {
    song.src = "Radio Music/" + songs[which];
    song.play();
    currentSong = which;
    
    const playPauseCheck = document.getElementById('play-pause-check') as HTMLImageElement;
    if (playPauseCheck) {
        playPauseCheck.src = 'Radio Music/pause button.png';
    }
    
    setTimeout(showDuration, 1000);
    
    $(document).ready(function() {
        $('.wave').css({
            top: "220px",
        });
        $('.wave span').addClass('wave-span-active');
    });
}

// Update song slider periodically
setInterval(updateSongSlider, 500);

/**
 * Update the song slider position based on current playback time
 */
function updateSongSlider(): void {
    const c: number = Math.round(song.currentTime);
    songSlider.value = c.toString();
    if (song.ended) {
        next();
    }
}

/**
 * Set the maximum value of the song slider based on song duration
 */
function showDuration(): void {
    const d: number = Math.floor(song.duration);
    songSlider.setAttribute("max", d.toString());
}

/**
 * Toggle play/pause state
 * @param img - The play/pause button image element
 */
function playPause(img: HTMLImageElement): void {
    if (song.paused) {
        song.play();
        img.src = "Radio Music/pause button.png";
        $(document).ready(function() {
            $('.wave').css({
                top: "220px",
            });
            $('.wave span').addClass('wave-span-active');
        });
    } else {
        song.pause();
        img.src = "Radio Music/play button.png";
        $(document).ready(function() {
            $('.wave').css({
                top: "220px",
            });
            $('.wave span').removeClass('wave-span-active');
        });
    }
}

/**
 * Play the next song in the playlist
 */
function next(): void {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    $(this).on('click', function(e: JQuery.ClickEvent): void {
        const whenPressedNext = document.getElementsByClassName('music-focus');
        const dadu = $(whenPressedNext).nextSibling;
        $(whenPressedNext).removeClass('music-focus');
        $(dadu).addClass('music-focus');
    });
}

/**
 * Play the previous song in the playlist
 */
function previous(): void {
    currentSong--;
    currentSong = (currentSong < 0) ? (songs.length - 1) : currentSong;
    loadSong(currentSong);
}

/**
 * Replay the current song
 */
function replay(): void {
    loadSong(currentSong);
}

/**
 * Seek to a specific position in the song
 */
function seekSong(): void {
    song.currentTime = parseInt(songSlider.value);
}

/**
 * Toggle mute state
 * @param mute_image - The mute button image element
 */
function mute(mute_image: HTMLImageElement): void {
    if (song.volume === 0) {
        song.volume = 1;
        mute_image.src = "Radio Music/mute.png";
    } else {
        song.volume = 0;
        mute_image.src = "Radio Music/mute active.png";
    }
}

/**
 * Shuffle the playlist
 */
function shuffle(): void {
    myShuffle();
    console.log(songs);
}

/**
 * Implementation of Fisher-Yates shuffle algorithm
 * @returns The shuffled array of songs
 */
function myShuffle(): string[] {
    let currentIndex: number = songs.length;
    let temporaryValue: string;
    let randomIndex: number;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = songs[currentIndex];
        songs[currentIndex] = songs[randomIndex];
        songs[randomIndex] = temporaryValue;
    }
    
    return songs;
}