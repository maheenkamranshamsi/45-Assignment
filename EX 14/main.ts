// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinne
let guestName: Array<string> = [
  "faiza",
  "yasir",
  "maheen",
  "nabiha",
  "mahum",
  "areeba"
];
//loop for each to print invitation
guestName.forEach(guest => {
  console.log(`Dear ${guest}, you are invited to dinner please join us.`);
});