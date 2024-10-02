let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visitCountDisplay').innerText = `Número de visitas: ${visitCount}`;

function showMessage(message) {
    document.getElementById('messageArea').innerText = message;
}

function checkQuiz() {
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    let result = '';

    if (question1 && question1.value === 'autoexame') {
        result += 'Você acertou a primeira pergunta!<br>';
    } else {
        result += 'A resposta correta para a primeira pergunta é: Autoexame mensal.<br>';
    }

    if (question2 && question2.value === '40') {
        result += 'Você acertou a segunda pergunta!<br>';
    } else {
        result += 'A resposta correta para a segunda pergunta é: 40 anos.<br>';
    }

    document.getElementById('quizResult').innerHTML = result;
}

function submitFeedback() {
    const feedback = document.getElementById('feedbackInput').value;
    if (feedback) {
        document.getElementById('feedbackMessage').innerText = "Obrigado pelo seu feedback!";
        document.getElementById('feedbackInput').value = '';
    } else {
        alert("Por favor, insira seu feedback.");
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeButton = document.querySelector('.theme-toggle');

    // Adiciona ou remove a classe 'dark' do botão
    themeButton.classList.toggle('dark');

    // Efeito de fade
    document.body.classList.add('fade-in');
    setTimeout(() => {
        document.body.classList.remove('fade-in');
    }, 1000);
}

// Mostrar ou ocultar o botão de rolar para o topo
window.onscroll = function() {
    const scrollTopButton = document.querySelector('.scroll-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
