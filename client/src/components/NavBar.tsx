
import { Brain } from 'lucide-react'
import ThemeToggleButton from './ThemeToggleButton'
function NavBar() {
    return (
        <div className='flex justify-between items-center w-full py-2 px-4'>
            <div className='flex items-center gap-2'>
                <h1 className='text-2xl font-bold'>Chatify</h1>
                <Brain className='h-8 w-8' />
            </div>
            <div className='flex items-center'>
                <ThemeToggleButton />
            </div>
        </div>
    )
}

export default NavBar