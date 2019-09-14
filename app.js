// SpaceDice Roller game created by Andreas Wåtz

 let users = [];
 let usersList = [];
 let printUsersTotalScores = '';
 let playerDicesScore = '';
 let chooseUserList = '';
 //Stores right user ID
 let rightUser = '';
 // Checks ig player have choosen a user
 let checkIfPlayerIsActive = false;

 //Hides the title winner
 document.getElementById('winner').style.visibility = 'hidden';

 // Constructor for user
  function user(username, id) {
  this.id = id;
  this.username = username;
  this.totalScore = 0;
  this.diceNumber1 = 0;
  this.diceNumber2 = 0;
  this.diceNumber3 = 0;
}

 // Add eventlistener to start game button
 let startGame = document.querySelector('#startGame').addEventListener('click', playGame);
 let playAgain = document.querySelector('#playAgain').addEventListener('click', playMoreGames);

 // Get the users from API onload
 window.onload = function getAllUsers() {
  
     // Create XHR Object
     let xhr = new XMLHttpRequest();
     // Open - type, url, async
     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)

     let userID = 1;
     
     xhr.onload = function(){
         if(this.status == 200){
           
            users = JSON.parse(this.responseText);

            let printUsers = '';
            let printUsersTotalScore = '';
            
            for (let i in users) {
               
            printUsers += `<ul id="${userID++}">
              <li>Spelare: ${users[i].username}</li>
              </ul><hr>`
            }

            for (let i in users) {

              printUsersTotalScore += `<ul id="${userID++}">
              <li>Username: ${users[i].username}</li>
              <li>Total Score: </li>
              </ul><hr>`
            }

         } else if(this.status == 404){
               document.querySelector('#users').innerHTML = 'Information Not Found';
         }
     }
     // Sends request
     xhr.send();
 }
  

 
// Choose your player in the list to play with
let choosePlayerBtn = document.querySelector('#users').addEventListener('click', btnClicked);

function btnClicked(e) {

  //Find the right user id when clicked on user.
  rightUser = JSON.parse(e.path[1].id - 1);
  
  document.querySelector('#userPlayerInfo').innerHTML = `<h1>Spelarinformation.</h1> <p>Spelare: ${usersList[rightUser].username}`;

  checkIfPlayerIsActive = true;

  // Removes text that users need to choose a player before play
  document.querySelector('#chooseUserAlert').innerHTML = '';
}
//Stores innerHTML before printed out
let totalScore18 = '';
let totalScore17 = '';
let totalScore16 = '';
let totalScore15 = '';
let totalScore14 = '';
let totalScore13 = '';
let totalScore12 = '';
let totalScore11 = '';
let totalScore10 = '';
let totalScore9 = '';
let totalScore8 = '';
let totalScore7 = '';
let totalScore6 = '';
let totalScore5 = '';
let totalScore4 = '';
let totalScore3 = '';

//Hides play again button
document.getElementById('playAgain').style.visibility = 'hidden';

