function _(id) {
    return document.querySelector(id);
}

let dropbotton = _(".navBar").childNodes;
let dropflag = false;

dropbotton[5].addEventListener("click", () => {
    if (dropflag) {
        _(".dropDownList").style.opacity = "0";
        dropflag = false;
        _(".triangle").style.borderBottom = "solid 7px transparent";
        _(".triangle").style.top = "1.5vh";
        _(".triangle").style.borderTop = "solid 7px #fff";
    } else {
        _(".dropDownList").style.opacity = "1";
        dropflag = true;
        _(".triangle").style.borderBottom = "solid 7px #fff";
        _(".triangle").style.top = "-1.5vh";
        _(".triangle").style.borderTop = "solid 7px transparent";
    }
})

function country(cid) {
    const myNode = _(".main");
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
    fetch(`https://newsapi.org/v2/top-headlines?country=${cid}&category=business&apiKey=e02ea5ef4c6849b386d97c6e17077f83`)
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