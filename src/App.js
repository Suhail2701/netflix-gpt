import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Provider store={appStore}>
      <Body />
      </Provider>
      <Footer/>
    </div>
  );
}

export default App;
