import React from 'react';
import { useHistory } from 'react-router-dom';

const ItemCard = props => {
    const { push } = useHistory();

    return (
        <div>
                    <img src={props.item.image} alt="item" />
                    <h3>{props.item.name}</h3>
                    <p>{props.item.description}</p>
                    <p>{props.item.price}</p>
                    <p>{props.item.location}</p>
                    <button>Add to cart</button>
                    <button onClick={() => {push(`/update-item/${props.item.id}`) }}>Edit</button>
                </div>
    )
}

export default ItemCard;