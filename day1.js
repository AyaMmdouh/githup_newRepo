//Task 1.1
// var userInput
// for (var i=1;i<7;i++)
// {
//    userInput=prompt("enter a message");
//    document.write("<h"+i+">" +userInput+"</h" +"i>" +"<br>")
// }



//Task 1.2
// var number=parseInt(prompt("enter a number"));
// var sum=0;
// while(number !=0 )
// {
//     sum+=number;
//     if(sum<100)
//     {
//         number=parseInt(prompt("enter a number"));    
//     }
//     else break;
// }
// document.write("sum ="+sum);







//Task 2.1

//var str=prompt("enter a string","");
// var num=0;
// for(var i=0;i<str.length;i++)
// {
//     if(str[i]=="e")
//     {
//          num=num+1;
//     }
//     else continue;

// }
//document.write(num);















// // Task 2.2
//  var stmsg=prompt("enter a string");
//  var flag=confirm("Do you determine Senstive case?")
//  var st2="AYa";
//  for(var i=0;i<(stmsg.length);i++)
//  {
//     st2[i]=stmsg[stmsg.length-i]  ;
//  }
//  document.write("string1  "+ stmsg +"<br>");
//  document.write("string2  "+st2+"<br>");








// var arr=new Array(3);
// for (var i=0;i<arr.length;i++)
// {

//     arr[i]=parseInt(prompt("enter a number"));

// }
// var sum=0;
// var multiplay=1;
// var divide=1;
// for(var i=0;i<arr.length;i++)
// {
//      sum=sum+arr[i];
//      multiplay=multiplay * arr[i];
//      divide=arr[i]/divide;
// }
//  // document.write("<span style="+"font-size:19 px"  +" >"+"sum of the 3 values ="+ "<span>");
// document.write("<h1> Adding -- Multiplaying -- Dividing 3 values</h1> <br> <hr>");
// document.write("<span style="+"color:red;"+"font-size: 19 px" +" >"+ "sum of the 3 values  " +"</span>"+"<span style= "+"color:black"+">"+arr[0]+"+"+arr[1]+"+"+arr[2]+"=" + sum +"</span>"+"<br> <br>" );
// document.write("<span style="+"color:red"  +" >"+ "multipliplication of the 3 values  "+"</span>"+"<span style= "+"color:black"+">"+arr[0]+"*"+arr[1]+"*"+arr[2] +"="+ multiplay +"</span>"+"<br> <br>" );
// document.write("<span style="+"color:red"  +" >"+ "Dividing of the 3 values  "+"</span>"+"<span style= "+"color:black"+">" +arr[0]+"/"+arr[1]+"/"+arr[2]+"="+ divide +"</span>"+"<br> <br>" );






//task 3.3
//var unSortedArr=[];
//for(var i=0;i<5;i++)
//{
  //  unSortedArr[i]=parseInt(prompt("enter a number"));
//}
//document.write("<h1>"+" Sorting "+"</h1>"+"<hr>")
//document.write("<span style="+"color:red"+">"+"<b>"+"u've entered the values of "+"</b>"+"</span>"+"<span style="+"color:black"+">"+unSortedArr+"</span>"+"<br> <br>");

//var ascendingArray=unSortedArr.sort( function(a,b){return a-b;});
//var descendingArray=ascendingArray.reverse();

//document.write("<span style="+"color:red"+">"+"<b>"+"u've entered the values of "+"</b>"+"</span>"+"<span style="+"color:black"+">"+ascendingArray+"</span>"+"<br> <br>");
//var descendingArray=ascendingArray.reverse();
//document.write("<span style="+"color:red"+">"+"<b>"+"u've entered the values of "+"</b>"+"</span>"+"<span style="+"color:black"+">"+descendingArray+"</span>"+"<br> <br>");



// //Task 4
// var radius=parseInt(prompt("enter the radius of the circle"));
// alert("Total area of the circle is "+Math.PI*radius*radius);
// var number=parseInt(prompt("what is the value you want to calculate its square root"));
// alert("square root of "+number+" is "+Math.sqrt(number));
//  var angle=parseInt(prompt("what is the angle you want to calculate its cos value"));
//  var result=Math.cos(angle);
//  alert("cos "+angle+ " is "+result.toFixed(4));


