window.onload = function() {

  document.addEventListener('keypress', function() {
    let inputVal,
        keyName = event.key,
        liCount = document.getElementsByTagName('li').length + 1;

    if (keyName === 'Enter') {
      inputVal = document.getElementsByTagName('input')[0].value;
      document.getElementsByTagName('input')[0].value = '';
      document.getElementsByTagName('li')[0].insertAdjacentHTML('beforebegin', '<li></li>');
      document.getElementsByTagName('li')[0].insertAdjacentHTML('beforeend', '<input type="checkbox">');
      document.getElementsByTagName('li')[0].insertAdjacentHTML('beforeend', '<label>' + inputVal + '</label>');
      document.getElementsByTagName('li')[0].insertAdjacentHTML('beforeend', '<button class="delete_btn"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>');
      document.getElementsByTagName('input')[1].setAttribute('id', liCount);
      document.getElementsByTagName('label')[0].setAttribute('for', liCount);
      return ;
    }



  }, false);

}

