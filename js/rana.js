document.getElementById('btn-loging').addEventListener('click',function(event){
   event.preventDefault();

   const phoneNember = document.getElementById('phone-number').value;
   const pinNumber = document.getElementById('pin-number').value;
   console.log(phoneNember,pinNumber);
   if( phoneNember === '5' && pinNumber === '1234'){
    console.log('you are loggied in'); 
    window.location.href = '/index.html'
    
   }
   else{
    alert('Wrond phon number or pin')
   }
    
})