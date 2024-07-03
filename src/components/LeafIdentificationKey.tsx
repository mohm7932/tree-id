import {useState} from 'react'
import {LeafType} from './../types'
import {BroadOrConifer} from './questions/BroadOrConifer'
import questions from './../questions'
import { Button } from "@chakra-ui/button"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input
  } from '@chakra-ui/react'
  import { Search2Icon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import LeafIdentificationFilters from './../questions'

export function LeafIdentificationKey() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [leafType, setLeafType] = useState(null);
    const [isOpenFilterSelectionModal, setIsOpenFilterSelection] = useState<boolean>(false)
    const [filterParams, setFilterParams] = useState<{[key: string], string}>({})
    const [searchValue, setSearchValue] = useState<string>('')

    const setParam = (filter, option) => {
        filterParams[filter.filterId] = option.optionId;
    }

    const applyFilters = () => {
        setIsOpenFilterSelection(false)
    }

    return (
        <div>
            <Input 
                placeholder='Search'
                value={searchValue}
                onChange={(e) => setSearchValue(event.target.value)}/>
            <Button><Search2Icon/></Button>
            <Button onClick={() => setIsOpenFilterSelection(true)}>Filter</Button>
            <p></p>
            <Modal isOpen={isOpenFilterSelectionModal} onClose={() => setIsOpenFilterSelection(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Filter</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {LeafIdentificationFilters.filters.map((filter) => {
                            const [isOpen, setIsOpen] = useState<boolean>(false)
                            return (
                                <div key={filter.filterId}>
                                <Button onClick={() => setIsOpen(true)}>{filter.filterText}</Button>
                                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>{filter.filterText}</ModalHeader>
                                        <ModalBody>
                                            {filter.filterOptions.map((option) => {
                                                return <Button key={option.optionId} onClick={() => setParam(filter, option)}>{option.optionText}</Button>
                                            })}
                                            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                                        </ModalBody>
                                    </ModalContent>
                                </Modal>
                                </div>
                            )
                        })}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='green' mr={3} onClick={applyFilters}>Apply</Button>
                        <Button onClick={() => setIsOpenFilterSelection(false)} variant='ghost'>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
        
    )
}