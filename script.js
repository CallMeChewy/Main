const flashcards = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter"
  },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City"
  },
  {
    question: "What is the highest mountain in Africa?",
    answer: "Mount Kilimanjaro"
  },
  {
    question: "What is the largest ocean in the world?",
    answer: "Pacific Ocean"
  },
  {
    question: "What is the largest desert in the world?",
    answer: "Sahara"
  },
  {
    question: "What is the capital of Australia?",
    answer: "Canberra"
  },
  {
    question: "What is the largest state in the United States?",
    answer: "Alaska"
  }
];

let currentFlashcard = 0;

function showFlashcard() {
  const flashcard = document.getElementById("flashcard");
  flashcard.querySelector(".question").textContent = flashcards[currentFlashcard].question;
  flashcard.querySelector(".answer").textContent = flashcards[currentFlashcard].answer;
  flashcard.querySelector(".answer").style.display = "none";
}

function showAnswer() {
  const flashcard = document.getElementById("flashcard");
  const answer = flashcard.querySelector(".answer");
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

function showPrevFlashcard() {
  currentFlashcard--;
  if (currentFlashcard < 0) {
    currentFlashcard = flashcards.length - 1;
  }
  showFlashcard();
  document.getElementById("flashcard").querySelector(".answer").style.display = "none";
}

function showNextFlashcard() {
  currentFlashcard++;
  if (currentFlashcard > flashcards.length - 1) {
    currentFlashcard = 0;
  }
  showFlashcard();
  document.getElementById("flashcard").querySelector(".answer").style.display = "none";
}

function shuffleFlashcards() {
  for (let i = flashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
  }
  showFlashcard();
  document.getElementById("flashcard").querySelector(".answer").style.display = "none";
}

document.getElementById("flashcard").addEventListener("click", showAnswer);
document.getElementById("prevBtn").addEventListener("click", function() {
  showPrevFlashcard();
});
document.getElementById("nextBtn").addEventListener("click", function() {
  showNextFlashcard();
});
document.getElementById("sortBtn").addEventListener("click", function() {
  shuffleFlashcards();
});

shuffleFlashcards();
