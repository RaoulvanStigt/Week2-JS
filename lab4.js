//Raoul van Stigt 
//Pizza Calculator 1.0


var small = prompt ("Hoeveel Small Pizza's wilt u bestellen?")
var medium = prompt ("Hoeveel Medium Pizza's wilt u bestellen?")
var large = prompt ("Hoeveel Large Pizza's wilt u bestellen?")
var kleineD = prompt ('Hoeveel Kleine Drankjes wilt u bestellen?')
var groteD = prompt ('Hoeveel Grote Drankjes wilt u bestellen?')
var straat = prompt ('In welke straat woont u?')
var huisnummer = prompt ('Vul u huisnummer in')


document.write('---{   Menu   }---')

//Aantal pizza's
document.write ("<br> Aantal Small Pizza's: ")
document.write (small)
document.write ("<br> Aantal Medium Pizza's: ")
document.write (medium)
document.write ("<br> Aantal Large Pizza's: ")
document.write (large)
document.write ('<br>')

//Aantal drankjes
document.write ("<br> Aantal kleine Drankjes: ")
document.write (kleineD)
document.write ("<br> Aantal Grote Drankjes: ")
document.write (groteD)
document.write ('<br>')


//Kosten van de drankjes
document.write ('<br> kleine Drankjes: €2.00')
document.write ('<br> Grote Drankjes: €2.95')
document.write ('<br>')

//Kosten van de pizza's
document.write ('<br> Small Pizza: €4.50')
document.write ('<br> Medium Pizza: €6.99')
document.write ('<br> Large Pizza: €8.99')
document.write ('<br>')

//Prijs van de verschillende drankjes
document.write ("<br> Prijs van aantal Kleine Drankjes: € ")
document.write (small * 2.00) 
document.write ("<br> Prijs van aantal Medium Pizza's: € ") 
document.write (medium * 2.95)
document.write ('<br>')


//Prijs van de verschillende pizza's
document.write ("<br> Prijs van aantal Small Pizza's: € ")
document.write (small * 4.50) 
document.write ("<br> Prijs van aantal Medium Pizza's: € ") 
document.write (medium * 6.99)
document.write ("<br> Prijs van aantal Large Pizza's: € ") 
document.write (large * 8.99)


//Totale Prijs
document.write ('<br> <br> <br> Prijs totaal: € ')
document.write (small * 4.50 + medium * 6.99 + large * 8.99 + kleineD * 2.00 + groteD * 2.95)
document.write ('<br> <br> <br>')


//Het wordt bezorgd op
document.write ('Wordt bezorgd op: ')
document.writeln (straat)
document.write (huisnummer)

//Achtergrondkleur
document.body.style.background = "red";