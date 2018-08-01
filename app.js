/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var playerScores = [0,0];
var activePlayer = 0;
var roundScore;
var dice = 0;
var diceDOM;
var temp =0;
var gameOn;
var player1Name= "Player 1";
var player2Name = "Player 2";
init();
//document.querySelector('#name-players').style.display="block";
function generateNumber() 
{ 
    if(gameOn){
    dice = Math.floor(Math.random()*6+1);
    temp += dice;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('#current-'+ activePlayer).textContent = temp;
    diceDOM=document.querySelector('.dice');
    diceDOM.src='dice-'+dice +'.png';
    scoringAdd();
    winner();
    }
    
}
function displayPlayerScore(){
    document.querySelector('#score-'+activePlayer).textContent = playerScores[activePlayer];
    
    
}
function winner(){ 
    if(playerScores[activePlayer]>=100|| temp>=100)
    {
     document.querySelector('#name-'+activePlayer).textContent = 'WINNER!';
     document.querySelector('.dice').style.display = 'none';
    
     gameOn = false;
    }
}
 function scoringAdd(){
     winner();
     if(dice == 1)
     {
         temp=0;
         document.querySelector('#current-'+ activePlayer).textContent = temp;
         othDisplayTimer();
         changePlayer();
         
     }
     else return;
 
 }
function changePlayer()
{
    temp=0;
    displayPlayerScore();
    if(activePlayer===0){
        activePlayer=1;
    }
    else {activePlayer=0;}
  
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    
}

function holdScore(){
    if(gameOn){
         roundScore=temp;
    playerScores[activePlayer]+=temp;
    scoringAdd();
    document.querySelector('#current-' + activePlayer).textContent = 0;
   
    changePlayer();
    displayPlayerScore();
      //console.log(temp,dice);
   // console.log(playerScores[0]);
    //console.log(playerScores[1]); 
        
    }
  
    
    
}
document.querySelector('.btn-new').addEventListener('click',init);
function init(){
    gameOn = true;
    onD();
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.oth').style.display = 'none';
    
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    activePlayer=0;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('#name-0').textContent = player1Name;
    document.querySelector('#name-1').textContent = player2Name;
    
    playerScores = [0,0];
    
    
}

function onD() {
    document.getElementById("overlay").style.display = "block";
}
function offD(){ document.getElementById("overlay").style.display = "none";}


function getPlayerInfo(){
   if(document.querySelector('#player-0').value === '')
   {
       alert('Provide player details');
       
   }
    
    else{
    player1Name = document.querySelector('#player-0').value;
    player2Name = document.querySelector('#player-1').value;
    document.querySelector('#name-0').textContent = player1Name;
    document.querySelector('#name-1').textContent = player2Name; 
    document.getElementById("overlay").style.display = "none";
    
    }
    
}

function othDisplayTimer()
{
    document.querySelector('.oth').style.display = 'block';
    setTimeout(function(){document.querySelector('.oth').style.display = 'none';}, 600);
    
}

var john = {
    name: 'John',
    yearOfBorth: 1985,
    job: 'Desginer',
    
    
}

var person = function(name,dob,jobb)
{
    this.name = name;
    this.dob = dob;
    this.job = jobb;
    
}
person.hero = 'Superman';
person.prototype.lastName = 'smith';
var john = new person('john',1985,'designer');


person.prototype.calculateAge = function()
{
    console.log(2016-this.dob);
}

var personProto = {
    calculateVas: function() {
    
    console.log(2018-this.yearOfBirh);
}
    
}







