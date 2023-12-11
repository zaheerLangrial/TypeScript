import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import { Button } from "../components/Button"
import { useState } from "react"

function PageHeader() {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false)
  return (
    <div className="flex gap-5 lg:gap-10 justify-between py-3">
      <div className={`gap-2 items-center flex-shrink-0 ${showSearchInput ? 'hidden' : 'flex'}`}>
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
      </div>
      <form className={`gap-2 flex-grow justify-center ${showSearchInput ? 'flex' : 'hidden md:flex'}`}>
        {
          showSearchInput && (
            <Button type="button" size='icon' variant='ghost' onClick={() => setShowSearchInput(false)}>
              <ArrowLeft />
            </Button>
          )
        }
        <div className="flex flex-grow max-w-[600px]">
          <input type="search" placeholder="Search" className=" rounded-l-full border border-secondary-border outline-none shadow-inner shadow-secondary px-4 text-lg w-full focus:border-blue-500" />
          <Button className="bg-gray-200 px-4 rounded-r-full border-secondary-border border border-l-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size='icon' className="bg-gray-200">
          <Mic />
        </Button>
      </form>


      <div className={`flex-shrink-0 md:gap-2 items-center ${showSearchInput ? 'hidden' : 'flex'}`}>
        <Button size='icon' variant='ghost' className="md:hidden" onClick={() => setShowSearchInput(true)}>
          <Search />
        </Button>
        <Button size='icon' variant='ghost' className="md:hidden">
          <Mic />
        </Button>
        <Button size='icon' variant='ghost'>
          <Upload />
        </Button>
        <Button size='icon' variant='ghost'>
          <Bell />
        </Button>
        <Button size='icon' variant='ghost'>
          <User />
        </Button>
      </div>
    </div>
  )
}

export default PageHeader