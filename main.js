document.addEventListener("keydown", e => {
    if (e.key == "Delete") {
        const hed = document.querySelector(".kak")
        const inp = document.querySelector(".form-control")
        hed.innerHTML = ""
        inp.value = ""
    }else if (e.key == "Enter"){
        const hed = document.querySelector(".kak")
        const inp = document.querySelector(".form-control")
        hed.innerHTML =inp.value
        inp.value = ""
    }
})
const hed = document.querySelector(".kak")
        const inp = document.querySelector(".form-control")
        hed.innerHTML = ""