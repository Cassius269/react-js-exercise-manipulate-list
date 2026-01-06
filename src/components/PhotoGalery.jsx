import Photo from "./Photo";
import photos from "../assets/data/photos";

const PhotoGalery = () => {
    const tag = null;
    const filterByDate = photos.sort((a,b) => new Date(a.date) <  new Date(b.date));
    const filterByTag = photos.filter(p => p.tags.includes("fleur"));
    
    console.log("filtre par la date la plus récente :",filterByDate);
    console.log("filtre par tag :", filterByTag);
    return (
        <>
            <section className="row">
                <h2>Les photos de la galerie</h2>
                {filterByDate.map(p => <Photo name={p.name} imageUrl={p.url} tags={p.tags} date={p.date} />)}
            </section>
        </>
    )
};


export default PhotoGalery;