/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let deck1 = []
let cardToRemove

/*------------------------ Cached Element References ------------------------*/

let deck1El = document.getElementById('deck-1')

/*----------------------------- Event Listeners -----------------------------*/
document.getElementById('btn').addEventListener('click', handleClick)


/*-------------------------------- Functions -------------------------------
init()


// Initialize deck 1 with array of 52 cards 
    function init() {
    deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

 