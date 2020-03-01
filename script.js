window.onload = function() {

    //all functions for rolling

    function rollD4(){
        var ans =0;
        while (ans === 0) {
            ans = Math.round(Math.random() * 4);
        }
        return ans;
    }
    
    function rollD6(){
        var ans =0;
        while (ans === 0) {
            ans = Math.round(Math.random() * 6);
        }
        return ans;
    }
    
    function rollD8(){
        var ans =0;
        while (ans === 0) {
            ans = Math.round(Math.random() * 8);
        }
        return ans;
    }

    function rollD10(){
        var ans =0;
        while (ans === 0) {
            ans = Math.round(Math.random() * 10);
        }
        return ans;
    }

    function rollD12(){
        var ans =0;
        while (ans === 0) {
            ans = Math.round(Math.random() * 12);
        }
        return ans;
    }
    
    function rollD20(){
        var ans =0;
        while (ans === 0) {
            ans = Math.round(Math.random() * 20);
        }
        return ans;
    }

    //d4 go button event listener

    var d4Button = document.getElementById("d4submit");
    var d4output =  document.getElementById("d4output");
    var d4reset = document.getElementById("d4reset");
    var d4 =document.getElementById("d4");
   

    d4Button.addEventListener("click",function(event){
        var d4plusValue = document.getElementById("d4plus").value;
        var d4minusValue = document.getElementById("d4minus").value;

        var d4 =document.getElementById("d4");
        d4.classList.toggle('rollOver');
       
        var ans = Number(rollD4());
        console.log(ans);
       
        ans += Number(d4plusValue);
        ans -= Number(d4minusValue);
     
        d4output.innerHTML = ans;

    
    });

    //d4 event listener reset button

    d4reset.addEventListener("click",function(event){
        d4output.innerText = 0;
    })

    //d6 button event listener

    var d6Button = document.getElementById("d6submit");
    var d6output =  document.getElementById("d6output");
    var d6reset = document.getElementById("d6reset");
   

    d6Button.addEventListener("click",function(event){
        var d6plusValue = document.getElementById("d6plus").value;
        var d6minusValue = document.getElementById("d6minus").value;

        var d6 =document.getElementById("d6");
        d6.classList.toggle('rollOver');
       
        var ans = Number(rollD6());
        //console.log(ans);
       
        ans += Number(d6plusValue);
        ans -= Number(d6minusValue);
     
        d6output.innerHTML = ans;

    
    });

    //d6 event listener reset button

    d6reset.addEventListener("click",function(event){
        d6output.innerText = 0;
    })

    //d8 button event listener

    var d8Button = document.getElementById("d8submit");
    var d8output =  document.getElementById("d8output");
    var d8reset = document.getElementById("d8reset");
   

    d8Button.addEventListener("click",function(event){
        var d8plusValue = document.getElementById("d8plus").value;
        var d8minusValue = document.getElementById("d8minus").value;

        var d8 =document.getElementById("d8");
        d8.classList.toggle('rollOver');
       
        var ans = Number(rollD8());
       
        ans += Number(d8plusValue);
        ans -= Number(d8minusValue);
     
        d8output.innerHTML = ans;

    
    });

    //d8 event listener reset button

    d8reset.addEventListener("click",function(event){
        d8output.innerText = 0;
    })

 //d10 button event listener

 var d10Button = document.getElementById("d10submit");
 var d10output =  document.getElementById("d10output");
 var d10reset = document.getElementById("d10reset");


 d10Button.addEventListener("click",function(event){
     var d10plusValue = document.getElementById("d10plus").value;
     var d10minusValue = document.getElementById("d10minus").value;

     var d10 =document.getElementById("d10");
        d10.classList.toggle('rollOver');
    
     var ans = Number(rollD10());
    
     ans += Number(d10plusValue);
     ans -= Number(d10minusValue);
  
     d10output.innerHTML = ans;

 
 });

 //d10 event listener reset button

 d10reset.addEventListener("click",function(event){
     d10output.innerText = 0;
 })


  //d12 button event listener

  var d12Button = document.getElementById("d12submit");
  var d12output =  document.getElementById("d12output");
  var d12reset = document.getElementById("d12reset");
 
 
  d12Button.addEventListener("click",function(event){
      var d12plusValue = document.getElementById("d12plus").value;
      var d12minusValue = document.getElementById("d12minus").value;

      var d12 =document.getElementById("d12");
        d12.classList.toggle('rollOver');
     
      var ans = Number(rollD12());
     
      ans += Number(d12plusValue);
      ans -= Number(d12minusValue);
   
      d12output.innerHTML = ans;
 
  
  });
 
  //d12 event listener reset button
 
  d12reset.addEventListener("click",function(event){
      d12output.innerText = 0;
  })

   //////////////////////////////////////////////////////////////////////////
  //d20 button event listener

  var d20Button = document.getElementById("d20submit");
  var d20output =  document.getElementById("d20output");
  var d20reset = document.getElementById("d20reset");
 
 
  d20Button.addEventListener("click",function(event){
      var d20plusValue = document.getElementById("d20plus").value;
      var d20minusValue = document.getElementById("d20minus").value;

      var d20 =document.getElementById("d20");
        d20.classList.toggle('rollOver');


     
      var ans = Number(rollD20());
      if(ans === 1) {
          ans =  "CRITICAL MISS!";
          d20output.innerHTML = ans;

          
      }

      else if (ans===20) {
          ans =  "CRITICAL HIT!";
          d20output.innerHTML = ans;

         
          
      }
      else {
        ans += Number(d20plusValue);
        ans -= Number(d20minusValue);
     
        d20output.innerHTML = ans;

      }
      
     
     
 
  
  });
 
  //d20 event listener reset button
 
  d20reset.addEventListener("click",function(event){
      d20output.innerText = 0;
  })







  
}