//EXERCICIO 01:
function verificaPalindrome (string)
{
    for (let index in  string)
    {
        if (string[index] != string[(string.length -1 ) - index])
        {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("Matheus"));