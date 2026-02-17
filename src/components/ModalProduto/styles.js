import styled from 'styled-components'

export const Overlay = styled.div`
position: fixed;
inset: 0;
background: rgba(0, 0, 0, 0.8);
display: flex;
align-items: center;
justify-content: center;
padding: 16px;
z-index: 999;
`

export const Container = styled.div`
width: 100%;
max-width: 1024px;
background: #e66767;
padding: 32px;
position: relative;
display: grid;
grid-template-columns: 280px 1fr;
gap: 24px;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
}
`

export const Close = styled.button`
position: absolute;
top: 16px;
right: 16px;
width: 16px;
height: 16px;
background: transparent;
border: none;
padding: 0;
cursor: pointer;

img {
    width: 16px;   
    height: 16px;  
    display: block;
}
`

export const Image = styled.img`
width: 100%;
height: 280px;
object-fit: cover;
display: block;
`

export const Content = styled.div`
color: #ffebd9;
font-family: 'Roboto', sans-serif;
`

export const Title = styled.h3`
margin: 0 0 16px 0;
color: #ffffff;
font-family: 'Roboto', sans-serif;
font-size: 18px;     
font-weight: 900;    
line-height: 100%;
`

export const Description = styled.p`
width: 656px;        
max-width: 100%;
height: 176px;       
color: #ffffff;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 22px;
margin: 0 0 16px 0;
overflow: hidden;
`

export const Portion = styled.p`
color: #ffffff;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 22px;
margin: 0 0 16px 0;
`

export const Button = styled.button`
width: 100%;          
height: 24px;
background: #ffebd9;
color: #e66767;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 0;
`
