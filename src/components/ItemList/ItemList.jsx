import "./ItemList.sass"
import React from "react";
import Item from "../Item/Item";

const ItemList = () => {
    return (
        <div className="item-list">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    );
}

export default ItemList;
