let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



    
            function rememberMyFilms() {
                for (let i = 0; i < 2; i++) {
                    const a = prompt('один из последних просмотренных фильмов?', ''),
                          b = prompt('на сколько оцените его?', '');
            
                        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                            console.log('done');
            
                            personalMovieDB.movies[a] = b;
                        }else  {
                              console.log('error');
                              i--;
                        }
            }
        }
            rememberMyFilms();

            function detectPersonalLevel() {
                if (personalMovieDB.count < 10) {
                    console.log('очень мало');
                } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                    console.log('так , средненько , но нужно больше');
                } else if (personalMovieDB.count > 30 ) {
                    console.log('во, нормально');
                } else {
                    console.log('ну так не бывает');
                }
            }

            detectPersonalLevel();
             
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
        

    

console.log(personalMovieDB);    

const str = 'hello world!';
console.log(str.substr(6, 6));

function writeYourGenres()  {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = promp('ваш любимый жанр под номером ${i}');
    }
}