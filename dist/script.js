
const toggleMenu = document.querySelector(".burger__btn");
const headerBot = document.querySelector(".toggle");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});

const kamote = document.querySelectorAll('.links__item h4');
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener('click', () => {
        kamoteq.nextElementSibling.classList.toggle('open');
        kamoteq.querySelector("i").classList.toggle("open");
       
    })
})

const starnav = document.querySelectorAll(".star__nav__link");
const starContent = document.querySelectorAll(".coffee-tab__content ");
starnav.forEach((star) => {
  star.addEventListener('click', () =>{
    removeActiveStar();
    star.classList.add('active');
    const activeContent= document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  })
});

function removeActiveStar() {
  starnav.forEach((star) => {
    star.classList.remove('active');
  })
}
function removeActiveContent() {
  starContent.forEach((star) => {
    star.classList.remove('active');
  })
}


