import { Container, ContainerProps } from '@mui/material'

const SectionContainer = ({ children, sx, ...delegated }: ContainerProps) => {
  return (
    <Container sx={{ py: 4, zIndex: 1, ...sx, px: 4 }} maxWidth="xl" {...delegated}>
      {children}
    </Container>
  )
}

export default SectionContainer
