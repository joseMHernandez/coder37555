
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    setDoc,
    addDoc
} from "firebase/firestore"

// Your web app's Firebase configuration
/* const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_appId
}; */


// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWZq6ITfRBhLZyW_lQLFE9N3xe1RvPwJw",
  authDomain: "forproyects-60b39.firebaseapp.com",
  projectId: "forproyects-60b39",
  storageBucket: "forproyects-60b39.appspot.com",
  messagingSenderId: "761583478903",
  appId: "1:761583478903:web:33a5142d4fce8e4a71be72"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);





// Initialize Firebase
const app = initializeApp(firebaseConfig);
//para realizar operaciones con la bd
const firestore = getFirestore(app);



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




const exportDataToFirestore = async () => {
    const miColeccion = collection(firestore, "Shoes");
    //la data a exportar tiene que ser un objeto
    let nData = data.map(item => {
        const { id, ...itemSinId } = item;
        return itemSinId;
    })

    for (let item of nData) {
        const queryImg = query(miColeccion, where("img", "==", item.img));
        const fItem = await getDocs(queryImg);
        if (fItem.empty) {
            const newDoc = await addDoc(miColeccion, item)
        }
    }


}


const getData = async () => {
    const miColeccion = collection(firestore, "Shoes");
    let misDocsInfo = await getDocs(miColeccion);
    let misDocs = misDocsInfo.docs.map(doc => {
        let miDoc = {
            ...doc.data(),
            id: doc.id
        }
        return miDoc
    })

    return misDocs;
}


const getSingleItems = async (id) => {
    const docRef = doc(firestore, "Shoes", id);
    const docSnapshot = await getDoc(docRef);

    const docFormateado = { ...docSnapshot.data(), id: docSnapshot.id }
    return docFormateado;
}



const getItemByCategory = async (category) => {
    const miColeccion = collection(firestore, "Shoes");
    const queryCategory = query(miColeccion, where("category", "==", category));
    const misDocsInfo = await getDocs(queryCategory);
    let misDocs = misDocsInfo.docs.map(coleccion => {
        let docn = { ...coleccion.data(), id: coleccion.id };
        return docn;
    })
    return misDocs;
}



export {
    getData,
    getSingleItems,
    getItemByCategory,
    exportDataToFirestore
}