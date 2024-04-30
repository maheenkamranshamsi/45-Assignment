//EX 15.
let guestName: string [] = [
    "Faiza",
    "Yasir",
    "Maheen",
    "Nabiha",
    "Mahum",
    "Areeba"
  ];
  //step 1. Add a print statement at the end of your program stating the name of the guest who can’t make it.
  
  console.log(`due to some issue ${guestName[1]} will not come`);
  //step 2.Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting
  guestName[1]= "Amna";
   //step 3. second invitation message who is still in your list
  console.log(`new list of guest who are coming to dinner`);
  
  for (let i = 0 ; i <  guestName .length; i++){
    console.log(`${i+1}.${guestName[i]}`);
}
