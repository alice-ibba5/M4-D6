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
            <tr>
              <th scope="row">${data.id}</th>
              <td>${data.name}</td>
              <td>${data.username}</td>
              <td>${data.email}</td>
            </tr>    
        `
})
.join("")
}

const searchName = (event) => {
    let query = ev.target.value;
    let allTitles = document.querySelectorAll(".card-name");
    console.log(
      query,
      allTitles[0].innerText.toLowerCase().includes(query.toLowerCase())
    );
    allTitles.forEach((name) => {
      const currCard = name.parentElement.parentElement.parentElement;
      if (!name.innerText.toLowerCase().includes(query.toLowerCase())) {
        currCard.style.display = "none";
      } else {
        currCard.style.display = "block";
      }
    });
  };

