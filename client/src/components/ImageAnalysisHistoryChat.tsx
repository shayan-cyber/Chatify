import  { useState } from 'react'
import { ImageAnalysisHistory } from '../types'
import { Brain, Clipboard, Image } from 'lucide-react'
function ImageAnalysisHistoryChat({ chat }: { chat: ImageAnalysisHistory }) {
    const [toggleImage, setToggleImage] = useState(false)
    return (
        <div className="py-2 px-4 w-full bg-secondary-hover rounded-lg my-2" >
            <div className='flex justify-start items-center mb-3 gap-2'>
                <h1 className='text-lg font-semibold'>Chatify</h1>
                <Brain className='h-4 w-4' />
            </div>
            <div className='text-sm dark:bg-black dark:border-gray-700 rounded-xl border-2 '>
                <div className=' bg-gray-200 dark:bg-[#2f2f2f] p-2 rounded-t-lg'>
                    <div className='flex justify-between'>
                        <p>Analyzed text</p>
                        <div className='flex gap-4'>
                            <button className={chat.imagePath ? '' : 'hidden'} onClick={() => {
                                setToggleImage(!toggleImage)
                            }}>
                                <Image className='text-xl' />
                            </button>
                            <Clipboard className='text-xl' />

                        </div>

                    </div>

                    <div className={toggleImage ? 'block' : 'hidden'}>

                        {chat.imagePath && (
                            <div className='flex justify-center'>
                                <div>
                                    <img src={chat.imagePath} alt="analyzedImageText" className='py-2 max-h-[40vh] w-auto h-auto' />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='p-4'>
                    <p>{chat?.imageAnalyzedText}</p>
                </div>
            </div>

        </div>
    )
}

export default ImageAnalysisHistoryChat