const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const resisterlink=document.querySelector('.register-link');

const btnPopup=document.querySelector('.btnLogin-popup');

const iconClose=document.querySelector('.icon-close');


resisterlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnLogin-popup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});
