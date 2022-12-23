import { Flex, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";

export default function BarMenu () {
  return (
    <Flex
      position={'fixed'}
      minH={'50PX'} w={'100%'}
      bgGradient={'linear(to-r, #19A186, #F2CF43)'}
      alignItems={'center'} justify={'center'}
      p={4}
    >
      <Stack spacing={'10px'} direction={'row'}>
        <Menu isLazy>
          <MenuButton
            borderWidth={'1px'} borderRadius={'5px'}
            p={2} minW={'125px'}
            fontSize={'20px'}
          >
            Activitées
          </MenuButton>
          <MenuList>
            <MenuItem>Accrobranche</MenuItem>
            <MenuItem>Escape Game</MenuItem>
            <MenuItem>Manége</MenuItem>
            <MenuItem>Canoe/Kayak</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            borderWidth={'1px'} borderRadius={'5px'}
            p={2} minW={'125px'}
            fontSize={'20px'}
          >
            hello
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton
            borderWidth={'1px'} borderRadius={'5px'}
            p={2} minW={'125px'}
            fontSize={'20px'}
          >
            hello
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton
            borderWidth={'1px'} borderRadius={'5px'}
            p={2} minW={'125px'}
            fontSize={'20px'}
          >
            hello
          </MenuButton>
        </Menu>
      </Stack>

      

    </Flex>
  )
}
