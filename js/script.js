window.onload = function() {

  // Render TodoList

  let state = [];

  function createTodo(value) {
    return obj = {text: value, checked: false};
  }

  function renderTodo() {

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
      li.innerHTML += button;
      document.querySelector('.list').appendChild(li);
    }
  }

  function render() {
    document.querySelector('.list').innerHTML = '';
    renderTodo(state);
  }

  function handleInput() {
    let input = document.querySelector('.enter').value;

    if (event.which === 13 && input != '') {
      addTodo(input);
      document.querySelector('.enter').value = '';
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
  let ul = document.querySelector('.list');

  ul.onclick = function(event) {

    let target = event.target;

    if (target.tagName == 'BUTTON' || target.tagName == 'I') {

      let item = target.parentNode.parentNode;
      let parent = item.parentNode;
      let value = item.innerText;

      parent.removeChild(item);

      state.splice(state.indexOf(value), 1);
      console.log(state);
    };

  };

  // Remove All Todo



}


