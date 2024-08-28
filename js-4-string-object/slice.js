const address ="kalapaharia";
// slice means kata ...kon index theke start abong kon index er aga sesh hobe. slice jei index a sesh korbo tar ag porjonto nibe.
part =address.slice(2, 5);
// console.log(part);

// split mane vag kora

const sentence ="i am good and harworking person";
// console.log(sentence.split(' '));
// console.log(sentence.split("a"));

const friendsStr='dalim, sidrat, farjana, muntaha, miah';
friends=friendsStr.split(",");
console.log(friends);
// split  স্প্লীট মানে হলো আলাদা আলাদা করে ভাগ করা। 
const realFriends=[ 'dalim', ' sidrat', ' farjana', ' muntaha', ' miah' ];
console.log(realFriends);

console.log(realFriends.join());
console.log(realFriends.join("-"));
console.log(realFriends.join("|"));