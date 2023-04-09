const containers = document.querySelectorAll('.title-chev');
const dividers = document.querySelectorAll('.divider');
const textShow = document.querySelectorAll('.faq-card small');

dividers.forEach(divider => {
    divider.classList.toggle('show-answer')
})

textShow.forEach(text => {
    text.classList.toggle('show-answer')
})

containers.forEach(container => {
    container.addEventListener('click', e => {
        const divider =  container.nextElementSibling;
        const text = container.nextElementSibling.nextElementSibling;
        divider.classList.toggle('show-answer')
        text.classList.toggle('show-answer');
    })
})


// LocalStorage Carrito
const buttonAdd = document.querySelectorAll('.buttonAdd');



buttonAdd.forEach((button, i) => {

        let product = button.parentElement;
        let infoProduct = button.previousElementSibling;
        let titleProduct = infoProduct.firstElementChild.innerText;
        let priceProduct = infoProduct.lastElementChild.innerText;
        let imgProduct = button.previousElementSibling.previousElementSibling;

        let objProduct = {
            id: i,
            product: titleProduct,
            info: 'Paquete de café, 250 gr',
            price: parseFloat(priceProduct),
            img: imgProduct.src
        }
    button.addEventListener('click', () => {

        // arrProducts === null ? arrProducts = [objProduct] : arrProducts.push(objProduct);

        let arrProducts = JSON.parse(localStorage.getItem('products')) || [];

    const add = function(product) {
        let index = arrProducts.findIndex((item) => item.id === product.id);

        if(index === -1) {
            arrProducts.push({...product, count: 1})
        } else {
            arrProducts[index].count++;
        }

    

    localStorage.setItem('products', JSON.stringify(arrProducts));
    }

    add(objProduct)

    })
});



if(localStorage.length === 0 || localStorage.length === null) {
    const iconChest = document.querySelector('.numberCest');

    iconChest.style.display = 'none';
}