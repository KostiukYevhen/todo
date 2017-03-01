// window.onload = function() {
//   let liCount = document.getElementsByTagName('li').length + 1,
//       createLi = document.getElementsByTagName('li');

//   function createList() {
//     let inputVal = document.getElementsByTagName('input')[0].value,
//         keyName = event.key;

//     if (keyName === 'Enter' && inputVal != '') {
//       document.getElementsByTagName('input')[0].value = '';
//       createLi[0].insertAdjacentHTML('beforebegin', '<li></li>');
//       createLi[0].insertAdjacentHTML('beforeend', '<label>' + inputVal + '</label>');
//       createLi[0].insertAdjacentHTML('afterbegin', '<input type="checkbox">');
//       createLi[0].insertAdjacentHTML('beforeend', '<button class="delete_btn"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>');
//       document.getElementsByTagName('input')[1].setAttribute('id', liCount);
//       document.getElementsByTagName('input')[1].classList.add('checkbox');
//       document.getElementsByTagName('label')[0].setAttribute('for', liCount);
//     }
//   }

//   document.addEventListener('keypress', createList, false);

//   let del = document.getElementsByClassName('delete_btn');

//   function deleteList() {
//     for(let i = 0; i < del.length; i++) {
//       del[i].onclick = function() {
//         let par = this.parentElement;
//         par.style.display = 'none';
//       };
//     }
//   }

//   document.addEventListener('click', deleteList, true);

//   let delAll = document.getElementsByClassName('delete_all');

//   delAll[0].addEventListener('click', function() {

//     let checkAll = document.getElementsByClassName('checkbox');

//     for(let i = 0; i < checkAll.length; i++) {
//       if(checkAll[i].checked) {
//         let parentLi = checkAll[i].parentNode;
//         parentLi.style.display = 'none';
//       }
//     }
//   }, false)

// }


window.onload = function() {

  let inputHTML = {text: 'Do something else', checked: false};
  let ul = document.getElementsByTagName('ul');
  let listLi = document.getElementsByTagName('li');
  let label = document.createElement('label');
  let button = '<button class="delete_btn"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>';
  let li = document.createElement('li');
  let input = document.createElement('input');

  function addItem(obj) {
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', listLi.length + 1);
    input.classList.add('checkbox');
    label.innerHTML = obj.text;
    label.setAttribute('for', listLi.length + 1);
  }

  function addItemToDom(func) {
    addItem(inputHTML);
    li.appendChild(input);
    li.appendChild(label);
    li.insertAdjacentHTML('beforeend', button);
    ul[0].prepend(li);
  }

  function inputToText(input) {
    return inputHTML.text = input;
  }

  // inputToText(inputVal);

  document.addEventListener('keypress', function() {

    let inputVal = document.getElementsByTagName('input')[0].value;

    if (event.key === 'Enter' && inputVal != '') {
      inputToText(inputVal);
      addItemToDom();
      document.getElementsByTagName('input')[0].value = '';

    }

  }, false);

}