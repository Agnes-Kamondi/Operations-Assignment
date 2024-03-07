//Extract the last four characters from the string below;"extravaganza"
let a = "Extravaganza";
let result = a.substr(8,12);
console.log('item',{result});

//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const food = `The quick fox jumped over the lazy dog`
console.log("index",food[4]);
const stringToInsert = "eat"
const indexToInsertAt = 4;
const newString = food.slice(4,indexToInsertAt) + food.slice(indexToInsertAt);
console.log({newString});

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story = "The quick brown fox jumps over the lazy dog"
console.log(story.split("the").length-1);
console.log(story.split("brown").length-1);

//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"
//const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the library";
const position = string1.search("are");
console.log(position);

const string2 = "The child was sitting on the table before it fell";
const position1 = string2.search("sitting");
console.log(position1);

//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
const b = "wonderful";
console.log(b.toUpperCase());

const c = "amazing";
console.log(c.toLowerCase());

const d = "A wonderful world";
let titleCase = " ";
d.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";});
    console.log(titleCase);
