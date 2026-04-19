// Global değişkenler
let currentWordList = [];
let currentIndex = 0;
let totalWords = 0;
let currentWord = null;
let correctAnswer = '';
let showPronunciation = false;
let direction = 'de-en';
let isLoggedIn = false;
let mixedMode = true;

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupSpeechButtons();
    setupLoginSystem();
    setupGrammarNav();
});

function initializeApp() {
    populateWordGroups();
    
    document.getElementById('startBtn').addEventListener('click', startLearning);
    document.getElementById('nextBtn').addEventListener('click', showNextWord);
    document.getElementById('testBtn').addEventListener('click', testAnswer);
    document.getElementById('showBtn').addEventListener('click', showTranslation);
    document.getElementById('restartBtn').addEventListener('click', restart);
    
    document.getElementById('showPronunciation').addEventListener('change', function(e) {
        showPronunciation = e.target.checked;
        if (currentWord) updatePronunciation();
    });
    
    document.getElementById('mixedMode')?.addEventListener('change', function(e) {
        mixedMode = e.target.checked;
    });
    
    document.getElementById('answerInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') testAnswer();
    });
    
    document.querySelectorAll('input[name="direction"]').forEach(radio => {
        radio.addEventListener('change', function(e) {
            direction = e.target.value;
        });
    });
}

function setupLoginSystem() {
    const loginFloatingBtn = document.getElementById('loginFloatingBtn');
    const loginBtn = document.getElementById('loginBtn');
    const cancelLoginBtn = document.getElementById('cancelLoginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    loginFloatingBtn.addEventListener('click', function() {
        showScreen('loginScreen');
    });
    
    cancelLoginBtn.addEventListener('click', function() {
        showScreen('setupScreen');
        document.getElementById('loginError').style.display = 'none';
    });
    
    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'Patron' && password === '724.Uber') {
            isLoggedIn = true;
            document.getElementById('loginError').style.display = 'none';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            
            // Admin özelliklerini göster
            document.getElementById('mixedSection').style.display = 'block';
            document.getElementById('grammarTab').style.display = 'block';
            document.getElementById('logoutSection').style.display = 'block';
            document.getElementById('loginFloatingBtn').style.display = 'none';
            
            showScreen('setupScreen');
        } else {
            document.getElementById('loginError').style.display = 'block';
        }
    });
    
    logoutBtn.addEventListener('click', function() {
        isLoggedIn = false;
        document.getElementById('mixedSection').style.display = 'none';
        document.getElementById('grammarTab').style.display = 'none';
        document.getElementById('logoutSection').style.display = 'none';
        document.getElementById('loginFloatingBtn').style.display = 'block';
        document.getElementById('mixedMode').checked = false;
        mixedMode = true;
    });
    
    // Enter tuşu ile login
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
}

function setupGrammarNav() {
    document.getElementById('viewGrammarBtn').addEventListener('click', function() {
        loadGrammarNotes();
        showScreen('grammarScreen');
    });
    
    document.getElementById('backFromGrammarBtn').addEventListener('click', function() {
        showScreen('setupScreen');
    });
}

