const quotes = [
  "Believe in yourself — that's how you're already halfway to your goal. Confidence and perseverance can turn the most impossible dreams into your proudest achievements.",
  "Love what you do. That’s the only way to do truly great work. When passion drives your actions, success becomes not just possible — it becomes inevitable.",
  "Don't just watch time — follow it. Keep moving forward. Time rewards those who act with purpose, not those who hesitate while waiting for the perfect moment.",
  "Success is not final. Failure isn’t fatal. Courage is what counts. True greatness lies in getting up one more time than you've fallen and never losing faith in yourself.",
  "The future belongs to those who dare to dream and believe in it. Dreams fueled by action and vision become unstoppable forces of transformation and progress.",
  "Everything seems impossible until you make it happen. What feels unreachable today can become tomorrow’s reality if you have the courage to keep showing up.",
  "Begin where you are. Use what you have. Do what you can. It’s not about having the best tools — it’s about taking that first step and growing stronger along the way.",
  "Who you become matters more than what you achieve. Achievements fade, but the strength, character, and resilience you build stay with you for a lifetime.",
  "Dream big. Take the leap. Fear and failure shape greatness. Every setback is a setup for a comeback when you keep faith in your goals and trust the process.",
  "You’ll miss every shot you don’t take. Try. Even the smallest action today can build the momentum that carries you closer to success than standing still ever could.",
  "Tough times build the strongest people with the best stories. The struggle you're facing now might be the foundation of your strength, growth, and future impact.",
  "Let dreams lead you — not fear, doubt, or hesitation. Bold decisions fueled by purpose are the first spark of everything meaningful, extraordinary, and lasting.",
  "To fly, release the weights holding you down. Doubts, regrets, and past failures only matter if you carry them — choose to rise above them starting today.",
  "Push yourself — nobody else is coming to do it for you. Take ownership of your goals, your growth, and your grit — they’re the keys to building your legacy.",
  "Comfort zones never lead to great destinations. Growth happens on the edge of discomfort, where new skills, opportunities, and confidence begin to form.",
  "Opportunities won’t find you — go chase them. Be bold, be intentional, and create the life you wish for instead of waiting for it to magically appear.",
  "Work hard. Earn it. Then feel the joy of real achievement. Nothing feels better than the success that comes from discipline, focus, and unwavering belief.",
  "Dream it. Wish it. Go out and do it now. The world rewards those who take action — not those who keep their goals locked away in hope or hesitation.",
  "Hard times don’t break you — they reveal your strength. Adversity is the furnace in which grit, courage, and resilience are forged into something unstoppable.",
  "Focus on goals. Ignore the noise and obstacles. When your vision is clear, distractions fade and the path forward becomes more powerful and purposeful.",
  "Keep going. What you need will come right on time. Patience, persistence, and faith often open doors at just the right moment, even when you can't see them yet.",
  "To get ahead, just take that first step. You don’t need to have it all figured out — motion creates momentum, and momentum opens up your next direction.",
  "Everything you want is just beyond your fear. Fear shrinks dreams — action expands them. Courage is deciding that your dream matters more than your doubt.",
  "Act like it matters — because it absolutely does. You have no idea how far your ripple will travel when you show up every day with purpose and integrity.",
  "Going through hell? Keep walking. Don’t stop. Every step through hardship brings you closer to strength, peace, and a version of yourself you'll be proud of.",
  "Start your day with drive. End it with pride. Greatness is built in the hours no one sees — through focus, grit, and the refusal to settle for average.",
  "Small things, done daily, create big success. Consistency isn’t flashy, but it’s magic — it builds habits that turn wishes into plans and actions into results.",
  "You’re never too old to change or start fresh. The timeline doesn’t matter — only your commitment to becoming the person you were always meant to be.",
  "Be so good they simply can’t look away. Excellence, done with humility, has a gravity of its own — and it’s impossible to ignore the person who never stops improving.",
  "Go far enough that doubts can’t reach you. Let your growth be louder than your critics, and let your success echo longer than their silence.",
  "Your limits exist only in your imagination. The moment you stop believing in them is the moment they start to disappear — growth begins where comfort ends.",
  "Later easily becomes never. Start now. There will never be a perfect time — only this moment, which is waiting for you to rise and begin.",
  "Big achievements take time — and patience. Overnight success is often years of quiet persistence, fueled by belief when no one else believed.",
  "Do something today your future self will thank you for. Every act of discipline now is a gift to the person you're becoming — keep going.",
  "Stop waiting. Build your own opportunity. If the door isn’t there, make one. If the path isn’t clear, carve it. That’s how leaders are made.",
  "Yes, it's hard — but that doesn’t mean impossible. Most things worth doing demand effort, and that effort becomes your victory story.",
  "Challenge limits instead of being limited by them. Don’t adapt to a cage — outgrow it, break it, and redefine what’s possible for you.",
  "Fear stops more dreams than failure ever could. Mistakes are lessons. Regret is the cost of never trying. Always choose action over fear.",
  "Let success make the noise — stay quietly focused. Mastery is silent, grounded in consistency, and speaks loudest through results.",
  "Each day is your chance to create something amazing. Show up, do the work, and leave behind proof that you refused to settle.",
  "Greatness starts the moment you begin. The gap between average and excellence is filled with brave first steps — take yours today.",
  "Hard paths lead to beautiful places. The climb is tough, but the view is worth every moment of struggle, pain, and persistence.",
  "Suffer now. Reap the glory later. Never quit. The price of discipline today is far less than the pain of regret tomorrow.",
  "The best views come after the hardest climbs. The struggle makes the victory richer — and your story more powerful.",
  "No pressure? No diamonds. Resistance sharpens talent, and adversity gives rise to strength that comfort never could.",
  "The time will pass anyway — pursue the dream. Whether you try or not, the days will move — so make them count.",
  "Progress matters more than being perfect. Perfection paralyzes, but steady effort brings clarity, success, and pride.",
  "Doubt kills more dreams than mistakes ever will. Action breeds confidence, and courage is born from movement.",
  "Winners are simply dreamers who refuse to quit. They fall, learn, and rise again — always keeping the dream alive."
];


