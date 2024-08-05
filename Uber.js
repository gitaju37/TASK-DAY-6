class Passenger {
    constructor( Name,Pickup_Location,Drop_Location,Distance,upAndDown ) {
        this.Name = Name;
        this.Pickup_Location = Pickup_Location;
        this.Drop_Location = Drop_Location;
        this.Distance = Number(Distance);
        this.upAndDown = Boolean( upAndDown );
    }
    
    getPassengername() {
        return this.Name;
    }
    getPickupLocation() {
        return this.Pickup_Location;
    
    }
    getDropLocation() {
        return this.Drop_Location
    }
    getDistance() {
        return this.Distance
    }

    getUberPrice() {
        let price = 0;
        let costtillfive = 50;
        let costafterfive = 25;
        if ( this.Distance <= 5 ) {
            price= this.Distance * costtillfive
        }
        else {
            price =(5*costtillfive)+( (this.Distance - 5 )*costafterfive)
        }
        if ( this.upAndDown === true ) {
            return price * 2;
        }
        else {
            return price;
        }

    }

}

const Passenger1 = new Passenger( "Ajith", "Coimbatore", "tiruppur", 100, true )
console.log (`${Passenger1.getPassengername()} Uber price:RS.${Passenger1.getUberPrice()}`)

const Passenger2 = new Passenger( "Pradheep", "Ambatur", "Tambaram", 40, false )
console.log( `${Passenger2.getPassengername()} Uber price:RS.${Passenger2.getUberPrice()}` )
