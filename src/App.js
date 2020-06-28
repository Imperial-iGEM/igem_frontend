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
        setCurrentPageIndex(index)
    }

    return (

        <div>
            {currentPageIndex === 0 &&
            <MenuDraw name="Imperial iGEM 2020 – Home" sideBarCategories={sideBarCategories}
                      handleTabSelection={handleTabSelection} />
            }
            {currentPageIndex === 1 &&
            <MenuDraw name="Imperial iGEM 2020 – Gene Design" sideBarCategories={sideBarCategories}
                      handleTabSelection={handleTabSelection} />
            }
            {currentPageIndex === 2 &&
            <MenuDraw name="Imperial iGEM 2020 – Combinatorial Specifications" sideBarCategories={sideBarCategories}
                      handleTabSelection={handleTabSelection} />
            }
            {currentPageIndex === 3 &&
            <MenuDraw name="Imperial iGEM 2020 – Generate Protocol" sideBarCategories={sideBarCategories}
                      handleTabSelection={handleTabSelection} />
            }
            {currentPageIndex === 4 &&
            <FileUpload name="Imperial iGEM 2020 – File Upload" sideBarCategories={sideBarCategories}
                        handleTabSelection={handleTabSelection}/>
            }

        </div>
    )
}
export default App
