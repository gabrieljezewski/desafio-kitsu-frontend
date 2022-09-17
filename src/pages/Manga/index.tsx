import { useEffect, useState } from 'react'
import api from '../../services/api'

import * as S from './styles'
import Card from '../../components/card'

interface Manga {
    attributes: {
        canonicalTitle: string;
        posterImage: any;
    }
}

const Manga = () => {
    const [dataManga, setDataManga] = useState<Manga[]>([]);

    useEffect(() => {
        api.get("manga").then((response) => {
            setDataManga(response.data.data)
        }).catch(() => {
            console.log("Error")
        })
    }, [])

    return (
        <S.MangaContainerStyled>
            <S.MangaTitleStyled>
                Animes mais populares
            </S.MangaTitleStyled>
            <S.CardsAnimeStyled>
                {dataManga.map((manga) => {
                    return (
                        <Card 
                            key={manga.attributes.canonicalTitle}
                            img={manga.attributes.posterImage.tiny}
                            title={manga.attributes.canonicalTitle}
                        />
                    )
                })}
            </S.CardsAnimeStyled>
        </S.MangaContainerStyled>
    )
}

export default Manga