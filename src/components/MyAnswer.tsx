function MyAnswer({ myAnswer }) {
  return (
    <div className="my-answer">
      {myAnswer.map((ans, i) => {
        return (
          <p id={`nb${i + 1}`} className="num-box" key={`nb${i + 1}`}>
            {ans}
          </p>
        );
      })}
    </div>
  );
}

export default MyAnswer;
