import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const initialValues = {
    id: '',
    image: '',
    name: '',
    description: '',
    price: '',
    location: '',
};

const UpdateMovie = props => {
    const { push } = useHistory();
    const { id } = useParams();
    const [ itemValues, setItemValues ] = useState(initialValues);

    useEffect(() => {
        axios.get(`https://afrikan-market.herokuapp.com/api/items/${id}`)
        .then(res => {
            console.log(res);
            setItemValues(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [id])

    const handleChange = e => {
        let name = e.target.name;
        let value = e.target.value;

        setItemValues({
            ...itemValues,
            [name]: value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        axios.put(`https://afrikan-market.herokuapp.com/api/items/${id}`, itemValues)
            .then(res => {
                console.log(res);
                setItemValues(initialValues);
                props.setRefresh(true);
            })
            .catch(err => {
                console.log(err)
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
                        value={movieValues.name} 
                        placeholder="name" 
                    />
                </label>
                <label htmlFor='image'>
                    <input 
                        type="text"
                        name="image"
                        onChange={handleChange}
                        value={movieValues.image}
                        placeholder="image"
                    />
                </label>
                <label htmlFor='description'>
                    <input 
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={movieValues.description}
                        placeholder="description"
                    />
                </label>
                <label htmlFor='price'>
                    <input 
                        type="text"
                        name="price"
                        onChange={handleChange}
                        value={movieValues.price}
                        placeholder="price"
                    />
                    <input 
                        type="text"
                        name="location"
                        onChange={handleChange}
                        value={movieValues.location}
                        placeholder="location"
                    />
                </label>

                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateMovie;