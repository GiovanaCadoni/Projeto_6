import styled from 'styled-components'

export const Page = styled.div`
padding: 24px 16px;
`

export const Container = styled.div`
max-width: 720px;
margin: 0 auto;
`

export const Title = styled.h1`
margin: 0 0 12px;
font-family: 'Roboto', sans-serif;
`

export const Text = styled.p`
font-family: 'Roboto', sans-serif;
`

export const Box = styled.div`
margin: 16px 0;
padding: 12px;
border: 1px solid #ccc;
display: flex;
gap: 8px;
align-items: center;

strong, span {
    font-family: 'Roboto', sans-serif;
}
`

export const Back = styled.div`
margin-top: 16px;

a {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
}
`