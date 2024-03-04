import './styles.css'
import { useState } from 'react'
import { Navigate } from "react-router-dom"
import Success from '../success/Success'
import img from '../../assets/images/illustration-sign-up-desktop.svg'
import okicon from '../../assets/images/icon-success.svg'

export default function Landing (){

    const[email, setEmail] = useState("");
    const[subscribeResult, setSubscribeResult] = useState(null);
    const[errorMessage, setErrorMessage] = useState("");


        const handleSubscribeBtn = () => {
            const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            const isValidEmail = regex.test(email);
            console.log(subscribeResult)
            setSubscribeResult(isValidEmail);
            if (!isValidEmail) {
              setEmail(''); // Effacer l'email si ce n'est pas valide
              setErrorMessage('Invalid email format. Please enter a valid email address.');
             }
             else {
                return <Navigate to="/success" />
             }
        }
        const handleDismissBtn = () => {
            setSubscribeResult(null); // Réinitialise le résultat de la souscription
            setErrorMessage(""); // Efface le message d'erreur

        }
    
    return (
        <div className='wrapper'>
            <div className='card'>
                <div className='rightdiv'>
                        <img src={img}
                            alt='illustration'
                            className='rightdiv__img'
                        />
                </div>
                <div className='leftdiv'>
                    <h1 className='card__title'>Stay updated!</h1>
                    <p className='card__msg'>Join 60,000 product managers receiving monthly updates on:</p>
                    <ul className='card__list'>
                        <div className='row'>

                                <img 
                                    src={okicon}
                                    alt='okicon'
                                    className='card__icon'
                                />
                                <p>Product discovery and building what matters</p>

                        </div>
                        <div className='row'>
                                <img 
                                    src={okicon}
                                    alt='okicon'
                                    className='card__icon'
                                />
                                <p>Measuring to ensure updates are a success</p>
                        </div>
                        <div className='row'>
                                <img 
                                    src={okicon}
                                    alt='okicon'
                                    className='card__icon'
                                />
                                <p>And much more!</p>
                        </div>
                    </ul>
                    <div className='card__inputdiv'>
                        <p className='card__inputheader'>Email address</p>
                        <input 
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            onBlur={handleSubscribeBtn} // Vérifier l'email lorsque l'utilisateur quitte l'input
                            className={`card__input ${subscribeResult === false ? 'error' : ''}`}
                            placeholder='email@company.com'
                            style={{color: subscribeResult === false ? 'red' : 'inherit'}} 
                        />
                    <button onClick={handleSubscribeBtn} className='card__btn'>
                      <p className='card__btn-text'>Subscribe to monthly newsletter</p>
                    </button>
                    {
                        subscribeResult === false && (
                            <>
                            <p className='card__input-errormsg'>Valid email required</p>
                            </>
                    )}
                    {
                        subscribeResult === true && (
                            <Navigate to="/success" />
                               
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}