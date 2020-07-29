import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

import ItemCard from './ItemCard';
import UpdateItem from './UpdateItem';

const ItemList = () => {
    const [items, setItems] = useState([]);

    const getItems = () => {
        axiosWithAuth()
            .get('https://afrikan-market.herokuapp.com/api/items')
            .then(res => {
                console.log(res)
                setItems(res.data)
            })
            .catch(err => {
                console.log('error retrieving items', err)
            })
    }
    useEffect(() => {
        getItems();
    }, [])

    console.log('here are the items', items)

    return (
        <div>
            {items.map(item => (
                <div>
                    <ItemCard item={item} />
                    <UpdateItem items={items} updateItems={setItems} getItems={getItems} />
                </div>
            ))}
        </div>
    )
}

export default ItemList;