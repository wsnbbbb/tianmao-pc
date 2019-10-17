var div1=document.querySelector(".ssk");
var div2=document.querySelector(".mui-lift");
      document.onscroll=function(){
          if(window.pageYOffset>=700){
              div1.style.display="block";
              div2.style.display="block"
          }else{
            div1.style.display="none";
            div2.style.display="none"
          }
      }