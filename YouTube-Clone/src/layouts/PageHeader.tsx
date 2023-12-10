import { Bell, Menu, Search, Upload, User } from "lucide-react"
import { Button } from "../components/Button"

function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
        <a href="/">
          <img src="src\assets\YouTube-Logo.wine.png" alt="Youtube Logo" className="h-16" />
        </a>
      </div>


      <form className="flex gap-4 flex-grow justify-center">
        <div className="flex flex-grow max-w-[600px]">
          <input type="search" placeholder="Search" className=" rounded-l-full border border-secondary-border outline-none shadow-inner shadow-secondary py-1 px-4 text-lg w-full "/>
          <Button>
            <Search />
          </Button>
        </div>
      </form>


      <div className="flex flex-shrink-0 md:gap-2 items-center">
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