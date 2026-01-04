const tg = window.Telegram.WebApp;
tg.expand();

const docs = document.querySelectorAll('.doc');

docs.forEach(doc => {
  const button = doc.querySelector('button');
  const input = doc.querySelector('input');
  const status = doc.querySelector('.doc-status');
  const type = doc.dataset.type;

  button.addEventListener('click', () => {
    input.click();
  });

  input.addEventListener('change', () => {
    if (!input.files.length) return;

    const file = input.files[0];

    status.textContent = `Загружен: ${file.name}`;
    status.classList.add('ok');
    button.disabled = true;

    tg.sendData(JSON.stringify({
      type: 'document_selected',
      docType: type,
      fileName: file.name
    }));
  });
});
