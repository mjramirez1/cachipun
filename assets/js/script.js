//bienvenida al juego

var fichas = prompt(' Bienvenido a cachipún contra la máquina ¿Cuántos juegos quieres jugar?');

//const y var del juego

const piedra = 0;
const papel = 1;
const tijera = 2;
var fin = 0;
var gana = 0;
var pierde = 0;
var empata = 0;

//Inicio del juego

while (fichas != fin) {
    var player = prompt('Elige piedra, papel o tijera'); // Elección jugador humano
    var machina = Math.floor(Math.random() * 3) // Seleciión random del jugador pc

    switch (player) {
        case 'piedra':
            alert('Escogiste piedra');
            if (machina === piedra) {
                alert(' La máquina escogió piedra ¡Empataste!')
                empata++
            }
            else if (machina === papel) {
                alert(' La máquina escogió papel ¡Perdiste!')
                pierde++
            }
            else if (machina === tijera) {
                alert('La máquina escogio tijera ¡GANASTE!')
                gana++
            }
            break;

        case 'papel':
            alert('Escogiste papel');
            if (machina === piedra) {
                alert(' La máquina escogió piedra ¡GANASTE!')
                gana++
            }
            else if (machina === papel) {
                alert(' La máquina escogió papel ¡Empataste!')
                empata++
            }
            else if (machina === tijera) {
                alert('La máquina escogio tijera ¡Perdiste!')
                pierde++
            }
            break;

        case 'tijera':
            alert('Escogiste tijera');
            if (machina === piedra) {
                alert(' La máquina escogió piedra ¡Perdiste!')
                pierde++
            }
            else if (machina === papel) {
                alert(' La máquina escogió papel ¡GANASTE!')
                gana++
            }
            else if (machina === tijera) {
                alert('La máquina escogio tijera ¡Empataste!')
                empata++
            }
            break;
    }

    fin++

}
// fin de juego

//Resultados

if ( gana > pierde ) { alert('¡FELICIDADES, GANAS LA PARTIDA!')}
else if( gana < pierde) {alert('¡QUE PENA! Pierdes la partida')}
else if(gana === pierde){alert('¡Empatas la partida!')}