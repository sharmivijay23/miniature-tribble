import * as React from 'react'
import { ITEMS } from './data'
import './App.css';

function App() {

  const [searchText, setSearchText] = React.useState("")

  const inputChangeHandler = function (event) {
    setSearchText(event.target.value)
  }

  const items = ITEMS.filter(item => item.en_US.toLowerCase().includes(searchText.toLowerCase()))

  console.log("rendering App")
  return (
    <div className="App">
      <h1>Items details</h1>
      <input type="text" onChange={inputChangeHandler} value={searchText} placeholder="Search items"/>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>English</th>
            <th>Tamil</th>
            <th>Hindi</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => <MemoizedItem key={item.image} {...item} />)}
        </tbody>
      </table>
    </div>
  );
}

const MemoizedItem = React.memo(Item);

function Item(props) {
  console.log("rendering item")
  return (
    <tr>
      <td>
        <img src={props.image} width="100" height="100" />
      </td>
      <td>
        {props.en_US}
      </td>
      <td>
        {props.ta_IN}
      </td>
      <td>
        {props.hi_IN}
      </td>
      
    </tr>
  )
}

export default App;

// React.useState()
// function Counter() {
//   const [count, setCount] = React.useState(0)
  
//   const clickHandler = function (event) {
//     setCount(count + 1)
//   }

//   console.log("rendering counter")
//   return (
//     <div>
//       <button onClick={clickHandler}>Click Me</button>
//       <div>I was clicked {count} times</div>
//     </div>
//   )
// }