function loadGrammarNotes() {
    const container = document.getElementById('grammarContent');
    let html = '';
    
    // Grammar notes
    GRAMMAR_NOTES.forEach((note, index) => {
        html += `
            <div class="grammar-note">
                <h3>${index + 1}. ${note.title}</h3>
                <p>${note.content}</p>
            </div>
        `;
    });
    
    // Reference tables
    REFERENCE_TABLES.forEach(table => {
        html += `
            <div class="reference-table">
                <h3>${table.title}</h3>
                ${table.subtitle ? `<h4>${table.subtitle}</h4>` : ''}
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>German</th>
                                <th>English</th>
                                <th>Pronunciation</th>
                            </tr>
                        </thead>
                        <tbody>
        `;
        
        table.data.forEach(row => {
            html += `
                        <tr>
                            <td><strong>${row[0]}</strong></td>
                            <td>${row[1]}</td>
                            <td><em>${row[2]}</em></td>
                        </tr>
            `;
        });
        
        html += `
                    </tbody>
                </table>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function showScreen(screenId) {
    document.querySelectorAll('#setupScreen, #gameScreen, #loginScreen, #grammarScreen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function populateWordGroups() {
    const select = document.getElementById('wordGroupSelect');
    const groups = new Set();
    WORDS_DATA.forEach(word => { if (word.group) groups.add(word.group); });
    Array.from(groups).sort().forEach(group => {
        const option = document.createElement('option');
        option.value = group;
        option.textContent = group;
        select.appendChild(option);
    });
}

function startLearning() {
    const selectedGroup = document.getElementById('wordGroupSelect').value;
    direction = document.querySelector('input[name="direction"]:checked').value;
    showPronunciation = document.getElementById('showPronunciation').checked;
    
    currentWordList = selectedGroup === 'All' ? [...WORDS_DATA] : WORDS_DATA.filter(word => word.group === selectedGroup);
    
    // Mixed mode kontrolü (sadece admin girişi yaptıysa)
    if (isLoggedIn) {
        // Admin - mixed mode checkbox'ına göre
        if (mixedMode) {
            shuffleArray(currentWordList);
        }
        // mixedMode false ise sıralı - karıştırma
    } else {
        // Normal kullanıcı - her zaman karışık
        shuffleArray(currentWordList);
    }
    
    totalWords = currentWordList.length;
    currentIndex = 0;
    
    if (totalWords === 0) {
        alert('No words found in this group!');
        return;
    }
    
    showScreen('gameScreen');
    showNextWord();
}

function showNextWord() {
    if (currentIndex >= totalWords) {
        alert('🎉 Congratulations! You finished all words!');
        restart();
        return;
    }
    
    currentWord = currentWordList[currentIndex++];
    document.getElementById('counter').textContent = currentIndex + '/' + totalWords;
    
    if (direction === 'de-en') {
        document.getElementById('wordLabel').textContent = 'German:';
        document.getElementById('wordText').textContent = currentWord.german;
        correctAnswer = currentWord.english;
    } else {
        document.getElementById('wordLabel').textContent = 'English:';
        document.getElementById('wordText').textContent = currentWord.english;
        correctAnswer = currentWord.german;
    }
    
    updatePronunciation();
    document.getElementById('answerInput').value = '';
    document.getElementById('translationBox').style.display = 'none';
    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('showBtn').disabled = false;
}

function updatePronunciation() {
    const pronText = document.getElementById('pronunciationText');
    if (showPronunciation && currentWord.pronunciation) {
        pronText.textContent = '[' + currentWord.pronunciation + ']';
        pronText.style.display = 'block';
    } else {
        pronText.textContent = '';
        pronText.style.display = 'none';
    }
}

function showTranslation() {
    document.getElementById('translationLabel').textContent = direction === 'de-en' ? 'English:' : 'German:';
    document.getElementById('translationText').textContent = correctAnswer;
    document.getElementById('translationBox').style.display = 'block';
    document.getElementById('showBtn').disabled = true;
}

function testAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim();
    if (!userAnswer) return;
    
    const resultBox = document.getElementById('resultBox');
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        resultBox.textContent = '✓ Richtig! (Correct!)';
        resultBox.className = 'result-box result-correct';
    } else {
        resultBox.innerHTML = '✗ Falsch! (Wrong!)<br>Correct: ' + correctAnswer;
        resultBox.className = 'result-box result-wrong';
    }
    resultBox.style.display = 'block';
}

function restart() {
    currentWordList = [];
    currentIndex = 0;
    totalWords = 0;
    currentWord = null;
    showScreen('setupScreen');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// SESLİ TELAFFUZ FONKSİYONLARI
function speak(text, lang) {
    if (!text) return;
    
    const synth = window.speechSynthesis;
    synth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;
    utterance.pitch = 1;
    
    // iOS için kritik - biraz bekle
    setTimeout(() => {
        synth.speak(utterance);
    }, 100);
}

function setupSpeechButtons() {
    // Kelime için hoparlör butonu
    const speakWordBtn = document.getElementById('speak-word');
    if (speakWordBtn) {
        speakWordBtn.addEventListener('click', function() {
            if (!currentWord) return;
            
            const text = direction === 'de-en' ? currentWord.german : currentWord.english;
            const lang = direction === 'de-en' ? 'de-DE' : 'en-US';
            
            speak(text, lang);
        });
    }
    
    // Çeviri için hoparlör butonu
    const speakTranslationBtn = document.getElementById('speak-translation');
    if (speakTranslationBtn) {
        speakTranslationBtn.addEventListener('click', function() {
            if (!correctAnswer) return;
            
            const text = correctAnswer;
            const lang = direction === 'de-en' ? 'en-US' : 'de-DE';
            
            speak(text, lang);
        });
    }
}
