class Movie {
    constructor( title, studio, rating = 'PG' ) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG( array ) {
        let PGarr = []
        for ( let obj of array ) {
            if ( obj.rating === "PG" ) {
                PGarr.push( obj )
            }
        } return PGarr;
    }
}
movieArray = [];
function addMovie( tittle, studio, rating ) {
    movieArray.push( new Movie( tittle, studio, rating ) )
}


addMovie( "INDIAN 2", "LYCA PRODUCTIONS", "PG" );
addMovie( "MAHARAJA", "THINK STUDIOS", "MT-5" );
addMovie( "RAAYAN", "SUN PICTURES" );
addMovie( "GARUDAN", "LARK STUDIOS", "PG 15" );


console.log( "Movies with PG rating :" );
console.log( Movie.getPG( movieArray ) );