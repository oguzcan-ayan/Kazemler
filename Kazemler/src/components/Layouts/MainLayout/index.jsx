import { Outlet } from "react-router-dom";
import Header from "../../Header";
import Footer from '../../Footer';
import Helmet from 'react-helmet';

const MainLayout = () => {
    return (
        <>
            <Helmet>
                <title>Kazemler Group</title>
                <meta name="description" content="homepage" />
            </Helmet>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;