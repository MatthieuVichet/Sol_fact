import '../style/Footer.css'

export default function Footer(){
    return(
        <footer>
            <img src="" alt="" />
            <div className='footer_list'>
                <a href='/loan_simulator'>Estimer ma capacité d'emprunt</a>
                <a href='/about'>Qui sommes nous ?</a>
                <a href='/loan_application'>Déposer ma demande de prêt</a>
                <a href='mailto:matthieu.vichet@efrei.net'>Contact us</a>
            </div>
        </footer>
    );
}