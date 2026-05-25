window.addEventListener('scroll',function(){
  let nav=document.getElementById('mainNav');
  window.scrollY>50?nav.classList.add('navbar-scroll'):nav.classList.remove('navbar-scroll');
})