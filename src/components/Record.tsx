function Record({ updateRecord }) {
  return (
    <div className="record">
      <ul className="record-list-wrap">
        {[...updateRecord].reverse().map((rec, i) => {
          return (
            <li className="record-list" key={i}>
              <p>{rec[4]}.</p>
              <p className="num">{rec[0]}</p>
              <p className="strk">{rec[1]}S</p>
              <p className="ball">{rec[2]}B</p>
              <p className="out">{rec[3]}O</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Record;
