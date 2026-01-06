import styles from '../assets/styles/layouts/Photo.module.scss';

export default function Photo({name, imageUrl, tags = [], date = null}){

    let listTags;
    const dateObject = new Date(date);

    if(tags.length > 0 ){
        listTags = tags.map(t => <a href="#" className='btn btn-outline-danger'><li className=''>{t}</li></a>); // mettre les tags dans une liste
    }


    return (
        <article className='card bg-secondary-subtle col-10 col-md-5 col-lg-5 col-xl-3 m-auto mb-4'>
            {imageUrl ? <img className='card-img-top' src={imageUrl} alt={`image de ${name}`} /> : <p>Photo non disponible</p>}
            
            <div className='card-body'>
                <h3 className='text-start'>{capitalizeFirstLetter(name)}</h3>
                <ul className='d-flex justify-content-end gap-2'>
                    {listTags ? listTags : null}
                </ul>
                <p>Date de parution: {date ? dateObject.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }) : "date de publication inconnue"}</p>
            </div>
           
        </article>
    )
};


// Fonction pour mettre en majuscule la première lettre
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
