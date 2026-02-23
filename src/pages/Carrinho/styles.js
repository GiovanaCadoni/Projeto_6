import styled from 'styled-components'

export const Page = styled.div`
min-height: 100vh;
background: #fff8f2;
`

export const Header = styled.header`
background: #ffebd9;
padding: 20px 0;

a, h1, button {
    color: #e66767;
    font-family: 'Roboto', sans-serif;
}

h1 {
    margin: 0;
    font-size: 18px;
    font-weight: 900;
    line-height: 100%;
}

button {
    background: transparent;
    font-weight: 900;
}
`

export const Container = styled.div`
width: 100%;
max-width: 1024px;
margin: 0 auto;
padding: 0 16px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Empty = styled.p`
margin-top: 40px;
color: #e66767;
font-family: 'Roboto', sans-serif;
font-weight: 700;
`

export const List = styled.div`
width: 100%;
margin: 32px 0;
display: flex;
flex-direction: column;
gap: 16px;
`

export const Item = styled.div`
width: 100%;
border: 1px solid #e66767;
background: #fff;
padding: 12px;
display: grid;
grid-template-columns: 80px 1fr auto;
gap: 12px;
align-items: center;
`

export const Thumb = styled.img`
width: 80px;
height: 80px;
object-fit: cover;
display: block;
`

export const Info = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
`

export const Name = styled.h3`
margin: 0;
color: #e66767;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: 900;
`

export const Price = styled.div`
color: #e66767;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
`

export const QtyRow = styled.div`
display: flex;
align-items: center;
gap: 10px;

button {
    width: 28px;
    height: 28px;
    background: #e66767;
    color: #ffebd9;
    font-weight: 900;
}

span {
    min-width: 24px;
    text-align: center;
    color: #e66767;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
}
`

export const Remove = styled.button`
background: #e66767;
color: #ffebd9;
height: 28px;
padding: 0 10px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
`

export const TotalRow = styled.div`
width: 100%;
border-top: 1px solid #e66767;
padding: 16px 0;
display: flex;
align-items: center;
justify-content: space-between;

span, strong {
    color: #e66767;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 900;
}
`