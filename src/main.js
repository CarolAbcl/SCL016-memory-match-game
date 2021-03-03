import App from './components/App.js';

document.getElementById('root').appendChild(App());

// App structure: displays and buttons
   
//1. "Jugar"/ play button and display change (from homepage to game page)

let homePageBtn = document.getElementById('homePageBtn');
homePageBtn.addEventListener('click', homePageMove);

function homePageMove(){
    document.getElementById('homePage').style.display='none';
    document.getElementById('gamePage').style.display='block';
}

//2. "?"/ Instructions button and display change (from homepage to instructions page)

let instructionsBtn = document.getElementById('instructionsBtn');
instructionsBtn.addEventListener('click', instructionsMove);

function instructionsMove(){
    document.getElementById('homePage').style.display='none';
    document.getElementById('instructionsPage').style.display='block';
}

//Esto es un cambio




