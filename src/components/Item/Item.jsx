import "./Item.sass"
import React from "react";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const Item = () => {
    return (
        <div className="item">
            <Card
                style={{ width: 290 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>
    );
}

export default Item;
