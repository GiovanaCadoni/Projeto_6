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
`

export const Category = styled.span`
position: absolute;
top: 25px;
left: 16px;
color: #ffffff;
font-family: 'Roboto', sans-serif;
font-size: 32px;
font-weight: 100;
line-height: 100%;
`

export const Name = styled.h2`
position: absolute;
top: 214.75px; 
left: 16px;
margin: 0;
max-width: 676px;
color: #ffffff;
font-family: 'Roboto', sans-serif;
font-size: 32px;
font-weight: 900;
line-height: 100%;
`
