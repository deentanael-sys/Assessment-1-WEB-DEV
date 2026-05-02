

const samples = [
    {name: "Ah-Ha", src: "Audio/ah-ha.mp3" },
    {name: "Back of the Net", src: "Audio/back-of-the-net.mp3" },
    {name: "Bang Out of Order", src: "Audio/bangoutoforder.mp3" },
    {name: "Dan", src: "Audio/dan.mp3" },
    {name: "Email of the Evening", src: "Audio/emailoftheevening.mp3" },
    {name: "Hello, Partridge", src: "Audio/hellopartridge.mp3" },
    {name: "I Ate a Scotch Egg", src: "Audio/iateascotchegg.mp3" },
    {name: "I'm Confused", src: "Audio/imconfused.mp3" },
    {name: "FAHH", src: "Audio/Fahh.mp3" },
    {name: "Amaze Amaze Amaze", src: "Audio/amaze-amaze-amaze.mp3"},
    {name: "FLINT AND STEEL!",src:"Audio/flint-and-steel.mp3"},
    {name: "I AM STEVE", src: "Audio/i-am-steve.mp3"}
];


const PER_PAGE = 9;
let page = 0;
const totalPages = () => Math.ceil(samples.length / PER_PAGE);

function render() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    const slice = samples.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

    slice.forEach(sample => {
        const btn = document.createElement('button');
        btn.innerHTML = `${sample.name}<audio src="${sample.src}"></audio>`;
        const audio = btn.querySelector('audio');
        audio.volume = 0.03;
        btn.addEventListener('click', () => {
            audio.currentTime = 0;
            audio.play();
        });
        grid.appendChild(btn);
    });

// fill remaining slots so grid stays 3x3
    const remaining = PER_PAGE - slice.length;
    for (let i = 0; i < remaining; i++) {
        const empty = document.createElement('div');
        grid.appendChild(empty);
    }

    document.getElementById('pageIndicator').textContent = `${page + 1} / ${totalPages()}`;
    document.getElementById('prevBtn').style.visibility = page === 0 ? 'hidden' : 'visible';
    document.getElementById('nextBtn').style.visibility = page === totalPages() - 1 ? 'hidden' : 'visible';
}

document.getElementById('prevBtn').addEventListener('click', () => { page--; render(); });
document.getElementById('nextBtn').addEventListener('click', () => { page++; render(); });

render();

document.getElementById('speakBtn').addEventListener('click', () => {
    const text = document.getElementById('ttsInput').value.trim();
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 0.03;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
});