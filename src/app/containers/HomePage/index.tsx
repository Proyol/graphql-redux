import React from 'react'

import {Container} from './styles'

interface IHomePageProps {
    
}

const HomePage: React.FC<IHomePageProps> = (props) => {
    return (
        <Container>
            <h1>Animes</h1>
        </Container>
    )
}

export default HomePage