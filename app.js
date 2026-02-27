// ============================================================
// FROM ALPHA TO OMEGA — Greek Study Companion
// Main Application Logic
// ============================================================

(function() {
  'use strict';

  // ── State ──
  const state = {
    currentView: 'home',
    flashcards: {
      cards: [],
      index: 0,
      flipped: false,
      correct: 0,
      wrong: 0,
      known: new Set()
    },
    quiz: {
      questions: [],
      index: 0,
      score: 0,
      answered: false,
      results: []
    }
  };

  // ── Navigation ──
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      showView(view);
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  function showView(name) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = document.getElementById('view-' + name);
    if (el) el.classList.add('active');
    state.currentView = name;

    if (name === 'reference') renderReference('paradigms');
    if (name === 'alphabet') renderAlphabet();
    if (name === 'flashcards') initFlashcards();
    if (name === 'quiz') initQuiz();
  }

  // ── Home / Chapter Grid ──
  function renderChapterGrid() {
    const grid = document.getElementById('chapter-grid');
    grid.innerHTML = '';
    CHAPTERS.forEach(ch => {
      const card = document.createElement('div');
      card.className = 'chapter-card';
      const vocCount = ch.vocab ? ch.vocab.length : 0;
      card.innerHTML = `
        <div class="chapter-num">Chapter ${ch.id}</div>
        <div class="chapter-greek">${ch.greekTitle.split(' ')[0]}</div>
        <div class="chapter-title">${ch.title}</div>
        <div class="chapter-count">${vocCount} items</div>
      `;
      card.addEventListener('click', () => openChapterModal(ch));
      grid.appendChild(card);
    });
  }

  // ── Chapter Modal ──
  function openChapterModal(ch) {
    const modal = document.getElementById('chapter-modal');
    const content = document.getElementById('modal-content');

    const vocabHtml = ch.vocab && ch.vocab.length
      ? `<div class="modal-section">
          <h4>Vocabulary (${ch.vocab.length} items)</h4>
          <div class="modal-vocab-grid">
            ${ch.vocab.map(v => `
              <div class="modal-vocab-item">
                <span class="modal-vocab-greek">${v.greek}</span>
                <span class="modal-vocab-eng">${v.english}</span>
              </div>
            `).join('')}
          </div>
        </div>`
      : '';

    const grammarHtml = ch.grammar && ch.grammar.length
      ? `<div class="modal-section">
          <h4>Grammar Notes</h4>
          ${ch.grammar.map(g => `<div class="grammar-note">${g}</div>`).join('')}
        </div>`
      : '';

    content.innerHTML = `
      <div class="modal-chapter-title">Chapter ${ch.id}: ${ch.title}</div>
      <div class="modal-chapter-greek">${ch.greekTitle}</div>
      <p style="color:var(--ink-faint);font-style:italic;margin-bottom:1.5rem;">${ch.summary || ''}</p>
      ${grammarHtml}
      ${vocabHtml}
      <div style="margin-top:1.5rem;display:flex;gap:0.75rem;flex-wrap:wrap;">
        <button class="btn-primary" onclick="studyChapter(${ch.id},'flashcards')">Study Flashcards</button>
        <button class="btn-primary" onclick="studyChapter(${ch.id},'quiz')">Take Quiz</button>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('chapter-modal').classList.add('hidden');
  });
  document.getElementById('chapter-modal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.add('hidden');
  });

  // Global function for modal buttons
  window.studyChapter = function(chapterId, mode) {
    document.getElementById('chapter-modal').classList.add('hidden');
    if (mode === 'flashcards') {
      showView('flashcards');
      document.querySelector('.nav-btn[data-view="flashcards"]').classList.add('active');
      document.querySelectorAll('.nav-btn').forEach(b => { if (b.dataset.view !== 'flashcards') b.classList.remove('active'); });
      const sel = document.getElementById('fc-chapter-select');
      sel.value = chapterId;
      loadFlashcards();
    } else if (mode === 'quiz') {
      showView('quiz');
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.nav-btn[data-view="quiz"]').classList.add('active');
      const sel = document.getElementById('quiz-chapter-select');
      sel.value = chapterId;
    }
  };

  // ── Populate Chapter Selects ──
  function populateChapterSelects() {
    const selects = ['fc-chapter-select', 'quiz-chapter-select'];
    selects.forEach(id => {
      const sel = document.getElementById(id);
      sel.innerHTML = '<option value="all">All Chapters</option>';
      CHAPTERS.forEach(ch => {
        const opt = document.createElement('option');
        opt.value = ch.id;
        opt.textContent = `Ch. ${ch.id}: ${ch.title}`;
        sel.appendChild(opt);
      });
    });
  }

  // ── Build Card Pool ──
  function buildCardPool(chapterVal, categoryVal) {
    let cards = [];
    const chapters = chapterVal === 'all'
      ? CHAPTERS
      : CHAPTERS.filter(c => c.id === parseInt(chapterVal));

    chapters.forEach(ch => {
      if (!ch.vocab) return;
      ch.vocab.forEach(v => {
        const cat = v.category || 'vocab';
        if (categoryVal === 'all' || cat === categoryVal) {
          cards.push({
            greek: v.greek,
            english: v.english,
            hint: `Ch. ${ch.id} · ${cat}`,
            notes: v.notes || '',
            chapter: ch.id,
            category: cat
          });
        }
      });
    });

    // Also add prepositions if relevant
    if (categoryVal === 'all' || categoryVal === 'prep') {
      if (chapterVal === 'all') {
        PREPOSITIONS.forEach(p => {
          cards.push({
            greek: p.greek,
            english: p.english,
            hint: `Preposition · ${p.cases}`,
            notes: p.cases,
            chapter: 'ref',
            category: 'prep'
          });
        });
      }
    }

    if (categoryVal === 'all' || categoryVal === 'particle') {
      if (chapterVal === 'all') {
        PARTICLES.forEach(p => {
          cards.push({
            greek: p.greek,
            english: p.english,
            hint: 'Particle / Conjunction',
            notes: '',
            chapter: 'ref',
            category: 'particle'
          });
        });
      }
    }

    return cards;
  }

  // ── FLASHCARDS ──
  function initFlashcards() {
    document.getElementById('fc-chapter-select').addEventListener('change', loadFlashcards);
    document.getElementById('fc-category-select').addEventListener('change', loadFlashcards);
    document.getElementById('fc-shuffle-btn').addEventListener('click', () => {
      shuffle(state.flashcards.cards);
      state.flashcards.index = 0;
      state.flashcards.flipped = false;
      state.flashcards.correct = 0;
      state.flashcards.wrong = 0;
      state.flashcards.known = new Set();
      renderFlashcard();
    });
    document.getElementById('fc-prev').addEventListener('click', prevCard);
    document.getElementById('fc-next').addEventListener('click', nextCard);
    document.getElementById('fc-flip-btn').addEventListener('click', flipCard);
    document.getElementById('flashcard').addEventListener('click', flipCard);
    document.getElementById('fc-correct-btn').addEventListener('click', markCorrect);
    document.getElementById('fc-wrong-btn').addEventListener('click', markWrong);

    document.addEventListener('keydown', handleFlashcardKeys);
    loadFlashcards();
  }

  function handleFlashcardKeys(e) {
    if (state.currentView !== 'flashcards') return;
    if (e.code === 'Space') { e.preventDefault(); flipCard(); }
    if (e.code === 'ArrowRight') nextCard();
    if (e.code === 'ArrowLeft') prevCard();
    if (e.code === 'KeyK') markCorrect();
    if (e.code === 'KeyJ') markWrong();
  }

  function loadFlashcards() {
    const chVal = document.getElementById('fc-chapter-select').value;
    const catVal = document.getElementById('fc-category-select').value;
    state.flashcards.cards = buildCardPool(chVal, catVal);
    state.flashcards.index = 0;
    state.flashcards.flipped = false;
    state.flashcards.correct = 0;
    state.flashcards.wrong = 0;
    state.flashcards.known = new Set();
    renderFlashcard();
  }

  function renderFlashcard() {
    const { cards, index } = state.flashcards;
    if (!cards.length) {
      document.getElementById('fc-front-text').textContent = 'No cards found.';
      document.getElementById('fc-back-text').textContent = 'Select a chapter or category.';
      document.getElementById('fc-counter').textContent = 'No cards';
      document.getElementById('fc-progress').style.width = '0%';
      return;
    }

    const card = cards[index];
    const fc = document.getElementById('flashcard');

    // Reset flip without animation
    fc.style.transition = 'none';
    fc.classList.remove('flipped');
    state.flashcards.flipped = false;
    setTimeout(() => { fc.style.transition = ''; }, 50);

    document.getElementById('fc-front-text').textContent = card.greek;
    document.getElementById('fc-front-hint').textContent = card.hint;
    document.getElementById('fc-back-text').textContent = card.english;
    document.getElementById('fc-back-notes').textContent = card.notes;
    document.getElementById('fc-counter').textContent = `Card ${index + 1} of ${cards.length}`;

    const pct = ((index + 1) / cards.length) * 100;
    document.getElementById('fc-progress').style.width = pct + '%';

    updateFcStats();
  }

  function flipCard() {
    const fc = document.getElementById('flashcard');
    state.flashcards.flipped = !state.flashcards.flipped;
    fc.classList.toggle('flipped', state.flashcards.flipped);
  }

  function nextCard() {
    const { cards } = state.flashcards;
    if (!cards.length) return;
    state.flashcards.index = (state.flashcards.index + 1) % cards.length;
    renderFlashcard();
  }

  function prevCard() {
    const { cards } = state.flashcards;
    if (!cards.length) return;
    state.flashcards.index = (state.flashcards.index - 1 + cards.length) % cards.length;
    renderFlashcard();
  }

  function markCorrect() {
    state.flashcards.correct++;
    state.flashcards.known.add(state.flashcards.index);
    nextCard();
  }

  function markWrong() {
    state.flashcards.wrong++;
    nextCard();
  }

  function updateFcStats() {
    const { cards, correct, wrong } = state.flashcards;
    document.getElementById('fc-stat-correct').textContent = `✓ ${correct}`;
    document.getElementById('fc-stat-wrong').textContent = `✗ ${wrong}`;
    const seen = correct + wrong;
    const remaining = Math.max(0, cards.length - seen);
    document.getElementById('fc-stat-remaining').textContent = `⏳ ${remaining} remaining`;
  }

  // ── QUIZ ──
  function initQuiz() {
    document.getElementById('quiz-start-btn').addEventListener('click', startQuiz);
    document.getElementById('quiz-next-btn').addEventListener('click', nextQuestion);
    document.getElementById('quiz-restart-btn').addEventListener('click', () => {
      document.getElementById('quiz-results-wrap').classList.add('hidden');
      document.getElementById('quiz-welcome').classList.remove('hidden');
    });
  }

  function startQuiz() {
    const chVal = document.getElementById('quiz-chapter-select').value;
    const typeVal = document.getElementById('quiz-type-select').value;
    let pool = buildCardPool(chVal, 'all');

    if (pool.length < 4) {
      alert('Not enough vocabulary in this selection for a quiz. Please choose a broader selection.');
      return;
    }

    shuffle(pool);
    pool = pool.slice(0, Math.min(15, pool.length));

    state.quiz.questions = pool.map(card => buildQuestion(card, pool, typeVal));
    state.quiz.index = 0;
    state.quiz.score = 0;
    state.quiz.results = [];

    document.getElementById('quiz-welcome').classList.add('hidden');
    document.getElementById('quiz-results-wrap').classList.add('hidden');
    document.getElementById('quiz-question-wrap').classList.remove('hidden');
    document.getElementById('quiz-next-btn').classList.add('hidden');
    document.getElementById('quiz-feedback').classList.add('hidden');

    renderQuestion();
  }

  function buildQuestion(card, pool, typeVal) {
    let direction = typeVal;
    if (typeVal === 'mixed') direction = Math.random() > 0.5 ? 'gr-en' : 'en-gr';

    let prompt, correct, choices;
    if (direction === 'gr-en') {
      prompt = card.greek;
      correct = card.english;
      const distractors = pool
        .filter(c => c.english !== correct)
        .map(c => c.english);
      shuffle(distractors);
      choices = shuffle([correct, ...distractors.slice(0, 3)]);
    } else {
      prompt = card.english;
      correct = card.greek;
      const distractors = pool
        .filter(c => c.greek !== correct)
        .map(c => c.greek);
      shuffle(distractors);
      choices = shuffle([correct, ...distractors.slice(0, 3)]);
    }

    return { prompt, correct, choices, direction, hint: card.hint };
  }

  function renderQuestion() {
    const q = state.quiz.questions[state.quiz.index];
    const total = state.quiz.questions.length;

    document.getElementById('quiz-q-num').textContent = `Question ${state.quiz.index + 1} of ${total}`;
    document.getElementById('quiz-score-display').textContent = `Score: ${state.quiz.score}`;
    document.getElementById('quiz-prompt').textContent = q.prompt;
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('quiz-next-btn').classList.add('hidden');

    const choicesEl = document.getElementById('quiz-choices');
    choicesEl.innerHTML = '';
    q.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'quiz-choice';
      btn.textContent = choice;
      btn.addEventListener('click', () => answerQuestion(choice, q.correct));
      choicesEl.appendChild(btn);
    });
    state.quiz.answered = false;
  }

  function answerQuestion(chosen, correct) {
    if (state.quiz.answered) return;
    state.quiz.answered = true;

    const choiceBtns = document.querySelectorAll('.quiz-choice');
    const isCorrect = chosen === correct;

    choiceBtns.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) btn.classList.add('correct');
      if (btn.textContent === chosen && !isCorrect) btn.classList.add('wrong');
    });

    const feedback = document.getElementById('quiz-feedback');
    feedback.className = 'quiz-feedback ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
    feedback.textContent = isCorrect
      ? '✓ Excellent! That is correct.'
      : `✗ Not quite. The answer is: ${correct}`;
    feedback.classList.remove('hidden');

    if (isCorrect) state.quiz.score++;
    state.quiz.results.push({ prompt: state.quiz.questions[state.quiz.index].prompt, correct, chosen, isCorrect });

    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.textContent = state.quiz.index + 1 < state.quiz.questions.length ? 'Next →' : 'See Results';
    nextBtn.classList.remove('hidden');
  }

  function nextQuestion() {
    state.quiz.index++;
    if (state.quiz.index < state.quiz.questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    document.getElementById('quiz-question-wrap').classList.add('hidden');
    document.getElementById('quiz-results-wrap').classList.remove('hidden');

    const total = state.quiz.questions.length;
    const score = state.quiz.score;
    const pct = Math.round((score / total) * 100);

    document.getElementById('results-score').textContent = `${score} / ${total}`;

    let msg;
    if (pct >= 90) msg = 'Ἄριστα! Outstanding!';
    else if (pct >= 75) msg = 'Καλῶς! Well done!';
    else if (pct >= 60) msg = 'Μέτρως. Keep practicing!';
    else msg = 'Μελέτη χρεία. More study needed!';
    document.getElementById('results-message').textContent = msg;

    const breakdown = state.quiz.results.map(r =>
      `<div style="color:${r.isCorrect ? '#2a7a2a' : '#8b3010'};margin:0.2rem 0;font-size:0.9rem;">
        ${r.isCorrect ? '✓' : '✗'} <strong>${r.prompt}</strong> → ${r.correct}
      </div>`
    ).join('');
    document.getElementById('results-breakdown').innerHTML = breakdown;
  }

  // ── REFERENCE ──
  document.querySelectorAll('.ref-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ref-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderReference(tab.dataset.ref);
    });
  });

  function renderReference(type) {
    const container = document.getElementById('reference-content');

    if (type === 'paradigms') {
      container.innerHTML = Object.entries(PARADIGMS).map(([key, p]) => {
        const headerRow = `<tr>${p.headers.map(h => `<th>${h}</th>`).join('')}</tr>`;
        const bodyRows = p.rows.map(row =>
          `<tr>${row.map((cell, i) => `<td class="${i > 0 ? 'greek-cell' : ''}">${cell}</td>`).join('')}</tr>`
        ).join('');
        return `
          <div class="paradigm-section">
            <h3>${p.title}</h3>
            <table class="paradigm-table">
              <thead>${headerRow}</thead>
              <tbody>${bodyRows}</tbody>
            </table>
          </div>
        `;
      }).join('');
    }

    else if (type === 'prepositions') {
      container.innerHTML = `
        <div class="prep-grid">
          ${PREPOSITIONS.map(p => `
            <div class="prep-card">
              <div class="prep-greek">${p.greek}</div>
              <div class="prep-eng">${p.english}</div>
              <div class="prep-cases">Cases: ${p.cases}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    else if (type === 'participles') {
      container.innerHTML = `
        <div class="paradigm-section">
          <h3>Particles & Conjunctions</h3>
          <div class="prep-grid">
            ${PARTICLES.map(p => `
              <div class="prep-card">
                <div class="prep-greek">${p.greek}</div>
                <div class="prep-eng">${p.english}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    else if (type === 'vocab-all') {
      // Build searchable vocab list
      const allVocab = [];
      CHAPTERS.forEach(ch => {
        if (!ch.vocab) return;
        ch.vocab.forEach(v => allVocab.push({ ...v, chapter: ch.id, chTitle: ch.title }));
      });

      container.innerHTML = `
        <input type="text" class="vocab-search-bar" id="vocab-search" placeholder="Search Greek or English..." />
        <div class="vocab-list" id="vocab-list"></div>
      `;

      function renderVocabList(filter = '') {
        const f = filter.toLowerCase();
        const items = allVocab.filter(v =>
          v.greek.toLowerCase().includes(f) ||
          v.english.toLowerCase().includes(f)
        );
        document.getElementById('vocab-list').innerHTML = items.map(v => `
          <div class="vocab-item">
            <div class="vocab-greek">${v.greek}</div>
            <div class="vocab-eng">${v.english}</div>
            <div class="vocab-ch">Ch. ${v.chapter}: ${v.chTitle}</div>
          </div>
        `).join('') || '<p style="color:var(--ink-faint);font-style:italic;padding:1rem;">No results found.</p>';
      }

      renderVocabList();
      document.getElementById('vocab-search').addEventListener('input', e => renderVocabList(e.target.value));
    }
  }

  // ── ALPHABET ──
  function renderAlphabet() {
    const grid = document.getElementById('alphabet-grid');
    const detail = document.getElementById('alphabet-detail');
    grid.innerHTML = '';

    ALPHABET.forEach((letter, i) => {
      const card = document.createElement('div');
      card.className = 'letter-card';
      card.innerHTML = `
        <div class="letter-upper">${letter.upper}</div>
        <div class="letter-lower">${letter.lower}</div>
        <div class="letter-name">${letter.name}</div>
        <div class="letter-translit">${letter.translit}</div>
      `;
      card.addEventListener('click', () => {
        document.querySelectorAll('.letter-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        detail.innerHTML = `
          <div class="ad-letter">${letter.upper}${letter.lower}</div>
          <div class="ad-info">
            <h3>${letter.name} (${letter.translit})</h3>
            <p><strong>Sound:</strong> ${letter.sound}</p>
            <p><strong>Examples:</strong> ${letter.examples}</p>
          </div>
        `;
      });
      grid.appendChild(card);
    });

    // Default detail
    detail.innerHTML = `
      <div class="ad-letter" style="opacity:0.3">Αα</div>
      <div class="ad-info"><h3>Click any letter to learn more</h3></div>
    `;

    // Diacritics
    const diGrid = document.getElementById('diacritics-grid');
    diGrid.innerHTML = DIACRITICS.map(d => `
      <div class="diacritic-card">
        <div class="dc-mark">${d.mark}</div>
        <div class="dc-name">${d.name}</div>
        <div class="dc-desc">${d.description}</div>
      </div>
    `).join('');
  }

  // ── Utility ──
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ── INIT ──
  renderChapterGrid();
  populateChapterSelects();

})();
