import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter } from "../redux/Counter/counter.actions"

const Home = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCounter())
  }

  const handleDecrease = () => {
    dispatch(decreaseCounter())
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>IncreaseCounter</button>
      <button onClick={handleDecrease}>DecreaseCounter</button>
    </>
  );
};

export default Home;
