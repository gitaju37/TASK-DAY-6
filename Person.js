class Person {
    constructor( name, yearOfBirth, place, desigination, email, contact_number ) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.place = place;
        this.desigination = desigination;
        this.email = email;
        this.contact_number=contact_number  
    }
    printThis() {
        console.log( this )
    }
    
    getName() {
        return this.name
    }
    getPlace() {
        return this.place
    }
    getDesigination() {
        return this.desigination
    }
    getEmail(){
    return this.email
    }
    getAge() {
        return new Date().getFullYear() - this.yearOfBirth
    }
    toString() {
        return `Hello I'm ${this.name} from ${this.place}.I'm a ${this.desigination},my contact number is ${this.contact_number}.`
    }


}

const Ajith = new Person ( "Ajith", 1997, "coimbatore", "Full Stack Developer", "ajith@gmail.com", "9876543210" )

console.log( Ajith )
console.log( Ajith.getPlace() )
console.log( Ajith.getAge() )
console.log(Ajith.toString())