window.onload = function() {

  // Render TodoList

  let state = [];

  function createTodo(value) {
    let obj = {text: '', checked: false};
    obj.text = value;
    return obj;
  }

  function renderTodo(value) {

    for (let i = 0; i < state.length; i++) {

      let label = document.createElement('label');
      let button = '<button class="remove_btn"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>';
      let li = document.createElement('li');
      let checkbox = document.createElement('input');

      label.setAttribute('for', i);
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', i);
      checkbox.classList.add('checkbox');

      label.insertAdjacentHTML('beforeend', state[i].text);
      li.appendChild(checkbox);
      li.appendChild(label);
      li.insertAdjacentHTML('beforeend', button);
      document.getElementsByTagName('ul')[0].appendChild(li);
    }

  }

  function render() {
    document.getElementsByTagName('ul')[0].innerHTML = '';
    renderTodo(state);
  }

  function handleInput() {
    let input = document.getElementsByTagName('input')[0].value;

    if (event.key === 'Enter' && input != '') {
      addTodo(input);
      document.getElementsByTagName('input')[0].value = '';
    }
  }

  function addTodo(value) {
    let valueForState = createTodo(value);
    state.unshift(valueForState);
    render();
  }

  document.addEventListener('keypress', function() {
    handleInput();
  }, false);


  // Remove Todo

  let removeItem = document.getElementsByClassName('remove_btn');

  function removeItems() {

    for(let i = 0; i < removeItem.length; i++) {

      removeItem[i].onclick = function() {
        let parent = this.parentElement;
        parent.style.display = 'none';//change
      };
    }
  }

  document.addEventListener('click', removeItems, true);

  // Remove All Todo

  let removeAll = document.getElementsByClassName('remove_all');

  function removeAllItems() {

    let checkAll = document.getElementsByClassName('checkbox');

    for(let i = 0; i < checkAll.length; i++) {

      if (checkAll[i].checked) {
        let parent = checkAll[i].parentNode;
        parent.style.display = 'none';
      }
    }
  }

  removeAll[0].addEventListener('click', removeAllItems, false);

}


