import React from "react";
import Navbar from "./component/Navbar";

import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Navbar />

        <Outlet />
      </Provider>
    </div>
  );
};

export default App;
