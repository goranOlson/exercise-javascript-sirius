/* 1 */
document.querySelector(".art-1 h3").innerText = "Potato";

/* 2 */
document.querySelector('nav a').innerText = "Start";
document.querySelector('footer section article a').innerText = "Start";

/* 3 */
document.querySelector('nav a:last-of-type').innerText = "Mail Us";
document.querySelector('footer section article a:last-of-type').innerText = "Mail Us";

/* 4 */
document.querySelector('.art-2 p').innerText = "Minus doloremque ducimus enim! Lorem ipsum dolor sit amet consectetur adipisicing elit.";

/* 5 */
const btn = document.querySelector('.art-2 button');
btn.style.backgroundColor = "#d57501";
btn.style.color = "black";

/* 6 */
document.querySelector('.art-3').style.backgroundColor = "#fff8db";

/* 7 */
document.querySelector('footer article:nth-of-type(2) p').innerHTML = 'Sinus skateboards<br>Strandvägen 55<br>114 09 Stockholm';

/* 8 */
const pList = document.querySelectorAll('p');
// console.log('p: ' + pList.length);
for (const p of pList) {
    p.style.backgroundColor = "#ddf";
}

/* 9 */
const btnList = document.querySelectorAll('button');
// console.log('buttons: ' + btnList.length);
for (const btn of btnList) {
    btn.innerText = "add to cart";
}

/* 10 */
document.querySelector('nav a').classList.add('active');

/* 11 */
document.querySelector('.logo').classList.remove('logo');

/* 2 */
/* 2 */
/* 2 */
/* 2 */
/* 2 */