// EX 16
console.log(`Hey! Guys`);

let guestName: string [] = [
    "Faiza",
    "Yasir",
    "Maheen",
    "Nabiha",
    "Mahum",
    "Areeba"
  ];
  console.log(`I have booked a bigger table for dinner, so 3more friends will join us.\n `);
  //add at the begining
  guestName.unshift("Amna");
  //add at middle
  guestName.splice(3,0,"Anabia");
  //add at last
  guestName.push("Ghania")
  //print all guest name with message
  for (let i = 0; i < guestName.length; i++) {
console.log(`${guestName[i]},you are invited for the dinner.`);}
  console.log(`Tonight!`);
  
  
  