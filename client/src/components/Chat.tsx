import React, { useState } from 'react'
import { ChatResponse } from '../types'
import { Clipboard, Image } from 'lucide-react'
function Chat({ chat }: { chat: ChatResponse }) {
    const [toggleImage, setToggleImage] = useState(false)
    return (
        <div>
            <div className="py-2 px-4 w-full bg-secondary-hover rounded-lg my-2" >

                <div className='flex justify-start mb-3'>
                    <h1 className='text-lg font-semibold'>ChatBot</h1>
                </div>

                <div className='text-sm dark:bg-black dark:border-gray-700 rounded-xl border-2 '>
                    <div className=' bg-gray-200 dark:bg-[#2f2f2f] p-2 rounded-t-lg'>
                        <div className='flex justify-between'>
                            <p>Analyzed text</p>
                            <div className='flex gap-4'>
                                <button className='' onClick={() => {
                                    setToggleImage(!toggleImage)
                                }}>
                                    <Image className='text-xl' />
                                </button>
                                <Clipboard className='text-xl' />

                            </div>

                        </div>
                        <div className={toggleImage ? 'block' : 'hidden'}>

                            {chat.type === "analyzedImageText" && chat.image && (
                                <div className='flex justify-center'>
                                    <div>
                                        {chat.type === "analyzedImageText" && chat.text && (
                                            <p className='my-2 text-sm font-semibold'>Your text: <span className='font-thin'>{chat.text}</span></p>
                                        )}
                                        <img src={URL.createObjectURL(chat.image)} alt="analyzedImageText" className='py-2 max-h-[40vh] w-auto h-auto' />
                                    </div>


                                </div>
                            )}
                        </div>

                    </div>
                    <div className='p-4'>
                        <p>{chat.data}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chat