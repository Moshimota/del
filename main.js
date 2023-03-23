const getData = async () => {
    const url = await fetch("http://localhost:3000/data")
    const json = await url.json()
    console.log(json);

    
    const list = document.querySelector(".list-group")
    json?.map((res) => {
        list.innerHTML +=`
        <li class="list-group-item"><div><b>Name : </b>${res?.name}</div> <button class="btn2">delete</button></li>
        `
        const btn2 = document.querySelector(".btn2")
        btn2.onclick = () => {
            list.style.display = "none"
        }
    })
}
getData()
const btn1 = document.querySelector(".postData")
btn1.onclick = (e) => {
    e.preventDefault()
    postData()
}
const postData = () => {
    const inp = document.querySelector(".form-control")
    const val = inp.value
    fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: val})
    }).then((msg) => alert(msg.statusText))
}
