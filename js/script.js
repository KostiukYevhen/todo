window.onload = function() {

  // Render TodoList

  let state = [];

  function createTodo(value) {
    return obj = {text: value, checked: false, id: 0};
  }

  function renderTodo() {

    state.forEach(function(item, i, state) {
      let label = document.createElement('label');
      let button = '<button class="remove_btn"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>';
      let li = document.createElement('li');
      let checkbox = document.createElement('input');

      label.setAttribute('for', i);
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', i);
      checkbox.classList.add('checkbox');

      label.insertAdjacentHTML('beforeend', state[i].text);
      li.setAttribute('data-id', i);
      li.appendChild(checkbox);
      li.appendChild(label);
      li.innerHTML += button;
      document.querySelector('.list').appendChild(li);
    });
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
    let id = target.parentNode.getAttribute('data-id');

    if (target.nodeName == 'I') {
      state.splice(id, 1);
      render();
    } else if (target.nodeName == "INPUT") {
      if(state[id].checked == false) {
        state[id].checked = true;
      } else {
        state[id].checked = false;
      }
    }
  };

  //Remove completed todo

  let removeAll = document.querySelector('.remove_all');

  removeAll.onclick = function(event) {
    state = state.filter(obj => !obj.checked);
    render();
  }
}


