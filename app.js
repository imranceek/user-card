function openModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  
  function createCard() {
    let url = document.getElementById("url").value;
    let name = document.getElementById("name").value;
    let tel = document.getElementById("tel").value;
    let number = document.getElementById("number").value;
    let Jinsi;
    if (document.getElementById("Erkak").checked) {
      Jinsi = document.getElementById("Erkak").value;
    } else if (document.getElementById("Ayol").checked) {
      Jinsi = document.getElementById("Ayol").value;
    }

    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>Ma'lumotlar:</h3>
      <p>To'liq ism: ${name}</p>
      <p>Telefon raqami: ${tel}</p>
      <p>Raqam: ${number}</p>
      <p>Jinsi: ${Jinsi}</p>
      <img src="${url}" alt="Rasm">
    `;

    document.body.appendChild(card);

    closeModal();
  }