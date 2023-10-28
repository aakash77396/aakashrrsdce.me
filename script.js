const scriptURL = 'https://script.google.com/macros/s/AKfycbxMni9cI3ItN-EVMGdDVL1ZrLw31dHEa4VJeE2vHdCsgBVum8IN75B5Xn9sRHGmwBgCtg/exec'
const form = document.forms['contactform']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

function nav() {
    document.getElementById("nav_container1").style.display = "block"
}

setTimeout(alertFun,2000);
function alertFun(){
    alert("Welcome to this site");
}