const data = [

    {
        id: 1,
        title: 'Nike',
        price: 342,
        stock: 4,
        category: 'shoes',
        detail: 'lorem',
        img: '/assets/img/blue-shoes.jpg'

    },

    {
        id: 2,
        title: 'Puma',
        price: 145,
        stock: 13,
        category: 'shoes',
        detail: 'lorem',
        img: '/assets/img/blue-shoes.jpg'

    },

    {
        id: 3,
        title: 'Adidas',
        price: 212,
        stock: 11,
        category: 'shoes',
        detail: 'lorem',
        img: '/assets/img/blue-shoes.jpg'

    }

]

 const getItems = () =>{
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(data)
    }, 2000)
   })

}
export default getItems;