import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useParams, useHistory } from 'react-router-dom';

const initialValues = {
    image: '',
    name: '',
    description: '',
    price: '',
    location: '',
};

const UpdateMovie = (props) => {
    console.log('here are the props', props);
    const { id } = useParams();
    const history = useHistory();
    const [ itemValues, setItemValues ] = useState(initialValues);

    console.log('here are the itemValues', itemValues)

    useEffect(() => {
        axiosWithAuth()
            .get(`https://afrikan-market.herokuapp.com/api/items/${id}`)
            .then(res => {
                console.log(res)
                setItemValues(res.data)
            })
            .catch(err => {
                console.log('error retrieving items', err)
            })
    }, [])

    const handleSubmit = e => {
       e.preventDefault();

       axiosWithAuth().put(`https://afrikan-market.herokuapp.com/api/items/${itemValues.id}`, itemValues)
            .then(res => {
                console.log(res);
                setItemValues(initialValues);
            })
            .catch(err => {
                console.log('error updating items', err)
            })
    }

    const handleChange = e => {
        let name = e.target.name;
        let value = e.target.value;

        setItemValues({
            ...itemValues,
            [name]: value,
        })
    }

    const deleteItem = e => {
        e.preventDefault();

        axiosWithAuth()
            .delete(`https://afrikan-market.herokuapp.com/api/items/${itemValues.id}`)
            .then(res => {
                console.log('delete success', res);
                history.push('/items');
            })
            .catch(err => {
                console.log('error deleting item', err)
            })
    }

    return (
        <div>
            <h3>Update Item</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    <input 
                        type="text"
                        name="name" 
                        onChange={handleChange} 
                        value={itemValues.name} 
                        placeholder="name" 
                    />
                </label>
                <label htmlFor='image'>
                    <input 
                        type="text"
                        name="image"
                        onChange={handleChange}
                        value={itemValues.image}
                        placeholder="image"
                    />
                </label>
                <label htmlFor='description'>
                    <input 
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={itemValues.description}
                        placeholder="description"
                    />
                </label>
                <label htmlFor='price'>
                    <input 
                        type="text"
                        name="price"
                        onChange={handleChange}
                        value={itemValues.price}
                        placeholder="price"
                    />
                    <input 
                        type="text"
                        name="location"
                        onChange={handleChange}
                        value={itemValues.location}
                        placeholder="location"
                    />
                </label>

                <button>Update</button>
                <button onClick={deleteItem}>Delete</button>
            </form>
        </div>
    )
}

export default UpdateMovie;