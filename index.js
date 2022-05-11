let tbody = document.getElementById('data');

//fetch json
const fetchUser = () => {
    fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            tbody.append(td_dis(data.id,data.createdDate,data.status,data.firstName,data.lastName,data.userName,data.registrationNumber))

        
        })
        
    })
}
fetchUser();

//display all user from database
function td_dis(id,dateC,status,firstN,lastN,userN,matricule){

    let td = document.createElement('tr');
    td.innerHTML = ` <td class="px-6 py-4 whitespace-nowrap  id="idU">
    <div class="flex items-center">
        ${id}
    </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm leading-5 text-gray-900">
        ${dateC}
        </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span id="status" class ="px-2 ${status === 'Rejeté' ? 'bg-red-500' : status === 'En validation' ? 'bg-orange-500' : 'bg-green-500'} inline-flex text-xs text-black leading-5 font-semibold rounded-full ">
                ${status}
        </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="px-6 py-4 inline-flex text-xs leading-5 font-medium"> ${firstN} </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class=" px-6 py-4 inline-flex text-xs leading-5 font-medium"> ${lastN} </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="px-6 py-4 inline-flex text-xs leading-5 font-medium"> ${userN} </span>
    </td>
    <td clas="px-6 py-4 whitespace-nowrap">
        <span class="px-6 py-4 inline-flex text-xs leading-5 font-medium"> ${matricule} </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <button id="del"  class="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700" onclick="deleteUserFromTable(${id})">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
        </button>
    </td>
    `;

return td;
}


//Add user To dataBase 
const postUser = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 100000);
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let userName = document.getElementById('userName').value;
    let registrationNumber = document.getElementById('registrationNumber').value;
    let status = document.getElementById('etat').value;
    let createdDate = document.getElementById('createdDate').value;
    let data = {
        id,
        firstName,
        lastName,
        userName,
        registrationNumber,
        status,
        createdDate
    }
    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            document.getElementById('firstName').value = "";
                 document.getElementById('lastName').value = "";
                 document.getElementById('userName').value = "";
                 document.getElementById('status').value = "";
                 document.getElementById('createdDate').value = "";
                document.getElementById('registrationNumber').value = "";
        }).catch()
        
}

// add new user to the table with localstorage
const form = document.querySelector("#submitForm")
form.addEventListener("click", postUser)
form.onSubmit = postUser;

//show form so we can add new user
const hide = () => {
    document.querySelector('.popup').classList.toggle('hidden');
}

// delete user from the table
const deleteUserFromTable = (id) => {
    let idUser = id;
    let data = {
        id: idUser,
    };
    fetch("http://localhost:3000/user" + "/" +idUser,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
    }   )
    
}

    

