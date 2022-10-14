/* 


    



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


 */
