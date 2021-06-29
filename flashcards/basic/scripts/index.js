//Declaration for the class question
class question {
  // A constructor is a special function used to create an instance of the class
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    // We will set this to true when answered correctly.
    this.correct = false;
  }
}
// Define the flashcards. Declare an empty array
let myFlashcards = [];
 
// Create three questions and push them onto the flashcard array
myFlashcards.push(new question('What color is chlorophyll?', 'green'));
myFlashcards.push(new question('What are the reactants of photosynthesis?', 'carbon dioxide and water'));
myFlashcards.push(new question('What are the products of photosynthesis?', 'sugar and oxygen'));

// Loop through the array printing out the question and the answer
let i = 0;
while (i < myFlashcards.length)  {
  console.log(myFlashcards[i].question + ' ' + myFlashcards[i].answer);
  ++i
}
