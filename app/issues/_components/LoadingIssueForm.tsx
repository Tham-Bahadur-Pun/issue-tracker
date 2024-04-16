import { Box } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

export const LoadingIssueForm = () => {
  return (
    <Box className='max-w-xl'>
        <Skeleton height="2rem" />
        <Skeleton height="20rem" />
       <Skeleton width="8rem" height="2rem"/>
    </Box>
  )
}
