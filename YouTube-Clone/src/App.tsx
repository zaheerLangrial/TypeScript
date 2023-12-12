import { useState } from "react"
import { categories } from "./Data/CategoryData"
import CategoryPills from "./components/CategoryPills"
import PageHeader from "./layouts/PageHeader"

function App() {

  const [selectCategory, setSelectCategory] = useState(categories[0])

  return (
    <>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <div className="">Sidebar</div>
          <div className=" overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills categories={categories} selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
