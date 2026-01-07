import Photo from "./Photo";
import photos from "../assets/data/photos.json";

const PhotoGalery = ({filterTag ="tous", filterDate =""}) => {

    let filtratedPhotos =[...photos]; // copie des photos
    console.log("Photos initiales", filtratedPhotos);


    if(filterTag !== "tous"){
        filtratedPhotos = filtratedPhotos.filter(p => p.tags.includes(filterTag));
    }

    if(filterDate !== ""){
        filtratedPhotos= filtratedPhotos.filter(( p => new Date(p.date) <=  new Date(filterDate))); // copies photos triées par ordre croissant (du plus vieux au plus récent)
    }
    
    console.log("filtre par tag :", filtratedPhotos);

    if(filtratedPhotos.length === 0){
        return <p className="text-center">Il n'y a pas de photo disponible</p>;
    }

    return (
        <>
            <section className="row">
                <h2 className="mb-4 mt-3">Les photos de la galerie</h2>
                {filtratedPhotos.map(p => <Photo key={p.id} name={p.name} imageUrl={p.url} tags={p.tags} date={p.date} />)}
            </section>
        </>
    )
};


export default PhotoGalery;