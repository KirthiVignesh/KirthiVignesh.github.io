import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Stack,Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub,} from 'react-icons/fa'
import {RiCodeBoxLine} from 'react-icons/ri'
import React from 'react'
import logo from '../assets/logo.gif'
import { Image } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    MenuDescendantsProvider,
  } from '@chakra-ui/react'

function NavBar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
    <>
        <Box h='10%'></Box>
        <Flex>
        <Box boxSize='sm'>
  <Image src={logo} alt='Kirthi' />
</Box>
          
  
          <Spacer></Spacer>
          <a href='https://www.github.com/KirthiVignesh'><IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton></a>
          <IconButton ml={8} mr={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
          <IconButton ml={8} mr={8} icon={<RiCodeBoxLine />} isRound='true' onClick={onOpen}></IconButton>
        </Flex>
        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Sections</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
        </Drawer>
        </>

    )
}

export default NavBar