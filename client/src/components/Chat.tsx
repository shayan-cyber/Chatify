import { useState } from 'react'
import { ChatResponse } from '../types'
import { Brain, Clipboard, Image, UserRound } from 'lucide-react'
import { MESSAGE_TYPES } from '../utils/constants'
function Chat({ chat }: { chat: ChatResponse }) {
    const [toggleImage, setToggleImage] = useState(false)
    const copytoClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    }
    return (
        <div>

            {
                chat.type === MESSAGE_TYPES.USER_MESSAGE ? (
                    <div className="py-2 px-4 w-full bg-secondary-hover rounded-lg my-2" >
                        <div className='flex justify-end items-center gap-2 mb-3'>
                            <h1 className='text-lg font-semibold'>You</h1>
                            <UserRound className='h-4 w-4' />
                        </div>
                        <div className='text-sm dark:bg-black dark:border-gray-700 rounded-xl border-2 '>
                            <div className='p-2 rounded-t-lg'>
                                <div className='flex justify-start'>

                                    <div className='flex gap-4'>
                                        <button className={chat.image ? '' : 'hidden'} onClick={() => {
                                            setToggleImage(!toggleImage)
                                        }}>
                                            <Image className='text-xl' />
                                        </button>
                                        <button onClick={() => {
                                            copytoClipboard(chat.data)
                                        }}>
                                            <Clipboard className='text-xl' />
                                        </button>

                                    </div>

                                </div>
                                <div className={toggleImage ? 'block' : 'hidden'}>

                                    {chat.image && (
                                        <div className='flex justify-center bg-gray-200 dark:bg-[#2f2f2f] my-2 rounded-md '>
                                            <div>
                                                <img src={URL.createObjectURL(chat.image)} alt="analyzedImageText" className='py-2 max-h-[40vh] w-auto h-auto' />
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className='px-4 pt-2 pb-4 text-end text-[1.1rem]'>
                                <p>{chat.data}</p>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="py-2 px-4 w-full bg-secondary-hover rounded-lg my-2" >
                        <div className='flex justify-start items-center mb-3 gap-2'>
                            <h1 className='text-lg font-semibold'>{
                                chat.type === "geminiText" ? "Gemini" : "Chatify"
                            }</h1>
                            <Brain className='h-4 w-4' />
                        </div>
                        <div className='text-sm dark:bg-black dark:border-gray-700 rounded-xl border-2 '>
                            <div className=' bg-gray-200 dark:bg-[#2f2f2f] p-2 rounded-t-lg'>
                                <div className='flex justify-between'>
                                    <p className='text-lg'>Analyzed text</p>
                                    <button onClick={() => {
                                        copytoClipboard(chat.data)
                                    }}>
                                        <Clipboard className='text-xl' />
                                    </button>
                                </div>
                            </div>
                            <div className='p-4 text-[1rem]'>
                                <p>{chat.data}</p>
                            </div>
                        </div>

                    </div>
                )
            }





        </div>
    )
}

export default Chat