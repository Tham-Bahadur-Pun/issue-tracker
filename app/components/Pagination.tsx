import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'
import { Button, Flex, Text } from '@radix-ui/themes'
import React from 'react'
interface Props {
    itemCount: number
    pageSize: number
    currentPage: number
}
const Pagination = ({itemCount, pageSize, currentPage}: Props) => {
    const pageCount = Math.ceil(itemCount/pageSize)
  return (
    <Flex align='center' gap='2'>
        <Text size='2'>Page {currentPage} of {pageSize}</Text>
        <Button color='gray' variant='soft' disabled={currentPage === 1 } className='cursor-pointer'>
            <DoubleArrowLeftIcon/>
        </Button>
        <Button color='gray' variant='soft' disabled={currentPage === 1} className='cursor-pointer'>
            <ChevronLeftIcon/>
        </Button>
        <Button color='gray' variant='soft' disabled={currentPage === pageCount} className='cursor-pointer'>
            <ChevronRightIcon/>
        </Button>
        <Button color='gray' variant='soft' disabled={currentPage === pageCount} className='cursor-pointer'>
            <DoubleArrowRightIcon/>
        </Button>
    </Flex>
  )
}

export default Pagination