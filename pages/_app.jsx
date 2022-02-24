import Script from 'next/script';
import Head from "next/head";
import { AuthContextProvider } from "../store/auth-context";
import { transitions, Provider as AlertProvider } from "react-alert";
import "../styles/globals.scss";
import "md-editor-rt/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AuthInputs.scss";
import "../styles/CommunityContent.scss";
import "../styles/DarkMode.scss";
import "../styles/globals.scss";
import "../styles/HireUsContent.scss";
import "../styles/InputPreviewMarkdown.scss";
import "../styles/InputsContent.scss";
import "../styles/LandingPart.scss";
import "../styles/LoadingSpinner.scss";
import "../styles/NavBar.scss";
import "../styles/Particles.scss";
import "../styles/PreviewContent.scss";
import "../styles/SearchFilter.scss";
import "../styles/TeamCard.scss";
import "../styles/WilContent.scss";
import "../styles/WiliesCards.scss";
import "../styles/WilyCard.scss";
import "highlight.js/styles/atom-one-dark.css"

const options = {
    // you can also just use 'bottom center'
    // position: positions.TOP_CENTER,
    // timeout: 10000,
    offset: "50px",
    transition: transitions.SCALE,
};

const CustomeAlertTemplate = ({ options, message }) => {
    let alertClasses = "alert ";
    if (options.type == "error") alertClasses = "error-alert";
    else alertClasses = "success-alert";
    return (
        <div className="alert">
            <div className={alertClasses}>{message}</div>
        </div>
    );
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script id='google' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script id='google-load' strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <Head>
                <title>What I learned</title>
                <meta name="description" content="Imagine if you can remember everything you learn! wil is the tool that helps you do that" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="What I learned" />
                <meta property="og:description" content="Imagine if you can remember everything you learn! wil is the tool that helps you do that" />
                <meta property="og:site_name" content="What I learned" />
            </Head>
            <AuthContextProvider>
                <AlertProvider template={CustomeAlertTemplate} {...options}>
                    <Component {...pageProps} />
                </AlertProvider>
            </AuthContextProvider>
        </>
    );
}

export default MyApp;
