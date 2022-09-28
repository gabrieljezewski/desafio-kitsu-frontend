import iconHeart from '../../assets/iconHeart.svg'
import iconStar from '../../assets/iconStar.svg'

import * as S from './styles'

interface ModalProps {
    img: any;
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
                    <img src={props.img} />
                </S.ImageContainer>
                <S.Title>
                    <h1>{props.title}</h1>
                    <img src={iconHeart} />
                </S.Title>
                <S.Attributes>
                    <p>Posição: {props.position}</p>
                    <p>Capítulos/Epsiódeos: {props.chapters}</p>
                    <img src={iconStar} />
                    <p>Avaliação: {props.evaluation}</p>
                </S.Attributes>
                <S.Sinopse>
                    <h2>Sinopse</h2>
                    <p>{props.synopsis}</p>
                </S.Sinopse>
            </S.ModalContainer>
        </S.Modal>
    )
}

export default Modal