//showing dropdown menu on click
function showdropdown() {
    var drop = document.getElementById('country')   
    if (drop.style.visibility === 'hidden') {
        drop.style.visibility = 'visible'
    }
    else {
        drop.style.visibility = 'hidden'
    }
}
//Showing indian news
function india(){
    let country = 'in'
    news(country)
    document.getElementById('country').style.visibility = 'hidden'
}
//showing USA news
function us()
{
    let country='us'
    news(country)
    document.getElementById('country').style.visibility = 'hidden'
}
const apikey = "5a44426faffb4378a442a7afacedec8c";
//getting news 
function news(country) {
    // using axios to fetch data from newsapi.org
    console.log(country)
    
    axios
        .get( 
            `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`
        )
        .then((response) => {

            console.log(response)
            let section = document.querySelector('section') 
            section.innerHTML=''
            //checking response is not empty
            if (response.data.articles.length) {
                //looping on every articles
                response.data.articles.forEach(news => {
                    //checking if these three are avaliable
                    if (news.description && news.title && news.urlToImage)
                    {
                        let div = document.createElement('div')
                        div.classList.add('card')

                        let img = document.createElement('img')
                        img.setAttribute('src',news.urlToImage)
                        img.setAttribute('alt',"Image")
                        div.appendChild(img)

                        let heading = document.createElement('h5')
                        let headingText = document.createTextNode(news.title)
                        heading.appendChild(headingText) 
                        div.appendChild(heading)

                        let content = document.createElement('p')
                        let contentText = document.createTextNode(news.description)
                        content.appendChild(contentText)
                        div.appendChild(content)
                        
                        let readlink = document.createElement('a')
                        let readText = document.createTextNode('Read More')
                        readlink.setAttribute('href',news.url)
                        readlink.appendChild(readText)
                        div.appendChild(readlink)
                        section.appendChild(div)
                    }
                    // if any one field is missing showing message
                    else{
                        let div = document.createElement('div')
                        div.classList.add('card')

                        let img = document.createElement('img')
                        img.setAttribute('src', "https://i.stack.imgur.com/WeyM8.jpg")
                        img.setAttribute('alt', "image")
                        div.appendChild(img)

                        let heading = document.createElement('h5')
                        let headingText = document.createTextNode('no news to show')
                        heading.appendChild(headingText)
                        div.appendChild(heading)

                        let content = document.createElement('p')
                        let contentText = document.createTextNode('Will update soon when avaliable')
                        content.appendChild(contentText)
                        div.appendChild(content)
                      
                        section.appendChild(div)
                    }
                })
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }