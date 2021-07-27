import data from "./base.js";
//-------------//

const texts = ['Everybody in this country should learn how to program a computer... because it teaches you how to think.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);

})();

// RESULT 

const result = document.querySelector("#result");

data.forEach(element => {
    result.innerHTML  += `
    <div class="thumb" data-id="${element.data_id}">
        <img
          src="${element.image}"
          alt="${element.data_id}">
        <h4><a target="_blank" href="${element.link}">Link <i class="fa fa-external-link-square" aria-hidden="${element.aria_hidden}"></i></a></h4>
    </div>
    `;
})

// ELEMENT SHOW
const buttons = document.querySelectorAll('.filter_li');
const section = document.querySelectorAll('.thumb');

let values = "All";
filter(values);

function filter(values) {
  section.forEach(show => {
    show.style.display = "none";
    if (show.getAttribute("data-id") === values || values === "All") {
      show.style.display = "block";
    }
  });
}
buttons.forEach(item => {
  item.addEventListener('click', () => {
    // Show images
    let values = item.textContent;
    filter(values);
  });
});