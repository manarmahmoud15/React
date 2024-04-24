import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCounter, increaseCounter } from '../Store/Slices/Counter'

export default function Counter() {
    const counter = useSelector ((state) => state.counter.counter_val) // to read value
    const dispatch = useDispatch () // to update Value
  return (
    <div>
        <h2>Redux Counter</h2>
        <hr/>
        <div className='d-flex align-text-center'>
            <button className='btn btn-danger' onClick={() => dispatch(decreaseCounter(counter-1))}>-1</button>
            <p className='mx-3 '>{counter}</p>
            <button className='btn btn-success' onClick={() => dispatch(increaseCounter())}>1</button>
        </div>
        <br/>
        <hr/>
        <h2>Context Counter </h2>
        <div className='d-flex align-text-center'>
            <button className='btn btn-danger' >-1</button>
            <p className='mx-3 '>{counter}</p>
            <button className='btn btn-success' >1</button>
        </div>
    </div>
  )
}
