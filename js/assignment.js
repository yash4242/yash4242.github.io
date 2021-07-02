
function submitfunc()
{
    let xname = document.getElementById("id_name").value;
    let xskill = document.getElementById("id_skill").value;
    let xlevel = document.getElementById("id_level").value;
    document.getElementById("skill_table").innerHTML += "<tr><td>" + xname + "</td><td>" + xskill + "</td><td>"+ xlevel +"</td></tr>";
}

const imgarray = [
    "https://media1.tenor.com/images/fb2f637ef90fdda482f9047e37639a77/tenor.gif?itemid=8742326",
    "https://media1.tenor.com/images/8ab88b79885ab587f84cbdfbc3b87835/tenor.gif?itemid=15917800",
    "https://media2.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif",
];
let count = 0;
function changeimg()
{
    count = (count+1)%3;
    document.getElementById("slideshow").src = imgarray[count];
}