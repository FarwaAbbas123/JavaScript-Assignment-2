                                    //  <<<<<< Chpt 21 - 25 >>>>>>
                                    //     <<<< question 1 >>>>



// var first = prompt("Please enter your first name ?") ;
// var last = prompt("Please enter your last name ? ");
// var full_name  = first + last ;
// document.write(full_name  + "!"  + " " + " welcome ... how are you ? ..... nice to meet you " );





                                       //  <<<<<< Chpt 21 - 25 >>>>>>
                                     //     <<<< question 2 >>>>




//  var fav_mob_model = prompt("Please enter your favourite mobile model name ?") ;   
// var len = fav_mob_model.length;   
// document.write("Your Favourite Model Name : " + " " + fav_mob_model+ "<br>");
// document.write("Length Of String : " + " " + len + "<br>");





                                     //  <<<<<< Chpt 21 - 25 >>>>>>
                                     //     <<<< question 3 >>>>





// var name = prompt("Enter anything in name ?") ;
// document.write("Name :" + " " + name + "<br>");
// var searchindex = prompt ("Enter single character  for search index")
// var strmatch = name.indexOf(searchindex,0)
// document.write("Index for search character " + " " + "(" +  searchindex +  ")" +" " + "is :" + " " + strmatch + "<br>");




                                      
                                     //  <<<<<< Chpt 21 - 25 >>>>>>
                                     //     <<<< question 4 >>>>




// var name = prompt("Enter anything in name ?") ;
// document.write("Name :" + " " + name + "<br>");
// var searchindex = prompt ("Enter single character  for search index")
// var strmatch = name.lastIndexOf(searchindex)
// document.write("Index for search character " + " " + "(" +  searchindex +  ")" +" " + "is :" + " " + strmatch + "<br>");                                    





                                     //  <<<<<< Chpt 21 - 25 >>>>>>
                                     //     <<<< question 5 >>>>




// var name = prompt("Enter anything in name ?") ;
// document.write("Name :" + " " + name + "<br>");
// var strmatch = name.charAt(3)
// document.write("Index for search character " + " "  + " " + strmatch + "<br>");     




                                        //  <<<<<< Chpt 21 - 25 >>>>>>
                                     //     <<<< question 6 >>>>     



// var str1 = prompt("Enter your first name ?");
// var str2 = prompt("Enter your last name ?");

// var full_str = str1.concat(str2);
// document.write(full_str);
                                     



                                    //  <<<<<< Chpt 21 - 25 >>>>>>
                                     //     <<<< question 7 >>>>      



// var city = "hyderabad";
// document.write("<h1>City is</h1>" + " " + city + "<br>");
// var replacement_word = city.replace("hyderabad" , "islamabad");
// document.write(" <h1>replacement city name</h1>" + " " + replacement_word)




                                     //  <<<<<< Chpt 21 - 25 >>>>>>
                                     //     <<<< question 8 >>>>



//  var message = "Ali and Sami are best friends. They play cricket and football together.";         
//  document.write(" <h2>Message :</h2>" + " " + message + "<br>");
//  var replacement = message.replace(/and/g, "&");     
//  document.write("<h2>After Replacement : </h2>"+ " "+ replacement);     



                                        
                                     //  <<<<<< Chpt 21 - 25 >>>>>>
                                     //     <<<< question 9 >>>> 

// 

// var a = "472";

// var a1 = parseInt(a)  ;

// document.write("Value :" + " " + a +"<br>" + " Type :" + " " +  typeof a + "<br>" );
// document.write("Value :" + " " + a1 +"<br>"+ " Type : " + " " + typeof a1);




                                     //  <<<<<< Chpt 21 - 25 >>>>>>
                                     //     <<<< question 10 >>>>



// var a = prompt ("Enter something ?");
// var b = a.toUpperCase();
// document.write("User Input :" + " " + a + " <br> ");
// document.write("Upper Case :" + " " + b);




                                       //  <<<<<< Chpt 21 - 25 >>>>>>
                                     //     <<<< question 11 >>>>


                       
