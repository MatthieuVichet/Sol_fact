import '../style/Header.css'

export default function Header(){
    return(
        <header>
            <img src="" alt="" />
            <a href='/loan_simulator'>Estimer ma capacité d'emprunt</a>
            <a href='/about'>Qui sommes nous ?</a>
            <a className='link_app' href='/loan_application'>Déposer ma demande de prêt</a>
            <button type='button'><a href='/login'>Se connecter</a></button>
        </header>
    );
}