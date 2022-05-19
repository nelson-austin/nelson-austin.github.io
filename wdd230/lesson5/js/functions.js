const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.onclick = function() {
    let newChapter = input.value;
    input.value = '';

    const chapter = document.createElement('li');
    const chapterText = document.createElement('span');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');

    chapter.appendChild(chapterText);
    chapterText.textContent = newChapter;
    chapter.appendChild(deleteButton);
    deleteButton.textContent = 'X';
    
    list.appendChild(chapter);

    deleteButton.onclick = function(e) {
        list.removeChild(chapter);
    }

    input.focus();
}
