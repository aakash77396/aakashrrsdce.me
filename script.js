const scriptURL = 'https://script.google.com/macros/s/AKfycbxMni9cI3ItN-EVMGdDVL1ZrLw31dHEa4VJeE2vHdCsgBVum8IN75B5Xn9sRHGmwBgCtg/exec'
const form = document.forms['contactform']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
// inspect stop
// document.addEventListener
// ("contextmenu",function(e)
//  {
//      e.preventDefault()
//  },false)
 // .........................................................................
// function nav() {
//     document.getElementById("nav_container1").style.display = "block"
// }

// ........................................
setTimeout(alertFun,5000);
function alertFun(){
    alert("Welcome to this site");
}

// ........................................

let darkColor = document.getElementById("dark-color");
let whiteColor = document.getElementById("white-color");
let container = document.getElementById("firstContainer");
let contMain = document.getElementsByClassName("main");
let inpMessege = document.getElementsByClassName("inpMessege");

        function colorChange(color){
            if(color == "#000000"){
                document.body.style.backgroundColor = "#000000";
                container.style.backgroundColor ="#000000";
                for(x of contMain){
                    x.style.backgroundColor ="#000000";
                    x.style.color ="#ffffff";
                }
                for(y of inpMessege){
                    y.style.backgroundColor = "#faf8f8a1";
                }
            }else if(color == "#ffffff"){
                document.body.style.backgroundColor = "#cacadb";
                container.style.backgroundColor ="#f8f8ff";
                for(x of contMain){
                    x.style.backgroundColor ="#ffffff";
                    x.style.color ="#000000";
                }
                for(y of inpMessege){
                    y.style.backgroundColor = "#ffffff";
                }
            }
        }

// .........................................
// && window.innerWidth >= 784 if required


 window.addEventListener("scroll", function () {
            let heading = document.getElementById("nav-box-sticky");
            if (window.pageYOffset >= 40) {
                heading.classList.add("sticky");
            }else{
                heading.classList.remove("sticky");
            }
        });

// .................................................
//  to show navBar
flag = 0;
        function controller(x){
            flag = flag + x;
            menuShow(flag);
        }

        menuShow(flag);

        function menuShow(num){
            let nav = document.getElementById("nav_container1");
            if(num==1){
                nav.style.display = "block";
                // console.log("ok1");
            }else if(num==2){
                // console.log("ok2");
                nav.style.display ="none";
                flag = 0;
                e = 0;
            }

        }

// ..........................................................
