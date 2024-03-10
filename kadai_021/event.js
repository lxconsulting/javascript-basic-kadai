const addBtn = document.getElementById('btn');
const parentList = document.getElementById('text');

addBtn.addEventListener('click', () => {
  setTimeout(() => {
  const childList = document.createElement('text');
  childList.textContent = 'ボタンをクリックしました';
  parentList.removeChild(parentList.firstChild);
  parentList.appendChild(childList);
  },2000);
});

