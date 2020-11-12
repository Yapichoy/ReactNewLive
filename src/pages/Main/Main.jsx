import Header from "../../components/Header/Header";
import {Layout} from 'antd';
import Finder from "../../components/Finder/Finder";


const Main = () => {
    return (
        <Layout style={{background: "#fff"}}>
            <Header/>
            <Finder/>
        </Layout>
    );
}

export default Main;
