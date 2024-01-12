import { useState } from 'react'
import './App.css'
import FoodData from '../resources/FoodData'
import SearchBar from './components/Searchbar'
import FoodBox from './components/FoodBox'
const App = () => {
  const [search, setSearch] = useState('')
  let filteredData = FoodData.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
  return(
    <>
      <h1>PRO-NUTRITON</h1>
      <SearchBar search={search} setSearch={setSearch}/>
      {
        filteredData.length == 0 ? (
          <h2>No results</h2>
        ) : (
          filteredData.map((ele, i) => <FoodBox key={i} i={i} ele={ele}/>)
        )
      }
    </>
  )
  
}

export default App
