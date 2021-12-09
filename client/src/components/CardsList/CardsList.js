import React from "react";
import cards from "./cards.json"
import CONSTANTS from '../../constants';
import styles from "./CardsList.module.scss";

function CardsList() {

    return (
        <div className={styles.cardContainer}>
            {cards.map((card, i) => (
                <div key={i} className={styles.card}>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${card.imgPath}`} alt={card.imgAlt}/>
                    <h3>{card.header}</h3>
                    <p>{card.text}</p>
                </div>
            ))}
        </div>
    )
}

export default CardsList
