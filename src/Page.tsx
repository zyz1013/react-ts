import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLoader from "./routes/default/Loader";

const Page: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLoader />} />
        {/* <Route path="/i18n-demo" component={I18nDemoLoader} />
          <Route path="/pages-demo" component={PagesDemoLoader} />
          <Route path="/redux-demo" component={ReduxDemoLoader} />
          <Route path="/url-params-demo" component={UrlParamsDemoLoader} />
          <Route path="/user" component={UserLoader} />
          <Route component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Page;
