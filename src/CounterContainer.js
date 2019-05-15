import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = count => ({
  count: count,
})

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: 'ADD' }),
  addTen: () => dispatch({ type: 'ADDTEN' }),
  remove: () => dispatch({ type: 'REMOVE' }),
  removeTen: () => dispatch({ type: 'REMOVETEN' }),
  reset: () => dispatch({ type: 'RESET' }),
})

const CounterComponent = ({ count, add, addTen, remove, removeTen, reset }) => (
  <div>
    <h1>{count}</h1>
    <button onClick={removeTen}>- 10</button>
    <button onClick={remove}>- 1</button>
    <button onClick={reset}>reset</button>
    <button onClick={add}>+ 1</button>
    <button onClick={addTen}>+ 10</button>
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent)
