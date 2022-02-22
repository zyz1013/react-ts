import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./common/store";
import DefaultLoader from "./routes/default/Loader";
import ReduxDemoLoader from "./routes/redux-demo/Loader";

const Page: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLoader />} />
          <Route path="/redux-demo" element={<ReduxDemoLoader />} />
          {/*  />
    
      <Route component={NotFound} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Page;
