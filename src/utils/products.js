import {collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";




export const getAllProducts = ()=>{
    //obtenemos la base de datos
    const database = getFirestore();
    //obtenems la referencia a la colección "items"
    const collectionReference = collection(database,'items');
    //obtenemos los datos a partir de la referencia creada
    return getDocs(collectionReference)
        .then(snapshot=>{
            const list = snapshot
            .docs
            .map((doc)=>({
              id: doc.id,
              ...doc.data()
            }));
        return list
        })
        .catch(error=>console.warn(error))

};

export const getProduct =(id)=>{
    //obtenemos la base de datos
    const database = getFirestore();
    //obtenemos referencia al documento
    const itemReference = doc(database,'items',id);
    //obtenemos el documento a partir de la referencia
    return getDoc(itemReference)
        .then((snapshot)=>{
            if(snapshot.exists()){
                const item = {
                  id: snapshot.id,
                  ...snapshot.data()
                };
                return item
              }
        })
};

export const getProductsByCategory = (categoryName)=>{
    const database = getFirestore();
    const collectionReference = collection(database,'items');
    const collectionQuery = query(collectionReference,where('category','==',categoryName));
    return getDocs(collectionQuery)
        .then(snapshot=>{
            if(snapshot.size ===0)
                return [];
            const list = snapshot
            .docs
            .map((doc)=>({
              id: doc.id,
              ...doc.data()
            }));
        return list
        })
        .catch(error=>console.warn(error))
}

