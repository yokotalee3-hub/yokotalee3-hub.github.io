const tg = window.Telegram.WebApp;
tg.expand();

const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');

uploadBtn.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', async () => {
  const file = fileInput.files[0];
  if (!file) return;

  tg.sendData(JSON.stringify({
    type: 'file_selected',
    name: file.name
  }));

  alert(`Файл выбран: ${file.name}\nОтправь его в чат боту`);
});
