// var txt1=document.querySelector("#txt1")
// var txt2=document.querySelector("#txt2")
// var txt3=document.querySelector("#txt3")
// var txt4=document.querySelector("#txt4")
// var txt5=document.querySelector("#txt5")
// var txt6=document.querySelector("#txt6")


// var addbtn=document.querySelector("#addbtn")

// addbtn.addEventListener("click",function()
// {
// txt6.value=parseInt(txt1.value)+parseInt(txt2.value)+parseInt(txt3.value)+parseInt(txt4.value)+parseInt(txt5.value)
// })

var txt1=document.querySelector("#txt1")
var txt2=document.querySelector("#txt2")
var txt3=document.querySelector("#txt3")

var addbtn=document.querySelector("#addbtn")



addbtn.addEventListener("click",function()
{
    txt3.value=parseInt(txt1.value)+parseInt(txt2.value)
})