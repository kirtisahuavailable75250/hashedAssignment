let string = "ChuraKeDilMeraGoriyaChali";
let vowel = "aeiouAEIOU";
let vowelCount = 0;
let consonantCount = 0;

const characters = string.split("");

characters.forEach((char) => {
    if (vowel.includes(char)) {
        
        vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
        
        consonantCount++;
    }
});

console.log("Vowel count:", vowelCount);
console.log("Consonant count:", consonantCount);
