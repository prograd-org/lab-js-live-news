function _(id) {
    return document.querySelector(id);
}

let drpbtn = _(".header").childNodes;
let drpflag = false;

drpbtn[5].addEventListener("click", () => {
    if (drpflag) {
        _(".drop").style.opacity = "0";
        drpflag = false;
        _(".caret").style.borderBottom = "solid 7px transparent";
        _(".caret").style.top = "1.5vh";
        _(".caret").style.borderTop = "solid 7px #fff";
    } else {
        _(".drop").style.opacity = "1";
        drpflag = true;
        _(".caret").style.borderBottom = "solid 7px #fff";
        _(".caret").style.top = "-1.5vh";
        _(".caret").style.borderTop = "solid 7px transparent";
    }
})
function country(cid){
    const mynode=_(".main");
    while(mynode.lastElementChild){
        mynode.remove(mynode.lastElementChild)
    }    fetch(`https://newsapi.org/v2/top-headlines?country=${cid}&category=business&apiKey=b54cd641b3654525b4274e7da06d6640`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data.articles.length; i++) {
            let template = document.createElement("div");
            template.classList.add("template");
            let img = document.createElement("img");
            img.src = data.articles[i].urlToImage;
            let head = document.createElement("h2");
            head.textContent = data.articles[i].title;
            let desc = document.createElement("p");
            desc.textContent = data.articles[i].description;
            let readbtn = document.createElement("button");
            readbtn.textContent = "Read More...";
            template.append(img, head, desc, readbtn);
            _(".main").appendChild(template);
        }
    })
}