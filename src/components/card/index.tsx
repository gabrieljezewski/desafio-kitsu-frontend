import * as S from './styles'

interface CardProps {
    img: any;
    title: string;
    onClick: () => void;
}

const Card = (props:CardProps) => {
    return (
        <S.CardAnime onClick={props.onClick}>
            <img src={props.img} alt="Imagem do Anime"/>
            <h2>{props.title}</h2>
        </S.CardAnime>
    )
}

export default Card