function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function getMoveName(){
    return "nieznany ruch"
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }
    if(argMoveId == 2){
        return 'papier';
    }
    if(argMoveId == 3){
        return 'nożyce';
    }
}
printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = 'nieznany ruch';

if(playerInput == '1'){
  argPlayerMove = 'kamień';
}
if(playerInput == '2'){
    argPlayerMove = 'papier';
}
if(playerInput == '3'){
    argPlayerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + argPlayerMove);

console.log('moves', argComputerMove, argPlayerMove)
function displayResult(argComputerMove, argPlayerMove){

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz');
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz');
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrywasz');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
        printMessage('Wybierz poprawny ruch');
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
        printMessage('Wybierz poprawny ruch');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
        printMessage('Wybierz poprawny ruch')
    }
}
displayResult(argComputerMove, argPlayerMove);