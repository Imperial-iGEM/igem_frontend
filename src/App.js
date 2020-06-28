import React, {useState} from 'react'
import NavBar from './NavBar'
import FileUpload from './FileUpload'
import MenuDraw from './MenuDraw'
function App() {
    const [sideBarCategories, setSideBarCategories] = useState(['Home', 'Gene Design', 'Combinatorial Specifications', 'Generate Protocol', 'File Upload'])
    const [currentPageIndex, setCurrentPageIndex] = useState(0)
    // Function that is to be passed into MenuDraw to handles tab selections
    let handleTabSelection = function (text, index){
        console.log(`In App Root Component; Text: ${text}, Index: ${index}`)
    }

    return (
        <div>
        <FileUpload name="Imperial iGEM 2020" sideBarCategories={sideBarCategories} handleTabSelection={handleTabSelection}/>
        </div>
    )
}
export default App
