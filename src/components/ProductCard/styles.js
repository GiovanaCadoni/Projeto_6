import styled from 'styled-components'

export const Card = styled.article`
width: 320px;             
height: 338px;            
background: #e66767;
padding: 8px;
display: flex;
flex-direction: column;
`

export const Image = styled.img`
width: 304px;       
height: 167px;      
object-fit: cover;
display: block;
`

export const Title = styled.h3`
width: 304px; 
margin: 8px 0;
color: #ffebd9;
font-family: 'Roboto', sans-serif;
font-size: 16px;   
font-weight: 900;  
line-height: 100%;
`

export const Description = styled.p`
width: 304px;      
max-height: 88px;  
color: #ffebd9;
font-family: 'Roboto', sans-serif;
font-size: 14px;   
font-weight: 400;  
line-height: 22px; 
margin: 0 0 8px 0;
overflow: hidden;
`

export const Button = styled.button`
width: 304px;       
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
margin-top: auto;   
padding: 0;
`
