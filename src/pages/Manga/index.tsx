import { useEffect, useState } from 'react'
import api from '../../services/api'

import * as S from './styles'
import Card from '../../components/card'
import Modal from '../../components/modal'

interface Manga {
    attributes: {
        canonicalTitle: string;
        posterImage: any;
        popularityRank: number;
        averageRating: number;
        episodeCount: number;
        synopsis: string;
    }
}

const Manga = ({input}: any) => {
    const [mangaData, setMangaData] = useState<Manga[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalData, setModalData]: any = useState({});

    useEffect(() => {
        api.get(input.length > 0 ? `manga?filter[text]=${input}` : "manga").then((response) => {
            setMangaData(response.data.data)
        }).catch(() => {
            console.log("Error")
        })
}, [input])
        console.log(mangaData)

    const openModal = (item: Manga) => {
        setIsModalVisible(true)
        setModalData(item)
    }

    return (
        <S.MangaContainer>
            <S.Title>
                Animes mais populares
            </S.Title>
            <S.CardsManga>
                {mangaData.map((item) => {
                    return (
                        <Card
                            key={item.attributes.canonicalTitle}
                            image={item.attributes.posterImage.tiny}
                            title={item.attributes.canonicalTitle}
                            onClick={() => openModal(item)}
                        />
                    )
                })}
            </S.CardsManga>
            {isModalVisible ? (
                <Modal
                    setIsModalVisible={setIsModalVisible}
                    image={modalData.attributes.posterImage.tiny}
                    title={modalData.attributes.canonicalTitle}
                    position={modalData.attributes.popularityRank}
                    evaluation={modalData.attributes.averageRating}
                    chapters={modalData.attributes.chapterCount}
                    synopsis={modalData.attributes.synopsis}
                />
                ) : null}
        </S.MangaContainer>
    )
}

export default Manga