const sel = (element) => document.querySelector(element)
const selAll = (element) => document.querySelectorAll(element)
const real = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

pizzaJson.map( (item, index) => {
    const pizzaItem = sel('.models .pizza-item').cloneNode(true)

    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = real(item.price)
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    pizzaItem.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault()
        let key = event.target.closest('.pizza-item').getAttribute('data-key')
        const modalQts = 1

        sel('.pizzaBig img').src = pizzaJson[key].img
        sel('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        sel('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        sel('.pizzaInfo--actualPrice').innerHTML = real(pizzaJson[key].price)
        sel('.pizzaInfo--size.selected').classList.remove('selected')
        selAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })
        sel('.pizzaInfo--qt').innerHTML = modalQts

        sel('.pizzaWindowArea').style.opacity = 0
        sel('.pizzaWindowArea').style.display = 'flex'
        setTimeout( () => {
            sel('.pizzaWindowArea').style.opacity = 1
        }, 200 )
    })

    sel('.pizza-area').append(pizzaItem)
} )
