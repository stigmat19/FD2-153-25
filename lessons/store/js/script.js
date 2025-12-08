const btnSaveForm = document.getElementById('btn-save-form');
const type = document.querySelector('input[name="type"]');
const brand = document.querySelector('input[name="brand"]');
const title = document.querySelector('input[name="title"]');
const price = document.querySelector('input[name="price"]');
const imgUrl = document.querySelector('input[name="imgUrl"]');
const color = document.querySelector('input[name="color"]');
const app = document.getElementById('app');

const products = [{
    "type": "Cold",
    "brand": "LG1",
    "title": "DoorCooling+",
    "price": "2299",
    "imgUrl": "https://imgproxy.onliner.by/oA5wSBx4xO8VCQUaM7z_uQgHlqCB5b9_852tJ9C0jQA/w:170/h:250/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvOTM2NDNmNjdk/YmM4NzhlZDMyNTQ1/Njk5MWU1MTM4NGIu/anBn",
    "color": "#ffffff"
}, {
    "type": "Cold",
    "brand": "LG2",
    "title": "DoorCooling+",
    "price": "2299",
    "imgUrl": "https://imgproxy.onliner.by/oA5wSBx4xO8VCQUaM7z_uQgHlqCB5b9_852tJ9C0jQA/w:170/h:250/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvOTM2NDNmNjdk/YmM4NzhlZDMyNTQ1/Njk5MWU1MTM4NGIu/anBn",
    "color": "#ffffff"
}, {
    "type": "Cold",
    "brand": "LG3",
    "title": "DoorCooling+",
    "price": "2299",
    "imgUrl": "https://imgproxy.onliner.by/oA5wSBx4xO8VCQUaM7z_uQgHlqCB5b9_852tJ9C0jQA/w:170/h:250/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvOTM2NDNmNjdk/YmM4NzhlZDMyNTQ1/Njk5MWU1MTM4NGIu/anBn",
    "color": "#ffffff"
}]

btnSaveForm.addEventListener('click', () => {
    const product = {
        type: type.value,
        brand: brand.value,
        title: title.value,
        price: price.value,
        imgUrl: imgUrl.value,
        color: color.value,
    }

    type.value = '';

    products.push(product)
})

const render = (data) => {
    let htmlElems = '';
    data.forEach((value) => {
        htmlElems += `
                <div class="card" style="width: 18rem;">
                    <div class='img-wrapper'>
                        <img src="${value.imgUrl}" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${value.brand} ${value.title}</h5>
                        <p class="card-text">${value.price}</p>
                        <a href="#" class="btn btn-primary">buy</a>
                    </div>
                </div>
            `
    })

    console.log('----htmlElems', htmlElems);

    app.innerHTML = htmlElems
}

render(products);