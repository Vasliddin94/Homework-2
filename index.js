function submitTitle() {
  let secline=document.querySelector('#left-2')
  secline.style.color='black';
  let secnum=document.querySelector('#left-2 span');
  secnum.style.backgroundColor='#2574B0';
  secnum.style.color='#ffffff';
  let back=document.querySelector('#back');
  back.style.display='inline';
  let head=document.querySelector('.header');
  head.innerHTML='Choose description content'
  let submitTitle=document.querySelector('#submit-title');
  submitTitle.style.display='none';
  let submitdes=document.querySelector('#submit-description');
  submitdes.style.display='inline';
  let goback=document.querySelector('#go-back');
  goback.style.display='none';
  let yes=document.querySelector('#yes');
  yes.style.display='none';
  let thirdline=document.querySelector('#left-3')
  thirdline.style.color='#e3e1e1';
  let thirdnum=document.querySelector('#left-3 span');
  thirdnum.style.backgroundColor='';
  thirdnum.style.color='#e3e1e1';
}

function back() {
  let back=document.querySelector('#back');
  back.style.display='none';
  let head=document.querySelector('.header');
  head.innerHTML='Choose title';
  let secline=document.querySelector('#left-2')
  secline.style.color='#e3e1e1';
  let secnum=document.querySelector('#left-2 span');
  secnum.style.backgroundColor='';
  secnum.style.color='#e3e1e1';
  let submitTitle=document.querySelector('#submit-title');
  submitTitle.style.display='inline';
  let submitdes=document.querySelector('#submit-description');
  submitdes.style.display='none';
  let thirdline=document.querySelector('#left-3')
  thirdline.style.color='#e3e1e1';
  let thirdnum=document.querySelector('#left-3 span');
  thirdnum.style.backgroundColor='';
  thirdnum.style.color='#e3e1e1';
  let goback=document.querySelector('#go-back');
  goback.style.display='none';
  let yes=document.querySelector('#yes');
  yes.style.display='none'
}


function submitdes() {
  let thirdline=document.querySelector('#left-3')
  thirdline.style.color='black';
  let thirdnum=document.querySelector('#left-3 span');
  thirdnum.style.backgroundColor='#2574B0';
  thirdnum.style.color='#ffffff';
  let head=document.querySelector('.header');
  head.innerHTML='Are you happy now?';
  let submitdes=document.querySelector('#submit-description');
  submitdes.style.display='none';
  let back=document.querySelector('#back');
  back.style.display='none';
  let goback=document.querySelector('#go-back');
  goback.style.display='inline';
  let yes=document.querySelector('#yes');
  yes.style.display='inline';
  let submitTitle=document.querySelector('#submit-title');
  submitTitle.style.display='none';
}

function yes() {
  let goback=document.querySelector('#go-back');
  goback.style.display='none';
  let yes=document.querySelector('#yes');
  yes.style.display='none';
  let head=document.querySelector('.header');
  head.innerHTML="OK, we'are done. Thanks for sending us your data!";
}
