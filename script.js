import { allQuestions } from './data/index.js';

document.addEventListener("DOMContentLoaded", () => {
  const questions = allQuestions;

  // Elementos do DOM
  const contextEl = document.getElementById("context");
  const questionTextEl = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const feedbackContainer = document.getElementById("feedback-container");
  const feedbackMessage = document.getElementById("feedback-message");
  const explanationEl = document.getElementById("official-explanation");
  const correctCountEl = document.getElementById("correct-count");
  const wrongCountEl = document.getElementById("wrong-count");
  const nextBtns = document.querySelectorAll(".next-question-btn");
  const resetBtn = document.getElementById("reset-score");
  const navContainer = document.getElementById("question-nav");
  const weekSelector = document.getElementById("week-selector");
  const subjectSelector = document.getElementById("subject-selector");

  // Estado da aplicação
  let currentSubject = localStorage.getItem("quiz_currentSubject") || questions[0].subject;
  let currentWeek = parseInt(localStorage.getItem("quiz_currentWeek")) || 1;
  let currentQuestionIndex = 0; // Índice relativo à lista filtrada
  let totalCorrect = parseInt(localStorage.getItem("quiz_totalCorrect")) || 0;
  let totalWrong = parseInt(localStorage.getItem("quiz_totalWrong")) || 0;
  
  // Memória de respostas: { globalIndex: { selectedLetter: "A", isCorrect: true } }
  let userAnswers = JSON.parse(localStorage.getItem("quiz_userAnswers")) || {};

  // Inicialização
  setupSelectors();
  updateScoreUI();
  refreshQuiz();

  // Configura os seletores de Disciplina e Semana
  function setupSelectors() {
    // 1. Popular Disciplinas
    const subjects = [...new Set(questions.map(q => q.subject))];
    subjectSelector.innerHTML = "";
    subjects.forEach(s => {
      const option = document.createElement("option");
      option.value = s;
      option.textContent = s;
      if (s === currentSubject) option.selected = true;
      subjectSelector.appendChild(option);
    });

    // 2. Popular Semanas baseadas na disciplina selecionada
    updateWeekOptions();

    // Eventos
    subjectSelector.addEventListener("change", (e) => {
      currentSubject = e.target.value;
      localStorage.setItem("quiz_currentSubject", currentSubject);
      
      // Ao trocar de disciplina, reseta para a primeira semana disponível dela
      const availableWeeks = [...new Set(questions.filter(q => q.subject === currentSubject).map(q => q.week))].sort((a, b) => a - b);
      currentWeek = availableWeeks[0];
      localStorage.setItem("quiz_currentWeek", currentWeek);
      
      currentQuestionIndex = 0;
      updateWeekOptions();
      refreshQuiz();
    });

    weekSelector.addEventListener("change", (e) => {
      currentWeek = parseInt(e.target.value);
      currentQuestionIndex = 0;
      localStorage.setItem("quiz_currentWeek", currentWeek);
      refreshQuiz();
    });
  }

  function updateWeekOptions() {
    const weeks = [...new Set(questions.filter(q => q.subject === currentSubject).map(q => q.week))].sort((a, b) => a - b);
    weekSelector.innerHTML = "";
    weeks.forEach(w => {
      const option = document.createElement("option");
      option.value = w;
      option.textContent = `Semana ${w}`;
      if (w === currentWeek) option.selected = true;
      weekSelector.appendChild(option);
    });
  }

  // Retorna as questões da disciplina e semana atuais
  function getFilteredQuestions() {
    return questions.filter(q => q.subject === currentSubject && q.week === currentWeek);
  }

  // Recarrega a barra de navegação e a questão atual
  function refreshQuiz() {
    generateNavButtons();
    loadQuestion(currentQuestionIndex);
  }

  // Gerar botões de navegação numéricos
  function generateNavButtons() {
    const filtered = getFilteredQuestions();
    navContainer.innerHTML = "";
    filtered.forEach((_, index) => {
      const btn = document.createElement("button");
      btn.className = "nav-btn";
      btn.textContent = index + 1;
      btn.title = `Ir para questão ${index + 1}`;
      btn.addEventListener("click", () => {
        currentQuestionIndex = index;
        loadQuestion(currentQuestionIndex);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      navContainer.appendChild(btn);
    });
    updateNavUI();
  }

  // Atualizar estado visual da navegação
  function updateNavUI() {
    const filtered = getFilteredQuestions();
    const navBtns = navContainer.querySelectorAll(".nav-btn");
    
    navBtns.forEach((btn, index) => {
      btn.classList.remove("active", "correct", "wrong");
      
      if (index === currentQuestionIndex) {
        btn.classList.add("active");
      }

      const q = filtered[index];
      const globalIndex = questions.indexOf(q);
      if (userAnswers[globalIndex]) {
        if (userAnswers[globalIndex].isCorrect) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
        }
      }
    });
  }

  // Carregar uma questão pelo índice relativo
  function loadQuestion(index) {
    const filtered = getFilteredQuestions();
    if (index >= filtered.length) {
      showFinishedQuiz();
      return;
    }

    const q = filtered[index];
    const globalIndex = questions.indexOf(q);
    
    contextEl.innerHTML = q.context;
    questionTextEl.innerHTML = q.questionText;

    // Limpar e carregar opções
    optionsContainer.innerHTML = "";
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span class="letter">${opt.letter}</span> ${opt.text}`;
      btn.dataset.letter = opt.letter;
      btn.dataset.correct = opt.isCorrect;
      
      if (userAnswers[globalIndex]) {
        btn.setAttribute("disabled", "true");
        if (opt.letter === userAnswers[globalIndex].selectedLetter) {
          btn.classList.add(userAnswers[globalIndex].isCorrect ? "correct" : "wrong");
        } else if (opt.isCorrect) {
          btn.classList.add("correct");
        }
      } else {
        btn.addEventListener("click", () => handleSelectOption(btn));
      }
      
      optionsContainer.appendChild(btn);
    });

    if (userAnswers[globalIndex]) {
      renderFeedback(userAnswers[globalIndex].isCorrect, q);
      feedbackContainer.classList.remove("hidden");
    } else {
      feedbackContainer.classList.add("hidden");
    }
    
    updateNavUI();
  }

  // Lógica ao selecionar uma opção
  function handleSelectOption(selectedBtn) {
    const filtered = getFilteredQuestions();
    const q = filtered[currentQuestionIndex];
    const globalIndex = questions.indexOf(q);
    
    const isCorrect = selectedBtn.dataset.correct === "true";
    const selectedLetter = selectedBtn.dataset.letter;
    const allBtns = optionsContainer.querySelectorAll(".option-btn");

    userAnswers[globalIndex] = {
      selectedLetter: selectedLetter,
      isCorrect: isCorrect
    };

    allBtns.forEach((btn) => {
      btn.setAttribute("disabled", "true");
      if (btn.dataset.letter === selectedLetter) {
        btn.classList.add(isCorrect ? "correct" : "wrong");
      } else if (btn.dataset.correct === "true") {
        btn.classList.add("correct");
      }
    });

    if (isCorrect) {
      totalCorrect++;
    } else {
      totalWrong++;
    }

    saveState();
    updateScoreUI();
    renderFeedback(isCorrect, q);
    feedbackContainer.classList.remove("hidden");
    updateNavUI();
  }

  // Renderizar feedback
  function renderFeedback(isCorrect, q) {
    let feedbackTitle = "";
    let feedbackContent = "";

    if (isCorrect) {
      feedbackMessage.textContent = "✨ Você acertou a questão!";
      feedbackMessage.className = "feedback-message correct-msg";
      feedbackTitle = "<h3>Sua resposta está correta.</h3>";
      feedbackContent = q.correctExplanation;
    } else {
      feedbackMessage.textContent = "❌ Você errou a questão. Veja a justificativa abaixo:";
      feedbackMessage.className = "feedback-message wrong-msg";
      feedbackTitle = "<h3 style='color: var(--danger-color);'>Sua resposta está incorreta.</h3>";
      feedbackContent = q.correctExplanation + q.incorrectExplanations;
    }

    explanationEl.innerHTML = feedbackTitle + feedbackContent;
    updateNextButtonText();
  }

  function updateNextButtonText() {
    const filtered = getFilteredQuestions();
    nextBtns.forEach(btn => {
      if (currentQuestionIndex === filtered.length - 1) {
        btn.textContent = "Ver Resultado Final";
      } else {
        btn.textContent = "Próxima Questão";
      }
    });
  }

  // Avançar para a próxima questão
  nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filtered = getFilteredQuestions();
      currentQuestionIndex++;
      if (currentQuestionIndex < filtered.length) {
        loadQuestion(currentQuestionIndex);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        showFinishedQuiz();
      }
    });
  });

  // Zerar o placar e memória
  resetBtn.addEventListener("click", () => {
    if (confirm("Deseja realmente zerar seu progresso e placar de todas as disciplinas?")) {
      localStorage.removeItem("quiz_totalCorrect");
      localStorage.removeItem("quiz_totalWrong");
      localStorage.removeItem("quiz_userAnswers");
      location.reload();
    }
  });

  function saveState() {
    localStorage.setItem("quiz_totalCorrect", totalCorrect);
    localStorage.setItem("quiz_totalWrong", totalWrong);
    localStorage.setItem("quiz_userAnswers", JSON.stringify(userAnswers));
  }

  function updateScoreUI() {
    correctCountEl.textContent = totalCorrect;
    wrongCountEl.textContent = totalWrong;
  }

  function showFinishedQuiz() {
    contextEl.textContent = "Conteúdo Concluído!";
    questionTextEl.textContent = `Você completou todas as questões desta semana em ${currentSubject}.`;
    optionsContainer.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <p style="font-size: 1.2rem; margin-bottom: 10px;">Desempenho Geral (Todo o Curso):</p>
        <p>Acertos: <strong>${totalCorrect}</strong> | Erros: <strong>${totalWrong}</strong></p>
        <button onclick="resetAndReload()" class="btn-next" style="margin-top: 20px;">Reiniciar Progresso e Placar</button>
      </div>
    `;
    feedbackContainer.classList.add("hidden");
    updateNavUI();
  }
  
  window.resetAndReload = () => {
    localStorage.removeItem("quiz_totalCorrect");
    localStorage.removeItem("quiz_totalWrong");
    localStorage.removeItem("quiz_userAnswers");
    location.reload();
  };
});
