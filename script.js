let research = document.getElementById("input-query")
let filter = document.getElementById("select-one")

async function loadUsersData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
}
}

window.onload = async function () {
    const data = await loadUsersData()
    const tbody = document.querySelector("tbody");
    
    tbody.innerHTML = data
        .map((data) => {
          return  /*html*/`
            <tr class="contenitore">
              <td>${data.id}</td>
              <td class="userName">${data.name}</td>
              <td class="userUsername">${data.username}</td>
              <td class="userEmail">${data.email}</td>
            </tr>    
        `
})
.join("")
}


/*const searchData = () => {
    const query = research.value.toLowerCase();
    let filtro = filter.value;
    let allData = document.querySelectorAll(`.${filtro}`);
   
    allData.forEach(data => {
      const currUser = data.parentElement.parentElement.parentElement;
      if (!(data.textContent.toLowerCase()).includes(query)) {
        currUser.style.display = "none";
      } else {
        currUser.style.display = "block";
      }
    })
  };

 
  research.addEventListener('input', searchData)

  filter.addEventListener('change', searchData)*/
  
  
  function filterResults() {
    const input = research.value;
    const user = document.getElementsByClassName('contenitore');
    if (filter.value === 'name') {
    let items = document.getElementsByClassName('userName');
    for (let i = 0; i < items.length; i++) {
      if (items[i].innerHTML.toLowerCase().indexOf(input.toLowerCase()) > -1) {
        user[i].style.display = '';
      } else {
        user[i].style.display = 'none';
      }
    }
  } else if (filter.value === 'username') {
    let items = document.getElementsByClassName('userUsername');    
    for (let i = 0; i < items.length; i++) {
      if (items[i].innerHTML.toLowerCase().indexOf(input.toLowerCase()) > -1) {
        user[i].style.display = '';
      } else {
        user[i].style.display = 'none';
      }
    }
  } else if (filter.value === 'email') {
    let items = document.getElementsByClassName('userEmail');    
    for (let i = 0; i < items.length; i++) {
      if (items[i].innerHTML.toLowerCase().indexOf(input.toLowerCase()) > -1) {
        user[i].style.display = '';
      } else {
        user[i].style.display = 'none';
      }
    }
  }
}
  research.addEventListener('input', filterResults)

