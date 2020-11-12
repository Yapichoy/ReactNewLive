import {Form, Input, DatePicker, Row, Col, Button} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import "./Finder.sass"

const Finder = () => {
    return (
        <div className="finder">
            <Form name="finder_form" className="finder-form">
                <Row style={{width: "100%", height: "100%"}}>
                    <Col span={10} className={"delimiter"}><Input placeholder="Я ищу..." prefix={<SearchOutlined />} className="finder-form--selection"/></Col>
                    <Col span={5} className={"delimiter"}><DatePicker className={"finder-form--rentdate"}/></Col>
                    <Col span={4} className={"finder-form--place"}><a>Донецк</a></Col>
                    <Col span={5} style={{display: "flex", justifyContent: "flex-end"}} ><Button type={"primary"} className="finder-form--btn">Найти</Button></Col>
                </Row>
            </Form>
        </div>
    );
}

export default Finder;
