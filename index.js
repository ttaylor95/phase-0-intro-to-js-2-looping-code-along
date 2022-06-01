// Code your solutions in this file

// function writeCards that accepts an array and event name as arguments

function writeCards(names,event){
    const cards = [];
    for(let i=0; i < 3; i++) {
        cards.push(`Thank you, ${names[i]}, fopr the wonderful ${event} gift!`);


    }

return cards

}

writeCards(["Guadalupe", "Ollie","Aki"], "surprise");