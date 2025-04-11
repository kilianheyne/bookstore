let books = [
    {
        name: "Die Geheimnisse des Ozeans",
        cover: `<img src="./assets/imgs/die-geheimnisse-des-ozeans-cover.png" alt='Buchcover von "Die Geheimnisse des Ozeans"'>`,
        author: "Clara Meer",
        likes: 1250,
        liked: true,
        price: 19.99,
        publishedYear: 2018,
        genre: "Fantasy",
        comments: [
            {
                name: "Leser123",
                comment:
                    "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
            },
            {
                name: "Bookworm84",
                comment:
                    "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
            },
            {
                name: "FantasyFanatic",
                comment:
                    "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
            },
            {
                name: "SciFiGuru",
                comment:
                    "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
            },
            {
                name: "NovelLover",
                comment:
                    "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
            },
        ],
    },
    {
        name: "Der vergessene Pfad",
        author: "Maximilian Schwarz",
        likes: 980,
        liked: false,
        price: 14.5,
        publishedYear: 2021,
        genre: "Fantasy",
        comments: [],
    },
    {
        name: "Die Farben des Himmels",
        cover: `<img src="./assets/imgs/die-farben-des-himmels-cover.png" alt='Buchcover von "Die Geheimnisse des Ozeans"'>`,
        author: "Laura Blau",
        likes: 1520,
        liked: true,
        price: 22.95,
        publishedYear: 2019,
        genre: "Romantik",
        comments: [
            {
                name: "LeserPeter",
                comment:
                    "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
            },
            {
                name: "BookLover21",
                comment:
                    "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
            },
            {
                name: "FantasyNerd",
                comment:
                    "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
            },
            {
                name: "SciFiEnthusiast",
                comment:
                    "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
            },
            {
                name: "ReadingAddict",
                comment:
                    "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
            },
        ],
    },
    {
        name: "Das Rätsel der Zeit",
        author: "Alexander Weiss",
        likes: 750,
        liked: false,
        price: 18.0,
        publishedYear: 2020,
        genre: "Science-Fiction",
        comments: [
            {
                name: "BuchKenner",
                comment:
                    "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
            },
            {
                name: "LeseWurm",
                comment:
                    "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
            },
        ],
    },
    {
        name: "Der letzte Wächter",
        author: "Sabine Grün",
        likes: 1300,
        liked: true,
        price: 16.75,
        publishedYear: 2017,
        genre: "Fantasy",
        comments: [],
    },
    {
        name: "Im Schatten des Mondes",
        author: "Philipp Silber",
        likes: 890,
        liked: false,
        price: 12.3,
        publishedYear: 2022,
        genre: "Science-Fiction",
        comments: [
            {
                name: "BücherLiebhaber",
                comment:
                    "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
            },
            {
                name: "Leseratte",
                comment:
                    "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
            },
        ],
    },
    {
        name: "Jenseits der Sterne",
        author: "Oliver Schwarz",
        likes: 1450,
        liked: true,
        price: 21.0,
        publishedYear: 2015,
        genre: "Science-Fiction",
        comments: [
            {
                name: "Leser123",
                comment:
                    "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
            },
        ],
    },
    {
        name: "Das verborgene Königreich",
        author: "Elena Gold",
        likes: 920,
        liked: false,
        price: 17.5,
        publishedYear: 2020,
        genre: "Fantasy",
        comments: [
            {
                name: "Bookworm92",
                comment:
                    "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
            },
        ],
    },
    {
        name: "Liebe in Zeiten des Krieges",
        author: "Emilia Rot",
        likes: 1800,
        liked: true,
        price: 19.99,
        publishedYear: 2016,
        genre: "Romantik",
        comments: [
            {
                name: "Bibliophile23",
                comment:
                    "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
            },
            {
                name: "StorySeeker",
                comment:
                    "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
            },
            {
                name: "SciFiExplorer",
                comment:
                    "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
            },
        ],
    },
];

let favBooks = [];

function renderBooks() {
    const containerRef = document.getElementById("books-container");
    for (let i = 0; i < books.length; i++) {
        containerRef.innerHTML += returnMiniBookCards(i);
    }
}

