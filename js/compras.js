//Para que aparezcan mas imagenes
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
let boxes = [...document.querySelectorAll('.container .box-container .box')];
for (var i = currentItem; i < currentItem + 3; i++){
boxes[i].style.display = 'inline-block';
}
currentItem += 3;

if(currentItem >= boxes.length){
loadMoreBtn.style.display = 'none';
}
}

//Buscador
document.addEventListener("keyup", e=>{

    if (e.target.matches("#search")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(Gorra =>{
  
            Gorra.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?Gorra.classList.remove("filtro")
              :Gorra.classList.add("filtro")
        })
  
    }
  })