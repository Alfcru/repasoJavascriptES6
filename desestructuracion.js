const deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    getNombre(){
        return `${ this.nombre} ${ this.apellido} ${this.poder}`
    }
}

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function imprimeHeroe( heroe ){
    const { nombre, apellido, poder, edad = 0 } = deadpool;
    console.log ( nombre, apellido, poder, edad);    
}
imprimeHeroe( deadpool );
//const { nombre, apellido, poder, edad } = deadpool;

//console.log ( nombre, apellido, poder);

const heroes = ["Deadpool", "Superman","Batman"]
//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [h1, h2, h3] = heroes;

console.log( h1, h2 , h3 );