import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const params = useParams();
    const { push } = useHistory();

    const getItems = () => {
        axiosWithAuth()
            .get('https://afrikan-market.herokuapp.com/api/items')
            .then(res => {
                console.log(res)
                setItems(res.data)
                console.log(items)
            })
            .catch(err => {
                console.log('error retrieving items', err)
            })
    }
    useEffect(() => {
        getItems();
    }, [])

    const deleteItem = e => {
        e.preventDefault();

        axiosWithAuth()
            .delete(`https://afrikan-market.herokuapp.com/api/items/:id`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('error deleting item', err)
            })
    }

    return (
        <div>
            {items.map(item => (
                <div>
                    <img src={item.image} alt="item" />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.location}</p>
                    <button>Add to cart</button>
                    <button onClick={() => {push(`/update-item/${params.id}`) }}>Edit</button>
                    <button onClick={deleteItem}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default ItemList;