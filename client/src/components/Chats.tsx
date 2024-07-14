import React,{useState} from 'react'
import { ChatResponse } from '../types'
import Chat from './Chat'

function Chats({ response }: { response: ChatResponse[] }) {
  console.log(response)
  

  return (
    <div className='px-2 md:px-6 pb-60'>
      {response.map((item, index) => {
        return (
            <Chat chat={item} key={index} />
        )
      })}


    </div>
  )
}

export default Chats