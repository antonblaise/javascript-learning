// function Movie(title, director, genre, release_year, rating) {
//     this.title = title;
//     this.director = director;
//     this.genre = genre;
//     this.release_year = release_year;
//     this.rating = rating;
// }

// Movie.prototype.getOverview = function() {
//     return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.release_year}. It received a rating of ${this.rating}.`;
// }

class Movie {
    constructor(title, director, genre, release_year, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.release_year = release_year;
        this.rating = rating;
    }

    get overview() {
        return this.getOverview();
    }

    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.release_year}. It received a rating of ${this.rating}.`;
    }
}

const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
const Batman = new Movie("The Dark Knight", "Christopher Nolan", "Action", 2008, 83);

console.log(Spiderman)
console.log(Spiderman.getOverview());
console.log(Batman)
console.log(Batman.overview);