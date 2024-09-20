
//step - 1 form submit reloadijng the page

// document.getElementById('button-loging').addEventListener('click',function(event){
//     //step -2 prevent default behavior (reloading browser)
// event.preventDefault();
    
// console.log('login button clickde');

// // setp -3: get the phone number and  the pin number
    
//     const phoneNember = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNember, pinNumber);
//     //step -4: validate phone and pin
//     //this is temporary. you should be do like this
//     if(phoneNember === '5' && pinNumber === '1234'){
//      console.log('You are logged in');
//      //step -5: allow user to to use the website
     
//     }
//     else(
//        alert('Wrong phone number or pin') 
//     )
    
// })

document.getElementById('button-loging').addEventListener('click',function(event){
   event.preventDefault()

   //get phone number and pin number
     const phoneNember = document.getElementById('phone-number').value;
const pinnumber = document.getElementById('pin-number').value;
console.log(phoneNember,pinnumber);

if( phoneNember === '5' && pinnumber === '1234'){
    console.log('You are logged in');
    
window.location.href = '/rakib.html'
}
    else(
        alert('Wrong phone number or pin')
    )

   
});
