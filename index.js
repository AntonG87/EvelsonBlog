function isCleanPalindrome(arr){
    const cleanStr = arr.toLowerCase().replace(/[^a-z]/g, '');

    for(let i =0; i < Math.floor(cleanStr.length /2 );i++){
        if(cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]){
            return false;
        }
    }

    return true;
}
console.log(
    isCleanPalindrome("A man a plan a canal Panama"),
    isCleanPalindrome("Race car"),
    isCleanPalindrome("Hello, world!")       
)