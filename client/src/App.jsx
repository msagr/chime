import React from 'react'
import {Button, buttonVariants} from '@/components/ui/button'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './pages/auth';
import Chat from './pages/chat';
import Profile from './pages/profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element= {<Auth />} />
          <Route path='/chat' element= {<Chat />} />
          <Route path='/profile' element= {<Profile />} /> 
          
          <Route path='*' element= {<Navigate to="/auth" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
