/**
 * This file contains the client-side JavaScript code for the index.html file.
 * It uses the Fetch API to make HTTP requests to the server to retrieve player data.
 * 
 */

(function () {
    let currentPlayer = null;
    let statsDisplayed = false;
    window.addEventListener("load", init);

    function init() {
        id("statsButton").addEventListener("click", function(e) {
            if (!statsDisplayed) { 
                displayStats(currentPlayer);
                statsDisplayed = true; 
            }
            e.target.disabled = true;
        });
        id("submit").addEventListener("click",function(e){
            fetchRandomPlayerData();
       
        });
       
    
    
    }



/**
 * Fetches random player data from the API.
 *
 * This function sends a GET request to the '/api/players' endpoint
 * to retrieve an array of player data. 
 */

    function fetchRandomPlayerData(){

        
        fetch('http://localhost:8000/api/players')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data || data.length === 0) {
                throw new Error('No player data available');
            }
    
            currentPlayer = data[Math.floor(Math.random() * data.length)];
            displayPlayerCard(currentPlayer);
            statsDisplayed = false;
            id("statsButton").disabled = false;
        })
        .catch(error => {
            displayError(error.message);
        });
    }

    /**
    * This function targets a DOM element with the ID 'card' and populates it
    * with the player's information, including their image, name, team, and sport.
    *
    * @param {Object} player - An object containing the player's information.
    */


    function displayPlayerCard(player) {
        const playerCardDiv = id('card');
        if (playerCardDiv) {
            const imageUrl = player.image || 'path-to-placeholder-image.jpg'; 
            playerCardDiv.innerHTML = `
                <img src="${imageUrl}" alt="${player.name}" id="img">
                <h3 id= "card-title">Name: ${player.name}</h3>
                <p>Team: ${player.team}</p>
                <p>Sport: ${player.sport}</p>
            `;
        } else {
            displayError('Player card element not found');
        }
    }
      //Grab element by ID. After grabbing it, setup onlistener for click event
    //When the button is clicked by window.location.href, set that that.String
    //and concatenate the string. 
    function displayStats(player) {
        const playerCardDiv = id('card');
        if (playerCardDiv && player.stats) {
            let statsHtml = '<ul>';
            for (const stat in player.stats) {
                statsHtml += `<li>${stat}: ${player.stats[stat]}</li>`;
            }
            statsHtml += '</ul>';
    
            playerCardDiv.innerHTML += statsHtml; 
        } else {
            displayError('Player card element not found or no stats available');
        }
    }
    
    

    /**
     * Displays an error message on the page.
     * handles the case where the player card element is not found.
     */ 
    function displayError(errorMessage) {
        const errorDiv = id('card');
        if (errorDiv) {
            errorDiv.innerHTML = `<p>Error: ${errorMessage}</p>`;
        }
    }

  


// Helper function to target DOM elements
 function id(id){
    return document.getElementById(id);
 }

})();
