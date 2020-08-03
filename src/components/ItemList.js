import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';
import { ItemDiv, SmallButton, ItemCardStyle } from './StyledComponents';

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
        <div style={{ marginTop: '200px', marginBottom: '200px'}}>
            {items.map(item => (
                <div>
                    <ItemCard item={item} />
                    <UpdateItem items={items} updateItems={setItems} getItems={getItems} />
                    <br></br>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}

export default ItemList;