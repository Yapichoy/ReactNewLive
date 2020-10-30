import { PageHeader, Tabs, Button } from 'antd';
import AddTask from "../../pages/AddTask/AddTask";
const { TabPane } = Tabs;

const Header = () => {
    return (
        <PageHeader
            className="site-page-header-responsive lightcoral "
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Some</Button>,
                <Button key="1" type="primary">
                    Settings
                </Button>,
            ]}
        >
        </PageHeader>
    );
}

export default Header;