function renderFavourites() {
    let favouriteRef = document.getElementById("favourites-container");
    favouriteRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        if (books[i].liked === true) {
            favouriteRef.innerHTML += returnFavouriteBooks(i);

            const favCommentsRef = document.getElementById(
                "comments-container-" + i
            ); // erst nach dem Rendern können wir auf das div mit der ID zugreifen + wir benötigen individuelle ID's um die entsprechenden Kommentare zu laden (sonst landet alles im zuerst gefunden div mit der ID "comments-container" und die anderen divs mit derselben ID werden ignoriert)

            for (let j = 0; j < books[i].comments.length; j++) {
                console.log("Kommentar gespeichert:", books[i].comments);
                console.log("Kommentar ausgelesen:", books[i].comments[j]);
                favCommentsRef.innerHTML += returnComments(i, j);
            }
        }
    }
}

function returnMiniBookCards(booksIndex) {
    return `<div class="mini-book-card" id="bookInfo${[booksIndex]}">
                ${books[booksIndex].cover}
                <h3>${upperCaseTitle(booksIndex)}</h3>
                <span>Written by ${books[booksIndex].author}</span>
            </div>`;
}

function upperCaseTitle(i) {
    const titleRef = books[i].name;
    return titleRef.toUpperCase(); // capslock but Code
}

function returnFavouriteBooks(booksIndex) {
    return `<div class="favourite-book">
                    <h3>${books[booksIndex].name}</h3>
                    <div class="favourite-book-image">
                        ${books[booksIndex].cover}
                    </div>
                    <div class="book-overview">
                        <div class="book-offer">
                            <b>${properPriceDisplay(booksIndex)}</b>
                            <div class="likes-container">
                                <span>${books[booksIndex].likes}</span>
                                <div id="heart-container">${renderHeartIcon(
                                    booksIndex
                                )}</div>
                            </div>
                        </div>
                        <div class="book-information">
                            <div class="info-row">
                                <span>Autor:</span>
                                <span>${books[booksIndex].author}</span>
                            </div>
                            <div class="info-row">
                                <span>Erscheinungsjahr:</span>
                                <span>${books[booksIndex].publishedYear}</span>
                            </div>
                            <div class="info-row">
                                <span>Genre:</span>
                                <span>${books[booksIndex].genre}</span>
                            </div>
                        </div>
                    </div>
                    <div class="comment-section">
                        <b>Kommentare:</b>
                        <div class="overflow-hidden">
                            <div id="comments-container-${booksIndex}" class="comments-container"></div>
                        </div>
                    </div>
                    <div class="comment-area">
                        <input id="comment-input-${booksIndex}" type="text" placeholder="Schreibe einen Kommentar...">
                        <img src="./assets/icons/send-comment-dark.png" alt="send comment" id="send-comment-${booksIndex}" onclick="pushComment(${booksIndex})"> 
                    </div>
                </div>`;
}
// pushComment()-Funktion muss den .value in das comments-Array von books pushen können

function properPriceDisplay(i) {
    const price = books[i].price;
    const finalPrice = price.toFixed(2);
    return finalPrice.replace(".", ",") + " " + "€"; // .replace() funktioniert nur bei einem String - deshalb kommt zuerst der Zwischenschritt mit .toFixed, um einen String zu erhalten
}

function renderHeartIcon(i) {
    let heartRef = books[i].liked;

    if (heartRef === true) {
        return `<img src="./assets/icons/like.png" alt="">`;
    } else {
        return `<img src="./assets/icons/not-like.png" alt="">`;
    }
}

function returnComments(i, j) {
    return `<div class="single-comment">
                <div class="comment-name">${books[i].comments[j].name}</div>
                <div class="comment-comment">${books[i].comments[j].comment}</div>
            </div>`;
}

function pushComment(i){
    const inputRef = document.getElementById('comment-input-' + i);
    let inputValueRef = inputRef.value;
    books[i].comments.push({name: 'Lese-Maus', comment: inputValueRef});
    renderFavourites();
    inputRef.value = "";
}
