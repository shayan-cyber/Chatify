import React, { useEffect, useState } from 'react'
import { fetchTheme, toggleTheme } from '../utils/themeToggler'
import Chats from './Chats'
import ChatInput from './ChatInput'
import { analyzeImage } from '../utils/apiCall'
import { ChatResponse } from '../types'
import { toast } from 'sonner'
function ChatWindow() {

    const [image, setImage] = useState<File | null>(null)
    const [response, setResponse] = useState<ChatResponse[]>([])
    const [text, setText] = useState<string>("")
    const [allowQuestions, setAllowQuestions] = useState<boolean>(true)
    const handleSend = async (image: File | null, text: string) => {

        if (image) {
            try {
                const res = await analyzeImage(image, text)
                console.log(response)
                setResponse([{
                    image: image,
                    type: "analyzedImageText",
                    data: res,
                    text:text? text : ""
                }, ...response
                ])
                setAllowQuestions(true)
            } catch (e) {
                console.log(e)
            }

        }else{
            toast.error("Please upload an image")
        }
    }

    useEffect(() => {
        fetchTheme()
    }, [])
    return (
        <div className='bg-primary text-primary border-primary w-full h-screen relative overflow-hidden'>
            <div className='flex justify-between items-center w-full py-2 px-4'>
                <h1>Chatify</h1>
                <div className='flex items-center'>

                    <button className='bg-primary text-primary border-primary px-4 py-2 rounded-md'>Embed</button>
                    <button className='bg-primary text-primary border-primary px-4 py-2 rounded-md' onClick={() => {
                        toggleTheme()
                    }} >Dark Mode</button>
                </div>
            </div>

            <div className='overflow-y-auto h-full py-6'>
                <Chats response={response} />
            </div>
            <ChatInput image={image} setImage={setImage} text={text} setText={setText} handleSend={handleSend} allowQuestions={allowQuestions} setAllowQuestions={setAllowQuestions} />
        </div>
    )
}

export default ChatWindow