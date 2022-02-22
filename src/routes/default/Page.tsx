import * as React from "react";
import styles from "./styles.scss";

const Page: React.FC = () => {
  return (
    <div>
      <div style={{ padding: "10px 8px" }}>首页3</div>
      <div className={styles.row}>
        <button>I18nDemo</button>
        <button>ReduxDemo</button>
        <button>UrlParamsDemo</button>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
