import { gql } from "@apollo/client";

// $ - Variáveis do grahql

export const GET_ANIME_PAGE = gql`
    query GetAnimePage($page: Int!, $perPage: Int!){
        Page(page: $page, perPage: $perPage){
            media {
                id
                description
                title {
                    english
                }
                coverImage {
                    medium
                }
            }
        }
    }
`