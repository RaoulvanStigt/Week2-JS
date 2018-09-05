//Raoul van Stigt 
//Pizza Calculator 1.0


var small = prompt ("Hoeveel Small Pizza's wilt u bestellen?")
var medium = prompt ("Hoeveel Medium Pizza's wilt u bestellen?")
var large = prompt ("Hoeveel Large Pizza's wilt u bestellen?")


//Aantal pizza's
document.write ("<br> Aantal Small Pizza's: ")
document.write (small)
document.write ("<br> Aantal Medium Pizza's: ")
document.write (medium)
document.write ("<br> Aantal Large Pizza's: ")
document.write (large)
document.write ('<br>')


//Kosten van de pizza's
document.write ('<br> Small Pizza: €4')
document.write ('<br> Medium Pizza: €6')
document.write ('<br> Large Pizza: €8')
document.write ('<br>')


//Prijs van de verschillende pizza's
document.write ("<br> Prijs van aantal Small Pizza's: € ")
document.write (small * 4) 
document.write ("<br> Prijs van aantal Medium Pizza's: € ") 
document.write (medium * 6)
document.write ("<br> Prijs van aantal Large Pizza's: € ") 
document.write (large * 8)


//Totale Prijs
document.write ('<br> <br> Prijs totaal: € ')
document.write (small * 4 + medium * 6 + large * 8)