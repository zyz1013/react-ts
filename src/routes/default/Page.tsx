import { Button, Space } from "antd-mobile";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.scss";

const Page: React.FC = () => {
  let navigate = useNavigate();

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>首页</div>
      <div className={styles.row}>
        <Space block>
          <Button
            color="primary"
            size="small"
            onClick={() => {
              navigate("/redux-demo");
            }}
          >
            ReduxDemo
          </Button>
          <Button size="small" color="success">
            UrlParamsDemo
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Page;
