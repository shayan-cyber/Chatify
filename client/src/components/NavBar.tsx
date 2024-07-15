
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

                <button className='bg-primary text-primary border-primary px-4 py-2 rounded-md'>Embed</button>
             

                    <ThemeToggleButton/>
                
            </div>
        </div>
    )
}

export default NavBar