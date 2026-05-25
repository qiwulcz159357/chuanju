window.addEventListener('scroll', function () {
  let nav = document.getElementById('mainNav');
  window.scrollY > 50 ? nav.classList.add('navbar-scroll') : nav.classList.remove('navbar-scroll');
});

const form = document.getElementById('messageForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const contentInput = document.getElementById('content');
const msgContainer = document.getElementById('msgContainer');
const phoneTip = document.getElementById('phoneTip');
const emailTip = document.getElementById('emailTip');

phoneInput.addEventListener('focus', function () {
  if (!checkPhoneIsValid()) {
    phoneInput.classList.add('is-invalid');
    phoneInput.classList.remove('is-valid');
    phoneTip.textContent = '请输入11位有效手机号码';
  }
});

phoneInput.addEventListener('input', function () {
  const val = phoneInput.value.trim();
  const phoneReg = /^1[3-9]\d{9}$/;

  phoneInput.classList.remove('is-valid', 'is-invalid');

  if (val === '') {
    phoneTip.textContent = '';
    return;
  }

  if (phoneReg.test(val)) {
    phoneInput.classList.add('is-valid');
    phoneTip.textContent = '';
  } 

  else {
    phoneInput.classList.add('is-invalid');
    phoneTip.textContent = '请输入正确的11位手机号';
  }
});

phoneInput.addEventListener('blur', function () {
  const val = phoneInput.value.trim();
  const phoneReg = /^1[3-9]\d{9}$/;

  phoneInput.classList.remove('is-valid', 'is-invalid');

  if (val === '') {
    phoneTip.textContent = '';
    return;
  }

  if (!phoneReg.test(val)) {
    phoneInput.classList.add('is-invalid');
    phoneTip.textContent = '手机号格式不正确';
  } else {
    phoneInput.classList.add('is-valid');
  }
});

function checkPhoneIsValid() {
  const val = phoneInput.value.trim();
  const phoneReg = /^1[3-9]\d{9}$/;
  return phoneReg.test(val);
}

emailInput.addEventListener('input', function () {
  const val = emailInput.value.trim();
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailInput.classList.remove('is-valid', 'is-invalid');
  if (val === '') { emailTip.textContent = ''; return; }
  if (emailReg.test(val)) {
    emailInput.classList.add('is-valid');
    emailTip.textContent = '';
  } else {
    emailInput.classList.add('is-invalid');
    emailTip.textContent = '请输入有效的邮箱地址';
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  let name = nameInput.value.trim();
  let text = contentInput.value.trim();

  if (!name || !text) {
    alert('姓名和留言不能为空！');
    return;
  }

  if (!checkPhoneIsValid() && phoneInput.value.trim() !== '') {
    alert('请输入正确的手机号！');
    phoneInput.focus();
    return;
  }

  let item = document.createElement('div');
  item.className = 'p-3 border-bottom';
  item.innerHTML = `
    <h6 class="fw-bold">${name}</h6>
    <p class="text-muted small">${new Date().toLocaleString()}</p>
    <p class="mb-0">${text}</p>
  `;

  msgContainer.prepend(item);
  form.reset();
  phoneInput.classList.remove('is-valid', 'is-invalid');
  emailInput.classList.remove('is-valid', 'is-invalid');
  alert('留言发布成功！');
})