document.writeln('<h1> <center> MARKSHEET </center> </h1>')
document.writeln('<h3> <center> Jawa Computer Center </center> </h3>')

document.writeln('<b>StudentName&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp; MOHAMMED MAAZ B</b> <br><br>')
document.writeln('<b>Register No&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp31123U18033</b> <br><br>')
document.writeln('<b>Course &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbsp&nbspFrontend Developer</b> <br><br>')
document.writeln('<b>Date Of Birth&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp 29/11/2005</b> <br><br>')
  
 
var HTML,CSS,JS,ES,BS,AJ,RJS,TOTAL,AVG
HTML =parseInt(prompt("enter a marks in HTML"))
CSS =parseInt(prompt("enter a marks in CSS"))
JS =parseInt(prompt("enter a marks in JS"))
ES =parseInt(prompt("enter a marks in ES"))
BS =parseInt(prompt("enter a marks in BS"))
AJ =parseInt(prompt("enter a marks in AJ"))
RJS =parseInt(prompt("enter a marks in BJS"))
TOTAL=HTML+CSS+JS+ES+BS+AJ+RJS
AVG=TOTAL/7

document.writeln('<table  border=1 cellpadding=0 cellspacing=0   height=40> <tr> <td width=50> <center> S.NO </center> </td> <td width=150> <center> LANGUAGES  </center> </td> <td width=100> <center>', 'MARKS'    ,' </center> </td> <td width=100> <center> GRADE </center> </td> <td width=100> <center> RESULT </center> </td> </tr> </table>')
document.writeln('<table  border=1 cellpadding=0 cellspacing=0   height=40> <tr> <td width=50> <center>  1   </center> </td> <td width=150> <center>  HTML      </center> </td> <td width=100> <center>',  HTML    ,' </center> </td> <td width=100> <center>   A   </center> </td> <td width=100> <center> ',   '</center> </td> </tr> </table>')
document.writeln('<table  border=1 cellpadding=0 cellspacing=0   height=40> <tr> <td width=50> <center>  2   </center> </td> <td width=150> <center> CSS        </center> </td> <td width=100> <center>',  CSS     ,' </center> </td> <td width=100> <center>   A   </center> </td> <td width=100> <center> ',   '</center> </td> </tr> </table>')
document.writeln('<table  border=1 cellpadding=0 cellspacing=0   height=40> <tr> <td width=50> <center>  3   </center> </td> <td width=150> <center> JAVASCRIPT </center> </td> <td width=100> <center>',  JS      ,' </center> </td> <td width=100> <center>   A   </center> </td> <td width=100> <center> ',   '</center> </td> </tr> </table>')
document.writeln('<table  border=1 cellpadding=0 cellspacing=0   height=40> <tr> <td width=50> <center>  4   </center> </td> <td width=150> <center> ECMASCRIPT </center> </td> <td width=100> <center>',  ES      ,' </center> </td> <td width=100> <center>   A   </center> </td> <td width=100> <center> ',   '</center> </td> </tr> </table>')
document.writeln('<table  border=1 cellpadding=0 cellspacing=0   height=40> <tr> <td width=50> <center>  5   </center> </td> <td width=150> <center> BOOTSTRAP  </center> </td> <td width=100> <center>',  BS      ,' </center> </td> <td width=100> <center>   A   </center> </td> <td width=100> <center> ',   '</center> </td> </tr> </table>')
document.writeln('<table  border=1 cellpadding=0 cellspacing=0   height=40> <tr> <td width=50> <center>  6   </center> </td> <td width=150> <center> AJAX       </center> </td> <td width=100> <center>',  AJ      ,' </center> </td> <td width=100> <center>   A   </center> </td> <td width=100> <center> ',   '</center> </td> </tr> </table>')     
document.writeln('<table  border=1 cellpadding=0 cellspacing=0   height=40> <tr> <td width=50> <center>  7   </center> </td> <td width=150> <center> REACT JS   </center> </td> <td width=100> <center>',  RJS     ,' </center> </td> <td width=100> <center>   A   </center> </td> <td width=100> <center> ',   '</center> </td> </tr> </table>') 
document.writeln('<br><br><br>')
document.writeln('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTOTAL&nbsp',TOTAL,'</tr></table><br>')
document.writeln('<br><br><br>')
document.writeln('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAVERAGE&nbsp',AVG,'<br><br>')

if(AVG>79)
    document.writeln("YOU HAVE PASSED IN DISTINCTION")
else if(AVG>59 && AVG<80)
    document.writeln("YOU HAVE PASSED IN FIRST CLASS")
else if(AVG>34 && AVG<60)
    document.writeln("YOU HAVE PASSED IN SECOND CLASS")
else if(AVG<35)
document.writeln("SORRY YOU HAVE FAILED")
else
document.writeln("NO RESULT FOUND")

document.writeln('<br> <br>')

if(HTML>34 && HTML<101)
    document.writeln("Pass")
else
document.writeln("Fail")

document.writeln('<br> <br>')

if(CSS>34 && CSS<101)
    document.writeln("Pass")
else
document.writeln("Fail")

document.writeln('<br> <br>')

if(JS>34 && JS<101)
    document.writeln("Pass")
else
document.writeln("Fail")

document.writeln('<br> <br>')

if(ES>34 && ES<101)
    document.writeln("Pass")
else
document.writeln("Fail")

document.writeln('<br> <br>')

if(BS>34 && BS<101)
    document.writeln("Pass")
else
document.writeln("Fail")

document.writeln('<br> <br>')

if(AJ>34 && AJ<101)
    document.writeln("Pass")
else
document.writeln("Fail")

document.writeln('<br> <br>')

if(RJS>34 && RJS<101)
    document.writeln("Pass")
else
document.writeln("Fail")