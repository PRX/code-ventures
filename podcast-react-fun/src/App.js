import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Container from './components/Container'
import Filter from './components/Filter'

const App = () => {
  const [pods, setPods] = useState([])
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [filtered, setFiltered] = useState([])


  const removeCateDupes = (arr) => {
    let result = []
    for(let ele of arr){
      if(!result.includes(ele)){
        result.push(ele)
      }
    }
    return result
  }

  useEffect(() => {
    const getPods = async () => {
      const res = await axios.get('https://feeder.prx.org/api/v1/podcasts?per=100')
      setPods(res.data._embedded['prx:items'])

      let categories = res.data._embedded['prx:items'].map(pod => 
          pod['itunesCategories'][0].name
        )
        setCategories(removeCateDupes(categories)) 
      setLoading(false)
    }
    getPods()
  }, [])


  const filterPods = (category, e) => {
    setSelectedCategories([...selectedCategories, category])

    if(!e.target.checked){
      unFilterPods(category)
    }else{
      if(selectedCategories.length > 0){
        let newPods = pods.filter(pod => selectedCategories.includes(pod['itunesCategories'][0].name) || pod['itunesCategories'][0].name === category)
        setFiltered(newPods)
      }else{
        let newPods = pods.filter(pod => pod['itunesCategories'][0].name === category)
        setFiltered(newPods)
      }
    }
  }

  const unFilterPods = (category) => {
    let unSelectedCateIdx = selectedCategories.indexOf(category)
    let copyOfSelectedCate = [...selectedCategories]
    copyOfSelectedCate.splice(unSelectedCateIdx, 1)
    setSelectedCategories(copyOfSelectedCate)
    let filteredTemp = [...filtered]

    for(let i = filteredTemp.length - 1; i >= 0; i--){
      if(filteredTemp[i]['itunesCategories'][0].name === category){
        filteredTemp.splice(i, 1)
      }
    }
    setFiltered(filteredTemp)
  }


  return (
    <div>
      <Filter categories={categories} loading={loading} filterPods={filterPods} />
      <Container pods={pods} loading={loading} filtered={filtered}/>
    </div>
  )
}

export default App

