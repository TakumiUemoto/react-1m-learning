import { useState } from "react";
import RadioButton from "./RadioButton";
import { Link } from "react-router-dom";

type CounterMessageType = "even" | "odd" | "reset" | "initial";
type RadioOption = {
  value: number;
};

// メッセージの情報
const messageInfo: Record<CounterMessageType, string> = {
  even: "偶数です。",
  odd: "奇数です。",
  reset: "リセットされました。",
  initial: "ボタンを押してください。",
};

// ラジオボタンの情報
const radioInfo: RadioOption[] = [
  {
    value: 1,
  },
  {
    value: 3,
  },
  {
    value: 5,
  },
];

function Counter(): JSX.Element {
	// カウンターのロジック・状態管理

  //Stateの定義
  const [num, setNum] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState<number>(1);
  const [messageKey, setMessageKey] = useState<CounterMessageType>("initial");

  //ボタンクリック時
  const onClickButton = () => {
    const count = num + selectedValue;
    setNum(count);
    setMessageKey(count % 2 === 0 ? "even" : "odd");
  };

  //リセットボタンクリック時
  const onClickResetButton = () => {
    setNum(0);
    setMessageKey("reset");
  };

  //ラジオボタンの選択変更時
  const handleRadioChange = (value: number) => {
    setSelectedValue(value);
    onClickResetButton();
  };

  return (
    <>
      <h2>Counter</h2>

      <div>
        {/* UI */}
        <p>ボタンを押すとカウントアップ</p>

        {radioInfo.map((val) => {
          return (
            <RadioButton
              label={`${val.value}の倍数`}
              value={val.value}
              checked={selectedValue === val.value}
              onChange={handleRadioChange}
            />
          );
        })}
        <p>カウント数：{num}</p>
        <p>{messageInfo[messageKey]}</p>
        <button onClick={onClickButton}>ボタン</button>
        <button onClick={onClickResetButton}>リセット</button>
      </div>
      <div>
        <ul
          style={{
            listStyle: "none",
            padding: 20,
          }}
        >
          <li>
            <Link to="/">- Top -</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Counter;
