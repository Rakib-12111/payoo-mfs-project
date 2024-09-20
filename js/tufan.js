// add money to the accound
//step-1: add an event handler to the add money button isside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
    
    
    
})

