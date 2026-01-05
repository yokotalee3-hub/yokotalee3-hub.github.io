const tg = window.Telegram.WebApp;
tg.expand();

let requests = JSON.parse(localStorage.getItem("requests") || "[]");

function goPatient() {
  window.location.href = "patient.html";
}

function goStaff() {
  window.location.href = "staff.html";
}

function createRequest() {
  requests.push({
    time: new Date().toLocaleString(),
    status: "новая"
  });

  localStorage.setItem("requests", JSON.stringify(requests));
  alert("Заявка отправлена. Мы уже помогаем вам.");
}

function openUpload() {
  window.location.href = "case.html";
}

function renderRequests() {
  const container = document.getElementById("requests");
  if (!container) return;

  container.innerHTML = "";

  requests.forEach((r, i) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <strong>Заявка ${i + 1}</strong>
      <p>${r.time}</p>
      <button class="main-btn secondary" onclick="openCase()">Открыть кейс</button>
    `;
    container.appendChild(div);
  });
}

function openCase() {
  window.location.href = "case.html";
}

function markDone(input) {
  const status = input.parentElement.querySelector(".status");
  status.textContent = "загружен";
  status.style.color = "green";
}

function goBack() {
  window.history.back();
}

renderRequests();
