import React from 'react';
import './Item.css';


function Item(props) {
    return (
        <div className='phone-item'>
            <div className="phone-item-content">
                <span className="data">{props.item.name}</span>
                <span className="data">{props.item.content}</span>
            </div>
            <span className="delete-btn" title="delete" onClick={(e) => {
                e.stopPropagation();
                props.onDeleteItem(props.item);
            }}></span>
        </div>
    );
}

export default Item;
