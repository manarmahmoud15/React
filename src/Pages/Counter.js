import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCounter, increaseCounter } from '../Store/Slices/Counter'
import { CounterContext } from '../Context/Counter'

export default function Counter() {
    const ReduxCounter = useSelector ((state) => state.counter.counter_val) // to read value
    const dispatch = useDispatch () // to update Value
    const {counter , setCounter } = useContext(CounterContext);
  return (
    <div>
        <h2>Redux Counter</h2>
        <hr/>
        <div className='d-flex align-text-center'>
            <button className='btn btn-danger' onClick={() => dispatch(decreaseCounter(ReduxCounter-1))}>-1</button>
            <p className='mx-3 '>{ReduxCounter}</p>
            <button className='btn btn-success' onClick={() => dispatch(increaseCounter())}>1</button>
        </div>
        <br/>
        <hr/>
        <h2>Context Counter </h2>
        <div className='d-flex align-text-center'>
            <button className='btn btn-danger' onClick={() => setCounter(counter -1)}>-1</button>
            <p className='mx-3 '>{counter}</p>
            <button className='btn btn-success' onClick={() => setCounter(counter +1)}>1</button>
        </div>
    </div>
  )
}
