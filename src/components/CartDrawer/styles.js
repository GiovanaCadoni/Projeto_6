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
  height: 100%;
  width: 360px;
  background: #e66767;
  padding: 16px;

  display: flex;
  flex-direction: column;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
  padding-right: 4px;
`

export const Item = styled.div`
  background: #ffebd9;
  padding: 8px;

  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 12px;
  align-items: start;
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
  gap: 16px;
`

export const Name = styled.h3`
  margin: 0;
  color: #e66767;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 900;
  line-height: 100%;

`

export const Price = styled.p`
  margin: 0;
  color: #e66767;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export const Trash = styled.button`
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  align-self: end;   /* 👈 ISSO desce ela */
  margin-bottom: 8px; /* 👈 ajuste fino (igual Figma) */

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`

export const TotalRow = styled.div`
  width: 344px;
  height: 16px;

  margin-top: 40px;   /* 👈 Figma */

  display: flex;
  justify-content: space-between;
  align-items: center;

  align-self: center;

  span,
  strong {
    color: #ffebd9;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
  }
`

export const Continue = styled.button`
  width: 344px;
  height: 24px;

  margin-top: 16px;
  align-self: center;

  background: #ffebd9;
  color: #e66767;  /* Figma */

  font-family: 'Roboto', sans-serif;
  font-size: 14px;     /* Figma */
  font-weight: 700;    /* Bold */
  line-height: 100%;   /* Figma */

  border: none;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;   /* centraliza vertical */
  justify-content: center; /* centraliza horizontal */

  text-align: center;
`