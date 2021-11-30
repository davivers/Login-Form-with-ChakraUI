import {Container, Box, Flex, Button, Heading, Input} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'



const Login = () => {
    const formBackground = useColorModeValue("gray.100", "gray.700")
    return (
        
        <Flex height="96vh" alignItems="center" justifyContent="center">   
            <Flex direction="column" background={formBackground} p={28} rounded={7}>
            <Heading mb={6}>Log in <ThemeToggleButton/></Heading>
            <Input placeholder="email@.com" variant="filled" mb={3} type="email"/>
            <Input placeholder="*******" variant="filled" mb={6} type="password"/>
            <Button colorScheme="purple">Log in</Button>
            
            
        </Flex>
    </Flex>
     
   
    )
}
const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()
     
    return (
        
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          style={{ display: 'inline-block' }}
          key={useColorModeValue('light', 'dark')}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
          ></IconButton>
        </motion.div>
      </AnimatePresence>
    )
  }

    
    



export default Login