import Header from "../../components/Header/Header";
import {Layout, Tabs} from 'antd';
import AddTask from "../AddTask/AddTask";
const { TabPane } = Tabs;


const Main = () => {
    return (
        <Layout>
            <Header/>
            <Tabs defaultActiveKey="2">
                <TabPane tab="Add Task" key="1" ><AddTask/></TabPane>
                <TabPane tab="ToDo Tasks" key="2" />
                <TabPane tab="In Progress Tasks" key="3" />
                <TabPane tab="Pending Tasks" key="4" />
            </Tabs>
        </Layout>
    );
}

export default Main;
