import "../public/assets/css/bootstrap.min.css";
import "../public/assets/rev/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css";
import "../public/assets/rev/fonts/font-awesome/css/font-awesome.css";
import "../public/assets/rev/css/rs6.css";
import "../public/assets/css/owl.carousel.min.css";
import "../public/assets/css/animations.min.css";
import "../public/assets/css/magnific-popup.min.css";
import "../public/assets/fonts/font-awesome/css/all.min.css";
import "../public/assets/fonts/flaticon/font/flaticon.css";
import "../public/assets/css/ionicons.min.css";
import "../public/assets/fonts/themify-icons/themify-icons.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";
// import "../public/assets/css/font-awesome-all.min.css";
import "../public/assets/css/glightbox.min.css";
import "../public/assets/css/output.css";
import "../public/assets/css/swiper-bundle.min.css";
import "../styles/globals.css";
import Head from "next/head";

// import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Fliprate</title>
                <meta
                    name='description'
                    content='Fliprate technologies is a leading solutions provider in the crypto currency space.'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Component {...pageProps} />;
        </>
    );
}
