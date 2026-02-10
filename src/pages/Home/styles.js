import styled from 'styled-components'

export const Main = styled.main`
background: #fff8f2;
padding: 56px 0;
`

export const Container = styled.div`
width: 100%;
max-width: 1024px;
margin: 0 auto;
`

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 472px); /* cada card tem 472px */
justify-content: space-between;
row-gap: 48px;

@media (max-width: 1024px) {
grid-template-columns: 1fr;
justify-items: center;
}
`
