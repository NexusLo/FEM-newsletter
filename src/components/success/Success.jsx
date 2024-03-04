import './styles.css'

import { useState } from 'react'
import { Navigate } from "react-router-dom"

import okicon from '../../assets/images/icon-success.svg'

export default function Success (){

    const[email, setEmail] = useState("");
    const[subscribeResult, setSubscribeResult] = useState(null);
    const[errorMessage, setErrorMessage] = useState("");
    const [navigateToHome, setNavigateToHome] = useState(false); // État pour indiquer si nous devons naviguer vers la page d'accueil
    
    // Si l'état navigateToHome est vrai, déclencher la navigation vers la page d'accueil

        const handleDismissBtn = () => {
            setSubscribeResult(null); // Réinitialise le résultat de la souscription
            setErrorMessage(""); // Efface le message d'erreur
            setNavigateToHome(true);
        }
        if (navigateToHome) {
            return <Navigate to="/" />;
        }
    
    
    return (
        <div className='wrap'>
             <div className='successcard'>
                <img
                    src={okicon}
                    alt='okicon'
                    className='successcard__icon'
                />
                <h2 className='successcard__title'>Thanks for subscribing!</h2>
                <p className='successcard__msg'>A confirmation email has been sent to <span className='bold'>ash@loremcompany</span>. 
                 Please open it and click the button inside to confirm your subscription</p>
                <button onClick={handleDismissBtn} className='successcard__btn'>
                    <p className='card__btn-text'>Dismiss message</p>
                </button>
            </div>
        </div>
    )
}