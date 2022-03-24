
function validateForm(){
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var mobilenumber = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var gender = document.getElementById('gdr').value;
    var sym = document.getElementById('symtops').value;


    if (user == ""){
        document.getElementById('username').innerHTML = "please enter the name";
        return false;
    }

    if(email == ""){
        document.getElementById('mailid').innerHTML = "please enter the Email";
        return false;
        
    }

    if(mobilenumber == ""){
        document.getElementById('contactno').innerHTML = "please enter the mobile number";
        return false;
    }
     
    if(address == ""){
        document.getElementById('addressd').innerHTML = "please enter the address";
        return false;
}

if(gender == ""){
    document.getElementById('gdr').innerHTML = "please select the gender";
    return false;
}

if(symtops == ""){
    document.getElementById('sypt').innerHTML = "please choose the symptops";
    return false;
}
        
}