const authors = [
  "- Theodore Roosevelt",
  "- Steve Jobs",
  "- Sam Levenson",
  "- Winston Churchill",
  "- Eleanor Roosevelt",
  "- Nelson Mandela",
  "- Arthur Ashe",
  "- Zig Ziglar",
  "- Norman Vaughan",
  "- Wayne Gretzky",
  "- C.S. Lewis",
  "- Roy T. Bennett",
  "- Toni Morrison",
  "- Ava Reynolds",
  "- Liam Carter",
  "- Sophia Blake",
  "- Ethan Hayes",
  "- Mia Lawson",
  "- Lucas Bennett",
  "- Harper Monroe",
  "- Ella Thompson",
  "- Mark Twain",
  "- George Addair",
  "- William James",
  "- Winston Churchill",
  "- Noah Parker",
  "- Isabel Marant",
  "- C.S. Lewis",
  "- Steve Martin",
  "- Olivia Brooks",
  "- Jacob Rivera",
  "- Chloe Sanders",
  "- Henry Maxwell",
  "- Zara Coleman",
  "- Leo Ramirez",
  "- Nora Collins",
  "- Caleb Foster",
  "- Suzy Kassem",
  "- Frank Ocean",
  "- John Wooden",
  "- Zig Ziglar",
  "- Zig Ziglar",
  "- Muhammad Ali",
  "- Dylan Walsh",
  "- Amelia King",
  "- Sophie Morgan",
  "- Grayson Lee",
  "- Franklin D. Roosevelt",
  "- Nelson Mandela"
];


let button = document.querySelector('#newQuote');

button.addEventListener('click', runEvent);

function runEvent (e) {
 
let random = Math.floor(Math.random() * quotes.length);

  let quote = document.querySelector('#quote').textContent = `"${quotes[random]}"`;

  let author = document.querySelector('#author').textContent = authors[random];

}


