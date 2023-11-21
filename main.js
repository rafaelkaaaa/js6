const button=document.querySelector("#myButton");

let count=0;

button.addEventListener("click", function(){
count++
console.log(count)
alert("Кнопка была нажата " +count + "раз" )
})



const div=document.querySelector("#myDIV");
console.log(div)

div.addEventListener("mouseover", function(){
    div.style.backgroundColor="red";
});

div.addEventListener("mouseout", function(){
    div.style.backgroundColor="blueviolet";
});


