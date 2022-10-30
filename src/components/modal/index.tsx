import iconHeart from '../../assets/iconHeart.svg'
import iconStar from '../../assets/iconStar.svg'

import * as S from './styles'

interface ModalProps {
    image: any;
    title: string;
    position: string;
    chapters: string;
    evaluation: string;
    synopsis: string;
}

const Modal = (props:ModalProps) => {
    return (
        <S.Modal>
            <S.ModalContainer>
                <S.ImageContainer>
                    <img src={props.image} />
                </S.ImageContainer>
                <S.AttributesContainer>
                    <S.Title>
                        <h2>{props.title}</h2>
                        <img src={iconHeart} />
                    </S.Title>
                    <S.Attributes>
                        <S.ChaptersContainer>
                            <p>Posição: {props.position}</p>
                            <p>Capítulos/Epsiódeos: {props.chapters}</p>
                        </S.ChaptersContainer>
                        <S.IconStarContainer>
                            <img src={iconStar} />
                        </S.IconStarContainer>
                        <S.EvaluationContainer>
                            <p>Avaliação: {props.evaluation}</p>
                        </S.EvaluationContainer>
                    </S.Attributes>
                    <S.Sinopse>
                        <h2>Sinopse</h2>
                        <p>{props.synopsis}</p>
                    </S.Sinopse>
                </S.AttributesContainer>
            </S.ModalContainer>
        </S.Modal>
    )
}

export default Modal