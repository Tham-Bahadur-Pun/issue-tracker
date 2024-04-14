import { Box, TextField, Button, Spinner } from '@radix-ui/themes'
import { register } from 'module'
import React from 'react'
import { Controller } from 'react-hook-form'
import {Skeleton} from "@/app/components"

const LoadingNewIssuePage = () => {
  return (
    <Box className='max-w-xl'>
        <Skeleton />
        <Skeleton height="20rem" />
       <Skeleton width="5rem" />
    </Box>
  )
}

export default LoadingNewIssuePage