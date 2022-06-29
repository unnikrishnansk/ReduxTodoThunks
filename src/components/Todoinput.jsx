import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodoFailure, addTodoRequest, addTodoSuccess, gettodos } from '../redux/action';
import axios from 'axios';

const Todoinput = () => {

  const [title, settitle] = useState("");

  const dispatch = useDispatch();

  const handleadd = () => {
    const payload = {
      title,
      status : false
    };
    settitle("")
    dispatch(addTodoRequest());
    axios
    .post("/todos",payload)
    .then((r) => dispatch(addTodoSuccess(r.data)))
    .then(() => gettodos())
    .catch((e) => dispatch(addTodoFailure(e)))
  };

  return (
    <div>
      <h2>Todoinput</h2>
      
      <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} placeholder="add todo..." />
      <button onClick={handleadd}>ADD TODO</button>
      </div>
  )
}

export default Todoinput;