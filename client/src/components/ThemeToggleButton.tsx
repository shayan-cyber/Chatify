import {useEffect, useState} from 'react'
import { toggleTheme } from '../utils/themeToggler'
import { Moon, Sun } from 'lucide-react'
function ThemeToggleButton() {
    const[theme, setTheme] = useState('light')
    useEffect(() => {
        let theme = localStorage.theme
        if(theme){
            setTheme(theme)
        }
    },[])

    

  return (
    <button className={`w-20 rounded-full flex ${theme === 'light' ? 'justify-start':'justify-end'}  bg-gray-300 dark:bg-gray-600 shadow-md shadow-gray-200 dark:shadow-gray-800 p-1`} 
    onClick={() => {
        setTheme(toggleTheme())
    }}>
        <div className='bg-black text-white h-8 w-8  p-1 rounded-full'>
            {theme === 'light' ? <Moon className='w-full h-full' /> : <Sun className='h-full w-full' />}
        </div>
    </button>
  )
}

export default ThemeToggleButton