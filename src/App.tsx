import { useState, useEffect } from "react";

import "./App.css";

import MyAnswer from "./components/MyAnswer";
import Record from "./components/Record.tsx";
import NumInput from "./components/NumInput";
import ButtonWrap from "./components/ButtonWrap";

function App() {
  const MAX_CORRECT = 4;

  const [answer, setAnswer] = useState("");
  const [myAnswer, setMyAnswer] = useState([]);
  const [disableBtn, setDisableBtn] = useState([]);
  const [updateRecord, setUpdateRecord] = useState([]);
  const [tryCount, setTryCount] = useState(1);

  const arrAnswer = [];
  const btnNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const generateAnswer = () => {
    for (let i = 0; i < 4; i++) {
      const rand = Math.floor(Math.random() * 10);
      if (arrAnswer.indexOf(rand) === -1) {
        arrAnswer.push(rand);
      } else {
        i--;
      }
    }
    setAnswer(arrAnswer);
  };
  console.log(`정답 ${answer}`);

  useEffect(() => {
    generateAnswer();
  }, []);

  const chooseAnswer = (n) => {
    setMyAnswer((prevMyNum) => {
      // 길이가 4 이상이면 더이상 추가 x
      if (prevMyNum.length < 4) {
        return [...prevMyNum, n];
      }
      return prevMyNum;
    });

    setDisableBtn((prevDisabled) => {
      if (prevDisabled.length < 4) {
        return [...prevDisabled, n];
      }
      return prevDisabled;
    });
  };

  console.log(`내 정답 ${myAnswer}`);

  const checkNumber = () => {
    if (myAnswer.length === 4) {
      evaluateAnswer();
    } else {
      alert("4자리 숫자를 입력해주세요");
    }
  };

  const evaluateAnswer = () => {
    const matchingNumbers = answer.filter((x) => myAnswer.includes(x));
    const strikes = countMatchingPositions(answer, myAnswer);
    const balls = matchingNumbers.length - strikes;
    const outs = MAX_CORRECT - matchingNumbers.length;

    if (strikes === MAX_CORRECT) {
      alert(`${myAnswer} 정답입니다!`);
      setUpdateRecord([]);
      setTryCount(1);
      generateAnswer();
    } else {
      setTryCount((tryCount) => tryCount + 1);
      updateRecordList(myAnswer, strikes, balls, outs, tryCount);
    }

    clearNumber();
  };

  // 두 배열의 자리까지 같은 지 비교
  function countMatchingPositions(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        count++;
      }
    }
    return count;
  }

  // 중간 과정알리는 상황 제공
  function updateRecordList(myAnswer, strikes, balls, outs, tryCount) {
    setUpdateRecord((prevUpdate) => [
      ...prevUpdate,
      [myAnswer, strikes, balls, outs, tryCount],
    ]);
  }

  const clearNumber = () => {
    setMyAnswer([]);
    setDisableBtn([]);
  };

  return (
    <div className="App">
      <MyAnswer myAnswer={myAnswer} />
      <Record updateRecord={updateRecord} />
      <NumInput
        btnNumber={btnNumber}
        chooseAnswer={chooseAnswer}
        disableBtn={disableBtn}
      />
      <ButtonWrap clearNumber={clearNumber} checkNumber={checkNumber} />
    </div>
  );
}

export default App;
