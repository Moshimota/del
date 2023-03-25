    getData = async () => {
        const url = await fetch("http://localhost:3000/data")
        const json = await url.json()
        const hed = document.querySelector(".kak")
        json?.map((res) => {
            hed.innerHTML = res?.name
        })
    }
    getData()
    del = document.querySelector(".del")
    del.onclick = () => {   
        const hed = document.querySelector(".kak")
        hed.innerHTML = ""
    }
    add = document.querySelector(".add")
    add.onclick=(e)=>{
        e.preventDefault()
        postData()
    }
    const postData = () => {
        const inp = document.querySelector(".form-control")
        const val = inp.value
        fetch("http://localhost:3000/data", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: val})
        })
        .then((data) => alert(data.statusText))
    }