// =========================================================
// NEHA'S PERSONAL PAGE
// =========================================================



// =========================================================
// MUSIC
// =========================================================

function playMusic() {

    const music =
        document.getElementById("birthdaySong");

    const button =
        document.querySelector(".love-button");


    if (!music) {

        console.error(
            "Audio element not found."
        );

        return;

    }


    // =========================================
    // PLAY
    // =========================================

    if (music.paused) {

        music.play()

            .then(() => {

                if (button) {

                    button.innerHTML =
                        '<span class="button-icon">💗</span> Playing for You...';

                }


                // Heart burst when music starts

                createHeartBurst();

            })


            .catch((error) => {

                console.error(
                    "Music could not play:",
                    error
                );


                alert(
                    "Music could not start. Please make sure Saiyaara_Female_Music.mp3 is inside the Assets folder."
                );

            });

    }


    // =========================================
    // PAUSE
    // =========================================

    else {

        music.pause();


        if (button) {

            button.innerHTML =
                '<span class="button-icon">🎧</span> A Message for You';

        }

    }

}



// Reset button when song finishes

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const music =
            document.getElementById(
                "birthdaySong"
            );


        if (!music) {
            return;
        }


        music.addEventListener(
            "ended",
            () => {

                const button =
                    document.querySelector(
                        ".love-button"
                    );


                if (button) {

                    button.innerHTML =
                        '<span class="button-icon">🎧</span> A Message for You';

                }

            }
        );

    }
);



// =========================================================
// THEMES
// =========================================================

const themes = [

    {

        "--primary-color":
            "#ff4081",

        "--secondary-color":
            "rgba(255,228,225,0.88)",

        "--background-color":
            "#ffecd1"

    },


    {

        "--primary-color":
            "#15B5B0",

        "--secondary-color":
            "rgba(250,220,217,0.88)",

        "--background-color":
            "#D4F1F4"

    },


    {

        "--primary-color":
            "#6c63ff",

        "--secondary-color":
            "rgba(232,234,246,0.90)",

        "--background-color":
            "#c5cae9"

    }

];


let currentTheme = 0;



function changeTheme() {

    currentTheme =
        (currentTheme + 1)
        % themes.length;


    const theme =
        themes[currentTheme];


    Object.keys(theme).forEach(
        variable => {

            document.documentElement.style.setProperty(
                variable,
                theme[variable]
            );

        }
    );


    // Heart burst

    createHeartBurst();

}



// =========================================================
// LOVE SYMBOLS
// =========================================================

const loveSymbols = [

    "♥",

    "♡",

    "❤",

    "💗",

    "💖",

    "💕"

];



// =========================================================
// CONTINUOUS LOVE RAIN
// =========================================================

const loveRain =
    document.getElementById(
        "love-rain"
    );


let loveRainInterval = null;



function createLoveRainHeart() {

    if (!loveRain) {
        return;
    }


    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        "love-rain-heart";


    // Random heart

    heart.textContent =
        loveSymbols[
            Math.floor(
                Math.random()
                * loveSymbols.length
            )
        ];


    // Random horizontal position

    heart.style.left =
        `${Math.random() * 100}%`;


    // Random size

    heart.style.fontSize =
        `${12 + Math.random() * 22}px`;


    // Random opacity

    heart.style.opacity =
        `${0.25 + Math.random() * 0.5}`;


    // Random movement

    heart.style.setProperty(

        "--sway",

        `${Math.random() * 160 - 80}px`

    );


    heart.style.setProperty(

        "--sway-end",

        `${Math.random() * 220 - 110}px`

    );


    // Random speed

    const duration =
        7 + Math.random() * 8;


    heart.style.animationDuration =
        `${duration}s`;


    loveRain.appendChild(
        heart
    );


    // Remove after animation

    setTimeout(
        () => {

            heart.remove();

        },

        (duration + 1) * 1000

    );

}



// Start love rain

function startLoveRain() {

    if (
        loveRainInterval ||
        !loveRain
    ) {

        return;

    }


    loveRainInterval =
        setInterval(
            createLoveRainHeart,
            350
        );

}



// Stop love rain

function stopLoveRain() {

    if (!loveRainInterval) {
        return;
    }


    clearInterval(
        loveRainInterval
    );


    loveRainInterval =
        null;

}



// Start immediately

startLoveRain();



// Create some hearts immediately

for (
    let i = 0;
    i < 15;
    i++
) {

    setTimeout(
        createLoveRainHeart,
        i * 150
    );

}



// =========================================================
// SMALL FLOATING HEARTS
// =========================================================

const heartContainer =
    document.getElementById(
        "heart-container"
    );



function createFloatingHeart() {

    if (!heartContainer) {
        return;
    }


    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        "floating-heart";


    heart.textContent =
        loveSymbols[
            Math.floor(
                Math.random()
                * loveSymbols.length
            )
        ];


    // Position

    heart.style.left =
        `${Math.random() * 100}%`;


    // Movement

    heart.style.setProperty(

        "--drift",

        `${Math.floor(
            Math.random() * 180
        ) - 90}px`

    );


    // Size

    heart.style.fontSize =
        `${14 + Math.random() * 18}px`;


    // Speed

    heart.style.animationDuration =
        `${7 + Math.random() * 7}s`;


    heartContainer.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },

        15000

    );

}



// Small floating hearts

setInterval(
    createFloatingHeart,
    1200
);



// =========================================================
// HEART BURST
// =========================================================

function createHeartBurst() {

    if (!heartContainer) {
        return;
    }


    for (
        let i = 0;
        i < 12;
        i++
    ) {

        setTimeout(

            () => {

                createFloatingHeart();

            },

            i * 70

        );

    }

}



// =========================================================
// HEARTS ON CLICK
// =========================================================

document.addEventListener(
    "click",
    (event) => {


        // Don't create a heart
        // when clicking social links

        if (
            event.target.closest(
                ".social-icons a"
            )
        ) {

            return;

        }


        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "click-heart";


        // Random heart

        heart.textContent =
            loveSymbols[
                Math.floor(
                    Math.random()
                    * loveSymbols.length
                )
            ];


        // Click position

        heart.style.left =
            `${event.clientX}px`;


        heart.style.top =
            `${event.clientY}px`;


        // Random horizontal movement

        heart.style.setProperty(

            "--x",

            `${Math.floor(
                Math.random() * 100
            ) - 50}px`

        );


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => {

                heart.remove();

            },

            950

        );

    }
);



// =========================================================
// GALLERY CLICK EFFECT
// =========================================================

document
    .querySelectorAll(
        ".gallery-grid img"
    )
    .forEach(
        image => {


            image.addEventListener(
                "click",
                () => {


                    // Remove old animation

                    image.classList.remove(
                        "photo-pop"
                    );


                    // Restart animation

                    void image.offsetWidth;


                    // Add animation

                    image.classList.add(
                        "photo-pop"
                    );


                }
            );


        }
    );



// =========================================================
// PAGE VISIBILITY
// =========================================================

// Stop continuous heart generation
// when the browser tab is hidden.
// This avoids unnecessary CPU usage.

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            stopLoveRain();

        }

        else {

            startLoveRain();

        }

    }
);