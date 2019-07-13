const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() { let index=0; if(key===codes[index]) {index++; if (index===codes.length) {alert("Hurray!"); index = 0 } } else { index = 0;}}
function init() {document.body.addEventListener('keydown',function(e){ var key = parseInt(e.which || e.detail);   var index=0;   if(key === code[index]){index++;  if(index === code.length){  alert("Hurray"); index=0;} }else{  console.log(e.which);  index=0;}})}