import styled from 'styled-components'

export const Card = styled.article`
width: 472px;             
height: 398px;             
border: 1px solid #e66767; 
background: #fff;
display: flex;
flex-direction: column;
`

export const ImageWrapper = styled.div`
position: relative;
width: 100%;
height: 217px; /* ajustado pra caber no total 398px */
overflow: hidden;
`

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
display: block;
`

export const Tags = styled.div`
position: absolute;
top: 16px;
right: 16px;
display: flex;
gap: 8px;
`

export const Tag = styled.span`
background: #e66767;
color: #ffebd9;
font-size: 12px;
font-weight: 700;
padding: 6px 8px;
`

export const Content = styled.div`
padding: 12px;
display: flex;
flex-direction: column;
gap: 10px;
flex: 1;
`

export const HeaderRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const Title = styled.h3`
color: #e66767;
font-family: 'Roboto', sans-serif;
font-size: 18px;   
font-weight: 700;  
line-height: 100%;
margin: 0;
`

export const Rating = styled.div`
display: flex;
align-items: center;
gap: 8px;
color: #e66767;
font-family: 'Roboto', sans-serif;
font-size: 18px;
font-weight: 700;
line-height: 100%;

span {
display: block;
}

img {
width: 21px;
height: 21px;
display: block;
transform: translateY(-3px); /* <-- alinhamento fino */
}
`

export const Description = styled.p`
width: 456px;
max-width: 100%;
color: #e66767;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 22px;
margin: 0;
max-height: 88px;
overflow: hidden;
`

export const Button = styled.button`
width: 82px;              
height: 24px;              
background: #e66767;
color: #ffebd9;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 0;
`
