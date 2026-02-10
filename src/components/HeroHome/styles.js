import styled from 'styled-components'
import fundo from '../../assets/images/fundo_header.png'

export const Wrapper = styled.header`
  height: 384px;
  background-image: url(${fundo});
  background-repeat: repeat;
  position: relative;
`

export const Logo = styled.img`
  position: absolute;
  top: 40px;             /* Figma */
  left: 50%;
  transform: translateX(-50%);
  width: 125px;          /* Figma */
  height: auto;
`

export const Title = styled.h1`
  position: absolute;
  top: 236px;            /* Figma */
  left: 50%;
  transform: translateX(-50%);
  width: 539px;          /* Figma */

  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  line-height: 100%;
  font-weight: 900;
  color: #e66767;

  @media (max-width: 600px) {
    width: 90%;
    font-size: 24px;
  }
`
