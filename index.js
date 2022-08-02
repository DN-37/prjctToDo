let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        let li = document.createElement('li');

        let task = document.createElement('span');
        task.appendChild(document.createTextNode(input.value));
        task.classList.add('task');
        task.addEventListener('dblclick', () => {
            let text = task.innerHTML;

            let edit = document.createElement('input');
            edit.value = text;
            li.appendChild(edit);

            edit.addEventListener('keypress', (event) => {
                if (event.key == 'Enter') {
                    task.innerHTML = edit.value;
                    edit.remove();
                }
            });
        });
        li.appendChild(task);

        let mark = document.createElement('span');
        mark.innerHTML = 'Выполнено';
        mark.classList.add('mark');
        mark.addEventListener('click', () => {
            li.classList.add('done');
        });
        li.appendChild(mark);

        let remove = document.createElement('span');
        remove.innerHTML = 'Очистить';
        remove.classList.add('remove');
        remove.addEventListener('click', () => {
            li.remove();
        });
        li.appendChild(remove);

        list.appendChild(li);

        input.value = '';
    }
})