import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "../components/ColorfulMessage";

const HelloWorld = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickCountDown = () => {
    setNum(num - 1);
  };

  const onClickCountReset = () => {
    setNum(0);
  };

  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <React.Fragment>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <button onClick={onClickCountDown}>カウントダウン！</button>
      <button onClick={onClickCountReset}>カウントリセット！</button>
      <br />
      <p>{num}</p>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>

      {faceShowFlag && <p>😦</p>}
      <br />
      <br />
    </React.Fragment>
  );
};
export default HelloWorld;
