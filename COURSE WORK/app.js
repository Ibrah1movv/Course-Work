// Store the correct answers for each question
const correctAnswers = {
    q1: 'b',
    q2: 'c',
    q3: 'c',
    q4: 'a',
    q5: 'b',
    q6: 'c',
    q7: 'c',
    q8: 'b',
    q9: 'a',
    q10: 'b'
  };
  
  // Get the form element and add a submit event listener
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting
  
    let point = 0;
    const formData = new FormData(form);
  
    // Loop through the form data and check each answer
    for (let [question, answer] of formData.entries()) {
      if (answer === correctAnswers[question]) {
        point += 1;
      }
    }
  
    // Display the user's score
    const totalScore = document.getElementById('score');
    totalScore.textContent = `Your score is ${point}/${Object.keys(correctAnswers).length}`;
    form.appendChild(totalScore);
  });
  