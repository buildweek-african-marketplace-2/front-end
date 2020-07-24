import React, { useState } from 'react';

const initialItem = {
    item: '',
    name: '',
    imageURL: '',
    description: '',
    price: ''
}

const ItemForm = () => {
    const [item, setItem] = useState(initialItem);

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
    };

    return (
        <div>
             <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="Name"
          value={item.name}
        />

        <input
          type="number"
          name="price"
          onChange={changeHandler}
          placeholder="Price"
          value={item.price}
        />

        <input
          type="string"
          name="description"
          onChange={changeHandler}
          placeholder="Description"
          value={item.description}
        />

        <button className="form-button">Add New Item</button>
      </form>
        </div>
    )
}

export default ItemForm;