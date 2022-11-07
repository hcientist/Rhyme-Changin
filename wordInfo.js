const query = "hello";

const variableSizeResults = document.querySelectorAll(".result.imperfect");
variableSizeResults.forEach((result) => {
  const resultScore = parseInt(result.dataset.score, 10);
  result.style.fontSize = `${0.5 + (3.5 * resultScore) / 300}rem`;
});

// assuming you already have rhyme results somewhere, for each of the first 10 results, query the word info api for the rhyming words' info and display them in a dl with that rhyming word
