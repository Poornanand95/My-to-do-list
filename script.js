let addtodobutton = document.getElementById('addtodo');
let maincontainer = document.getElementById('tasks');
let input = document.getElementById('input');

addtodobutton.addEventListener('click', function () {
  var para = document.createElement('p');
  para.classList.add('para-styling');
  para.innerText = input.value;
  maincontainer.appendChild(para);
  input.value = '';
  para.addEventListener('click', function () {
    para.style.textDecoration = 'line-through';
  });
  para.addEventListener('dblclick', function () {
    maincontainer.removeChild(para);
  });
});
