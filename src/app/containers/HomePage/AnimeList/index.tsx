import React from 'react'
import { createSelector } from 'reselect'
import { useAppSelector } from '../../../hooks'
import { makeSelectAnimePage } from '../selectors'

import { AnimeCover, AnimeItemContainer, AnimeTitle, Container } from './styles'

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
    animePage
}))

const AnimeList: React.FC = () => {
    const { animePage } = useAppSelector(stateSelector) 

    const isEmptyAnimePage = !animePage || !animePage.media ||animePage.media.length === 0

    if(isEmptyAnimePage){
        return null
    }

    return (
        <Container>
            {animePage && animePage.media && animePage.media.map(anime => (
                <AnimeItemContainer>
                    <AnimeCover>
                        <img src={anime?.coverImage?.extraLarge || ''}/>
                    </AnimeCover>
                    <AnimeTitle>
                        {anime?.title?.english}
                    </AnimeTitle>
                </AnimeItemContainer>
            ))}
        </Container>
    )
}

export default AnimeList