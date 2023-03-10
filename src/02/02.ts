
type StudentPropsType = {
    id: number
    name: string
    age:number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type CityType = {
    title: string
    countryTitle: string
}

type TechnologiesType = {
    id: number
    title: string
}

const student: StudentPropsType = {
    id:1,
    name: 'Nastya',
    age: 32,
    isActive: false,
    address:{
        streetTitle: 'Surganova 2',
        city:{
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies : [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }

    ]
}

