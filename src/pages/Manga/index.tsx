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
        <S.MangaContainer>
            <S.Title>
                Animes mais populares
            </S.Title>
            <S.CardsManga>
                {dataManga.map((manga) => {
                    return (
                        <Card
                            key={manga.attributes.canonicalTitle}
                            img={manga.attributes.posterImage.tiny}
                            title={manga.attributes.canonicalTitle}
                        />
                    )
                })}
            </S.CardsManga>
        </S.MangaContainer>
    )
}

export default Manga