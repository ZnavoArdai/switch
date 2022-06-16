
    var btn=document.getElementById("btn");
    var input=document.getElementById("input1");
    var p=document.getElementById("p1");

// btn.onclick=function chooseNumber(){




//     switch(input){
//         case "3":
//             return console.log("hello")

//        case "5":
//         return console.log("goodbye")
   
//         case "7":
//             return console.log("thank you")

//             default:
//                 return console.log("no match")


//     }
// }

//2
// btn.onclick=function matchName(){

//     switch(input.value){

//         case "jacob":
//             return p.innerText=input.value;

//         case "natan":
        
//             return p.innerText=input.value.toUpperCase();

//         case "dalya":

//             return p.innerText=input.value.toLowerCase();

// default:
//     return p.innerText="no match";

//         }
// }

//3


// btn.onclick=function caculatrNumbers(){

//     switch(ss.value){

//         case "+":
//             return p.innerText=+input1.value+ +input2.value;

//         case "*":
//             return p.innerText=+input1.value* +input2.value;

            
//         case "-":
//             return p.innerText=+input1.value- +input2.value;

            
//         case "/":
//             return p.innerText=+input1.value/ +input2.value;

//     }
// }
//4

// btn.onclick=function fontBigger(){

// switch (sel.value) {
//     case "s":

//         p1.innerText=inputText.value;
//         p1.style.fontSize=10+"px ";
//         p1.style.color=inputColor.value;

//         return

//         case "m":

//         p1.innerText=inputText.value;
//         p1.style.fontSize=50+"px ";
//         p1.style.color=inputColor.value;
//         return

//         case "l":

//         p1.innerText=inputText.value;
//         p1.style.fontSize=100+"px ";
//         p1.style.color=inputColor.value;

//         return

//         case "xl":

//         p1.innerText=inputText.value;
//         p1.style.fontSize=200+"px ";
//         p1.style.color=inputColor.value;

//         return
        

//     default:
//         break;
// }


// }
// 5


// btn.onclick=function corner(){

//    switch(sel.value){

//     case "top-left":
// div1.style=" height:100px;width:100px;border-radius:50%; border: solid black 1px; background:"+color1.value

// break;

// case "top-right":
//     div1.style="float:right; height:100px;width:100px;border-radius:50%; border: solid black 1px; background:"+color1.value
    
//     break;

//     case "buttom-left":
//         div1.style="margin-top:61vh; height:100px;width:100px;border-radius:50%; border: solid black 1px; background:"+color1.value
        
//         break;

//         case "buttom-right":
//     div1.style="float:right;margin-top:61vh; height:100px;width:100px;border-radius:50%; border: solid black 1px; background:"+color1.value
    
//     break;
    
//    }
   
   
// }


//מערך של אובייקטים שצריך לבדוק ר=אם הגיל שלו מעל 18 ט=ולהדפיס

// let person={
//     name:"avi",
//     lastname:"brok",
//     age:50
// }

// let person1={
//     name:"gggg",
//     lastname:"fffff",
//     age:26
// }

// let person2={
//     name:"moti",
//     lastname:"brok",
//     age:12,
// }

// let myarray=[person,person2,person1]


// function personFuncc(personArray){

//     personArray.forEach( (personArray)=> {
//         if(personArray.age>18){
//             dive1.innerText+=" "+personArray.name+" "+personArray.lastname
//         }
//         else
//         dive2.innerText+=personArray.name

//     });


// }

// personFuncc(myarray);

// for (const i of myarray) {
//     console.log()
// }



var elements=document.getElementsByClassName("ele");

for (const i of elements) {
    console.log(i)
}


var elementp=document.getElementsByClassName("texts");




btn1.onclick=()=>{
    for(const i of elementp){

        i.style.color="blue"
        }
}

btn2.onclick=()=>{
    for(const i of elementp){

        i.innerText="hello"
        }
}