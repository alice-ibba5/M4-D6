let research = document.querySelector("#input-query")
let filter = document.querySelector("#select-one")

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


function searchData() {
    let query = research.value.toLowerCase();
    let filtro = filter.value;
    let allData = document.querySelectorAll(`.${filtro}`);
   
    allData.forEach(data => {
      const currUser = data.parentElement.parentElement.parentElement;
      if (!(data.textContent.toLowerCase()).includes(query)) {
        currUser.style.display = "none";
      } else {
        currUser.style.display = "";
      }
    })
  };

  research.addEventListener('input', searchData);

  filter.addEventListener('change', searchData);
  
  searchData()
 