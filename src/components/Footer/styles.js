import styled from 'styled-components'

export const Wrapper = styled.footer`
height: 298px;
width: 100%;
background: #ffebd9;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Logo = styled.img`
width: 125px;
height: auto;
margin-bottom: 32.5px;   /* Figma */
`

export const Social = styled.div`
display: flex;
gap: 8px;
margin-bottom: 80px;     /* Figma */

img {
    width: 24px;
    height: 24px;
    display: block;
}
`

export const Text = styled.p`
width: 480px;
text-align: center;
color: #e66767;
font-family: 'Roboto', sans-serif;
font-size: 10px;
font-weight: 400;
line-height: 100%;
margin: 0;

@media (max-width: 520px) {
    width: 90%;
}
`
