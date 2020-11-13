import {Form, Input, DatePicker, Row, Col, Button} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import "./Navigation.sass"

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className={"navigation--ul"}>
                <li>Каталог</li>
                <li>Бытовая электроника</li>
                <li>Аудио и видео</li>
                <li>Фототехника</li>
                <li>Игры и приставки</li>
                <li>Личные вещи</li>
                <li>Услуги</li>
            </ul>
        </div>
    );
}

export default Navigation;
