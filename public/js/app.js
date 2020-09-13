console.log('JS from from the server laoded to browser...')
// fetch('http://localhost:3000/wether?search=visakhapatnam').then( (responce) =>{
// responce.json().then((data)=>{
//     debugger;
//    if(data.error){
//      console.log('Not able to gee the data for a given location')
//    } else {
//       console.log(data.longitude)
//    }
// })

// })
const weatherform = document.querySelector('form');
const inputfield  = document.querySelector('input')
weatherform.addEventListener('submit',(e) =>{
    e.preventDefault();
const location = inputfield.value;
fetch('/wether?search='+location).then( (responce) =>{
responce.json().then((data)=>{
    debugger;
   if(data.error){
     console.log('Not able to gee the data for a given location')
   } else {
    document.getElementById("longitude").value = data.longitude;
    document.getElementById("latitude").value = data.latitide;
   }
})
})
})
