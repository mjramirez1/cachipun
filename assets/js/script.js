const nombre = prompt('Bienvenido a cachipún contra la máquina, ingresa tu nombre: ');
var fichas = prompt('¿Cuátos juegos quieres jugar?');
const piedra = 0;
const papel = 1;
const tijera = 2;
var fin = 0;

while (fichas != fin) {
var player = prompt('Elige piedra, papel o tijera');

    switch (player) {
        case 'piedra':
            alert('Escogiste piedra');
            var machina = Math.floor(Math.random() * 3)  //elección random
            if (machina == piedra) {
                alert(' La máquina escogió piedra ¡Empataste!')
            }
            else if (machina == papel) {
                alert(' La máquina escogió papel ¡Perdiste!')
            }
            else if (machina == tijera) {
                alert('La máquina escogio tijera ¡GANASTE!')
            }
            break;

        case 'papel':
            alert('Escogiste papel');
            var machina = Math.floor(Math.random() * 3)  //elección random
            if (machina == piedra) {
                alert(' La máquina escogió piedra ¡GANASTE!')
            }
            else if (machina == papel) {
                alert(' La máquina escogió papel ¡Empataste!')
            }
            else if (machina == tijera) {
                alert('La máquina escogio tijera ¡Perdiste!')
            }
            break;

        case 'tijera':
            alert('Escogiste tijera');
            var machina = Math.floor(Math.random() * 3)  //elección random
            if (machina == piedra) {
                alert(' La máquina escogió piedra ¡Perdiste!')
            }
            else if (machina == papel) {
                alert(' La máquina escogió papel ¡GANASTE!')
            }
            else if (machina == tijera) {
                alert('La máquina escogio tijera ¡Empataste!')
            }
            break;
    }

    fin = fin + 1
}
alert( nombre + ' tus jugadas han terminado, actualiza para volver a jugar')