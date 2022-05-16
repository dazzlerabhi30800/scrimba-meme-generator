import React, {useState} from 'react';
import './Card.css'
import CardImg from './CardImg';

function Card() {

    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealemail@gmail.com",
        isFavorite: false 
    })

    let starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png';

    function toggleFavorite() {
        setContact(prevContact => {
            return{
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }


    return (
        <main>
            <article className="card">
                <img src="../images/user.png" alt="" className="card--image" />
                <div className="card--info">
                   <CardImg isFilled={starIcon} toggleFavorite={toggleFavorite} /> 
                    <h2 className="card--name">
                       {contact.firstName} {contact.lastName} 
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

export default Card;