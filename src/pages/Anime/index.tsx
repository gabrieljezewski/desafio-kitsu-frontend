import { useEffect, useState } from 'react'
import api from '../../services/api'

import * as S from './styles'
import Card from '../../components/card'

interface Anime {
    attributes: {
        canonicalTitle: string;
        posterImage: any;
    }
}

const Anime = () => {
    const [dataAnime, setDataAnime] = useState<Anime[]>([]);

    useEffect(() => {
        api.get("anime").then((response) => {
            setDataAnime(response.data.data)
        }).catch(() => {
            console.log("Error")
        })
    }, [])

    return (
        <S.AnimeContainerStyled>
            <S.AnimeTitleStyled>
                Animes mais populares
            </S.AnimeTitleStyled>
            <S.CardsAnimeStyled>
                {dataAnime.map((anime) => {
                    return (
                        <Card 
                            key={anime.attributes.canonicalTitle}
                            img={anime.attributes.posterImage.tiny}
                            title={anime.attributes.canonicalTitle}
                        />
                    )
                })}
            </S.CardsAnimeStyled>
        </S.AnimeContainerStyled>
    )
}

export default Anime