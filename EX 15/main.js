"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestName = [
    "Faiza",
    "Yasir",
    "Maheen",
    "Nabiha",
    "Mahum",
    "Areeba"
];
//step 1. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`due to some issue ${guestName[1]} will not come`);
guestName[1] = "Amna";
console.log(`new list of guest who are coming to dinner`);
for (let i = 0; i < guestName.length; i++) {
    console.log(`${i + 1}.${guestName[i]}`);
}
//step 2.Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting
let NewGuest = "Amna";
//step 3. second invitation message who is still in your list
