import styles from '../assets/styles/layouts/Footer.module.scss';

export default function Footer(){
    return (
        <>
            <footer className= { `${styles.test} mt-5 bg-info`}>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li> <a href="#">Linkedin</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </footer>
        </>
    );
}