import React from "react";
import { Row, Col, Layout, Button } from 'antd';
import s from "./header.module.css";
const { Header, Content, Footer} = Layout;

const HeaderWrapper = () => {
    let auth;
    let isLoggedIn = false;
    if (isLoggedIn) {
        auth = <div className="">Email</div>
    } else {
        auth = <div><a href="javascript:void(0)">Вход</a>/<a href="javascript:void(0)">Регистрация</a></div>
    }
    return (
        <Header
            className="site-page-header-responsive white"
        >
            <Row>
                <Col span={8}><div className="logo" >Logo</div></Col>
                <Col span={8}></Col>
                <Col span={8}>
                    <Row>
                        <Col span={12}>{auth}</Col>
                        <Col span={12}><Button type="primary">+ Подать объявление</Button></Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    );
}

export default HeaderWrapper;
