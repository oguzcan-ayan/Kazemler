import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/Layouts/MainLayout";
import Lorem from "../../components/Layouts/Lorem";
import ErrorPage from "../../components/Error";
import AboutUs from "../../components/About";

export const router = [
    {
        name: 'Homepage',
        link: '/',
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        // breadcrumb: '', breadcrumb'un adı gelecek
        children: [
            {
                index: true,
                element: <AboutUs /> /* Buraya Homepage içerisinde yazılan komponentlerin birleşimi gelecek <HomepageLayout/>*/
            },
            {
                name: 'About Us',
                link: '/about-us',
                path: 'about-us',
                element: {/* <AboutUs /> */}, /* <AboutUs/> */
                // breadcrumb: ''
            },
            {
                name: 'Products',
                link: '/products',
                path: 'products',
                // element: <Products/>,
                // breadcrumb: '',
                children: [
                    {
                        name: 'For Men',
                        link: '/products/for-men',
                        path: 'for-men',
                        // element: <ForMen/>,
                        // breadcrumb: ''
                    },
                    {
                        name: 'For Women',
                        link: '/products/for-women',
                        path: 'for-women',
                        // element: <ForWomen/>,
                        // breadcrumb: ''
                    },
                    {
                        name: 'For Skincare',
                        link: '/products/for-skincare',
                        path: 'for-skincare',
                        // element: <ForSkincare/>,
                        // breadcrumb: '',
                    }
                ]
            },
            {
                name: 'E-Catalog',
                link: '/e-catalog',
                path: 'e-catalog',
                // element: <ECatalog/>,
                // breadcrumb: '',
            },
            {
                name: 'References',
                link: '/references',
                path: 'references',
                // element: <References/>,
                // breadcrumb: '',
            },
            {
                name: 'Contact Us',
                link: '/contact-us',
                path: 'contact-us',
                // element: <ContactUs/>,
                // breadcrumb: '',
            }
        ]
    }
]

export default createBrowserRouter(router);