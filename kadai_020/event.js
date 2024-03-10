const addBtn = document.getElementById('btn');
const parentList = document.getElementById('text');

addBtn.addEventListener('click', () => {
  const childList = document.createElement('text');
  childList.textContent = 'ボタンをクリックしました';
  parentList.removeChild(parentList.firstChild);
  parentList.appendChild(childList);
});