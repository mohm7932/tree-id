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
    ModalCloseButton
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import LeafIdentificationFilters from './../questions'

const FilterModal = (filter) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <div>
            <Button onClick={onOpen}>{filter.filterText}</Button>
        <Modal isOpen={isOpen} onOpen={onOpen}>
            <ModalHeader>{filter.filterName}</ModalHeader>
        </Modal>
        </div>
    )

}

export function LeafIdentificationKey() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [leafType, setLeafType] = useState(null);
    const {isOpen, onOpen, onClose} = useDisclosure();


    return (
        <div>
            <Button onClick={onOpen}>Filter</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Filter</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {LeafIdentificationFilters.map((filter) => {
                            return (
                                <div>
                                    
                                    <FilterModal filter={filter}/>
                                </div>
                            )
                        })}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='green' mr={3} onClick={onClose}>Apply</Button>
                        <Button variant='ghost'>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
        
    )
}