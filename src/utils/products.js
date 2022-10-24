import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const productos= [
    {id:1,category: "Windsurf",name:"Tabla",marca:"Techno",price: 200,picturerurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvrgX55cQMh2IhrNKUMPpkt-9T9sw1vRYEQ&usqp=CAU",stock:5},
    {id:2,category: "Windsurf",name:"Vela",marca:"Severne Synergy",price: 200,picturerurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDLKcNUiO29dcOHy8Q16eLNWFFSTKw1Wxhw&usqp=CAU",stock:2},
    {id:3,category: "Windsurf",name:"botabara",marca:"Fibra",price: 200,picturerurl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/102/572/products/producto-vol4-241-73b9a535efa8724b1c16564244099241-640-0.png",stock:10},
    {id:4,category: "Kitesurf",name:"Tabla",marca:"Cabrinha",price: 200,picturerurl: "https://http2.mlstatic.com/D_NQ_NP_2X_736398-MLA46009709894_052021-F.webp",stock:10},
    {id:5,category: "Kitesurf",name:"Arnes",marca:"Mystic",price: 200,picturerurl: "https://http2.mlstatic.com/D_NQ_NP_932190-MLA46479067559_062021-O.webp",stock:10},
    {id:6,category: "Windsurf",name:"Accesorios",marca:"Varios",price: 200,picturerurl: "https://http2.mlstatic.com/D_NQ_NP_721686-MLA49648965693_042022-O.webp",stock:10},

];


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