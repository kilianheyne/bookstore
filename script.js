let books = [
    {
        name: "Die Geheimnisse des Ozeans",
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

function renderBooks() { 
    const containerRef = document.getElementById("books-container"); 
    for (let i = 0; i < books.length; i++) { 
        containerRef.innerHTML += returnMiniBookCards(i);
    }
}

function renderFavourites(){
    const favouriteRef = document.getElementById('favourites-container');


    for (let i = 0; i < books.length; i++){
        if (books[i].liked === true){
            favouriteRef.innerHTML += returnFavouriteBooks(i);

            const favCommentsRef = document.getElementById('comments-container-' + i); // erst nach dem Rendern können wir auf das div mit der ID zugreifen + wir benötigen individuelle ID's um die entsprechenden Kommentare zu laden (sonst landet alles im zuerst gefunden div mit der ID "comments-container" und die anderen divs mit derselben ID werden ignoriert)

            for(let j = 0; j < books[i].comments.length; j++){
                favCommentsRef.innerHTML += returnComments(i, j);        
            }
        }
    }
}

console.log(books[2]);

function returnMiniBookCards(booksIndex) {
    return `<div class="mini-book-card" id="bookInfo${[booksIndex]}">
                <img src="./assets/imgs/platzhalter.jpg" alt="platzhalter">
                <h3>${upperCaseTitle(booksIndex)}</h3>
                <span>Written by ${books[booksIndex].author}</span>
            </div>`;
}

function upperCaseTitle(i) {
    const titleRef = books[i].name;
    return titleRef.toUpperCase(); // capslock but Code
}

function returnFavouriteBooks(booksIndex){
    return `<div class="favourite-book">
                    <h3>${books[booksIndex].name}</h3>
                    <div class="favourite-book-image">
                        <img src="./assets/imgs/platzhalter.jpg" alt="platzhalter">
                    </div>
                    <div class="book-overview">
                        <div class="book-offer">
                            <b>${properPriceDisplay(booksIndex)}</b>
                            <div class="likes-container">
                                <span>${books[booksIndex].likes}</span>
                                <div id="heart-container">${renderHeartIcon(booksIndex)}</div>
                            </div>
                        </div>
                        <div class="book-information">
                            <p>Author: ${books[booksIndex].author}</p>
                            <p>Erscheinungsjahr: ${books[booksIndex].publishedYear}</p>
                            <p>Genre: ${books[booksIndex].genre}</p>
                        </div>
                    </div>
                    <div>
                        <p>Kommentare:</p>
                    </div>
                    <div id="comments-container-${booksIndex}"></div>
                    <div>
                        <input type="text" placeholder="Schreibe einen Kommentar...">
                        <button onclick="pushComment()"></button> 
                    </div>
                </div>`
}
// pushComment()-Funktion muss den .value in das comments-Array von books pushen können 


function properPriceDisplay(i){
    const price = books[i].price;
    const finalPrice = price.toFixed(2); 
    return finalPrice.replace('.', ',') + ' ' + '€'; // .replace() funktioniert nur bei einem String - deshalb kommt zuerst der Zwischenschritt mit .toFixed, um einen String zu erhalten 
}

function renderHeartIcon(i){
    let heartRef = books[i].liked;

    if (heartRef === true) {
        return `<img src="./assets/icons/like.png" alt="">`;
    } else {
        return `<img src="./assets/icons/not-like.png" alt="">`;
    }
}

function returnComments(i, j){
    return `<div>
                <div>${books[i].comments[j].name}</div>
                <div>${books[i].comments[j].comment}</div>
            </div>`;
}