import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

const document = () => {
  return (
    <div>
      <Header>
        <p className='text-white'>Welcome Felix</p>
      </Header>
      <Editor />
    </div>
  )
}

export default document