let source = 'bbc-news';
let apiKey = 'f106cea27a6f48e2b0c0a7d134a2a05f'
let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=08866a2ccb4747478a44a0b6a9658177', true);

//https://newsapi.org/v2/top-headlines?country=us&apiKey=08866a2ccb4747478a44a0b6a9658177
// xhr.getResponseHeader('Content-type', 'application/json');
//`https://newsapi.org/v2/top-headlines?source=${source}&apiKey=${apiKey}`

xhr.onload = function () {
  if(this.status === 200){

      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      //console.log(articles);

      let newsHTML = "";
      articles.forEach(function(element,index){
       // console.log(articles[news]);
          let news = `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="#collapse${index}">
                  ${element["title"]}
                  </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                  <div class="accordion-body">
                    ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a>
                  </div>
                </div> `;
      newsHTML += news;

    });
      newsAccordion.innerHTML = newsHTML;
  }
  else{
      console.log("Some error occured")
  }
}

xhr.send();
