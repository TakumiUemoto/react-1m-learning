import { useState } from "react";
import RadioButton from './RadioButton';
import { Link } from 'react-router-dom'

function Counter(): JSX.Element {
  // カウンターのロジック・状態管理

      //Stateの定義
      const [num, setNum] = useState<number>(0);
      const [msg, setMsg] = useState<string>("　");
      const [selectedValue, setSelectedValue] = useState<number>(1);
  
      //ボタンクリック時
      const onClickButton = () => {

        setNum(num + 1*selectedValue);

        if(num % 2 === 0){
            setMsg("奇数です");
        }else{
            setMsg("偶数です");
        }

      }
  
      //リセットボタンクリック時
      const onClickResetButton = () => {
        setNum(0);
        setMsg("　");
      }
      
      //ラジオボタンの選択変更時
      const handleRadioChange = (value: number) => {
        setSelectedValue(value);
        setNum(0);
        setMsg("　");
      };

  return (
    <>
      <h2>Counter</h2>
      
      <div>
        {/* UI */}
        <p>ボタンを押すとカウントアップ</p>
        <RadioButton
                label="1の倍数"
                value={1}
                checked={selectedValue === 1}
                onChange={handleRadioChange}
            />
            <RadioButton
                label="3の倍数"
                value={3}
                checked={selectedValue === 3}
                onChange={handleRadioChange}
            />
            <RadioButton
                label="5の倍数"
                value={5}
                checked={selectedValue === 5}
                onChange={handleRadioChange}
            />
            <p>カウント数：{num}</p>
            <p>{msg}</p>
            <button onClick={onClickButton}>ボタン</button>
            <button onClick={onClickResetButton}>リセット</button>
      </div>
      <div>
        <ul style={{
          listStyle: "none",
          padding: 20,
        }}>
          <li>
            <Link to='/'>- Top -</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Counter