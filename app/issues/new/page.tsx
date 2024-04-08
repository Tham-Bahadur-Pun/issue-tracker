import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='space-y-3 p-5 max-w-xl'>
        <TextField.Root placeholder='Title' />
        <TextArea placeholder="Description" />
        <Button>Create New Issue</Button>
    </div>
  )
}

export default NewIssuePage