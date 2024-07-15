
import { Brain } from 'lucide-react'
import { ChatResponse } from '../types'
import Chat from './Chat'

function Chats({ response }: { response: ChatResponse[] }) {
  console.log(response)


  return (
    <div className={`px-2 md:px-6 pb-60 ${response.length === 0 ? 'flex justify-center items-center h-[92vh]' : ''}`}>


      {
        response.length === 0 ? (
          <>
          <div className='flex justify-center items-center gap-2'>

            <h1 className='text-6xl font-bold'>Chatify</h1>
            <Brain className='h-20 w-20' />

          </div>
          </>
        ) : (
          <>

            {response.map((item, index) => {
              return (
                <Chat chat={item} key={index} />
              )
            })}
          </>
        )
      }


    </div>
  )
}

export default Chats