import styled from 'styled-components'
import fundo from '../../assets/images/fundo_header.png'

export const Wrapper = styled.header`
height: 186px; 
background-image: url(${fundo});
background-repeat: repeat;
`

export const Inner = styled.div`
width: 100%;
max-width: 1024px;
margin: 0 auto;
padding: 59px 16px 0; 
display: grid;
grid-template-columns: 1fr auto 1fr;
align-items: center;
`

export const Left = styled.div`
justify-self: start;

a {
color: #e66767;
font-family: 'Roboto', sans-serif;
font-size: 18px;
font-weight: 900;
line-height: 100%;
}
`

export const Center = styled.div`
justify-self: center;

img {
    width: 125px;
    height: auto;
    display: block;
}
`

export const Right = styled.div`
justify-self: end;
color: #e66767;
font-family: 'Roboto', sans-serif;
font-size: 18px;
font-weight: 900;
line-height: 100%;
text-align: right;
`