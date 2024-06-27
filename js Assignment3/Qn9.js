function countWords(paragraph) {
    let wordCount = 0;
    for (const word of paragraph.split(/\s+/)) {
        if (word.trim() !== '') { 
            wordCount++;
        }
    }
    return wordCount;
}

const paragraph = "I am a sample paragraph!.";
console.log(countWords(paragraph)); // Output: 5
