
hartje = document.querySelectorAll('.favorieten');

for (var i = 0; i < hartje.length; i++) {
  hartje[i].addEventListener('click', likeFunction);
} 

function likeFunction(e) {
e.preventDefault;
  
  this.classList.remove("bounce");
  
  this.classList.add("bounce");
}