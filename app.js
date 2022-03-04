const getdata = async (country) => {
    try {
        const apikey = '99b840033a7b4e6a8e68bb30c22abc34'
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`)

        if (data.status === 200)
            return await data.json();

    } catch (error) {
        console.log(error);

    }

}
getdata("in")
const rendernews = (list) => {


    let news = ``
    list.map((ele) =>
        news +=
        `<div class="news">
 <img src="${ele.urlToImage}" class="newsposter" alt=${ele.title}>
 <h2 class="newsheader">${ele.title}</h2>
 <p class="newsdescription">${ele.description}</p>
 <a href=${ele.url} >Read More</a>
</div>\n`
    )

    return news
}

const render = async (country) => {
    document.querySelector(".newslist").innerHTML = ""
    let data = await getdata(country)
    document.querySelector(".newslist").innerHTML = rendernews(data.articles)
}
const indannews = () => {
    document.title = "India News"
    render("in")
    return false

}

const usnews = () => {
    document.title = "US News"

    render("us")
    return false

}

const homepage = () => {
    indannews()

}
homepage()









const displaydropdown = () => {
    document.querySelector(".dropdown").classList.toggle("flex")

}
document.querySelector(".countrylist").addEventListener("click", displaydropdown)
document.querySelector(".dropdown").addEventListener("mouseout", displaydropdown)