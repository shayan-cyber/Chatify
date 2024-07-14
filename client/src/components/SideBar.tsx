import { Brain, ChevronLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getImageAnalysishistory } from '../utils/apiCall'
import { toast } from 'sonner'
import { ImageAnalysisHistory } from '../types'
import ImageAnalysisHistoryChat from './ImageAnalysisHistoryChat'

function SideBar({ setIsSidebarOpen }: { setIsSidebarOpen: Function }) {

    const [imageAnalysisHistory, setImageAnalysisHistory] = useState<ImageAnalysisHistory[]>([])

    useEffect(() => {
        try {
            getImageAnalysishistory().then(res => {
                console.log(res)

                setImageAnalysisHistory(res)
            })
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error)
        }
    }, [])


    return (
        <div className='absolute inset-0  flex justify-start items-center z-20 backdrop-blur-sm'>
            <div className='w-full md:w-1/2 h-screen bg-secondary p-4 '>

                <div className='flex items-center gap-2'>
                    <h1 className='text-2xl font-bold'>Chatify</h1>
                    <Brain className='h-8 w-8' />
                </div>

                <div className='py-4 bg-primary text-primary rounded-lg px-2 my-4 max-h-[90vh] overflow-y-auto'>

                    {imageAnalysisHistory.map((chat, index) => {
                        return <>

                            <ImageAnalysisHistoryChat chat={chat} key={
                                index
                            } />
                        </>
                    })}

                </div>

            </div>

            <button onClick={() => { setIsSidebarOpen(false) }}>
                <ChevronLeft className='w-10 h-10' />
            </button>

        </div>
    )
}

export default SideBar