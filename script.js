const sidebar = document.getElementById('sidebar');
const menu = document.getElementById('mobileMenu');
menu?.addEventListener('click', () => sidebar.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => sidebar.classList.remove('open')));

const sections = [...document.querySelectorAll('section[id]')];
const mains = [...document.querySelectorAll('.nav-main')];
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible) return;
  mains.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${visible.target.id}`));
},{threshold:[0.15,0.4,0.7], rootMargin:'-18% 0px -60% 0px'});
sections.forEach(s=>observer.observe(s));

function copyCode(btn, elementId){
  const element = document.getElementById(elementId);
  if(!element) return;
  navigator.clipboard?.writeText(element.innerText);
  const old = btn.innerText; btn.innerText = 'COPIED';
  setTimeout(()=>btn.innerText=old,1200);
}

// Set this once the token is live. Example: '0x1234...'
const CONTRACT_ADDRESS = '';

function initContractAddress(){
  const addressEl = document.getElementById('contractAddress');
  const copyBtn = document.getElementById('copyContract');
  const panel = document.getElementById('contractPanel');
  if(!addressEl || !copyBtn) return;

  if(CONTRACT_ADDRESS){
    addressEl.innerText = CONTRACT_ADDRESS;
    copyBtn.disabled = false;
    copyBtn.innerText = 'COPY CA';
    panel?.classList.add('live');
  }
}

function copyContractAddress(){
  if(!CONTRACT_ADDRESS) return;
  navigator.clipboard?.writeText(CONTRACT_ADDRESS);
  const btn = document.getElementById('copyContract');
  if(!btn) return;
  const old = btn.innerText;
  btn.innerText = 'COPIED';
  setTimeout(()=>btn.innerText=old,1200);
}

initContractAddress();
