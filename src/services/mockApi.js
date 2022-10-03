const data = [

    {
        id: 1,
        title: 'Nike',
        price: '342',
        stock: 4,
        category: 'casual',
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        img: '/assets/img/blue-shoes.jpg'

    },

    {
        id: 2,
        title: 'Puma',
        price: '145',
        stock: 13,
        category: 'classic',
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        img: '/assets/img/blue-shoes.jpg'

    },

    {
        id: 3,
        title: 'Adidas',
        price: '212',
        stock: 11,
        category: 'sport',
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        img: '/assets/img/blue-shoes.jpg'

    },

    {
        id: 4,
        title: 'Balenciaga',
        price: '212',
        stock: 11,
        category: 'classic',
        detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
        img: '/assets/img/blue-shoes.jpg'

    }

   


    

]

 export const getItems = () =>{
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(data)
    }, 2000)
   })

}



export const getSingleItems = (idItem) =>{
    return new Promise((resolve, reject)=>{
      let itemFind = data.find((item)=>{
          console.log(item.id, idItem)
          return item.id === parseInt(idItem)
      })
  
      setTimeout(()=>{
      
          if(itemFind) resolve(itemFind)
          else reject(new Error('item not found'))
      }, 1500)
   
    })
  
  }
  


export const getItemByCategory = (cat) =>{
    return new Promise((resolve, reject)=>{
        let itemFind = data.filter((item)=>{
            return item.category === cat
        })
    setTimeout(()=>{
    
        if(itemFind) resolve(itemFind)
        else reject(new Error('item not found'))
    }, 1500)
     
})}



