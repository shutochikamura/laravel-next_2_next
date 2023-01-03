import Badge from "@/components/atoms/Badge"
import { 
  PersonIcon,
  ShoppingBagIcon,
  GetAppIcon,
  SettingsIcon,
  LogoutIcon,
  CurrencyExchangeIcon,
  ScheduleIcon,
  WidgetsIcon,
} from "@/components/atoms/IconButton"


export const Sidebar = () => {
  return (
    <aside className="basis-1/6 md:basis-1/5 hidden md:block w-64 my-6 ml-2" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <ScheduleIcon
                    className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  />
                  <span className="ml-3">Dashboard</span>
                </a>
            </li>
            <li>
                <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                      <CurrencyExchangeIcon
                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                      />
                      <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>E-commerce</span>
                      <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-example" className="hidden py-2 space-y-2">
                      <li>
                        <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                      </li>
                </ul>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <WidgetsIcon
                    className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  />
                  <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                  <Badge color='gray'>Pro</Badge>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <GetAppIcon
                    className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  />
                  <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                  <Badge color='blue'>
                    3
                  </Badge>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <PersonIcon
                    className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  />
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <ShoppingBagIcon
                    className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  />
                  <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <SettingsIcon
                    className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  />
                  <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
                </a>
            </li>
            <li>
                <a href="#" 
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LogoutIcon
                    className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  />
                  <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                </a>
            </li>
          </ul>
      </div>
    </aside>
  )
}