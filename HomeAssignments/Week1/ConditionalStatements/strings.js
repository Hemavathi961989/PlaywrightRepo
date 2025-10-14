let originalWord = "level"

let splitWord = originalWord.split('');
let reversedWord = "";

for(let i=splitWord.length-1;i>=0;i--)
{
reversedWord = reversedWord + splitWord[i];
}

console.log("The reversed word is " + reversedWord)

switch(true)
{
    case(originalWord.length==reversedWord.length):

    console.log("The length of the originalWord is equal to the  reversedWord")
    break;

    case(originalWord.length!=reversedWord.length):

    console.log("The length of the originalWord is not equal to the  reversedWord")
    break;
}

if(originalWord==reversedWord)
{
    console.log("It's a palindrome")
}
else{
    console.log("Not a palindrome!")
}