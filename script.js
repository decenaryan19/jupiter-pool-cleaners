(function(){
var t=document.querySelector('.menu-toggle'),n=document.querySelector('.main-nav');
if(!t||!n)return;
t.addEventListener('click',function(){
var o=n.classList.toggle('open');
t.setAttribute('aria-expanded',o);
});
n.querySelectorAll('.has-sub>a').forEach(function(l){
l.addEventListener('click',function(e){
if(window.innerWidth>767)return;
e.preventDefault();
l.parentElement.classList.toggle('sub-open');
});
});
})();
