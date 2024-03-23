let pop_song_left = document.getElementById("pop-song-left")
let pop_song_right = document.getElementById("pop-song-right")
let pop_song = document.getElementsByClassName("pop-song")[0]
let title_card = document.getElementById("title_card")
let menu_list_active_button = document.getElementById("menu-list-active-button")
let menu_side = document.getElementsByClassName('menu-side')[0]
    
menu_list_active_button.addEventListener("click", () => {
    menu_side.style.transform = "unset";
    menu_list_active_button.style.opacity = "1";
})

// let song_side = document.getElementsByClassName('song-side')[0]

// song_side.addEventListener("click", () => {
//     menu_side.style.transform = "translateX(-100%)";
//     menu_list_active_button.style.opacity = "1";
// })
let caret = document.getElementById("caret-upp");
let songSide = document.querySelector('.song-side');
let banner = document.querySelector('.banner');
let pic = document.querySelector(".pic")
let playlist = document.querySelector(".plist")
pic.addEventListener("click", () => {
// Toggle visibility of specific elements
songSide.style.display = "none";
banner.style.display = "block";
pic.classList.add("active")
playlist.classList.remove("active")
});

playlist.addEventListener("click", () => {
// Toggle visibility of specific elements
songSide.style.display = "block";
banner.style.display = "none";
playlist.classList.add("active")
pic.classList.remove("active")
});



pop_song_right.addEventListener("click", () => {
    pop_song.scrollLeft += 500
})

pop_song_left.addEventListener("click", () => {
    pop_song.scrollLeft -= 500
})

let pop_artist_left = document.getElementById("pop-artist-left")
let pop_artist_right = document.getElementById("pop-artist-right")
let pop_artist = document.getElementsByClassName("item")[0]

pop_artist_right.addEventListener("click", () => {
    pop_artist.scrollLeft += 330
})

pop_artist_left.addEventListener("click", () => {
    pop_artist.scrollLeft -= 330
})

let music = new Audio('Run This Town/1.mp3')

let songs = [
    {
        id: 1,
        songName: `Highest In The Room <br> <div class="subtitle">Travis Scott</div>`,
        poster: "1.jpg"
    },
    {
        id: 2,
        songName: `Too Many Nights <br> <div class="subtitle">Metro Boomin</div>`,
        poster: "2.jpg"
    },
    {
        id: 3,
        songName: `My Eyes <br> <div class="subtitle">Travis Scott</div>`,
        poster: "3.jpg"
    },
    {
        id: 4,
        songName: `Softcore <br> <div class="subtitle">The Neighbourhood</div>`,
        poster: "4.jpg"
    },
    {
        id: 5,
        songName: `Blood Code <br> <div class="subtitle">Le Castle Vania</div>`,
        poster: "5.jpg"
    },
    {
        id: 6,
        songName: `Superhero (Heroes & Villains)<br> <div class="subtitle">Metro Boomin, Chris Brown, Future</div>`,
        poster: "6.jpg"
    },
    {
        id: 7,
        songName: `28 Days Later - Batman <br> <div class="subtitle">Alfred (The Butler)</div>`,
        poster: "7.jpg"
    },
    {
        id: 8,
        songName: `Mala (Fast 9) <br> <div class="subtitle">Jarina De Marco</div>`,
        poster: "8.jpg"
    },
    {
        id: 9,
        songName: `Gasolina <br> <div class="subtitle"> Daddy Yankee, Myke Towers</div>`,
        poster: "9.jpg"
    },
    {
        id: 10,
        songName: `Living Life In The Night <br> <div class="subtitle">Cheriimoya, Sierra Kidd</div>`,
        poster: "10.jpg"
    },
    {
        id: 11,
        songName: `On My Own <br> <div class="subtitle">Darci</div>`,
        poster: "11.jpg"
    },
    {
        id: 12,
        songName: `Go Down Deh <br> <div class="subtitle">Spice, Shaggy, Sean Paul</div>`,
        poster: "12.jpg"
    },
    {
        id: 13,
        songName: `Rodeo [Remix]<br> <div class="subtitle">Lah Pat (feat. Flo Milli)</div>`,
        poster: "13.jpg"
    },
    {
        id: 14,
        songName: `Babydoll x The Perfect Girl <br> <div class="subtitle">DJ Fronteo</div>`,
        poster: "14.jpg"
    }
]

// Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
//     e.getElementsByTagName('img')[0].src = songs[i].poster;
//     e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
// });


// search data start
let search_results = document.getElementsByClassName('search-results')[0]

songs.forEach(element => {
    const {id, songName, poster} = element
    let card = document.createElement('a');
    card.classList.add('cards')
    card.href = "#" + id;
    card.innerHTML = `<img src="Run This Town/${poster}" alt="">
                            <div class="con">
                              ${songName}
                        </div>`

    search_results.appendChild(card)
})
let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('con')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";

            // Add a click event listener to each card
            items[i].addEventListener('click', function() {
                // Extract the song ID from the href attribute
                let songId = parseInt(this.href.split('#')[1]);

                // Call the changeSong function with the song ID
                changeSong(songId);

                // Optionally, close the search results or perform other actions
                search_results.style.display = "none";
            });
        } else {
            items[i].style.display = "none";
        }
    }

    if (input_value === '') {
        search_results.style.display = "none";
    } else {
        search_results.style.display = "";
    }
});

function changeSong(index) {
    music.src = `Run This Town/${index}.mp3`;
    poster_master_play.src = `Run This Town/${index}.jpg`;
    title_card.src = `Run This Town/${index}.jpg`
    banner.style.backgroundImage = `url('Run This Town/${index}.jpg')`;
    music.play();
    play_btn.classList.remove('bi-play-fill');
    play_btn.classList.add('bi-pause-fill');
    download.href = `Run This Town/${index}.mp3`;

    let songTitles = songs.filter((els) => els.id == index);

    songTitles.forEach((elss) => {
        let { songName } = elss;
        title.innerHTML = songName;
        download.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

    makeAllPlay();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active');
}



let play_btn = document.getElementById("play-btn")
let wave = document.getElementById("wave")

play_btn.addEventListener("click", () => {
    if(music.paused || music.currentTime <= 0) {
        music.play()
        wave.classList.add('active')
        play_btn.classList.remove('bi-play-fill')
        play_btn.classList.add('bi-pause-fill')
    } else{
        music.pause()
        wave.classList.remove('active')
        play_btn.classList.remove('bi-pause-fill')
        play_btn.classList.add('bi-play-fill')
    }
})

let makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playistPlay')).forEach((el) => {
        el.classList.remove('bi-pause-circle-fill')
        el.classList.add('bi-play-circle-fill')
    })
}


