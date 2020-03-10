const button = document.querySelector('.talk');
const content = document.querySelector('.content');

//some speech
const hi = [
    'Erro! Good day, mate!',
    'Howdy, partner!',
    'Ghostbusters, whatya want?',
    'At least, we meet for the first time for the last time!',
    "What's cookin', good lookin'?"
]

const greeting = [
    'Leave me alone!',
    'Can’t complain…I have tried, but no one listens.',
    'I am as happy as a tick on a big, fat doggy.',
    'I am planning on taking over the world.',
    'If I was any better, vitamins would be taking me.',
    'Don’t ask – it’s too early to tell.'

]

const weather = [
    'go outside and look',
    'Colder than a witches patoot!',
    'The same as your face: ugly throughout the week.',
    'A hot as your mum!',
    'Brazillian....., nice. Just like your brother',
]

const SpeachRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeachRecognition();

recognition.onstart = function() {
    console.log('voice activated');

    recognition.onresult = function(event) {
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript;
        content.textContent = transcript;
        readOutLoud(transcript)
    }
}

//add listener to button
button.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I do not understand you'

    if (message.includes('how are you')) {
        const greetingText = greeting[Math.floor(Math.random() * greeting.length)]
        speech.text = greetingText
    } else if (message.includes('weather')) {
        const weatherText = weather[Math.floor(Math.random() * weather.length)]
        speech.text = weatherText
    } else if (message.includes('hi')) {
        const hiText = hi[Math.floor(Math.random() * hi.length)]
        speech.text = hiText
    }


    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;


    window.speechSynthesis.speak(speech);

}