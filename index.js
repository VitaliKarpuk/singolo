const phoneButtonVertical = document.querySelectorAll(".iPhone-Vertical__button");
const phoneButtonHorizontall = document.querySelector('.iPhone-Horizontal__button')
const screenVertical = document.querySelectorAll(".iPhone-Vertical__screen");
const screenHorizontall = document.querySelector(".iPhone-Horizontall__screen")
const tags = document.querySelectorAll(".portfolio__tag .tag")
const portfolioImg = document.querySelectorAll(".portfolio-img");
const buttonPortfolio = document.querySelector(".portfolio__tag")
let layout4 = document.querySelector(".layout-4-column")
const img = document.querySelectorAll('.portfolio-img img')
const navButtonHeader = document.querySelector('.navigation')
const linkHeader = document.querySelectorAll('.navigation a')


// Header
navButtonHeader.onclick = (e) => {
    let clickTag = e.target
    removeSelectedNav();
    selectedClickNav(clickTag)    
}
const removeSelectedNav = () => {
    linkHeader.forEach(item => {
        item.classList.remove("navigation_selected")
    })
}

const selectedClickNav = (clickTag) => {
    clickTag.classList.add("navigation_selected")
}
// Slider
// function nextSlide() {
//     goToSlide(currentSlide+1);
// }
 
// function previousSlide() {
//     goToSlide(currentSlide-1);
// }

// function goToSlide(n) {
//     slides[currentSlide].className = 'slide';
//     currentSlide = (n+slides.length)%slides.length;
//     slides[currentSlide].className = 'slide showing';
// }

 
// next.onclick = () => {
//     nextSlide();
// };
// previous.onclick = () => {
//     previousSlide();
// };


phoneButtonVertical[3].onclick = () => {
    if(screenVertical[3].className === 'iPhone-Vertical__screen'){
        screenVertical[3].className = "iPhone-Vertical__screen screen-Vertical_off"
    }else{
        screenVertical[3].className = 'iPhone-Vertical__screen'
    }
}
phoneButtonHorizontall.onclick = () => {
    if(screenHorizontall.className === 'iPhone-Horizontall__screen'){
        screenHorizontall.className = "iPhone-Horizontall__screen screen-Horizontall_off"
    }else{
        screenHorizontall.className = 'iPhone-Horizontall__screen'
    }
}

// Portfolio

buttonPortfolio.onclick = (e) => {
    if(e.target.classList.contains('tag')){
        let clickTag = e.target
        removeSelectedTag();
        selectedClickTag(clickTag)    
    };
}
const removeSelectedTag = () => {
    tags.forEach(item => {
        item.classList.remove("tag_selected")
        item.classList.add("tag_bordered")
    })
}

const selectedClickTag = (clickTag) => {
    clickTag.classList.add("tag_selected")
    clickTag.classList.remove("tag_bordered")
    sortImg(clickTag)
}
const sortImg = (clickTag) => {
    const randomSort = () => {
        arrSrcImg.sort(() =>Math.random() - 0.5);
    }
    let arrSrcImg = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10', 'img11', 'img12', ]
    if(clickTag.innerText === 'All'){
        for(let i = 0; i <= 12; i++){
            img[i].src = `./assets/${arrSrcImg[i]}.png`
        }
    }
    if(clickTag.innerText === 'Web Design'){
        randomSort()
        for(let i = 0; i <= 12; i++){
            img[i].src = `./assets/${arrSrcImg[i]}.png`
        }
    }
    if(clickTag.innerText === 'Graphic Design'){
        randomSort()
          for(let i = 0; i <= 12; i++){
            img[i].src = `./assets/${arrSrcImg[i]}.png`
        }
    }
    if(clickTag.innerText === 'Artwork'){
        randomSort()
          for(let i = 0; i <= 12; i++){
            img[i].src = `./assets/${arrSrcImg[i]}.png`
        }
    }
}

layout4.onclick = (e) => {
    let clickTag = e.target
    console.log(e);
    removeSelectedImg()
    selectedClickImg(clickTag)  
}

const removeSelectedImg= () => {
    img.forEach(item => {
        item.classList.remove("portfolio-img_border")
    })
}
const selectedClickImg = (clickTag) => {
    clickTag.classList.add("portfolio-img_border")
}
const buttonSubmit = document.querySelector("form")

buttonSubmit.onsubmit = (e) => {
    e.preventDefault()
    let subject;
    let describe; 
    if(e.target.children[2].value === 'Singolo'){
        subject = 'Тема: Singolo'
    }else if(e.target.children[2].value.length === 0){
        subject = 'Без темы'
    }else if(e.target.children[2].value !== 'Singolo'){
        subject = ''
    }
    if(e.target.children[3].value === "Describe your project in detail..." || e.target.children[3].value.length == 0){
        describe = 'Без описания'
    }else if(e.target.children[3].value === "Portfolio project"){
        describe = "Описание: Portfolio project"
    }else{
        describe = ''
    }
    let div = document.createElement('div')
    let button = document.createElement('button')
    button.classList.add('modal_button')
    button.innerHTML = 'Ok'
    div.innerHTML = `Письмо отправлено\<br>
    ${subject}\<br>
    ${describe}\<br>`
    div.classList.add('modal__window')
    document.body.append(div)
    div.append(button)
    button.onclick = () => {
        div.remove()
        e.target.children[0].value = ''
        e.target.children[1].value = '';
        e.target.children[2].value = '';
        e.target.children[3].value = '';
    }   
}

document.addEventListener('scroll', onScroll)
function onScroll (e)  {
    const currentPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    const linkHeader = document.querySelectorAll('.navigation a')
    sections.forEach( el => {
    if(el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight - 1) > currentPosition)
        linkHeader.forEach(a => {
            a.classList.remove('navigation_selected');           
            if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                a.classList.add('navigation_selected')
            }
        })
    })
    
}


const slider = document.querySelector('.slide__container');
const buttons = document.querySelectorAll('.slider_pointer');
const slides = document.querySelectorAll('.slide');

let index = 1;
let size = slides[index].clientWidth;

update()
function update () {
  slider.style.transform = 'translateX(' + ( -size * index) + 'px)';
}

function slide () {
  slider.style.transition = 'transform .5s ease-in-out'
  update()
}
function btnCheck () {
  if(this.id === 'previous'){
    index--
  }else if (this.id === 'next'){
    index++
  }
  slide()
}
slider.addEventListener('transitionend', () => {
  if(slides[index].id === 'last'){ 
    slider.style.transition = 'none';
    index = slides.length - 2;
    slider.style.transform = 'translateX(' + ( -size * index) + 'px)';
  }else if(slides[index].id === 'first'){
    slider.style.transition = 'none';
    index = 1;
    slider.style.transform = 'translateX(' + ( -size * index) + 'px)';
  }
})
buttons.forEach( btn => btn.addEventListener('click', btnCheck)) 