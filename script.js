
//login button

document.getElementById("login_btn").addEventListener('click',function(e){

    e.preventDefault(); // removes default behaviour
    const mbl_num = 999111;
    const pin_num = 1234;
    const x = document.getElementById("mobile_number").value;
    const y = document.getElementById("pin_number").value;
    const user_input_mbl = parseInt(x);
    const user_input_pin = parseInt(y); 
    if(user_input_mbl == mbl_num && user_input_pin == pin_num){
        window.location.href="./homepage.html"
    }
    else{
        alert("Invalid Credential !")
    }
    

})