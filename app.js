function shaxslarniOlish() {
    const shaxslar = JSON.parse(localStorage.getItem('shaxslar')) || [];

    const shaxslarList = document.getElementById('shaxslarList');
    shaxslarList.innerHTML = '';

    shaxslar.forEach((shaxs, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Familya: ${shaxs.familya}, Ism: ${shaxs.ism}`;
      
      const updateButton = document.createElement('button');
      updateButton.textContent = 'Yangilash';
      updateButton.style.backgroundColor = '#3490dc';
      updateButton.style.color = 'white';
      updateButton.style.padding = '5px 10px';
      updateButton.style.border = 'none';
      updateButton.style.borderRadius = '5px';
      updateButton.style.marginRight = '5px';
      updateButton.addEventListener('click', () => yangilash(index));

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'O\'chirish';
      deleteButton.style.backgroundColor = '#e3342f';
      deleteButton.style.color = 'white';
      deleteButton.style.padding = '5px 10px';
      deleteButton.style.border = 'none';
      deleteButton.style.borderRadius = '5px';
      deleteButton.style.marginRight = '5px';
      deleteButton.addEventListener('click', () => oChirish(index));

      listItem.appendChild(updateButton);
      listItem.appendChild(deleteButton);

      shaxslarList.appendChild(listItem);
    });
  }

  function qoshish() {
   
    const familya = document.getElementById('familya').value;
    const ism = document.getElementById('ism').value;

   

    const shaxslar = JSON.parse(localStorage.getItem('shaxslar')) || [];
    shaxslar.push({ familya, ism });
    localStorage.setItem('shaxslar', JSON.stringify(shaxslar));

    shaxslarniOlish();
  }
  
  const btn = document.querySelector("button")
  btn.addEventListener('click',  () => {
    qoshish()
 })



  function yangilash(index) {
    const shaxslar = JSON.parse(localStorage.getItem('shaxslar')) || [];
    const { familya, ism } = shaxslar[index];

    const updatedFamilya = prompt('Yangi familya:', familya);
    const updatedIsm = prompt('Yangi ism:', ism);

    shaxslar[index] = { familya: updatedFamilya, ism: updatedIsm };
    localStorage.setItem('shaxslar', JSON.stringify(shaxslar));

    shaxslarniOlish();
  }

  function oChirish(index) {
    const shaxslar = JSON.parse(localStorage.getItem('shaxslar')) || [];
    shaxslar.splice(index, 1);
    localStorage.setItem('shaxslar', JSON.stringify(shaxslar));

    shaxslarniOlish();
  }

  shaxslarniOlish();