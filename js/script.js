window.onload = function() {

  function createList() {
    let inputVal = document.getElementsByTagName('input')[0].value,
        liCount = document.getElementsByTagName('li').length + 1,
        keyName = event.key,
        createLi = document.getElementsByTagName('li');

    if (keyName === 'Enter' && inputVal != '') {
      document.getElementsByTagName('input')[0].value = '';
      createLi[0].insertAdjacentHTML('beforebegin', '<li></li>');
      createLi[0].insertAdjacentHTML('beforeend', '<label>' + inputVal + '</label>');
      createLi[0].insertAdjacentHTML('afterbegin', '<input type="checkbox">');
      createLi[0].insertAdjacentHTML('beforeend', '<button class="delete_btn"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>');
      document.getElementsByTagName('input')[1].setAttribute('id', liCount);
      document.getElementsByTagName('label')[0].setAttribute('for', liCount);
    }
  }

  document.addEventListener('keypress', createList, false);

}