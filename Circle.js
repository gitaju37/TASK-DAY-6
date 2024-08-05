class Circle {
    constructor( radius = 1.0, colour = "red" ) {
        this.radius = Number( radius );
        this.colour = colour;
    }
    setRadius(r) {
        this.radius = Number( r );
    }
    setColour(c) {
        this.colour = c;
    }
    getRadius() {
        return this.radius
    }
    getColour() {
        return this.colour
    }
    getArea() {
        let area = 3.14 * Math.pow( this.radius, 2 )
        return area.toFixed( 1 );
    }
    getCircumference() {
        let circ = 2 * 3.14 * this.radius
        return circ.toFixed( 1 );
    }
    toString() {
        return `circle[radius=${this.radius},colour=${this.colour}]`
    }

}

// TO GET ALL THE DETAILS OF THE CIRCLE

const circle1 = new Circle( 5, "Blue" ) 
console.log("Radius:",circle1.getRadius())
console.log( "Colour:", circle1.getColour() )
console.log( "Area:", circle1.getArea() )
console.log( "Circumference:", circle1.getCircumference() )
console.log(circle1.toString() )

// SET THE VALUES OF CIRCLE

circle1.setRadius( 10 );
circle1.setColour( "Yellow" )
console.log( circle1.toString() )
console.log( "Radius:", circle1.getRadius() )
console.log( "Colour:", circle1.getColour() )
console.log( "Area:", circle1.getArea() )
console.log( "Circumference:", circle1.getCircumference() )