// var a = prompt ("Enter something ?");          
// document.write("User Input :" + " " + a + " <br> ");    
// var b = a.charAt(0).toUpperCase() + a.slice(1,a.length);          
// document.write("Title Case :" + " " + b);      





                                       //  <<<<<< Chpt 21 - 25 >>>>>>
                                        //   <<<< question 12 >>>>

// var input =35.36;
// input=input.toString();
// var output =input.charAt(0).toString()+input.charAt(1).toString()+input.slice(3,input.length);
// document.write(output);




                                          //  <<<<<< Chpt 21 - 25 >>>>>>
                                          //   <<<< question 13 >>>>

                          

// var input=prompt("Enter your username : ");

// for(var i=0;i<=input.length;i++){
//      if(input.charCodeAt(i)==33 || input.charCodeAt(i)==44 || input.charCodeAt(i)==46 ||input.charCodeAt(i)==64){
//           alert("Please Enter a Valid USERNAME (not any special character)");
//      }
// }




                                              //  <<<<<< Chpt 21 - 25 >>>>>>
                                             //   <<<< question 14 >>>>



                                             


//  var array=["cake","apple pie","cookie","chips","patties"];
// var input=prompt("Welcome to our bakery.What do you want to order sir/maam?");
// input=input.toLowerCase();
// if( array.indexOf(input) !== -1)
// {
//    document.write(input + " is available at index "+ " " +  array.indexOf(input)+" in our bakery" + "<br>");
// } 
// else{
//    document.write("we are sorry"+  "  " +  input+ " not available in our bakery" + "<br>");
// }




                                           
                                              //  <<<<<< Chpt 21 - 25 >>>>>>
                                             //   <<<< question 15 >>>>




// var input=prompt("Enter the password : ");


// for(var i=0;i<=input.length;i++){
//      if(input.charCodeAt(i)>=33 && input.charCodeAt(i)<=47 && input.charCodeAt(i)>=48 &&input.charCodeAt(i)<=57 &&input.charCodeAt(i)>=58 &&input.charCodeAt(i)<=64 &&input.charCodeAt(i)>=65 &&input.charCodeAt(i)<=90 &&input.charCodeAt(i)>=91 && input.charCodeAt(i)<=96 &&input.charCodeAt(i)>=97 && input.charCodeAt(i)<=122){
//           alert("corerct");
//      }
//      else{
//           alert("nope");
//      }


// }






                                             
                                              //  <<<<<< Chpt 21 - 25 >>>>>>
                                             //   <<<< question 16 >>>>




// var university="University of Karachi";

//      var res=university.split("");
//      for(var i=0;i<=res.length-1;i++){
//           document.write(res[i]+"<br>");
//      }






                                             
                                              //  <<<<<< Chpt 21 - 25 >>>>>>
                                             //   <<<< question 17 >>>>



// var input=prompt("Enter the something  :");
// var Length=input.length;
// document.write(input[Length-1]);                                             





                                           //  <<<<<< Chpt 21 - 25 >>>>>>
                                             //   <<<< question 18 >>>>



// var data="The quick brown fox jumps over the lazy dog";


// for(var a=0;a<data.length;a++){

// if(data[i]!= " "){

// }


// }

                                              //  <<<<<< Chpt 26 - 30 >>>>>>
                                                  //   <<<< question 1 >>>>

// var input=+prompt("Enter the positive integer :");


// document.write("number : "+input+"<br>");
// var rounndoff=Math.round(input);
//  document.write("Round Off : "+rounndoff+"<br>");
//   var floor=Math.floor(input);
// document.write("floor : "+ floor+"<br>");
//  var ceil=Math.ceil(input);
//   document.write("ceil : "+ceil+"<br>");



                                             //  <<<<<< Chpt 26 - 30 >>>>>>
                                            //   <<<< question 2 >>>>   
                                            
                                            

// var input=+prompt("Enter the negative floating value :");


