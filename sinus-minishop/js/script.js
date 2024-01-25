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

/* 12 */
// Top nav
const newNavItem = document.createElement('a');
newNavItem.setAttribute('href', '#');
newNavItem.text = "Sale";

document.querySelector('header nav img').before(newNavItem);

// Footer nav
const footerNavItem = document.createElement('a');
footerNavItem.setAttribute('href', '#');
footerNavItem.text = "Sale";

document.querySelector('footer article').append(footerNavItem);

/* 13 */
let newProduct = `
<article class="art-3">
    <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Forrest</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
    <button>buy</button>
</article>`;

document.querySelector('main').insertAdjacentHTML('beforeend', newProduct);

/* 14 */
// .logo is remove earlier.
document.querySelector('header img').addEventListener('click', () => { console.log('found you!'); });

/* 15 */
const artList = document.querySelectorAll('article');
for (const art of artList) {
    art.addEventListener('click', (e) => {
        console.log(`Hi, Im article ${e.currentTarget.children[2].innerText }`);
     });
}

