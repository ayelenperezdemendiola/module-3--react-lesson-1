import React from 'react';
import MediaCard from './MediaCard';
import Tiger from './../images/tigre.jpg';
import Lemur from './../images/lemur.jpg';
import Oveja from './../images/oveja.jpg';

class MediaList extends React.Component {
    render() {
        return (
            <div className="App">
            <section className="section-list">
                <h1 className="list-title">News in Town</h1>
                <ul className="list-of-animals">
                    <li>
                    <MediaCard imageUrl={Tiger} imageAlt="TigerImage" titleName="Perón" dateText="12 de octubre"content1="Con el pueblo, siempre." content2="Volveré y seré millones" amountOfLikes="18K"/>
                    </li>
                    <li>
                    <MediaCard imageUrl={Oveja} imageAlt="Oveja Image" titleName="Evita" dateText="11 de septiembre" content1="No hay fuerza capaz de doblegar al pueblo que tiene conciencia sobre sus derechos" content2="Con el pueblo, siempre." amountOfLikes="18K" />
                    </li>
                    <li>
                    <MediaCard imageUrl={Lemur} imageAlt="Lemur Image" titleName="León" dateText="24 de octubre" content1="Hay que endurecerse sin perder la ternura jamás." content2="Con el pueblo, siempre." amountOfLikes="18K"/>
                    </li>
                </ul>
            </section>
            </div>
        )
    }
}

export default MediaList;
