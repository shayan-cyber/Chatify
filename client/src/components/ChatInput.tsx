import React, { useRef } from 'react'
import { Image, SendHorizonal } from 'lucide-react';
import { toast } from 'sonner';
interface ChatInputProps {
    image: File | null,
    setImage: Function,
    text: string,
    setText: Function,
    handleSend: Function,
    allowQuestions: boolean,
    setAllowQuestions: Function
}

function ChatInput({ image, setImage, text, setText, handleSend, allowQuestions, setAllowQuestions }: ChatInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.files);
        
        if(e.target.files == null) return;
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

    console.log(image);
    
    return (

        <>
            <div className='absolute bottom-28 left-0 right-0 flex  justify-center items-center '>

                <div className='bg-purple-600 p-2 px-8 text-white rounded-full flex items-center justify-center gap-2'>
                    <h1>Ask a question ?</h1>
                    <button className='bg-purple-800 px-4 rounded-full p-2'>Proceed</button>
                </div>

            </div>
            <div className='absolute bottom-4 left-0 right-0 flex  justify-center items-center '>
                <div className='flex justify-between border-2 items-center border-gray-300 rounded-full bg-primary px-4 py-2 w-3/4'>
                    <button className='p-2 rounded-full text-white bg-purple-600 hover:scale-95 flex items-center justify-center w-60 gap-2' onClick={() => {
                        inputRef.current?.click()
                    }}>
                        <h1 className='text-sm'>Upload Image</h1>
                        <Image className=' w-8 h-8' />
                    </button>
                    <input type="text" className='w-full border-none outline-none text-gray-400 bg-transparent px-4 py-2 rounded-full' value={text} placeholder='Type your message here...' onChange={(e)=>{
                        setText(e.target.value)
                    }} />
                    <input type="file" className='hidden' ref={inputRef} onChange={(e) => {
                        handleImageChange(e)
                    }} />
                    <button className=''>
                        <SendHorizonal className='w-10 h-10 text-purple-600' onClick={() => {
                            handleSend(image, text)

                        }} />
                    </button>

                </div>

            </div>
        </>

    )
}

export default ChatInput