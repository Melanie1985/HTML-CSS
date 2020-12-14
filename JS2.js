function myContact(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");
    var text;


    if (name.length < 10 || name.length >50){
       text = "Full Name is not valid";
       error.innerHTML = text;
       return false;       
   }


  if(email.length < 10 || email.length > 30){
       text = "Invalid Email";
        error.innerHTML = text;
        return false;
  }

if(phone.length < 10 || phone.length > 15){
          text = "Invalid Phone Number";
          error.innerHTML = text;
          return false;
  }

      if(message.length < 1 || message.length > 100){
         text = "Too many characters";
          error.innerHTML = text;
          return false;
  }

   
   return true;
   
}
