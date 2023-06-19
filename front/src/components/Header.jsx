import '../style/Header.css'
import Logo from '../asset/logo.png'

export default function Header(){
    return(
        <header>
            <a href='/home'><img className='logo' src={Logo} alt="Logo" style={{height: '50px',width: 'auto'}}/></a>
            <a href='/loan_simulator'>Estimer ma capacité d'emprunt</a>
            <a href='/about'>Qui sommes nous ?</a>
            <a className='link_app' href='/loan_application'>Déposer ma demande de prêt</a>
            <button className='buttonHeader' type='button'><a href='/login'>Se connecter</a></button>
        </header>
    );
}