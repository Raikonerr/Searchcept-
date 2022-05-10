








// fetch('http://localhost:3000/user')
//     .then((data)=>{
//         //  console.log(json.user),
//        for(const user of data.user){

//         tbody.append(td_dis(user.id,user.createdDate,user.status,user.firstName,user.lastName,user.userName,user.registrationNumber));
//     }
//        });








let tbody = document.getElementById('data');



//fetch json
fetch("http://localhost:3000/user")
.then(res => res.json())
.then(json => {
    json.map(data => {
        console.log(data.id)
        tbody.append(td_dis(data.id,data.createdDate,data.status,data.firstName,data.lastName,data.userName,data.registrationNumber))

       
    })
    
})



function td_dis(id,dateC,status,firstN,lastN,userN,matricule){
    let td = document.createElement('tr');
    td.innerHTML = ` <td class="px-6 py-4 whitespace-nowrap ">
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
    <button class="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700" onclick="deleteUser(${id})">
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    </button>
</td>
`;

return td;
}

//post user 
const postUser = (e) => {
    e.preventDefault;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let userName = document.getElementById('userName').value;
    let registrationNumber = document.getElementById('registrationNumber').value;
    let status = document.getElementById('etat').value;
    let createdDate = document.getElementById('createdDate').value;
    let data = {
        firstName,
        lastName,
        userName,
        registrationNumber,
        status,
        createdDate
    }
    console.log(data)
    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            // tbody.append(td_dis(json.id,json.createdDate,json.status,json.firstName,json.lastName,json.userName,json.registrationNumber))
        }).catch(console.log)
        
}

const form = document.querySelector("#add")
form.addEventListener("click", postUser)

form.onSubmit = postUser;




// add new user to the table with localstorage



function addNewUser(e){
    e.preventDefault;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let userName = document.getElementById('userName').value;
    let registrationNumber = document.getElementById('registrationNumber').value;
    let status = document.getElementById('etat').value;
    let createdDate = document.getElementById('createdDate').value;
   
    let data = {
       
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        registrationNumber: registrationNumber,
        status: status,
        createdDate: createdDate

}
console.log(data)
fetch('https://localhost:3000/user',{
    method: "POST",
    mode: "no-cors",
    headers: {
        'accept': 'application/json'
        },
    body: JSON.stringify(data)
})
}

const hide = () => {
    document.querySelector('.popup').classList.toggle('hidden');
}

// function addNew(e){
//     e.preventDefault;
//     let firstName = document.getElementById('firstName').value;
//     let lastName = document.getElementById('lastName').value;
//     let userName = document.getElementById('userName').value;
//     let registrationNumber = document.getElementById('registrationNumber').value;
//     let status = document.getElementById('etat').value;
//     let createdDate = document.getElementById('createdDate').value;
   
//     let data = {
       
//         firstName: firstName,
//         lastName: lastName,
//         userName: userName,
//         registrationNumber: registrationNumber,
//         status: status,
//         createdDate: createdDate

// }
// console.log(data)
// axios.post('http://localhost:3000/user',data)
// .then(res => {
//     console.log(res)
//     document.getElementById('firstName').value = "";
//     document.getElementById('lastName').value = "";
//     document.getElementById('userName').value = "";
//     document.getElementById('status').value = "";
//     document.getElementById('createdDate').value = "";
//     document.getElementById('registrationNumber').value = "";
// })
// }


    
    
// async function postData(e) {
//     e.preventDefault;
//     let firstName = document.getElementById('firstName').value;
//     let lastName = document.getElementById('lastName').value;
//     let userName = document.getElementById('userName').value;
//     let registrationNumber = document.getElementById('registrationNumber').value;
//     let etat = document.getElementById('etat').value;
//     let createdDate = document.getElementById('createdDate').value;
//     console.log(firstName,lastName,userName,registrationNumber,etat,createdDate);
//     dataUser = {
//         "firstName": firstName,
//         "lastName": lastName,
//         "userName": userName,
//         "registrationNumber": registrationNumber,
//         "status": etat,
//         "createdDate": createdDate
//     };
//     console.log(dataUser);
//     // Default options are marked with *
//     const response = await fetch("http://localhost:3000/user", {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         'Content-Type': 'application/json',
//         'access-control-allow-origin': '*',
//         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//      body: JSON.stringify(dataUser) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
// // add submited data to the db.json file and update the table
// const addUser =  (e) => {
//     e.preventDefault;
//     let firstName = document.getElementById('firstName').value;
//     let lastName = document.getElementById('lastName').value;
//     let userName = document.getElementById('userName').value;
//     let registrationNumber = document.getElementById('registrationNumber').value;
//     let etat = document.getElementById('etat').value;
//     let createdDate = document.getElementById('createdDate').value;
//     let data = {
//         firstName: firstName,
//         lastName: lastName,
//         userName: userName,
//         registrationNumber: registrationNumber,
//         status: etat,
//         createdDate: createdDate
//     };
//     // console.log(data);
//      fetch("http://localhost:3000/user",{
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(res => {
//         console.log(res);
//     });
// }


// add submited data to the db.json file fetch the data and update the table
// const addUser =  (e) => {
//     e.preventDefault;
//     // let firstName = document.getElementById('firstName').value;
//     // let lastName = document.getElementById('lastName').value;
//     // let userName = document.getElementById('userName').value;
//     // let registrationNumber = document.getElementById('registrationNumber').value;
//     // let status = document.getElementById('etat').value;
//     // let createdDate = document.getElementById('createdDate').value;
//     // let data = {
//     //     firstName: firstName,
//     //     lastName: lastName,
//     //     userName: userName,
//     //     registrationNumber: registrationNumber,
//     //     status: status,
//     //     createdDate: createdDate
//     // };
//     // console.log(data);
//     //     fetch("http://localhost:3000/user",{
//     //         method: "POST",
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify(data)
//     //     })
//     //     .then(res => {
//     //         console.log(res);
//     //     }) 
//     var data =
//     {
//       "id": "123456",
//       "createdDate": "2021-01-06",
//       "status": "En validation",
//       "firstName": "Hakim",
//       "lastName": "Ata",
//       "userName": "hataha",
//       "registrationNumber": "2784"
//     }

//        fetch('./database/data.json')
//        .then(res => {
//               return res.json();
//        })
//           .then((json)=>{
//               json.user.push(data),
//               console.log(json.user);
//               for(const user of json.user){
//                 tbody.append(td_dis(user.id,user.createdDate,user.status,user.firstName,user.lastName,user.userName,user.registrationNumber));
//             }
//           });
// }
// update the user with localstorage and fetch and update the table\
const updateUser = (e) => {
    e.preventDefault;
    let id = document.getElementById('id').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let userName = document.getElementById('userName').value;
    let registrationNumber = document.getElementById('registrationNumber').value;
    let status = document.getElementById('status').value;
    let createdDate = document.getElementById('createdDate').value;
    let data = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        registrationNumber: registrationNumber,
        status: status,
        createdDate: createdDate,
    };
    console.log(data);
    fetch("http://localhost:3000/user",{
        method: "PUT",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
        location.reload();
    }   )   
}

// delete user 
const deleteUser = (e) => {
    e.preventDefault;
    let id = document.getElementById('id').value;
    let data = {
        id: id,
    };
    console.log(data);
    fetch("http://localhost:3000/user",{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
        location.reload();
    }   )
}

