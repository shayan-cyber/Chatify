
import './App.css'
import ChatBot from './components/ChatBot'
import { Toaster } from 'sonner';
function App() {


  return (
    <>
      <Toaster toastOptions={{
        className: 'bg-secondary text-primary',
      }} position='top-right'/>
      <ChatBot/>
    </>
  )
}

export default App