//      document.write("number : "+input+"<br>");
//      var rounndoff=Math.round(input);
//      document.write("Round Off : "+rounndoff+"<br>");
//      var floor=Math.floor(input);
//      document.write("floor : "+ floor+"<br>");
//      var ceil=Math.ceil(input);
//      document.write("ceil : "+ceil+"<br>"); 




                                              //  <<<<<< Chpt 26 - 30 >>>>>>
                                                //   <<<< question 3 >>>>  


// var input=+prompt("Enter the number tomake it absolute");

// var absolutee=Math.abs(input);
// document.write(absolutee);





                                                   //  <<<<<< Chpt 26 - 30 >>>>>>
                                                    //   <<<< question 4 >>>>  
                                                    

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);



                                                     
                                               //  <<<<<< Chpt 26 - 30 >>>>>>
                                                    //   <<<< question 5 >>>>  


// var diceRoll = Math.floor( Math.random() * 6 ) +1;

// if(diceRoll%2==0){

     
//      alert( diceRoll);
//      document.write("Random coins Value : Heads");
// }
// else{
     
//      alert( diceRoll);
//      document.write("Random coins Value : Tails");
// }



                                               //  <<<<<< Chpt 26 - 30 >>>>>>
                                                    //   <<<< question 6>>>>  



// var number = Math.floor( Math.random() * 100 ) +1;
// alert('Random number between 1 and 100 : ' + number);        



                                                //  <<<<<< Chpt 26 - 30 >>>>>>
                                                    //   <<<< question 7 >>>>  


// var input=prompt("Enter your weight in kilograms: ");

// // for(var i=0;i<input.length;i++){}


// for(var a=0;a<input.length;a++){
//      if(input[a]=="k"){
//           document.write("The weight of user is "+input.slice(0,input[a]-1)+" Kilograms"+a);
//           break;
//      }
// else{
//      document.write("The weight of user is "+input+" Kilograms"+a);
//      break;
// }


// }
// 



                                            //  <<<<<< Chpt 26 - 30 >>>>>>
                                             //   <<<< question 8 >>>>  


// var number = Math.floor( Math.random() * 10 ) +1;
// //alert('Random number between 1 and 10 : ' + number);

// var input=+prompt("Enter the number between 1 to 10 :");
// if(input==number){
//      document.write("Congratulation....!  your guess matched");
// }
// else{
//      document.write("Try Again.....!");
// }






                                                 //  <<<<<< Chpt 31 - 34 >>>>>>
                                                  //   <<<< question 1 >>>>



// var rightnow = new Date();
// document.write(rightnow);             




                                            //  <<<<<< Chpt 31 - 34 >>>>>>
                                            //   <<<< question 2 >>>>




// const monthNames = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"
// ];
// const d = new Date();
// document.write(" The current month is :  " + monthNames[d.getMonth()]);     






                                          //  <<<<<< Chpt 31 - 34 >>>>>>
                                            //   <<<< question 3 >>>>





// const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",Sunday"];  

// var rightnow = new Date();
// var day = rightnow.getDay();
// var current =  dayNames[rightnow.getDay()];
// document.write("Today is : "+ " " +current.slice(0,3));




                                          

                                           
                                          //  <<<<<< Chpt 31 - 34 >>>>>>
                                             //   <<<< question 4 >>>>




// const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];  
                                             
// var rightnow = new Date();
// var day = rightnow.getDay();
// var current =  dayNames[rightnow.getDay()];
// document.write(current + "<br>")
// if (current =="Sunday")
// {
//   document.write("Its Fun Day");

// } 

// else if (current == " Saturday ")
// {
//   document.write("Its Fun Day");
// }




                                              //  <<<<<< Chpt 31 - 34 >>>>>>
                                               //   <<<< question 5 >>>>


// var a = +prompt("Enter date?")
// for(var i = 1; i<=31; i++){
//   if (a[i]<=15)
//   alert("First fifteen days of the month")
//   else
//   {
//     alert("Last  fifteen days of the month")
//   }
// }





                                               //  <<<<<< Chpt 31 - 34 >>>>>>
                                               //   <<<< question 6 >>>>



// var d = new Date();
// var millsSince = d.getTime();
// var currMins =  (millsSince /1000 ) /60;
// document.write("Current Time :" + " " + d + "<br>");
// document.write("Elapsed milliseconds since 1 january 1970 :" + " " + millsSince + "<br>");
// document.write("Elapsed minutes since 1 january 1970 :" + " " + currMins + "<br>");






                                               //  <<<<<< Chpt 31 - 34 >>>>>>
                                               //   <<<< question 8  >>>>

                                               
// var d = new Date();

// d.setFullYear(2020);
// d.setMonth(12);
// d.setDate(31);
// d.setHours(00);
// d.setMinutes(00);
// d.setSeconds(00);

// document.write("Later Date : " + " " + d);





                                           
                                               //  <<<<<< Chpt 31 - 34 >>>>>>
                                               //   <<<< question 9  >>>>


// var date1 = new Date("04/23/2020"); 
// var date2 = new Date("06/23/2020"); 

// var Difference_In_Time = date2.getTime() - date1.getTime(); 
                                                 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
                                                 
//  document.write("Total number of days between 1st Ramadan or current date  <br>" + date1 + "<br> and <br>" + date2 + " is: <br> " + Difference_In_Days); 
                                                                                                



                                             //  <<<<<< Chpt 31 - 34 >>>>>>
                                               //   <<<< question 10  >>>>

// var a = new Date("June 23 , 2020");
// var msDoomsday = doomsday.getTime();
// var seconds = msDoomsday / 1000;
// document.write(" from 1st jan to 23 june " + " " + seconds);




                                                  //  <<<<<< Chpt 31 - 34 >>>>>>
                                               //   <<<< question 11  >>>>



// var a = new Date();
// document.write("Current Date " + " " + a + "<br>") 
// a.setHours(22);
// a.setMinutes(17);
// a.setSeconds(12);
// document.write("1 hour ago" + " " + a)     





                                               //  <<<<<< Chpt 35 - 38 >>>>>>
                                               //   <<<< question 1  >>>>   



// function abc(){
    
//  var rightnow = new Date();
//  document.write(rightnow);

// }

// abc();   



                                                //  <<<<<< Chpt 35 - 38 >>>>>>
                                               //   <<<< question 2  >>>>  


// function great(){
//     var firstName=prompt("Enter your first Name :");
// var lastName=prompt("Enter your Last Name :");

//     alert("Hello....!"+firstName+" "+lastName);
// }

// great();




                                            //  <<<<<< Chpt 35 - 38 >>>>>>
                                               //   <<<< question 3  >>>>


// var num_1=+prompt("Enter the Num 1 value :");
// var num_2=+prompt("Enter the Num 2 value :");

// function addition(num_1,num_2){
//     var result=num_1+num_2;
//     return num_1+num_2;
// }
// var ans=addition(num_1,num_2);
// document.write("result : ",ans);



                                             //  <<<<<< Chpt 35 - 38 >>>>>>
                                               //   <<<< question 4  >>>>



// var num_1=+prompt("Enter the Num 1 value :");
// var num_2=+prompt("Enter the Num 2 value :");
// var operator=prompt("Enter the operator :");
// function addition(num_1,num_2,operator){
//     if(operator=="+"){
//         return num_1+num_2;
//     }
//     else if(operator=="-"){
//         return num_1-num_2;

//     }
//     else if(operator=="x" || operator=="*"){
//         return num_1*num_2;
//     }
//     else if(operator=="/" ){
//         return num_1/num_2;
//     }
//     else{
//         alert("Sorry...!! Wrong Input");
//     }
// }
// var ans=addition(num_1,num_2,operator);
// document.write("result : ",ans);



                                             

                                            //  <<<<<< Chpt 35 - 38 >>>>>>
                                               //   <<<< question 5  >>>>


// var num_1=prompt("Enter the number to find the squares :");

