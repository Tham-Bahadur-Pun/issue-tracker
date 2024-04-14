import { Text } from '@radix-ui/themes'
import React from 'react'

const ErrorMessage = ({message}: {message: string}) => {
  return (
    <Text as="p" color="red">
    {message}
  </Text>
  )
}

export default ErrorMessage