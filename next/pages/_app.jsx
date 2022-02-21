import { AuthContextProvider } from "../store/auth-context";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import '../styles/globals.scss';
import 'md-editor-rt/lib/style.css';

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    // timeout: 10000,
    offset: "50px",
    transition: transitions.SCALE,
};

const CustomeAlertTemplate = ({ options, message }) => {
    let alertClasses = "alert ";
    if (options.type == "error")
        alertClasses = "error-alert";
    else
        alertClasses = "success-alert";
    return (
        <div className="alert">
            <div className={alertClasses}>{message}</div>
        </div>
    );
};

function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <AlertProvider template={CustomeAlertTemplate} {...options}>
                <Component {...pageProps} />
            </AlertProvider>
        </AuthContextProvider>
    )
}

export default MyApp