let index = 1
let poster_master_play = document.getElementById("poster-master-play")
let download = document.getElementById("download-music")
let title = document.getElementById("title")
function handleKeyDown(event) {
    const key = event.key;

    // Check if the key is either left arrow or right arrow
    if (key === "ArrowLeft" || key === "ArrowRight") {
        // Determine the direction and adjust the currentTime accordingly
        const skipAmount = 10;
        if (key === "ArrowLeft") {
            music.currentTime -= skipAmount;
        } else {
            music.currentTime += skipAmount;
        }

        // Prevent the default behavior of the arrow keys (e.g., scrolling the page)
        event.preventDefault();
    }

    // Check if the key is the spacebar to play/pause
    else if (key === " ") {
        if (music.paused) {
            music.play();
            play_btn.classList.remove('bi-play-fill');
            play_btn.classList.add('bi-pause-fill');
        } else {
            music.pause();
            play_btn.classList.remove('bi-pause-fill');
            play_btn.classList.add('bi-play-fill');
        }

        // Prevent the default behavior of the spacebar (e.g., scrolling the page)
        event.preventDefault();
    }

    // Check if the key is the up arrow or down arrow to change volume
    else if (key === "ArrowUp" || key === "ArrowDown") {
        // Determine the direction and adjust the volume accordingly
        const volumeChangeAmount = 0.1; // You can adjust this value as needed
        if (key === "ArrowUp") {
            music.volume = Math.min(1, music.volume + volumeChangeAmount);
        } else {
            music.volume = Math.max(0, music.volume - volumeChangeAmount);
        }

        // Update the volume input value
        vol.value = music.volume * 100;

        // Trigger the input event to update the volume bar
        const inputEvent = new Event('input');
        vol.dispatchEvent(inputEvent);

        // Prevent the default behavior of the arrow keys (e.g., scrolling the page)
        event.preventDefault();
    }
}
Array.from(document.getElementsByClassName('playListPlay')).forEach((e, i) => {
    e.addEventListener("click", (el) => {
        document.body.removeEventListener('keydown', handleKeyDown);

        // Add the new event listener for the keydown event
        document.body.addEventListener('keydown', handleKeyDown);
        index = el.target.id
        music.src = `Run This Town/${index}.mp3`
        poster_master_play.src = `Run This Town/${index}.jpg`
        title_card.src = `Run This Town/${index}.jpg`
    banner.style.backgroundImage = `url('Run This Town/${index}.jpg')`;

        // Listen for the 'canplay' event before attempting to play
        music.addEventListener('canplay', () => {
            music.play();
            play_btn.classList.remove('bi-play-fill');
            play_btn.classList.add('bi-pause-fill');
            download.href = `Run This Town/${index}.mp3`;

            let songTitles = songs.filter((els) => {
                return els.id == index;
            });

            songTitles.forEach((elss) => {
                let { songName } = elss;
                title.innerHTML = songName;
                download.setAttribute('download', songName);
            });

            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

            makeAllPlay();
            el.target.classList.add('bi-pause-circle-fill');
            el.target.classList.remove('bi-play-circle-fill');
            wave.classList.add('active');
        });
    });
});


let currentStart = document.getElementById("current-start");
let currentEnd = document.getElementById("current-end");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
    let music_curr = music.currentTime;
    let music_duration = music.duration;

    let minute1 = Math.floor(music_duration / 60);
    let second1 = Math.floor(music_duration % 60);
    if (second1 < 10) {
        second1 = `0${second1}`;
    }

    currentEnd.innerText = `${minute1}:${second1}`;

    let minute2 = Math.floor(music_curr / 60);
    let second2 = Math.floor(music_curr % 60);
    if (second2 < 10) {
        second2 = `0${second2}`;
    }

    currentStart.innerText = `${minute2}:${second2}`;
});

seek.oninput = function () {
    music.currentTime = (seek.value / 100) * music.duration;
};

music.addEventListener("timeupdate", () => {
    let percentage = (music.currentTime / music.duration) * 100;
    seek.value = percentage;
    bar2.style.width = `${percentage}%`;
    dot.style.left = `${percentage}%`;
});


let vol_icon = document.getElementById("vol-icon")
let vol = document.getElementById("vol")
let vol_bar = document.getElementsByClassName("vol-bar")[0]
let vol_dot = document.getElementById("vol-dot")

vol.addEventListener("input", () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.add('bi-volume-off-fill')
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.add('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-off-fill')
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-off-fill')
    }

    let vol_a = vol.value
    vol_bar.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100
})

let back = document.getElementById("back")
let next = document.getElementById("next")

back.addEventListener("click", () => {
    index--
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length
    }
    music.src = `Run This Town/${index}.mp3`
    poster_master_play.src = `Run This Town/${index}.jpg`
    title_card.src = `Run This Town/${index}.jpg`
    banner.style.backgroundImage = `url('Run This Town/${index}.jpg')`;
    music.play()
    play_btn.classList.remove('bi-play-fill')
    play_btn.classList.add('bi-pause-fill')
    let songTitles = songs.filter((els) => {
        return els.id == index
    })
    songTitles.forEach((elss) => {
        let {songName} = elss
        title.innerHTML = songName
    })
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active')
})

