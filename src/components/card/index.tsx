import * as S from './styles'

interface CardProps {
    image: any;
    title: string;
    onClick: () => void;
}

const Card = (props:CardProps) => {
    return (
        <S.CardAnime onClick={props.onClick}>
            <img src={props.image} alt="Imagem do Anime"/>
            <h2>{props.title}</h2>
        </S.CardAnime>
    )
}

export default Card