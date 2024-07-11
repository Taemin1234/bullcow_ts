import Button from "./Button";

interface NumInputProps {
  btnNumber: number[];
  chooseAnswer: (btn:number) => void;
  disableBtn: number[];
}

function NumInput({ btnNumber, chooseAnswer, disableBtn }:NumInputProps) {
  return (
    <div className="num-input">
      {btnNumber.map((btn, i) => {
        const selNumber = () => {
          //자식 컴포넌트에서 부모요소로 데이터 전송
          chooseAnswer(btn);
        };

        return (
          <Button
            children={btn}
            className="input-box"
            key={i}
            onClick={selNumber}
            disabled={disableBtn.includes(btn)}
          />
        );
      })}
    </div>
  );
}

export default NumInput;
