const getdata = async (country) => {
  try {
    const apikey = "d326992233d44f7684a1bda9b9f9ebd1"
    const baseurl = "https://newsapi.org/v2/top-headlines"
    const res = await fetch(`${baseurl}?country=${country}&apiKey=${apikey}`)

    if (res.status === 200) return await res.json()
    else throw new Error(res.data)
  } catch (e) {
    console.log(e.message)
  }
}
const getNewsDivList = (list) => {
  let news = ""
  list.forEach((ele) => {
    news += `<div class="news">
		<img src="${ele.urlToImage}" class="newsposter" alt=${ele.title}>
		<h2 class="newsheader">${ele.title}</h2>
		<p class="newsdescription">${ele.description}</p>
		<a href=${ele.url} >Read More</a>
		</div>\n`
  })
  return news
}

const render = async (country) => {
  console.log("render called with", country)
  document.querySelector(".newslist").innerHTML = ""
  const data = await getdata(country)
  document.querySelector(".newslist").innerHTML = getNewsDivList(data.articles)
}

document
  .querySelector(".countrylist")
  .addEventListener("click", (e) =>
    document.querySelector(".dropdown").classList.toggle("flex")
  )

document
  .querySelector(".dropdown")
  .addEventListener("mouseout", (e) =>
    document.querySelector(".dropdown").classList.toggle("flex")
  )
document
  .querySelector(".countrylist")
  .addEventListener("mouseover", (e) =>
    document.querySelector(".dropdown").classList.toggle("flex")
  )

document.getElementById("inlink").addEventListener("click", (e) => {
  e.preventDefault()
  render("in")
})

document.getElementById("uslink").addEventListener("click", (e) => {
  e.preventDefault()
  render("us")
})

document.querySelector(".top").addEventListener("click", (e) => {
  e.preventDefault()
  render("us")
})
