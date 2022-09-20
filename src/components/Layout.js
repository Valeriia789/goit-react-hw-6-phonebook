import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "redux/store";


const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);

  console.log(value)
  return (
    <div>
      {value}
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement</button>
    </div>
  );
}

export default Layout