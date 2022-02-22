import * as React from "react";
import Loading from "../../components/loading";

const Component = React.lazy(
  () => import(/* webpackChunkName: "default" */ "./Page")
);

export default class Loader extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <Component />
      </React.Suspense>
    );
  }
}
