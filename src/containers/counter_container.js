import Counter from '../components/counter.jsx'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction} from '../redux/action_creators'
import {connect} from 'react-redux'

// function mapStateToProps(state) {
//   return {count:state}
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     increment:(value)=>{dispatch(createIncrementAction(value))},
//     decrement:(value)=>{dispatch(createDecrementAction(value))},
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter)

//简写方式
export default connect(
  state => ({count:state}),
  {
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction
  }
)(Counter)