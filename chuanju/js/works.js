// 页面加载完成执行
document.addEventListener('DOMContentLoaded', function () {
  // 初始化模态框
  const imgModal = new bootstrap.Modal(document.getElementById('imgModal'));
  const modalImg = document.getElementById('modalImg');

  // 图片点击放大预览
  document.querySelectorAll('[data-img]').forEach(img => {
    img.addEventListener('click', function () {
      modalImg.src = this.getAttribute('data-img');
      modalImg.alt = this.alt;
    });
  });
});

// 导航滚动监听
window.addEventListener('scroll', function(){
  let nav = document.getElementById('mainNav');
  if(window.scrollY > 50){
    nav.classList.add('navbar-scroll');
  } else {
    nav.classList.remove('navbar-scroll');
  }
});