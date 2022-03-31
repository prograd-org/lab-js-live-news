axios
  .get("https://newsapi.org/v2/everything", {
    params: {
      q: "keyword",
      apiKey: "114fd86ad0bb4d85ae5dcbabd59af06d",
    },
  })
  .then((resp) => {
    var li = ``;
    for (let i = 0; i < resp.data.articles.length; i++) {
      let title = resp.data.articles[i].title;
      let img = resp.data.articles[i].urlToImage;
      let content = resp.data.articles[i].description;
      let url = resp.data.articles[i].url;
      li =
        li +
        `<div class="news"><img src="${img}"><h3>${title}</h3><p>${content}</p><a href="${url}" class="readMore">READ MORE</a></div>`;
      console.log(resp.data.articles[i]);
    }
    document.getElementById("newsbar").innerHTML = li;
  });

function countryIN() {
  axios
    .get("https://newsapi.org/v2/everything", {
      params: {
        q: "in",
        apiKey: "114fd86ad0bb4d85ae5dcbabd59af06d",
      },
    })
    .then((resp) => {
      var li = ``;
      for (let i = 0; i < resp.data.articles.length; i++) {
        let title = resp.data.articles[i].title;
        let img = resp.data.articles[i].urlToImage;
        let content = resp.data.articles[i].description;
        let url = resp.data.articles[i].url;
        li =
          li +
          `<div class="news"><img src="${img}"><h3>${title}</h3><p>${content}</p><a href="${url}" class="readMore">READ MORE</a></div>`;
        console.log(resp.data.articles[i]);
      }
      document.getElementById("newsbar").innerHTML = li;
    });
}
function countryUS() {
  axios
    .get("https://newsapi.org/v2/everything", {
      params: {
        q: "us",
        apiKey: "114fd86ad0bb4d85ae5dcbabd59af06d",
      },
    })
    .then((resp) => {
      var li = ``;
      for (let i = 0; i < resp.data.articles.length; i++) {
        let title = resp.data.articles[i].title;
        let img = resp.data.articles[i].urlToImage;
        let content = resp.data.articles[i].description;
        let url = resp.data.articles[i].url;
        li =
          li +
          `<div class="news"><img src="${img}"><h3>${title}</h3><p>${content}</p><a href="${url}" class="readMore">READ MORE</a></div>`;
        console.log(resp.data.articles[i]);
      }
      document.getElementById("newsbar").innerHTML = li;
    });
}
