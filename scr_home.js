/* necessary functions*/

const transaction_data = []


// selection
function click_ftr(cls , id){
    
    const click = document.getElementsByClassName(cls)
    for(let c of click){
        c.classList.remove('bg-[#0874f20d]')
    }
    document.getElementById(id).classList.add('bg-[#0874f20d]')
}








// Add money  design

document.getElementById("add_money_btn").addEventListener('click', function(e){
    e.preventDefault();
    const default_account = 12345678;
    const default_pin = 1234;
    const bank = document.getElementById("bank").value;
    const account = document.getElementById("account_no").value;
    const account_number = parseInt(account);
    const x = document.getElementById("amount").value;
    const y = document.getElementById("pin").value;
    const add_amount = parseInt(x);
    const pin_check = parseInt(y);
    const balance = parseInt(document.getElementById("current_balance").innerText);
    
    
    if(account_number.toString().length < 11 || account_number.toString().length > 11 ){
        if( account_number.value == null){
            alert("Please enter valid information")
            return;
        }
        else{
        alert("Invalid Account Number");
        return;
        }
    }

    if(add_amount <= 0){
        alert("Invalid Amount");
    }

    if(account_number.toString().length == 11  && pin_check == default_pin){
        let new_balance = balance + add_amount;
        document.getElementById("current_balance").innerText = new_balance;
        const data = {
            name : "Add Money",
            date : new Date().toLocaleTimeString()
        }
        transaction_data.push(data)
        
        return;
    }

  
    if(pin_check !== default_pin || pin_check.value == null){
        alert("Pin Number did not match.");
        return;
    }

    
})


//withdraw functionality

document.getElementById("withdraw_money_btn").addEventListener('click' , function(e){
    const default_account = 1572196596 ;
    const default_pin = 1234;
    let agent_no_check = parseInt(document.getElementById("agent_no").value);
    let cashout_var = document.getElementById("cashout_pin").value;
    let cashout_pin_check = parseInt(cashout_var);
    let cashout_amount = parseInt(document.getElementById("cashout_amount").value);
    const balance = parseInt(document.getElementById("current_balance").innerText);


    if(agent_no_check.toString().length < 11 || agent_no_check.toString().length > 11 ){
        if( agent_no_check.value === null){
            alert("Please enter valid information")
            return;
        }        
        alert("Invalid Account Number");    
    }

    if(cashout_amount > balance){
        alert("Insufficient Balance");
        location.reload();
            return;
    }

    if(agent_no_check.toString().length == 11 && cashout_pin_check == default_pin){
        let balance_cashout = balance - cashout_amount;
        document.getElementById("current_balance").innerText = balance_cashout;
        const data = {
            name : "Cash Out",
            date : new Date().toLocaleTimeString()
        }
        transaction_data.push(data)
        let balance_var_cashout = parseInt( document.getElementById("current_balance").innerText);
        if(balance_var_cashout < 0){
            alert("Insufficient Balance");
            location.reload();
            return;
        } 
        return;

    }
    if(cashout_pin_check !== default_pin || cashout_pin_check.value == null){
        alert("Pin Number did not match.");
        return;
    }
})


// transfer money

document.getElementById("send_money_btn").addEventListener('click' , function(e){
    const default_reciever = 1552630550 ;
    const default_pin = 1234;
    let user_no_check = parseInt(document.getElementById("user_no").value);
    let send_pin_check = parseInt( document.getElementById("send_pin").value);
    let send_amount = parseInt(document.getElementById("send_amount").value);
    const balance = parseInt(document.getElementById("current_balance").innerText);


    if(user_no_check.toString().length < 11 || user_no_check.toString().length > 11 ){
        if( user_no_check.value === null){
            alert("Please enter valid information")
            return;
        }        
        alert("Invalid Account Number");   
        return; 
    }
    if(user_no_check.toString().length == 11 && send_pin_check == default_pin){
        let balance_transfer = balance - send_amount;
        document.getElementById("current_balance").innerText = balance_transfer;
        const data = {
            name : "Send Money",
            date : new Date().toLocaleTimeString()
        } 
        transaction_data.push(data)
        let balance_var_send = parseInt( document.getElementById("current_balance").innerText);
        if(balance_var_send < 0){
            alert("Insufficient Balance");
            location.reload();
            return;
        }   
        return;
    }

    if(send_pin_check !== default_pin || send_pin_check.value == null){
        alert("Pin Number did not match.");
        return;
    }
})



// bonus function

    const coupon_default = "diuswe1";
    document.getElementById("bonus_btn").addEventListener('click', function(){
        let bonus_no_check = document.getElementById("coupon_no").value;
    const balance = parseInt(document.getElementById("current_balance").innerText);

    if(bonus_no_check == coupon_default){
        let balance_bonus = balance + 1000;
        document.getElementById("current_balance").innerText = balance_bonus;
        const data = {
            name : "Bonus Added",
            date : new Date().toLocaleTimeString()
        } 
        transaction_data.push(data)
        return;
    }
    else{
        alert("Invalid code.")
    }
    
    })
    

// pay bill function

document.getElementById("paybill_btn").addEventListener('click' , function(e){

    const default_pin = 1234;
    const bill = document.getElementById("bill_type").value;
    let biller_no_check = parseInt(document.getElementById("biller_no").value);
    let bill_pin_check = parseInt( document.getElementById("bill_pin").value);
    let bill_amount = parseInt(document.getElementById("bill_amount").value);
    const balance = parseInt(document.getElementById("current_balance").innerText);

   

    if(biller_no_check.toString().length < 11 || biller_no_check.toString().length > 11 ){
        if( biller_no_check.value === null){
            alert("Please enter valid information")
            return;
        }        
        alert("Invalid Account Number"); 
        return;   
    }
    if(biller_no_check.toString().length == 11 && bill_pin_check == default_pin){
        let balance_bill = balance - bill_amount;
        document.getElementById("current_balance").innerText = balance_bill; 
        const data = {
            name : "Bill Paid",
            date : new Date().toLocaleTimeString()
        } 
        transaction_data.push(data)
        let balance_var_bill = parseInt( document.getElementById("current_balance").innerText);
        if(balance_var_bill < 0){
            alert("Insufficient Balance");
            location.reload();
            return;
        }   
        return;
    }
     
    if(bill_pin_check !== default_pin || bill_pin_check.value == null){
        alert("Pin Number did not match.");
        return;
    }
    
})

// transaction

document.getElementById("transaction_toggle").addEventListener('click' , function(e){
    // console.log(transaction_data);  
    let transaction_contaienr = document.getElementById("transaction_contaienr")
    transaction_contaienr.innerHTML = ""

    for (let data of transaction_data){ 
        const tr_card = document.createElement("div")
        tr_card.innerHTML=`
        <div class=" bg-white p-3 flex justify-between items-center shadow-lg rounded-lg mt-2.5">
                    <div class="flex items-center">
                        <div class="border-2 border-[#f4f5f7] p-2 rounded-3xl bg-[#f4f5f7]">
                            <img src="./assets/wallet1.png" alt="">
                        </div>
                        <div class="ml-3 text-[#080808B2]">
                            <h1 class="font-bold text-[17px]" >${data.name}</h1>
                            <p class="text-[13px]">${data.date}</p>
                        </div>
                    </div>
        
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        `
        transaction_contaienr.appendChild(tr_card)

    }



})

//log out

document.getElementById("logout").addEventListener('click' ,function(e){
    window.location.href="./index.html"
})






// add money toggle

document.getElementById("add_money_toggle").addEventListener('click' , function(){
    
    click_ftr("click_feature","add_money_toggle");
    document.getElementById("Add_Money").style.display = "block";
    document.getElementById("default").style.display = "none";
    document.getElementById("Cashout").style.display = "none";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("Bonus").style.display = "none";
    document.getElementById("bill").style.display = "none";
    document.getElementById("transaction").style.display = "none";
})

// cashout toggle

document.getElementById("cashout_toggle").addEventListener('click' , function(){

    click_ftr("click_feature","cashout_toggle");
    document.getElementById("Add_Money").style.display = "none";
    document.getElementById("default").style.display = "none";
    document.getElementById("Cashout").style.display = "block";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("Bonus").style.display = "none";
    document.getElementById("bill").style.display = "none";
    document.getElementById("transaction").style.display = "none";
})


//transfer toggle
document.getElementById("transfer_toggle").addEventListener('click' , function(){
    
    click_ftr("click_feature","transfer_toggle");
    document.getElementById("Add_Money").style.display = "none";
    document.getElementById("default").style.display = "none";
    document.getElementById("Cashout").style.display = "none";
    document.getElementById("transfer").style.display = "block";
    document.getElementById("Bonus").style.display = "none";
    document.getElementById("bill").style.display = "none";
    document.getElementById("transaction").style.display = "none";

})

// bonus toggle
document.getElementById("bonus_toggle").addEventListener('click' , function(){

    click_ftr("click_feature","bonus_toggle");
    document.getElementById("Add_Money").style.display = "none";
    document.getElementById("default").style.display = "none";
    document.getElementById("Cashout").style.display = "none";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("Bonus").style.display = "block";
    document.getElementById("bill").style.display = "none";
    document.getElementById("transaction").style.display = "none";

})

// pay bill toggle

document.getElementById("bill_toggle").addEventListener('click' , function(){

    click_ftr("click_feature","bill_toggle");
    document.getElementById("Add_Money").style.display = "none";
    document.getElementById("default").style.display = "none";
    document.getElementById("Cashout").style.display = "none";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("Bonus").style.display = "none";
    document.getElementById("bill").style.display = "block";
    document.getElementById("transaction").style.display = "none";

})

// transaction toggle

document.getElementById("transaction_toggle").addEventListener('click' , function(){

    click_ftr("click_feature","transaction_toggle");
    document.getElementById("Add_Money").style.display = "none";
    document.getElementById("default").style.display = "none";
    document.getElementById("Cashout").style.display = "none";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("Bonus").style.display = "none";
    document.getElementById("bill").style.display = "none";
    document.getElementById("transaction").style.display = "block";

})

