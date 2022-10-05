import React, {useEffect} from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/configureStore";
import Main from "./src/main/main";
import {NotificationServices, requestUserPermission} from "./src/assets/PushNotification";

function App(props) {
    useEffect(()=>{
        requestUserPermission()
        NotificationServices()
    },[])
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
  );
}
export default App
