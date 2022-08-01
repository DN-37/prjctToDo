let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        let li = document.createElement('li');

        let task = document.createElement('span');
        task.appendChild(document.createTextNode(input.value));
        task.classList.add('task');
        li.appendChild(task);

        let mark = document.createElement('span');
        mark.innerHTML = 'Выполнено';
        mark.classList.add('mark');
        li.appendChild(mark);

        let remove = document.createElement('span');
        remove.innerHTML = 'Очистить';
        remove.classList.add('remove');
        li.appendChild(remove);

        list.appendChild(li);

        input.value = '';
    }
})