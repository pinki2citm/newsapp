import React, {  useState } from 'react'
import Navbar from './Components/Navbar'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'  
import LoadingBar from 'react-top-loading-bar'
import News from './Components/News'
const App =(props)=> {
 const pageSize =20
const  apikey = 'ffd03455859146f581d1a1fbbcb694d1'
 const[progress,setProgress]=useState(0);


 
    return (
      <>
    <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}      
      />
  <Routes>
  
  <Route exact path="/general" element={<News setProgress={setProgress}  apikey={apikey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
  <Route exact path="/business" element={<News setProgress={setProgress}  apikey={apikey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
  <Route exact path="/entertainment" element={<News setProgress={setProgress}  apikey={apikey} key="entertainment"  pageSize={pageSize} country="in" category="entertainment"/>}/>
  <Route exact path="/health" element={<News setProgress={setProgress}  apikey={apikey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
  <Route exact path="/science" element={<News setProgress={setProgress}  apikey={apikey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
  <Route exact path="/technology" element={<News setProgress={setProgress}  apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
  <Route exact path="/sports" element={<News setProgress={setProgress}  apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
 </Routes>

     
      </Router>
      </>
    )
}
export default App;

