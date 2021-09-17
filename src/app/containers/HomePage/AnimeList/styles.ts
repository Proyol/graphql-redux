import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const AnimeItemContainer = styled.div`
    width:12em;
    height: 16em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const AnimeCover = styled.div`
    width: auto;
    height: 10em;

    img{
        width: auto;
        height: 100%;
    }
` 

export const AnimeTitle = styled.h6`
    margin-top: 8px;
    font-size: 18px;
    color: #000;
    font-weight: 600;
`