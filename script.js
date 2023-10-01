

async function loadUsersData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await response.json()

    return data
}

window.onload = async function () {
    const data = await loadUsersData()
    const tbody = document.querySelector('tbody');
    
    tbody.innerHTML = data
        .map((data) => {
          return  /*html*/`
            <tr class="contenitore">
              <th>${data.id}</th>
              <td class="userName">${data.name}</td>
              <td class="userUsername">${data.username}</td>
              <td class="userEmail">${data.email}</td>
            </tr>    
        `
})
.join("")
}


const searchName = (ev) => {
    let query = ev.target.value;
    let allNames = document.querySelectorAll(".userName");
   
    allNames.forEach((name) => {
      const currUser = document.querySelector(".contenitore");
      if (name.innerText.toLowerCase().includes(query.toLowerCase())) {
        currUser.style.display = "block";
      } else {
        currUser.style.display = "none";
      }
    })
  };


  /*function query() {
    
    let chooseOne = document.querySelector('#choose-one')
    let inputQuery = document.querySelector('#input-query')
    let query = inputQuery.value.toLowerCase()

    let userResult = []


    // ricerca per nome
    if (chooseOne.value === '1') {
        userResult = data.filter(word => {
            lowerName = word.name.toLowerCase()
            return lowerName.includes(query)
        })
        // ricerca per username

    } else if (chooseOne.value === '2') {
        userResult = data.filter(word => {
            lowerUsername = word.username.toLowerCase()
            return lowerUsername.includes(query)
        })

        // ricerca per email

    } else if (chooseOne.value === '3') {

        userResult = data.filter(word => {
            lowerEmail = word.email.toLowerCase()

            return lowerEmail.includes(query)
        })

        // campo ricerca non selezionato
    } else {


        alert('Seleziona un campo nella ricerca')
    }
}*/
