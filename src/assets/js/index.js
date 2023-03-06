const elRow = document.querySelector(".row2")
const elBtn = document.querySelector(".modal-body")


const renderJsonData = function (data) {
    for (let dataArr of data) {
        const html = `
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
               <div class="traveling-box">
                  <i><img src="icon/travel-icon2.png" alt="icon" /></i>
                  <h3>${dataArr.title}</h3>
                  <p>Afsuski bu yo'nalish ishga tushirilmagan uzr ):</p>
                  <div class="read-more">
                     <a dataset-data-id="${dataArr.id}" onClick="myFunction()" class="btn-read" href="#!">Band qilib qo'yish</a>
                  </div>
               </div>
            </div>
    `
        elRow.insertAdjacentHTML("beforeend", html)
    }
}
const renderJsonDataKorzina = function (data) {
        const html = `
          <h3>${data.title}</h3>
        `
        elBtn.insertAdjacentHTML("beforeend", html)
}


const renderJson = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res => res.json())
        .then(data => renderJsonData(data))
}

const renderJsonKorzina = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(res => res.json())
        .then(data => renderJsonDataKorzina(data))
}

renderJson()
renderJsonKorzina()

const myFunction = function () {
   renderJsonDataKorzina()
}