window.addEventListener('scroll',function(){
  let nav=document.getElementById('mainNav');
  window.scrollY>50?nav.classList.add('navbar-scroll'):nav.classList.remove('navbar-scroll');
})
const imgs=document.querySelectorAll('.img-pointer');
const modalImg=document.getElementById('modalImg');
imgs.forEach(item=>{
  item.onclick=()=>modalImg.src=item.dataset.img;
})