import Button from "./Button";

interface ButtonWrapPrps {
  clearNumber: () => void;
  checkNumber: () => void;
}

function ButtonWrap({ clearNumber, checkNumber }:ButtonWrapPrps) {
  return (
    <>
      <Button children={"확인"} className="check" onClick={checkNumber} />
      <Button children={"지우기"} className="reset" onClick={clearNumber} />
    </>
  );
}

export default ButtonWrap;
