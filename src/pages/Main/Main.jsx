import Header from "../../components/Header/Header";
import {Layout} from 'antd';
import Finder from "../../components/Finder/Finder";
import Navigation from "../../components/Navigation/Navigation";
import Section from "../../components/Section/Section";


const Main = () => {
    return (
        <Layout style={{background: "#fff"}}>
            <Header/>
            <Finder/>
            <Navigation/>
            <Section />
        </Layout>
    );
}

export default Main;
