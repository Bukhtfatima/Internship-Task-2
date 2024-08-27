

document.addEventListener('DOMContentLoaded', ()=>{
    menu = () => {
        let list = document.querySelector('#list');
        list.className === ('navlist') ? list.className += (' mobile-nav') : list.className = ('navlist');
    }
    
    document.querySelector('#number').addEventListener('input', (e) => {
        this.value = this.value.replace(/[^0-9]/g, '');
    })
    document.querySelector('#contact-form').addEventListener('submit', (event)=>{
        event.preventDefault;
    
        let email = document.querySelector('#email').value;
        let contact = document.querySelector( "#number").value;
        let messege = document.querySelector("#text").value;
    
        if(email === "" || contact === "" || messege === ""){
            alert('Please fill required fields');
        }else{
            alert("Thank you for contacting us, we will get back you soon!");
            
           
        }
    })



})