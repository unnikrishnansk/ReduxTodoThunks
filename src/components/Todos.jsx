
import React , {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {gettodos} from '../redux/action';
import Todoinput from './Todoinput';

const Todos = () => {

  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todos);

  

  useEffect(() => {
    if(todos?.length === 0)
    {
      gettodos(dispatch);
    }
   
  }, [])
  console.log(todos);


  return (
    <div>

      <Todoinput />
      <h2>Todos</h2>
      

      {todos?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}



    </div>
  )
}

export default Todos;