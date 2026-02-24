import styled from 'styled-components'

export const Overlay = styled.div`
position: fixed;
inset: 0;
background: rgba(0, 0, 0, 0.8);
z-index: 999;
`

export const Drawer = styled.aside`
position: absolute;
top: 0;
right: 0;
width: 360px;
height: 100%;
background: #e66767;
padding: 32px 16px;
display: flex;
flex-direction: column;
`

export const Title = styled.h2`
margin: 0 0 16px;
color: #ffebd9;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: 700;
line-height: 100%;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 8px;
`

export const Field = styled.div`
display: flex;
flex-direction: column;
gap: 8px;

label {
    color: #ffebd9;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
}

input {
    width: 100%;
    height: 32px;

    background: #ffebd9;
    border: none;
    padding: 0 8px;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #4b4b4b;
    outline: none;
}
`

export const Row = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 34px; 

${Field} input {
    width: 100%;
}
`

const BaseButton = styled.button`
width: 344px;
height: 24px;
align-self: center;
background: #ffebd9;
color: #e66767;
border: none;
padding: 0;
cursor: pointer;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const ButtonPrimary = styled(BaseButton)`
margin-top: 16px;
`

export const ButtonSecondary = styled(BaseButton)`
margin-top: 8px;
`