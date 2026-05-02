const nav = document.querySelectorAll(".navbar li"); 
const content = document.querySelectorAll(".animate");

console.log(nav);
console.log(content);

nav.forEach( 
	(item,index) => {
		item.addEventListener("click", () => {console.log("click", index)}
	)});

function a(content) 
{
  content.classList.add("fading");
  setTimeout(function() {
    content.classList.remove("show");
    content.classList.remove("fading");
  }, 200);
}

 function b ()
 {
 	content.forEach(a);
 }

 function nohighlight ()
{
  nav.forEach( function(item){item.classList.remove("active")})
}

const highlight = document.querySelector(".highlight");

function moveHighlight (item)
{
  highlight.style.width = item.offsetWidth + "px";
  highlight.style.left = item.offsetLeft + "px"
}

function c(item, index) 
{
  item.addEventListener("click", function() { b(); 

    nohighlight();

    item.classList.add("active");

    moveHighlight(item);


  	setTimeout( function() {content[index].classList.add("show")}, 200 )
  });
}

nav.forEach(c);

b();

setTimeout(function() {
  content[0].classList.add("show");
  nav[0].classList.add("active");
  moveHighlight(nav[0])
}, 200);




let modechanger = document.querySelector(".switcher1");
let modechangerb = document.querySelector(".switcher2");

let color = document.documentElement;

modechanger.addEventListener("click", function(){console.log("icon")});
color.addEventListener("click", function(){console.log("color")});



if (window.matchMedia("(prefers-color-scheme: dark)").matches) 
{
  color.classList.add("dark");
} 
else 
{
  color.classList.add("light");
}


function changecolor ()
{
  if (color.classList.contains("dark"))
  {
    color.classList.remove("dark");
    color.classList.add("light");
  }

  else
  {
    color.classList.remove("light");
    color.classList.add("dark");
  }
}

modechanger.addEventListener("click", changecolor);
modechangerb.addEventListener("click", changecolor);







