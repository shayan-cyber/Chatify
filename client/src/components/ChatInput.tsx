import React, { useRef, useState } from 'react'
import { Image, SendHorizonal, Loader, X , Brain} from 'lucide-react';
import { toast } from 'sonner';

interface ChatInputProps {
    image: File | null,
    setImage: Function,
    text: string,
    setText: Function,
    handleSend: Function,
    allowQuestions: boolean,
    setAllowQuestions: Function,
    isLoading: boolean,
    handleAskQuestionFromGemini: Function
}

function ChatInput({ image, setImage, text, setText, handleSend, allowQuestions, setAllowQuestions, isLoading, handleAskQuestionFromGemini }: ChatInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [askingQuestion, setAskingQuestion] = useState(false);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.files);

        if (e.target.files == null) return;
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            if (allowedTypes.includes(file.type)) {
                setImage(file);

            } else {

                toast.error('Invalid file type. Please upload an image file.');
            }
        }
    };

    // console.log(image);
    console.log(askingQuestion);

    return (

        <>
            <div className={allowQuestions && askingQuestion === false ? 'absolute bottom-24 md:bottom-28 left-0 right-0 flex  justify-center items-center ' : 'hidden'}>

                <div className='bg-purple-600 p-2 px-4 md:px-8  text-white rounded-full flex items-center justify-center gap-2'>
                    <h1>Ask a question ?</h1>
                    <button className='bg-purple-800 px-4 rounded-full p-1 md:p-2 hover:scale-95 text-xs md:text-sm' onClick={() => { setAskingQuestion(true) }}>Proceed</button>
                </div>

            </div>
            <div className='absolute bottom-4 left-0 right-0  '>
                <div className={allowQuestions && askingQuestion === true ? 'flex  justify-center items-center' : 'hidden'}>
                    <div className='w-3/4 flex justify-start px-6'>
                        <div className='bg-purple-600 px-2 py-1 flex justify-center items-center gap-2 rounded-t-lg'>
                        <h1 className='text-xs'>Using Gemini</h1>
                         <Brain className='w-3 h-3' />
                        </div>

                    </div>

                </div>
                <div className='flex  justify-center items-center'>
                    <div className='flex justify-between border-2 items-center border-gray-300 rounded-full bg-primary px-4 py-2 w-[90%] md:w-3/4'>
                        <button disabled={isLoading} className='p-2 px-3 md:px-4 rounded-full text-white bg-purple-600 disabled:opacity-35 hover:scale-95 flex items-center justify-center w-60 gap-1 md:gap-2' onClick={() => {
                            askingQuestion ? setAskingQuestion(false) : inputRef.current?.click()
                        }}>
                            <h1 className='text-[.6rem] md:text-sm'>{isLoading ? 'Loading...' : askingQuestion ? 'Cancel Asking' : image ? `${image.name.slice(0, 5)}...${image.type}` : 'Upload Image'}</h1>
                            {isLoading ? <Loader className={'w-6 h-6 md:w-8 md:h-8  animate-spin'} /> :
                                askingQuestion ? <X className={'w-6 h-6 md:w-8 md:h-8 text-white'} /> : <Image className={'w-6 h-6 md:w-8 md:h-8'} />

                            }

                        </button>
                        <input type="text" className='w-full border-none outline-none text-gray-400 bg-transparent px-4 py-2 rounded-full' value={text} placeholder={askingQuestion ? 'Ask a question....' : 'Type your message here...'} onChange={(e) => {
                            setText(e.target.value)
                        }} />
                        <input type="file" className='hidden' ref={inputRef} onChange={(e) => {
                            handleImageChange(e)
                        }} />
                        <button className='' disabled={isLoading} onClick={() => {
                            if (askingQuestion) {
                                handleAskQuestionFromGemini(text)
                            } else {
                                handleSend(image, text)
                            }
                        }} >
                            <SendHorizonal className={isLoading ? 'hidden' : 'w-6 h-6 md:w-10 md:h-10 text-purple-600'} />
                            <Loader className={isLoading ? 'w-6 h-6 md:w-10 md:h-10 text-purple-600 animate-spin' : 'hidden'} />
                        </button>

                    </div>

                </div>


            </div>
        </>

    )
}

export default ChatInput