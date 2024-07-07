import Button from "./Button";

function ButtonWrap({ clearNumber, checkNumber }) {
  return (
    <>
      <Button children={"확인"} className="check" onClick={checkNumber} />
      <Button children={"지우기"} className="reset" onClick={clearNumber} />
    </>
  );
}

export default ButtonWrap;
