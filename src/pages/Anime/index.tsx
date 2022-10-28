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
    const [animeData, setAnimeData] = useState<Anime[]>([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalData, setModalData]: any = useState({})
    
    useEffect(() => {
        api.get("anime").then((response) => {
            setAnimeData(response.data.data)
        }).catch(() => {
            console.log("Error")
        })
    }, [])

    const openModal = (item: Anime) => {
        setIsModalVisible(true)
        setModalData(item)
    }
    
    return (
        <S.AnimeContainer>
            <S.Title>
                Animes mais populares
            </S.Title>
            <S.CardsAnime>
                {animeData.map((item) => {
                    return (
                        <Card
                            key={item.attributes.canonicalTitle}
                            image={item.attributes.posterImage.tiny}
                            title={item.attributes.canonicalTitle}
                            onClick={() => openModal(item)}
                        />
                    )
                })}
            </S.CardsAnime>
            {isModalVisible ? (
                <Modal
                    image={modalData.attributes.posterImage.tiny}
                    title={modalData.attributes.canonicalTitle}
                    position={modalData.attributes.popularityRank}
                    evaluation={modalData.attributes.averageRating}
                    chapters={modalData.attributes.episodeCount}
                    synopsis={modalData.attributes.synopsis}                  
                />
                ) : null}
        </S.AnimeContainer>
    )
}

export default Anime