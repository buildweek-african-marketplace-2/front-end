import React from 'react';

const dummyData = [{
    id: 0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrtSKbqlMp3I7Vu2QDPIjachKu_QZatSPl0XZi4UQwYAqCTVnk_PMS02L5d2g&usqp=CAc',
    name: 'test 1',
    description: 'description 1',
    price: '$1.50'
},
{
    id: 1,
    name: 'test 2',
    description: 'description 2',
    price: '$2.00'
},
{
    id: 2,
    name: 'test 3',
    description: 'description 3',
    price: '$2.50'
},
{
    id: 3,
    name: 'test 4',
    description: 'description 4',
    price: '$3.00'
}]

function ItemList() {
    //function routeToItem(e, item) {
        //e.preventDefault();
       //props.history.push(`/items/${item.id}`);
    //}
    return (
        <div>
            {dummyData.map(item => (
                <div className='items-list-wrapper'>
                    <div 
                    className='item-card'
                    //onClick={e => routeToItem(e, item)}
                    //key={item.id}
                    >
                        <img src={item.image} alt={item.name} className='item-list-image' />
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;