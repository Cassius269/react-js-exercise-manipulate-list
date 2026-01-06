import styles from '../assets/styles/layouts/Photo.module.scss';

export default function Photo({name, imageUrl, tags = [], date = null}){

    let listTags;

    if(tags.length > 0 ){
        listTags = tags.map(t => <a href="#" className='btn btn-outline-danger'><li className=''>{t}</li></a>); // mettre les tags dans une liste
    }


    return (
        <article className='card bg-secondary-subtle col-10 col-md-6 colg-lg-6 col-xl-3 m-auto mb-4'>
            <img className='card-img-top' src={imageUrl} alt={`image de ${name}`} />
            <div className='card-body'>
                <h3 className='text-start'>Titre</h3>
                <ul className='d-flex justify-content-end gap-2'>
                    {listTags ? listTags : null}
                </ul>
                {/* <p>Date de parution: {date ? date.toLocaleString('default', { month: 'long' }) : "date de publication inconnue"}</p>  A REGLER l'affichage*/}
            </div>
           
        </article>
    )
};