import { Button, NavBar, Space } from "antd-mobile";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { injectReducer } from "../../common/store";
import { ReducerKey } from "../../enums/reducerKey";
import { updateStateAction } from "./store/actions";
import { reducer, State } from "./store/reducer";
import styles from "./styles.scss";

injectReducer(ReducerKey.ReduxDemo, reducer);

const Page: React.FC = () => {
  let navigate = useNavigate();
  const { age } = useSelector((state: { [ReducerKey.ReduxDemo]: State }) => {
    return state[ReducerKey.ReduxDemo];
  });
  const dispatch = useDispatch();

  function add() {
    dispatch(
      updateStateAction({
        age: age + 1,
      })
    );
  }

  function reduce() {
    dispatch(
      updateStateAction({
        age: age - 1,
      })
    );
  }

  return (
    <div className={styles.wrap}>
      <NavBar onBack={() => navigate(-1)}>Redux Demo</NavBar>
      <Space block direction="vertical">
        <Space>
          <Button onClick={add} size="small">
            增加
          </Button>
          <Button onClick={reduce} size="small">
            减少
          </Button>
        </Space>
        <div className={styles.row}>我是存在redux中的数据:{age}</div>
      </Space>
    </div>
  );
};

export default Page;
