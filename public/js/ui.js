/* Drawer toggles */
const cartBtn     = document.getElementById('cartBtn');
const contactBtn  = document.getElementById('contactBtn');
const cartDrawer  = document.getElementById('cartDrawer');
const contactDrawer = document.getElementById('contactDrawer');

cartBtn.addEventListener('click', ()=>cartDrawer.classList.toggle('open'));
contactBtn.addEventListener('click', ()=>contactDrawer.classList.toggle('open'));

/* Close when clicking outside */
window.addEventListener('click', e=>{
  if(!cartDrawer.contains(e.target) && !cartBtn.contains(e.target))
      cartDrawer.classList.remove('open');
  if(!contactDrawer.contains(e.target) && !contactBtn.contains(e.target))
      contactDrawer.classList.remove('open');
});

/* (Tiny) pseudo-cart logic for later hookup */
document.querySelectorAll('.addCart').forEach(btn=>{
   btn.addEventListener('click', ()=>{
      let count = +document.getElementById('cartCount').innerText + 1;
      document.getElementById('cartCount').innerText = count;
      document.getElementById('cartItems').innerHTML = `<p>${count} item(s) in cart – Checkout soon!</p>`;
   });
});
