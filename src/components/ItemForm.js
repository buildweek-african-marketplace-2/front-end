import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const ItemForm = () => {
    const [item, setItem] = useState({
      image: '',
      name: '',
      description: '',
      price: '',
      location: ''
    })

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === 'price') {
            value = parseInt(value, 10);
        }

        setItem({
            ...item,
            [e.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
          .post('https://afrikan-market.herokuapp.com/api/items', item)
          .then(res => {
            console.log(res);
            setItem(res.data)
          })
          .catch(err => {
            console.log('error adding item', err)
          })
    };

    return (
        <div>
             <h2>Add New Item</h2>
      <Form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='image'
          placeholder='image link'
          value={item.image}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="Name"
          value={item.name}
        />

        <Input
          type="number"
          name="price"
          onChange={changeHandler}
          placeholder="Price"
          value={item.price}
        />

        <Input
          type="string"
          name="description"
          onChange={changeHandler}
          placeholder="Description"
          value={item.description}
        />
        <input  
          type="text"
          name="location"
          onChange={changeHandler}
          placeholder="Location"
          value={item.location}
        />

        <PrimaryButton className="form-button">Add New Item</PrimaryButton>
      </Form>
        </div>
    )
}

export default ItemForm;