// function square(num_1){
//     return num_1*num_1;
// }
// var ans=square(num_1);
// document.write("Square : ",ans);




                                            //  <<<<<< Chpt 35 - 38 >>>>>>
                                               //   <<<< question 6  >>>>


// var num=+prompt("Enter the number :");
// var fact=1;
// function factorial(num){

// for(var i=1;i<=num;i++){
//      fact=fact*i;
// }
// return fact;

// }

// var ans=factorial(num);
// document.write("Factorial :  ",ans);




                                      

                                             //  <<<<<< Chpt 35 - 38 >>>>>>
                                               //   <<<< question 7  >>>>


// var start=+prompt("Enter the Start number :");
// var end=+prompt("Enter the end number :");

// function counting(start,end){
//     for(var i=start;i<=end;i++){
//         document.write(i+"<br>");
//     }
// }

// counting(start,end);

                                           //  <<<<<< Chpt 35 - 38 >>>>>>
                                               //   <<<< question 8 >>>>


// var base=+prompt("enter the base  :");
// var perpendicular=+prompt("enter the perpendicular :");

// var base_square=1;
// var perpendicular_square=1;


// function square_of_Base_Perpendicular(base,perpendicular){
//  base_square=base*base;
// perpendicular_square=perpendicular*perpendicular;

// }

// function hypotenuse(base_square,perpendicular_square){
//     square_of_Base_Perpendicular();
//     return result= Math.sqrt(base_square+perpendicular_square);
// }




                                            //  <<<<<< Chpt 35 - 38 >>>>>>
                                               //   <<<< question 9 >>>>



// var width=+prompt("Enter he width of rectangle : ");
// var height=+prompt("Enter he height of rectangle : ");




// function area_of_rectangleee( width=5,height=5){
//     var area=width*height;
//     document.write("The ara of rectangle is : ",area);
// }

// function area_of_rectangle(width,height){
//     var area=width*height;
//     return area;
// }


// area_of_rectangleee();


// var ans=area_of_rectangle(width,height);
// document.write("The area of rectangle : " ,ans);



                                            //  <<<<<< Chpt 35 - 38 >>>>>>
                                               //   <<<< question 10 >>>>


// function check_Palindrome(str_entry){
    
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
  
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
    
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
  
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 var a="Entry is a palindrome";
//                 return a;
//             } else {
  
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
   
//         for (var x = 0; x < ccount; x++) {
   
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }

//    document.write(check_Palindrome('madam'));

//     document.write(check_Palindrome('nurses run'));

//     document.write(check_Palindrome('fox'));



                                          //  <<<<<< Chpt 35 - 38 >>>>>>
                                          //   <<<< question 11 >>>>   


// var input=" the quick brown fox";

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }

// var ans=uppercase(input);
// document.write(ans);


                                       //  <<<<<< Chpt 35 - 38 >>>>>>
                                         //   <<<< question 12 >>>> 


// var input ="web development tutorial";
// function longestWord(input) {
//     var str = input.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }

// var ans= longestWord(input);
// document.write(ans);



                                  //  <<<<<< Chpt 35 - 38 >>>>>>
                                    //   <<<< question 13 >>>>        
                                    
                                    

// function character_count(string, letter) 
// {
//  var Count = 0;
//  for (var i = 0; i < string.length; i++) 
//  {
//     if (string.charAt(i) == letter) 
//       {
//       Count += 1;
//       }
//   }
//   return Count;
// }

// document.write(character_count('farwaabbas', 'a'));



                                   
                                        //  <<<<<< Chpt 35 - 38 >>>>>>
                                          //   <<<< question 14 >>>> 


// var radius=+prompt("Enter the Radius :");


// function calcCircumference(radius){
//     var circumference=2*(3.14)*radius;
//     return circumference;
// }

// function calcArea(radius){
//     var area=(3.14)*radius*radius;
//     return area;
// }
// var ans1=calcCircumference(radius);
// var ans2=calcArea(radius);
// document.write("The circumference is : ",ans1+"<br>");
// document.write("The area is : ",ans2);                                          


                                    




