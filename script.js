
const url = 'https://dummyjson.com/products'

let section = document.getElementById('root')
let navs=document.createElement('p')
section.style.display='flex'
section.style.justifyContent='space-between'
section.style.flexWrap='Wrap'
section.style.backgroundImage='images(1).jog'
section.style.paddingLeft='20px'
section.style.gap='20px'
section.style.paddingRight='10px'
section.style.paddingTop='30px'
   async function fetchproducts(){
       const responds = await fetch(url)
           const data = await responds.json()
        let products = data.products
       let cards = products.map(function(product){
            console.log(product);
            let card = document.createElement('div')
            let img= document.createElement('img')
            img.style.width='200px'
            img.style.height='150px'
            img.setAttribute('src', product.thumbnail)
            let title =document.createElement('p')
            title.style.color='white'
            let price =document.createElement('p')
            price.style.color='white'
            let description =document.createElement('p')
            description.style.color='white'
            description.style.width='250px'
             title.textContent='NAME : ' + product.title
             price.textContent= 'PRICE : ' + product.price
             description.textContent= product.description
    
        card.className = 'card img-fluid w-100px bg-black'
        title.className='text-white text-center'
        price.className='text-white text-center'
        description.className='text-white text-center'
       
        img.className='img-fluid w-100 '
            card.append(img,title,price,description,)
            return card
        })
        cards.forEach(function(product) {
            section.append(product, )
        });
         };
         fetchproducts()