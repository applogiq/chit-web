/** **************************** Import Components ****************************** */
import Layouts from "../container/Layouts";

/* ***********************************Import CSS ************************************* **/
import "../../public/assets/css/main.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
      <ToastContainer
        limit={1}
        autoClose={2000}
        transition={Zoom}
        pauseOnFocusLoss={false}
        newestOnTop
      />
    </>

  )
}

export default MyApp;
