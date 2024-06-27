/*Qn >> Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.


My Approach to solve this problem.

My approach to solving this problem is by splitting the sentence into an array of words, then iterating over each word and replacing the wrong word with the correct word if found. 

*/


function correctFn(sentence, wrong, correct) {
    
    const words = sentence.split(" ");
    
    
    const correctedWords = words.map(word => {
        if (word.toLowerCase() === wrong.toLowerCase()) {
            return correct;
        }
        return word;
    });

    const correctedSentence = correctedWords.join(" ");

    return correctedSentence;
}

//result

const sentence = "I like apple.";
const wrongWord = "apple";
const correctWord = "banana";

const correctedSentence = correctFn(sentence, wrongWord, correctWord);
console.log(correctedSentence); 
