function makeHeadshot(d) {
    var headshot = document.createElement("div");
    var faces = document.getElementById("faces")
    headshot.id = "headshot" + d;
    console.log(headshot.id);
    faces.appendChild(headshot);
    headshot.classList.add("headshot");

    var description = document.createElement("div");

    description.id = "description" + d;
    console.log(description.id);
    headshot.appendChild(description);
    description.classList.add("description-invisible");
    description.style.color="rgb(255, 255, 255)";



    description.addEventListener("click", function() {
        console.log("hi");
        description.classList.add("description-apparent");


    })

    description.addEventListener("animationend", function() {
        description.classList.remove("description-apparent");
    })




    var name = document.createElement("div");
    document.getElementById("headshot" + i).appendChild(name);
    name.classList.add("name");
    name.id = "name" + i;


}





for (i = 0; i < 22; i++) { makeHeadshot(i) };


document.getElementById('name0').innerText = "Augie";

document.getElementById('description0').innerHTML = "My blog";

document.getElementById('name1').innerText = "Blake";
document.getElementById('description1').innerHTML = "<a href='https://blakesdigitalportfolio.wordpress.com/'>Here's my website</a>";


document.getElementById('name2').innerText = "Gia";
document.getElementById('description2').innerHTML = "";

document.getElementById('name3').innerText = "Hailey";

document.getElementById('description3').innerHTML = "";

document.getElementById('name4').innerText = "Jacob";
document.getElementById('description4').innerHTML = "<a href='http://savannahpluma.weebly.com'>" + "Here's my website" + "</a>";

document.getElementById('name5').innerText = "Julia";

// var headshot5 = document.getElementById('headshot5');
// var heart = document.createElement('div');
// heart.id="heart"
// headshot5.appendChild(heart);

// headshot5.addEventListener('mouseenter', function() {
//     heart.style.opacity = "1";

// })
// headshot5.addEventListener('mouseout', function() {
//     heart.style.opacity = "0";
// })

document.getElementById('name6').innerText = "Pablo";
document.getElementById('description6').innerHTML =  "<a href='https://pabloisaacrobin.weebly.com/'> Here's my website</a>";

document.getElementById('name7').innerText = "Filippo";
document.getElementById('description7').innerHTML = "";

document.getElementById('name8').innerText = "Savanna";
document.getElementById('description8').innerHTML = "<a href='http://savannahpluma.weebly.com'> Here's my website</a>";

document.getElementById('name9').innerText = "Tanner";
document.getElementById('description9').innerHTML = "";

document.getElementById('name10').innerText = "Tessa";
document.getElementById('description10').innerHTML = "";

document.getElementById('name11').innerText = "Will";




document.getElementById('description11').innerHTML = "";

document.getElementById('name12').innerText = "Willow";
document.getElementById('description12').innerHTML = "";
document.getElementById('name13').innerText = "Victor";
document.getElementById('description13').innerHTML = "<a href='https://vnorton2021.weebly.com/semester-azul.html'>Here's my website</a>";

document.getElementById('name14').innerText = "Taniah";
document.getElementById('description14').innerHTML = "";

document.getElementById('name15').innerText = "Aaron";
document.getElementById('description15').innerHTML = "<a href='https://aaronpriceblog.wordpress.com/semester-azul/'>" + "Here's my website"+ "</a>";

document.getElementById('name16').innerText = "Bella";
document.getElementById('description16').innerHTML = "<a href='semesterazulbella.weebly.com'> Here's my website </a>";

document.getElementById('name17').innerText = "Zach";
document.getElementById('description17').innerHTML = "";

document.getElementById('name18').innerText = "Bryce";
document.getElementById('description18').innerHTML = "<a href='https://brycebblog.weebly.com/'> Here's my website </a>";

document.getElementById('name19').innerText = "Larissa";
document.getElementById('description19').innerHTML = "<a href='https://lvargasgalindo2022.wixsite.com/website'> Here's my website </a>" ;




document.getElementById('name20').innerText = "Kelani";
document.getElementById('description20').innerHTML = "<a href='http://kelanilove.weebly.com/'> Here's my website </a>" ;

document.getElementById('name21').innerText = "Brian";

// document.getElementById('name22').innerText = "";
// document.getElementById('description22').innerHTML = "" ;

// document.getElementById('name23').innerText = "";
// document.getElementById('description23').innerHTML = "" ;

// document.getElementById('name24').innerText = "";
// document.getElementById('description24').innerHTML = "" ;

// document.getElementById('name25').innerText = "";
// document.getElementById('description25').innerHTML = "" ;

// document.getElementById('name26').innerText = "";
// document.getElementById('description26').innerHTML = "" ;

// document.getElementById('name27').innerText = "";
// document.getElementById('description27').innerHTML = "" ;
