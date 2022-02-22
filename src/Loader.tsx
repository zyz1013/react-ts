import * as React from "react";
import Loading from "./components/loading";

const Component = React.lazy(() => import("./Page"));

export default class Loader extends React.Component {
  render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <Component />
      </React.Suspense>
    );
  }
}
