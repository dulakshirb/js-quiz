const correctAnswers = ["A", "B", "B", "A", "B"];
const quizForm = document.querySelector(".quiz-form");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
    quizForm.q5.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  console.log(score);
});
