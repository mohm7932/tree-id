import { useState, useEffect } from 'react'

import {FilterModal} from './FilterModal'
import { Result } from './../SampleData'
import { QueryResult } from './utils'

import { Button } from "@chakra-ui/button"
import {
    Input,
    InputGroup,
    InputRightElement,
    useBoolean,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export function TreeIdPage() {
    const [searchValue, setSearchValue] = useState<string>('')
    const [query, setQuery] = useState<string>('')
    const [queryResult, setQueryResult] = useState<QueryResult | undefined>() //TODO replace with API call
    const searchDrawer = useDisclosure()
    const filterModal = useDisclosure()

    const handleSubmit = () => {
        setQuery(searchValue)
        console.log('...fetching result...') // TODO execute search query
        setQueryResult(Result)
        setSearchValue('')
        searchDrawer.onClose()
    }

    return (
        <div>
            <Button colorScheme='blue' onClick={searchDrawer.onOpen}><Search2Icon/></Button>
            <Drawer placement='top' onClose={searchDrawer.onClose} isOpen={searchDrawer.isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <InputGroup>
                            <Input placeholder='Find by name...'
                                value={searchValue}
                                onChange={(e) => setSearchValue(event.target.value)}
                                onKeyPress={e=> { if (e.key === 'Enter') { handleSubmit() }}}/>
                            <InputRightElement>
                                <Button onClick={handleSubmit}><Search2Icon/></Button>
                            </InputRightElement>
                        </InputGroup>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Button onClick={filterModal.onOpen}>Filter</Button>
            <FilterModal hook={filterModal}/>
            {(queryResult !== undefined) ? 
                <div>
                    <p>showing results for query '{query}'</p>
                    {queryResult.results.map(result => {
                        return (
                            <div>
                                <p>name: {result.displayName}</p>
                                <p>latin name: {result.latinName}</p>
                                <p>arrangement: {result.arrangement}</p>
                            </div>
                        )
                    })}
                </div> : <p>Welcome to the TreeID app!</p>
            }
        </div> 
    )
}