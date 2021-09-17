import { Dispatch } from '@reduxjs/toolkit'
import React from 'react'
import { useAppDispatch } from '../../hooks'
import animeService from '../../services/animeService'
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage'
import AnimeList from './AnimeList'
import { setAnimePage } from './homePageSlice'

import {Container} from './styles'

interface IHomePageProps {
    
}

const actionDispatch = (dispatch: Dispatch) => ({
    setAnimePage: (page: GetAnimePage['Page']) => dispatch(setAnimePage(page))
})

const HomePage: React.FC<IHomePageProps> = (props) => {
    const { setAnimePage } = actionDispatch(useAppDispatch())

    const fetchAnimePage = async () => {
        const animePage = await animeService.getAnimePage(0, 15).catch((error) => {
            console.log("Error: ", error);
        })

        if(animePage){
            setAnimePage(animePage);
        }
    }

    React.useEffect(() => {
        fetchAnimePage()
    }, [])

    return (
        <Container>
            <h1>Animes</h1>
            <AnimeList />
        </Container>
    )
}

export default HomePage