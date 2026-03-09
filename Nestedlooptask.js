 /* Nested  for loop */
 var a,b,c,d,e=0

a=parseInt(prompt('from which table'))
b=parseInt(prompt('to which table'))
c=parseInt(prompt('from starting'))
d=parseInt(prompt('ending'))
     
  for(i=a; i<=b; i++)
{
  e=0
    
    for(j=c;j<=d;j++)`   
    {
  document.writeln(i,'x')
  document.writeln(j)
  document.writeln("=")
  document.writeln(j*(i))
  e=e+(j*(i))
  document.writeln("<br>")
    
     }
      document.writeln('&nbsp;&nbsp;&nbsp;&nbsp;',"=",e)
    document.writeln("<br>")
 }  
   

  /* While Nested  loop */
/*
var a,b,c,d,e=0
a=parseInt(prompt('from which table '))
b=parseInt(prompt('to which table'))
c=parseInt(prompt('from starting'))
d=parseInt(prompt('ending'))

i=a
while(i<=b)
{

e=0
  j=c
  while(j<=d)
  {
     document.writeln(i,'x')
  document.writeln(j)
  document.writeln("=")
  document.writeln(j*(i))
  
e=e+(j*(i))

  document.writeln("<br>")
  j++;
    }
  document.writeln('&nbsp;&nbsp;&nbsp;&nbsp;',e)
  i++;
   document.writeln("<br>")
}

*/
 /* d0 while Nested  loop */
/*

var a,b,c,d
a=parseInt(prompt('from which table '))
b=parseInt(prompt('to which table'))
c=parseInt(prompt('from starting'))
d=parseInt(prompt('ending'))

i=a
do 
  {
    i++;
  e=0
  j=c
   do 
   {
  document.writeln(i,'x')
  document.writeln(j)
  document.writeln("=")
  document.writeln(j*(i))
  
e=e+(j*(i))

  document.writeln("<br>")
  j++;
    
     document.writeln('&nbsp;&nbsp;&nbsp;&nbsp;',e)
  
  }
 while(i<=b)
}
while(j<=d)
 
  */



   

  /*  For While  loop */

 /* var a,b,c,d,e=0

a=parseInt(prompt('from which table'))
b=parseInt(prompt('to which table'))
c=parseInt(prompt('from starting'))
d=parseInt(prompt('ending'))
     
  for(i=a; i<=b; i++)
 
  {
        e=0 
     j=c
     while(j<=d)
     {
    document.writeln(i,'+')
    document.writeln(j)
    document.writeln("=")
    document.writeln(i+j ,'<br>')
    
       e=e+(i+j)
      
       j++;
    }
       document.writeln('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',"=",e)
       document.writeln("<br>")
       document.writeln("<br>")
}
  */
 
  /*  While doWhile loop */

/*
 var a,b,c,d,e=0

a=parseInt(prompt('from which table'))
b=parseInt(prompt('to which table'))
c=parseInt(prompt('from starting'))
d=parseInt(prompt('ending'))
   i=a;  
  while(i<=b)
   
  {
        e=0 
     j=c
     do
     {
     document.writeln(i,'x')
    document.writeln(j)
    document.writeln("=")
    document.writeln(j*(i) ,'<br>')
    
     e=e+(j*i)
       j++;
     }
         
      while(j<=d)
      document.writeln('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',"=",e)
      i++;   
      document.writeln("<br> <br>")
}
*/
