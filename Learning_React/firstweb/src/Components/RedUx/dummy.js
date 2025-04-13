import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,multiply } from './counterSlice';

export default function Dummy() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <button onClick={() => dispatch(multiply())}>Multiply *</button>
    </div>
  );
}
