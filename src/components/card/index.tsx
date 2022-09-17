import * as S from './styles'

interface CardProps {
    img: any;
    title: string;
}

const Card = (props:CardProps) => {
    return (
        <S.CardAnimeStyled>
            <img src={props.img} alt="Imagem do Anime"/>
            <h2>{props.title}</h2>
        </S.CardAnimeStyled>
    )
}

export default Card