// Starts the game
function playGame() {

  // Checks if player has choosen a player
  if (checkIfPlayerIsActive === false) {
    document.querySelector('#chooseUserAlert').innerHTML = `<br>Hoppsan!!! Vänligen välj en spelare först i den vänstra menyn.`;
  } else {

    document.querySelector('#users').innerHTML = '';

    // Creates random numbers for dices and stores them
    for(let i = 0; i < usersList.length; i++) {
            
      let randomDiceNumber1 = Math.floor(Math.random() * 6) + 1;
      let randomDiceNumber2 = Math.floor(Math.random() * 6) + 1;
      let randomDiceNumber3 = Math.floor(Math.random() * 6) + 1;

      usersList[i].diceNumber1 = randomDiceNumber1;
      usersList[i].diceNumber2 = randomDiceNumber2;
      usersList[i].diceNumber3 = randomDiceNumber3;

      usersList[i].totalScore = randomDiceNumber1 + randomDiceNumber2 + randomDiceNumber3;

      let totalScoreOfUser = usersList[i].totalScore;
      let userName = usersList[i].username;
      let totalScoreOfUsers = usersList[i].totalScore;

      // Prints out all users dices result
      playerDicesScore += `<ul>
       <li>Spelare: ${usersList[i].username}</li>
       <li>Spelare kastade: <br>${usersList[i].diceNumber1}, ${usersList[i].diceNumber2}, ${usersList[i].diceNumber3} </li>
       </ul><hr>`

       // Sorts the users score from 18 to 3
       if( totalScoreOfUser === 18) {
        totalScore18 += `<ul id="topScore${i}">
        <li>Spelare: ${userName}</li>
        <li>Poäng: ${totalScoreOfUsers} </li>
        </ul>`;

        document.querySelector('#totalScore18').innerHTML = totalScore18;
       } else if(totalScoreOfUser === 17) {
        
        totalScore17 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore17').innerHTML = totalScore17;
       } else if(totalScoreOfUser === 16) {
        
            totalScore16 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore16').innerHTML = totalScore16;
       } else if(totalScoreOfUser === 15) {
        
            totalScore15 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore15').innerHTML = totalScore15;
       } else if(totalScoreOfUser === 14) {
        
            totalScore14 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore14').innerHTML = totalScore14;
       } else if(totalScoreOfUser === 13) {
        
            totalScore13 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore13').innerHTML = totalScore13;
       } else if(totalScoreOfUser === 12) {
        
            totalScore12 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore12').innerHTML = totalScore12;
       } else if(totalScoreOfUser === 11) {
        
            totalScore11 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore11').innerHTML = totalScore11;
       } else if(totalScoreOfUser === 10) {
        
            totalScore10 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore10').innerHTML = totalScore10;
       } else if(totalScoreOfUser === 9) {
        
            totalScore9 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore9').innerHTML = totalScore9;
       } else if(totalScoreOfUser === 8) {
        
            totalScore8 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore8').innerHTML = totalScore8;
       } else if(totalScoreOfUser === 7) {
        
            totalScore7 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore7').innerHTML = totalScore7;
       } else if(totalScoreOfUser === 6) {
        
            totalScore6 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore6').innerHTML = totalScore6;
       } else if(totalScoreOfUser === 5) {
        
            totalScore5 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore5').innerHTML = totalScore5;
       } else if(totalScoreOfUser === 4) {
        
            totalScore4 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore4').innerHTML = totalScore4;
       } else if(totalScoreOfUser === 3) {
        
            totalScore3 += `<ul id="topScore${i}">
            <li>Spelare: ${userName}</li>
            <li>Poäng: ${totalScoreOfUsers} </li>
            </ul>`;
            document.querySelector('#totalScore3').innerHTML = totalScore3;
       }
       //Prints out all player result of dices
       document.querySelector('#users').innerHTML = playerDicesScore;
    }

    //Change color of user to green background and white text in total score list.
    document.querySelector('#topScore' + rightUser).style.backgroundColor = 'green';
    document.querySelector('#topScore' + rightUser).style.color = 'white';
    //document.querySelector('#topScoreUserBackground' + rightUser).style.backgroundColor = 'green';

    document.querySelector('#userPlayerInfo').innerHTML = `<h1>Spelarinformation</h1> <p>Spelare: ${usersList[rightUser].username} <br>Första tärningen: ${usersList[rightUser].diceNumber1}<br>Andra tärningen: ${usersList[rightUser].diceNumber2}<br>Tredje tärningen: ${usersList[rightUser].diceNumber3}<br>Du fick totalt ${usersList[rightUser].totalScore} poäng</p>`;

    // Shows the right dices from the user player chooses when play
    document.querySelector('#dice-1').src = `images/dice-number-${usersList[rightUser].diceNumber1}.png`;

    document.querySelector('#dice-2').src = `images/dice-number-${usersList[rightUser].diceNumber2}.png`;

    document.querySelector('#dice-3').src = `images/dice-number-${usersList[rightUser].diceNumber3}.png`;

    //Hides play button after game
    document.getElementById('startGame').style.visibility = 'hidden';
    // Makes a new button play again visible
    document.getElementById('playAgain').style.visibility = 'visible';
    // Shows a title Winner when games is done
    document.getElementById('winner').style.visibility = 'visible';
  }
}

//Reloades browser when click on play again
function playMoreGames() {
  // Reloads the page
  location.reload();
  //Hides play again button after clicked
  document.getElementById('playAgain').style.visibility = 'hidden';
}

//Sets user id start from 1
let userID = 1;
let newUser;
//Create user
window.onload = function createUser() {
  APICaller.get_users(function (response) {
      for (let i = 0; i < response.length; i++) {

          newUser = new user(response[i].username, response[i].id);
          
          usersList.push(newUser);
      }
         
      //Print out users player can choose from
      usersList.forEach(test => {
        
        chooseUserList += `<ul id="${userID++}">
        <li>Spelare: ${test.username}</li>
        </ul><hr>`;
    
        // Prints out users list
        document.querySelector('#users').innerHTML = chooseUserList;
       });
  })
}

// Create a module to handle our API calls
var APICaller = (function(){

  // Define endpoint for our API
  let endpoint = "https://jsonplaceholder.typicode.com/";

  // Function to handle our API request
  function apiCaller(method, url, data, callback){

      // Make new XMLHttpRequest
      let xhttp = new XMLHttpRequest();

      // Check the readystate
      xhttp.onreadystatechange = function(event){

          // If we get a response
          if(this.readyState === 4){
              // Parse JSON to handle our response with JavaScript
              let response = JSON.parse(this.response);
              // Run our callback function
              callback(response, this, event);
          }
      }

      xhttp.open(method, url, true);

      // Set the requestheader according to the documentation for our API
      xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

      // Create a JSON object from our data
      let json_data = JSON.stringify(data);

      // Send the API request
      xhttp.send(json_data);
  }

  // Function to get users
  function get_users(callback){
      let method = "GET";
      let url = endpoint + "users";

      apiCaller(method, url, null, callback);
  }
  
  // Return the functions from our module
  return{
      get_users: get_users,
  }
})();



