// --------------------------- Constants -------------------------------



// ---------------------------- Variables (state) ----------------------
//turn, board, winner, init war, round, points
let deck1 = []
let deck2 = []
let cardToRemove
//remove top card

// ------------------------ Cached Element References -------------------
let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')


// ----------------------------- Event Listeners -----------------------

// document.getElementById('btn').addEventListener('click', handleClick)

// -------------------------------- Functions --------------------------
init()
// render()


// Initialize deck 1 with array of 52 cards 

function init() {
    deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}

// function render() {

// }

// function handleClick(evt) {
    
//     }
// }

// function getWinner() {

// }

// function shuffleDeck() {

// }

// 1. define the required variables used to track the state of the game
// 2. store cached element references
// 3. upon loading, the game state be initializaed and a function should be called to render this game state
// 4. The state of the game should be rendered to the user. write a render function
// 5. defined the required constants. cards should have suit and rank. deck will be collection of cards. shuffle and dealt one at a time
// 6. handle a player clicking a card with a handle click function
// 7. build the "getWinner" function. player runs out of cards
// 8. create Reset functionality
// 9. shuffle deck function
// 10. eight is the highest number mode
// 11. alternative keyboard function
// 12. hand will also be collection of cards 
// 13. write a If statement for tie then go to war