import styled from 'styled-components'

export const Wrapper = styled.section`
height: 280px;
background-image: url(${(p) => p.$bg});
background-size: cover;
background-position: center;
position: relative;
`

export const Overlay = styled.div`
position: absolute;
inset: 0;
background: rgba(0, 0, 0, 0.5);
`

export const Inner = styled.div`
position: relative;
max-width: 1024px;
margin: 0 auto;
height: 100%;
padding: 0 16px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 12px;
color: #fff;
font-family: 'Roboto', sans-serif;
`

export const Category = styled.span`
font-size: 18px;
font-weight: 100;
opacity: 0.9;
`

export const Name = styled.h2`
width: 676px;     
margin: 0;
color: #ffffff;
font-family: 'Roboto', sans-serif;
font-size: 32px;     
font-weight: 900;    
line-height: 100%;

@media (max-width: 700px) {
    width: 90%;
    font-size: 24px;
}
`
