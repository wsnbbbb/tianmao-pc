var div = document.querySelectorAll(".pannel-con");
var i = document.querySelectorAll(".selected");
i.forEach((el,index) => {
    el.onmouseover = function () {
        div.forEach((el) => {
            el.style.display="none"
        })
       div[index].style.display="block"
    }
})