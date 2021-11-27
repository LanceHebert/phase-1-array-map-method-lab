const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  //using map to transform tutorials array
  const titleCased = tutorials.map(line => {  
    //need to split line we get into an array of words because a string is not an array
    const words = line.split(" ");
    console.log(words);
    //now we have a words ARRAY, lets map it so we can transform first character
    const capitalizedWords = words.map(word => {
      //adding first character to the rest of the word sliced with no first character
      return word[0].toUpperCase() + word.slice(1);
    })
    //joining everything back into a single line and returning back to tutorial at that index
  return capitalizedWords.join(" ");
  
  })
return titleCased;
}


