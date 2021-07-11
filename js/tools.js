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