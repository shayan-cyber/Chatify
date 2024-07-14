import React, { useEffect, useState } from 'react'
import { fetchTheme, toggleTheme } from '../utils/themeToggler'
import Chats from './Chats'
import ChatInput from './ChatInput'
import { analyzeImage } from '../utils/apiCall'
import { ChatResponse } from '../types'
import { toast } from 'sonner'
import { getAnswer } from '../utils/gemini'
import { Brain, ChevronRight } from 'lucide-react'
import NavBar from './NavBar'
import SideBar from './SideBar'
function ChatWindow() {

    const [image, setImage] = useState<File | null>(null)
    const [response, setResponse] = useState<ChatResponse[]>([])
    const [text, setText] = useState<string>("")
    const [allowQuestions, setAllowQuestions] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const handleSend = async (image: File | null, text: string) => {
        setIsLoading(true)
        if (!image) {
            toast.error("Please upload an image")
            setIsLoading(false)
            return
        }
        if (!text) {
            toast.error("Please enter a text")
            setIsLoading(false)
            return
        }
        try {
            const res = await analyzeImage(image, text)
            console.log(response)
            setResponse([
                ...response,
                {
                    type: "userMessage",
                    data: text,
                    image: image,
                },
                {
                    type: "analyzedImageText",
                    data: res,
                }

            ])
            setAllowQuestions(true)
            setIsLoading(false)
            setText("")
            setImage(null)
        } catch (e) {
            toast.error("Something went wrong")
            console.log(e)
        }
        setIsLoading(false)
    }

    const handleAskQuestionFromGemini = async (text: string) => {
        setIsLoading(true)
        if (!text) {
            toast.error("Please enter a text")
            setIsLoading(false)
            return
        }
        try {
            const descriptions = response.filter(r => r.type === "analyzedImageText").map(r => r.data)
            const res = await getAnswer(descriptions, text)
            console.log({ res })
            if (res) {
                setResponse([...response,
                {
                    type: "userMessage",
                    data: text,
                },
                {
                    type: "geminiText",
                    data: res,
                }])
            }
            setText("")

        } catch (e) {
            toast.error("Something went wrong")
            console.log(e)
        }
        setIsLoading(false)

    }

    useEffect(() => {
        fetchTheme()
    }, [])
    return (
        <div className='bg-primary text-primary border-primary w-full h-screen relative overflow-hidden '>

            <button className='absolute top-1/2 left-2' onClick={() => setIsSidebarOpen(true)}>
                <ChevronRight className='w-10 h-10' />
            </button>
            <NavBar toggleTheme={toggleTheme} />
            {
                isSidebarOpen &&
                <SideBar setIsSidebarOpen={setIsSidebarOpen}/>
            }
            <div className='overflow-y-auto h-full py-6'>
                <Chats response={response} />
            </div>
            <ChatInput image={image} setImage={setImage} text={text} setText={setText} handleSend={handleSend} allowQuestions={allowQuestions} setAllowQuestions={setAllowQuestions} isLoading={isLoading} handleAskQuestionFromGemini={handleAskQuestionFromGemini} />
        </div>
    )
}

export default ChatWindow