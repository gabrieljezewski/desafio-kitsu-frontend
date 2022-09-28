import { useEffect, useState } from 'react'
import api from '../../services/api'

import * as S from './styles'
import Card from '../../components/card'
import Modal from '../../components/modal'


interface Anime {
    attributes: {
        canonicalTitle: string;
        posterImage: any;
        popularityRank: number;
        averageRating: number;
        episodeCount: number;
        synopsis: string;
    }
}

const Anime = () => {
    const [animeData, setAnimeData] = useState<Anime[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalData, setModalData]: any = useState({});
    
    useEffect(() => {
        api.get("anime").then((response) => {
            setAnimeData(response.data.data)
        }).catch(() => {
            console.log("Error")
        })
    }, [])

    const openModal = (item: any) => {
        setIsModalVisible(true)
        setModalData(item)
    }
    
    return (
        <S.AnimeContainerStyled>
            <S.AnimeTitleStyled>
                Animes mais populares
            </S.AnimeTitleStyled>
            <S.CardsAnimeStyled>
                {animeData.map((item) => {
                    return (
                        <Card
                            key={item.attributes.canonicalTitle}
                            img={item.attributes.posterImage.tiny}
                            title={item.attributes.canonicalTitle}
                            onClick={() => openModal(item)}
                        />
                    )
                })}
            </S.CardsAnimeStyled>
            {isModalVisible ? (
                <Modal
                    img={modalData.attributes.posterImage.tiny}
                    title={modalData.attributes.canonicalTitle}
                    position={modalData.attributes.popularityRank}
                    evaluation={modalData.attributes.averageRating}
                    chapters={modalData.attributes.episodeCount}
                    synopsis={modalData.attributes.synopsis}
                />
                ) : null}
        </S.AnimeContainerStyled>
    )
}

export default Anime