// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names,event){
    let messages=[]
    for (let name of names){
        messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    }

    return messages
}

function countDown(number){
    while (number>=0){
        console.log(number)
        number--;
    }
}