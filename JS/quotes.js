const quotes = [
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Nothing is impossible. The word itself says 'I'm possible!'",
        author: "Audrey Hepburn"
    },
    {
        quote: "There is nothing impossible to they who will try.",
        author: "Alexander the Great"
    },
    {
        quote: "The bad news is time flies. The good news is you're the pilot.",
        author: "Michael Altshulert"
    },
    {
        quote: "Life has got all those twists and turns. You've got to hold on tight and off you go.",
        author: "Nicole Kidman"
    },
    {
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        quote: "Be courageous. Challenge orthodoxy.",
        author: "Amal Clooney"
    },
    {
        quote: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
        author: "Duchess Meghan"
    },
    {
        quote: "We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.",
        author: "Taylor Swift"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = ` -${todaysQuote.author}`;
//console.log(quotes[Math.floor(Math.random()* quotes.length)]);