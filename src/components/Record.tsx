import { RecordEntry } from '../App'; // App 파일에서 인터페이스를 import

interface RecordProps {
  updateRecord: RecordEntry[];
}

function Record({ updateRecord }:RecordProps) {
  return (
    <div className="record">
      <ul className="record-list-wrap">
        {[...updateRecord].reverse().map((rec, i) => {
          return (
            <li className="record-list" key={i}>
              <p>{rec.tryCount}.</p>
              <p className="num">{rec.myAnswer}</p>
              <p className="strk">{rec.strikes}S</p>
              <p className="ball">{rec.balls}B</p>
              <p className="out">{rec.outs}O</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Record;
