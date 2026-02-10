import styled from 'styled-components'
import fundo from '../../assets/images/fundo_header.png'

export const Wrapper = styled.header`
background-image: url(${fundo});
background-repeat: repeat;
height: 186px; /* se você me passar do Figma eu cravo */
display: flex;
align-items: center;
`

export const Inner = styled.div`
width: 100%;
max-width: 1024px;
margin: 0 auto;
padding: 0 16px;
display: grid;
grid-template-columns: 1fr auto 1fr;
align-items: center;
color: #e66767;
font-family: 'Roboto', sans-serif;
font-weight: 700;
`

export const Left = styled.div`
justify-self: start;
`

export const Center = styled.div`
justify-self: center;

img {
    width: 125px;
    height: auto;
}
`

export const Right = styled.div`
justify-self: end;
`
