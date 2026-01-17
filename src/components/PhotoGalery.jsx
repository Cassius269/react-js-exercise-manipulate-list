import Photo from "./Photo";
import photos  from "../assets/data/photos.json";
import { useState } from "react";

const PhotoGalery = () => {
    let newPhotos =[...photos]; // copie des photos

    const [filteredPhoto, setPhotos] = useState(newPhotos);

    // if(filterDate !== ""){
    //     filtratedPhotos= filtratedPhotos.filter(( p => new Date(p.date) <=  new Date(filterDate))); // copies photos triées par ordre croissant (du plus vieux au plus récent)
    // }
    
 

    if(newPhotos.length === 0){
        return <p className="text-center">Il n'y a pas de photo disponible</p>;
    }

    const handleClick = (e) => {
        console.log("hello world");
        const clickedTag = e.target.innerText.toLowerCase();
        console.log(clickedTag);

        setPhotos(newPhotos.filter(p => p.tags.includes(clickedTag)));
        console.log("filtrés", filteredPhoto)
    }

    
    return (
        <>
            <section className="row">
                <h2 className="mb-4 mt-3">Les photos de la galerie</h2>
                {filteredPhoto.map(p => <Photo key={p.id} onClick={(e) => handleClick(e)} name={p.name} imageUrl={p.url} tags={p.tags} date={p.date} />)}
            </section>
        </>
    )
};


export default PhotoGalery;