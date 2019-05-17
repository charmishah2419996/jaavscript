document.getElementById("myAnchor").addEventListener("click", function(event){
//debugger;
  event.preventDefault();
  
//    pattern1
//    var concatec ="";
//       for(var i=1;i<=5;i++)
//           {
//               for(var j=1;j<=i;j++)
//                   {
//                      concatec +="*";
//                   }
//                concatec +="<br/>";
//           }
//    
//      document.getElementById("lb2").innerHTML=concatec;
//    
////    pattern2
//
//    
//var inputnumber=document.getElementById("ipprime").value;
//    var num=parseInt(inputnumber);
//    var lc=num*2-1;
//    var concate ="";
//    
//    var x=2;
//    var inerval=1;
//        for(var i=1;i<=lc;i++)
//           {
//               if(i<=num){
//                           for(var j=1;j<=i;j++)
//                               {
//                                   
//                                   concate +="*";
//
//                               }
//                    
//                            concate +="<br/>";
//                   
////                           document.write('<br/>');
//                   }
//               else{
//                   
//                   
//                   
//                     for(var j=num-inerval;j>=1;j--)
//                               {
//                                  concate +="*";
//                               }
//                           concate +="<br/>";
//                   inerval=inerval+1;
//                        
//
//               }
//               
//           }
//    
//    document.getElementById("lb").innerHTML=concate;
//    
    
    
    //    pattern3

    
var inputnumber=document.getElementById("ipprime").value;
    var num=parseInt(inputnumber);
    var lc=num*2-1;
    var concate ="";
    var temp = num;
     var temp2 = num;
    var temp2=temp2+1;
      var d=num-1;
    //var x=2;
    var inerval=1;
        for(var i=1;i<=lc;i++)
           {    
               console.log(i<num); 
               if(i<=num){
                   
                    
                        //console.log(temp);
                                    for(var space=temp-1;space>=0;space--)
                                       {
                                           
                                           concate +="-";
                                          // console.log(concate);
                                          
                                       }
                                for(var j=1;j<=i;j++)
                               {    
                                   concate +=" * ";
                               }
                    temp = temp-1;   
                    concate +="<br/>";
                    console.log(i);
               
                  }
              else{
                  console.log(i);
                  debugger;
                
                  for(var space=d;space<temp2;space++)
                                       {
                                           
                                           concate +="-";
                                          console.log(concate);
                                          
                                       }
                        
                               d=d-1;
                         
                    for(var j=num-inerval;j>=1;j--)
                               {    
                                   concate +=" * ";
                                 
                               }
                    concate +="<br/>";
                        inerval=inerval+1;
              }
               
           }
    
    document.getElementById("lb").innerHTML=concate;
    

});




