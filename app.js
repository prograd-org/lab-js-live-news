axios
  .get("https://newsapi.org/v2/everything", {
    params: {
      q: "keyword",
      apiKey: "70c556bbe8f247a6b43a27034f533d04",
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
        apiKey: "70c556bbe8f247a6b43a27034f533d04",
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
        apiKey: "70c556bbe8f247a6b43a27034f533d04",
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