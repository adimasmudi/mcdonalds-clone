
// dropdown language
const languageDropdownBtn = document.querySelector('#language');
const languageRow = document.querySelector('.language-row');

const rowUpValue = 'M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z';
const rowDownValue = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z';

languageDropdownBtn.addEventListener('click',function(){
  if(!this.classList.contains('row-active')){
    languageRow.childNodes[1].attributes.d.value = rowUpValue;
    this.classList.add('row-active');
  }else{
    languageRow.childNodes[1].attributes.d.value = rowDownValue;
    this.classList.remove('row-active');
  }
});

// dropdown our menu
const menuBtn = document.querySelector('#menu');
const menuRow = document.querySelector('.menu-row');

menuBtn.addEventListener('click',function(){
  if(!this.classList.contains('row-active')){
    menuRow.childNodes[1].attributes.d.value = rowUpValue;
    this.classList.add('row-active');
  }else{
    menuRow.childNodes[1].attributes.d.value = rowDownValue;
    this.classList.remove('row-active');
  }
  
});
