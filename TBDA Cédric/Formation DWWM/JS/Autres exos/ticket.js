var TVA_1 = (0.1);
var TVA_2 = (0.2);

var px_bois = prompt("Prix de la boisson");
var com_bois = prompt("Quantité de boisson");
var nom_bois = document.write("Boissons : ");
var total_bois = (px_bois * com_bois);
document.write(total_bois.toFixed(2), " €");
document.write("<br></br>");

var px_plat = prompt("Prix du plat");
var com_plat = prompt("Quantité de plats");
var plat = document.write("Plats : ");
var total_plat = (px_plat * com_plat);
document.write(total_plat.toFixed(2), " €");
document.write("<br></br>");

var px_supp = prompt("Prix des suppléments");
var com_supp = prompt("Quantité de suppléments");
var suppl = document.write("Suppléments : ");
var total_supp = (px_supp * com_supp);
document.write(total_supp.toFixed(2), " €");
document.write("<br></br>");

var total = (total_bois + total_plat + total_supp);
var tot_payé = document.write("Total à payer : ");
document.write(total.toFixed(2), " €", " TTC");
document.write("<br></br>");

var px_HT = (total/(1+TVA_1));
var HT_payé = document.write("Total HT : ");
document.write(px_HT.toFixed(2), " €", " HT");
document.write("<br></br>");

var mont_TVA = (total - px_HT);
document.write("TVA : ");
document.write(mont_TVA.toFixed(2), " €");
