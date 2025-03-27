import { useNavigate } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import Helmet from 'react-helmet';
import './index.scss';

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>404 Not Found</title>
                <meta name="description" content="error-page" />
            </Helmet>

            <div className='error-container'>
                <img src="../../../assets/vite.svg" alt="Content not found" />
                <div className="error-wrapper">
                    <h1>404</h1>
                    <h2>The requested page was not found!</h2>
                    <p>The page you are looking for may have been removed or the URL may have changed.</p>
                    <p>You can try to reach the page you are looking for again by returning to the previous or home page.</p>
                </div>
                <div className="return-btns">
                    <button onClick={() => navigate(-1)} className="prev-page-btn"><span><IoArrowBack /></span> Previous Page</button>
                    <button onClick={() => navigate('/')} className="home-page-btn"><span><FaHome /></span> Homepage</button>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;