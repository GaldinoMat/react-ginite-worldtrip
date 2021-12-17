import { Flex, Divider, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ContinentsSlider } from '../components/ContinentsSlider'
import { CTA } from '../components/CTA'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <Flex w="100vw" align="center" justify="center" flexDirection="column">
      <Hero />
      <CTA />
      <Divider orientation='horizontal' w="3.75rem" bg="gray.Headings" opacity="1" />
      <Heading textAlign="center" color="gray.Headings" mt="1.5rem">
        Vamos nessa?
        Então escolha seu continente
      </Heading>
      < ContinentsSlider />
    </Flex>
  )
}

export default Home
