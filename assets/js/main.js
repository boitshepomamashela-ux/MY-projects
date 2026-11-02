(()=>{
  const mobileToggle=document.querySelector('.mobile-toggle');
  const mobileNav=document.querySelector('#mobile-nav');
  if(mobileToggle&&mobileNav){
    const close=()=>{mobileToggle.setAttribute('aria-expanded','false');mobileToggle.setAttribute('aria-label','Open menu');mobileNav.hidden=true;};
    mobileToggle.addEventListener('click',()=>{const open=mobileToggle.getAttribute('aria-expanded')==='true';mobileToggle.setAttribute('aria-expanded',String(!open));mobileToggle.setAttribute('aria-label',open?'Open menu':'Close menu');mobileNav.hidden=open;});
    mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  }
  const drop=document.querySelector('.nav-dropdown');
  if(drop){const btn=drop.querySelector('button');btn.addEventListener('click',()=>{const isOpen=drop.classList.toggle('open');btn.setAttribute('aria-expanded',String(isOpen))});document.addEventListener('click',(e)=>{if(!drop.contains(e.target)){drop.classList.remove('open');btn.setAttribute('aria-expanded','false')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){drop.classList.remove('open');btn.setAttribute('aria-expanded','false')}})}
  const form=document.querySelector('#enquiry-form');
  if(form){
    const params=new URLSearchParams(location.search); const service=params.get('service');const select=form.querySelector('#service-select');
    if(service){const option=Array.from(select.options).find(o=>o.value.toLowerCase()===service.toLowerCase());if(option)select.value=option.value;}
    const output=document.querySelector('#form-output');const prepared=document.querySelector('#prepared-message');const copyButton=document.querySelector('#copy-enquiry');const copyStatus=document.querySelector('#copy-status');
    form.addEventListener('submit',e=>{
      e.preventDefault();if(!form.reportValidity())return;
      const data=new FormData(form);
      const msg=`Hello Coach Cathy,\n\nMy name is ${data.get('name')}. I would like to enquire about ${data.get('service')}.\n\n${data.get('message')}\n\nYou can reach me at ${data.get('email')} (preferred contact: ${data.get('preferred')}).\n\nThank you!`;
      prepared.value=msg;output.hidden=false;copyStatus.textContent='';output.scrollIntoView({behavior:'smooth',block:'nearest'});
    });
    copyButton.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(prepared.value);copyStatus.textContent='Copied! You can now paste the message into Instagram or Facebook.';copyButton.textContent='Copied ✓'}catch{prepared.focus();prepared.select();copyStatus.textContent='Select and copy the text above using your device’s copy command.';}});
  }
})();
