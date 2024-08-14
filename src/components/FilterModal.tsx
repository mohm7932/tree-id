import {useState, useEffect} from 'react'
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
    useBoolean,
    useDisclosure
  } from '@chakra-ui/react'
  import { Search2Icon } from '@chakra-ui/icons'
import LeafIdentificationFilters from './../filters'

export function FilterModal(props: {hook}) {
    let hook = props.hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [leafType, setLeafType] = useState(null);
    const [filterParams, setFilterParams] = useState<{[key: string], string}>({})

    const setParam = (filter, option) => {
        filterParams[filter.filterId] = option.optionId;
    }

    return (
        <div>
            <Modal isOpen={hook.isOpen} onClose={hook.onClose}>
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
                        <Button colorScheme='green' mr={3}>Apply</Button>
                        <Button variant='ghost'>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
        
    )
}