//Task 2.2
// var stInput = prompt("enter a palndrom string", "MOOM");
// var flag = confirm("Do you consider case sensitivity of the string you entered or not? ")
// var chArray;
// var reChArray;
// var reString
// reformat(stInput);
// function reformat(stInput) {
//     chArray = stInput.split("");
//     reChArray = stInput.split("").reverse();
//     reString = stInput.split("").reverse().join("");
// }

// console.log(stInput)
// console.log(chArray)
// console.log(reChArray)
// console.log(reString)
// console.log(flag)

// var value = 0;
// var ok = 0;
// IsPalandrom();



// function IsPalandrom() {
//     for (var i = 0; i < chArray.length; i++) {
//         if (chArray[i] == reChArray[i]) {
//             value = value + 1;
//         }
//     }
//     if (value == chArray.length) {
//         alert("you entered " + stInput + " and it's a palindrome");
//         ok = 1;
//         return true;
//     }else return false;
// }

// if (value != chArray.length)
// {
//     if (flag == true) {
//         alert("you entered " + stInput + " and it's not  a palindrome")
//     } else {
//         var newStInput = stInput.toUpperCase();
//         reformat(newStInput);
//         if(IsPalandrom()==false) alert("you entered " + stInput + " and it's not  a palindrome");
//     }
// } 













//document.write("<span" + "style="+"color:" + color + ";>" + "Welcome dear guest " + "</span>" +"<span>"+name +"</span> <br>");

// var emailreg = /^[A - Za - z0-9_]+\@[a-zA-Z]+\.[a-zA-Z0-9]{2,4}$/



//Task 2.3
var name = prompt("enter your name");
var nmExp = /[A - Za - z]/
var nres = nmExp.test(name);
while (!nres) {
    name = prompt("enter your name");
    nres = nmExp.test(name);
}
//////////////////////////////////////////
var number = prompt("enter your phone number");
var regExp = /^01(0|1|2|5)[0-9]{8}$/
var result = regExp.test(number);
while (!result) {
    number = prompt("enter a valid phone number")
    result = regExp.test(number);

}
///////////////////////////////////////////
var phone = prompt("enter your home number");
var phoneex = /^[0-9]{8}$/
var pres = phoneex.test(phone)
while (!pres) {
    phone = prompt("enter a valid home number")
    pres = phoneex.test(phone);
}

//////////////////////////////////////////
var email = prompt("enter your email");
var emailreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var eRes = emailreg.test(email);
while (!eRes) {
    email = prompt("enter a valid email")
    eRes = emailreg.test(eRes);
}


var color = prompt("choose your fav color, enter 1 for red ,2 for blue or 3 for green");

//////////////////////////////

// var color="red"
switch (color) {
    case "1":
        color ="red";
        break;
    case "2":
        color = "blue";
        break;
    case "3" :
        color= "green";
        break;
    default:
        color="black"
}
var date=new Date();
document.write("<span"+ " style="+"color:"+color+";>"+"<b>"+ "welcom dear guest "+"</span>"+"</b>"+"<span>"+"<b>"+ name + "</b>"+"</span> <br>");
document.write("<span"+ " style="+"color:"+color+";>"+"<b>"+ "your telephone number is "+"</b>"+"</span>"+"<span>"+"<b>"+ phone  + "</b>"+"</span> <br>");
document.write("<span"+ " style="+"color:"+color+";>"+"<b>"+ "your mobile number is "+"</b>"+"</span>"+"<span>"+"<b>"+ number  + "</b>"+"</span> <br>");
document.write("<span"+ " style="+"color:"+color+";>"+"<b>"+ "your email address is "+"</b>"+"</span>"+"<span>"+"<b>"+ email + "</b>"+"</span> <br>");
document.write("<span"+ " style="+"color:"+color+";>"+"<b>"+ "today id "+"</b>"+"</span>"+"<span>"+"<b>"+ date+ "</b>"+"</span> <br>");




























// do { 
// number=parseInt(prompt("enter a number"));
//sum+=number;
// }while(number==0 || number==100)
