import {LeafType} from './types'

const LeafIdentificationFilters = 
{
    filters: [
    // {
    //     filterId: 0,
    //     filterText: "family",
    //     filterOptions: [

    //     ]
    // },
    {
        filterId: "leafType",
        filterText: "leaf type",
        filterOptions: [
            { 
                optionId: 0,
                optionText: "broad",
                nextQuestionId: 0
            },
            { 
                optionId: 1,
                optionText: "narrow",
                nextQuestionId: 0
            },
        ]
    },
    // {
    //     filterId: 2,
    //     filterText: "leaf shape",
    //     filterOptions: [

    //     ]
    // },
    {
        filterId: "leafMargin",
        filterText: "leaf margin",
        filterOptions: [
            { 
                optionId: 0,
                optionText: "entire",
                nextQuestionId: 0
            },
            { 
                optionId: 1,
                optionText: "spiny",
                nextQuestionId: 0
            },
            { 
                optionId: 2,
                optionText: "serrate",
                nextQuestionId: 0
            },
            { 
                optionId: 3,
                optionText: "doubly serrate",
                nextQuestionId: 0
            },
        ]
    },
]
}
export default LeafIdentificationFilters