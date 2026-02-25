const colors = [
  { color: "#C71585" },
  { color: "#FF8C00" },
  { color: "#FFD700" },
  { color: "#BDB76B" },
  { color: "#FF00FF" },
  { color: "#4B0082" },
  { color: "#7FFF00" },
  { color: "#00FFFF" },
  { color: "#0000CD" },
  { color: "#F4A460" },
  { color: "#800000" },
  { color: "#778899" },
  { color: "#FFE4E1" },
  { color: "#191970" },
];

const listRef = document.querySelector('.js-list')
const btnRef = document.querySelector('.modal-close')
const boxRef = document.querySelector('.backdrop')
const modalRef = document.querySelector('.modal')

function createItem (arr) {
    const item = arr.map((elem) => {
        return `<li class="js-item" style="background-color:${elem.color}">${elem.color}</li>`
    }).join('')
    listRef.innerHTML = item
}
createItem(colors)

listRef.addEventListener('click',(event) => {
    if(event.target.nodeName !== 'LI'){
        return
    }
    const color = event.target.style.backgroundColor 
    boxRef.style.opacity = '1'
    boxRef.style.pointerEvents = 'auto'
    modalRef.style.backgroundColor = color
})

btnRef.addEventListener('click',() => {
closeModal()
})

document.addEventListener('keydown',(event)=> {
    if(event.key === 'Escape'){
closeModal()
    }
    
})
boxRef.addEventListener('click',(event)=> {
    if(event.currentTarget.className === event.target.className){
closeModal()
    }
    
})

function closeModal (){
            boxRef.style.opacity = '0'
        boxRef.style.pointerEvents = 'none'
}