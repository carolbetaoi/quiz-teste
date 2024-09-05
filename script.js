let currentQuestion = 1;
const selectedOptions = {};

function showQuestion(questionNumber) {
    document.querySelectorAll('.question').forEach(question => {
        question.style.display = 'none';
    });
    document.getElementById(`question${questionNumber}`).style.display = 'block';
    currentQuestion = questionNumber;
    updateNavigation();
}

function selectOption(optionId) {
    const questionNumber = parseInt(document.querySelector(`#${optionId}`).name[1]);
    selectedOptions[questionNumber] = optionId;
    document.querySelectorAll(`#question${questionNumber} .option-box`).forEach(box => {
        box.classList.remove('selected');
    });
    document.getElementById(optionId).closest('.option-box').classList.add('selected');
    updateNavigation();
}

function updateNavigation() {
    const totalQuestions = 3;
    document.querySelectorAll('.question-item').forEach(item => {
        const questionNumber = parseInt(item.textContent);
        item.style.backgroundColor = selectedOptions[questionNumber] ? 'rgba(255, 165, 0, 0.8)' : 'rgba(255, 165, 0, 0.4)';
    });

    document.getElementById('finishBtn').disabled = Object.keys(selectedOptions).length !== totalQuestions;
}

function finishQuiz() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestion);
    document.querySelectorAll('.question-item').forEach(item => {
        item.addEventListener('click', () => {
            showQuestion(parseInt(item.textContent));
        });
    });
});
