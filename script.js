// if (annyang) {
//     // Let's define our first command. First the text we expect, and then the function it should call
//     var commands = {
//       'hello': function() {
//         alert('Hello world!');
//       }
//     };
  
//     // Add our commands to annyang
//     annyang.addCommands(commands);
  
//     // Start listening. You can call this here, or attach this call to an event, button, etc.
//     annyang.start();
//   }

if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'play video':function(){
        document.getElementById("myVideo").play();
      },
      'pause video':function(){
        document.getElementById("myVideo").pause();
      },
      'write username *tag':function(variable){
        let uname=document.getElementById("uname");
        uname.value=variable;
      },
      'write email *tag':function(variable){
        let emailadd=document.getElementById("email");
        emailadd.value=variable.split(" ").join("");
      },
      'write contact *tag':function(variable){
        let mobile=document.getElementById("telnum");
        mobile.value=variable.split(" ").join("");
      },
      'write message *tag':function(variable){
        let message=document.getElementById("mymessage");
        message.value=variable;
      },
      'submit form':function(){
        let myform=document.getElementById("myform");
        let heading=document.getElementById("header")
        let form=document.querySelector(".contact-form");
        //let heading=document.querySelector('.form-area-inner h2');
        myform.remove();
        heading.remove();
        //heading.innerHTML="Form has been submiited";
        let html='';
        html += `<h2 style="color:blue; margin-top:200px;">Form has been submitted</h2> <p style="color:blue;">We will call you shortly!</p>`;
        form.innerHTML=html;
        
      }  
    
    };
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }  