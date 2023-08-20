const quotes = [
    {
        quote: "It ain't over till it's over.",
        author: "Yogi Berra",
    },
    {
        quote: "Today, I consider myself the luckiest man on the face on the earth.",
        author: "Lou Gehrig",
    },
    {
        quote: "Batting is timing, Pitching is upsetting timing.",
        author: "Warren Spahn",
    },
    {
        quote: "Baseball is like a poker game. Nobody wants to quit when he's losing; nobody wants you to quit when you're ahead.",
        author: "Jackie Robinson",
    },
    {
        quote: "It's unbelievable how much you don't know about the game you've been playing all your life.",
        author: "Mickey Mantle",
    },
    {
        quote: "다시는 공을 제가 못 던져도 좋습니다. 허락해 주십시오. 지금 나가게 해주십시오.",
        author: "염종석",
    },
    {
        quote: "No Fear.",
        author: "Jerry Royster",
    },
    {
        quote: "마, 함 해보입시더!",
        author: "최동원",
    },
    {
        quote: "욕심이 없는 선수는 프로의 자격이 없다.",
        author: "손아섭",
    },
    {
        quote: "나는 다시 태어나도 포크볼을 던질 것이다. 포크볼을 던진 것을 절대 후회하지 않는다.",
        author: "조정훈",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;