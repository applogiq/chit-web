/** **************************** Import Components ****************************** */
import Layouts from "../container/Layouts";

/* ***********************************Import CSS ************************************* **/
import "../../public/assets/css/main.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>

  )
}

export default MyApp;