next.addEventListener("click", () => {
    index++
    let newIndex = Array.from(document.getElementsByClassName('songItem')).length
    if(index > newIndex){
        index = 1
    }
    music.src = `Run This Town/${index}.mp3`
    poster_master_play.src = `Run This Town/${index}.jpg`
    title_card.src = `Run This Town/${index}.jpg`
    banner.style.backgroundImage = `url('Run This Town/${index}.jpg')`;
    music.play()
    play_btn.classList.remove('bi-play-fill')
    play_btn.classList.add('bi-pause-fill')
    let songTitles = songs.filter((els) => {
        return els.id == index
    })
    songTitles.forEach((elss) => {
        let {songName} = elss
        title.innerHTML = songName
    })
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active')
})

let shuffle = document.getElementsByClassName('shuffle')[0]

shuffle.addEventListener("click", () => {
    let a = shuffle.innerHTML

    switch(a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle')
            shuffle.innerHTML = 'repeat'
            break;

            case "repeat":
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.add('bi-shuffle')
            shuffle.innerHTML = 'random'
            break;

            case "random":
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.add('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle')
            shuffle.innerHTML = 'next'
            break;
    }
})

let nextMusic = () => {
    if(index == songs.length) {
        index = 1
    } else{
        index++
    }
    music.src = `Run This Town/${index}.mp3`
    poster_master_play.src = `Run This Town/${index}.jpg`
    title_card.src = `Run This Town/${index}.jpg`
    banner.style.backgroundImage = `url('Run This Town/${index}.jpg')`;
    music.play()
    play_btn.classList.remove('bi-play-fill')
    play_btn.classList.add('bi-pause-fill')
    download.href = `Run This Town/${index}.mp3`
    
    let songTitles = songs.filter((els) => {
        return els.id == index
    })

    songTitles.forEach((elss) => {
        let {songName} = elss
        title.innerHTML = songName
        download.setAttribute('download', songName);
    })

    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, .1)'

    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active')
}

let repeatMusic = () => {
    index; 
    music.src = `Run This Town/${index}.mp3`
    poster_master_play.src = `Run This Town/${index}.jpg`
    title_card.src = `Run This Town/${index}.jpg`
    banner.style.backgroundImage = `url('Run This Town/${index}.jpg')`;
    music.play()
    play_btn.classList.remove('bi-play-fill')
    play_btn.classList.add('bi-pause-fill')
    download.href = `Run This Town/${index}.mp3`
    
    let songTitles = songs.filter((els) => {
        return els.id == index
    })

    songTitles.forEach((elss) => {
        let {songName} = elss
        title.innerHTML = songName
        download.setAttribute('download', songName);
    })

    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, .1)'

    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active')
}

let randonMusic = () => {
    if(index == songs.length) {
        index = 1
    } else{
        index = Math.floor((Math.random() * songs.length) + 1);
    } 
    music.src = `Run This Town/${index}.mp3`
    poster_master_play.src = `Run This Town/${index}.jpg`
    title_card.src = `Run This Town/${index}.jpg`
    banner.style.backgroundImage = `url('Run This Town/${index}.jpg')`;
    music.play()
    play_btn.classList.remove('bi-play-fill')
    play_btn.classList.add('bi-pause-fill')
    download.href = `Run This Town/${index}.mp3`
    
    let songTitles = songs.filter((els) => {
        return els.id == index
    })

    songTitles.forEach((elss) => {
        let {songName} = elss
        title.innerHTML = songName
        download.setAttribute('download', songName);
    })

    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, .1)'

    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active')
}

music.addEventListener("ended", () => {
    let b = shuffle.innerHTML;

    switch(b){
        case "repeat":
            repeatMusic()
            break;
        case "next":
            nextMusic()
            break;
        case "random":
            randonMusic()
            break;
    }
})

