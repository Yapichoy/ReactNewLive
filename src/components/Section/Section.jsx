import "./Section.sass"
import React from "react";
import { Breadcrumb } from 'antd';
import ItemList from "../ItemList/ItemList";

const Section = () => {
    return (
        <div className="section">
            <Breadcrumb>
                <Breadcrumb.Item><a href="">Каталог</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Бытовая электроника</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Ноутбуки</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <ItemList/>
        </div>
    );
}

export default Section;
