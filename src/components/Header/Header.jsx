import React from "react";
import { Row, Col, Layout, Button } from 'antd';
import s from "./header.module.sass";
const { Header, Content, Footer} = Layout;

const HeaderWrapper = () => {
    let auth;
    let isLoggedIn = false;
    if (isLoggedIn) {
        auth = <div className={s.headerAuth}>Email</div>
    } else {
        auth = <div className={s.headerAuth}><a href="javascript:void(0)" className={s.headerAuthLink}>Вход</a><span className={s.headerAuthSpan}>/</span><a href="javascript:void(0)" className={s.headerAuthLink}>Регистрация</a></div>
    }
    return (
        <Header
            className="site-page-header-responsive white"
        >
            <Row>
                <Col span={7}><div className="logo" >Logo</div></Col>
                <Col span={7}></Col>
                <Col span={10}>
                    <Row>
                        <Col span={12}>{auth}</Col>
                        <Col span={12} className="d-flex align-center justify-right"><Button type="primary" size="large">+ Подать объявление</Button></Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    );
}

export default HeaderWrapper;
