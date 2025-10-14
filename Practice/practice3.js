let myName = "Hemavathi"
let targetChar = 'a'
let count =0

for(let i=0;i<=myName.length;i++)
{
    if(myName.charAt(i)==targetChar)
    {
count++
    }
}

console.log(`The target Character 'a' is presented   ${count}  times`)
