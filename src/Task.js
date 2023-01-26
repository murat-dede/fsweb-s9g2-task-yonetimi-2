import React from "react";
import{
  differenceInDays,
  formatDistanceToNow,
  formatDistanceToNowStrict,
} from "date-fns";
import { tr } from "date-fns/locale";


const Task = ({ taskObj, onComplete }) => {
  const kalanGun = formatDistanceToNow(new Date(taskObj.deadline),{
  locale: tr,
 
});
const test = kalanGun<=3 ? true : false;
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span className= /*kalanGun <= 3 ?*/ "input-error">{kalanGun}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
