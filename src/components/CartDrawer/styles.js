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
align-self: end;   
margin-bottom: 8px; 

img {
    width: 16px;
    height: 16px;
    display: block;
}
`

export const TotalRow = styled.div`
width: 344px;
height: 16px;
margin-top: 40px;   
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
color: #e66767;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 100%;
border: none;
padding: 0;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

&:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
`

export const StepWrap = styled.div`
display: flex;
flex-direction: column;
`

export const StepTitle = styled.h2`
margin: 0 0 16px;
color: #ffebd9;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-weight: 700;
line-height: 100%;
`

export const StepForm = styled.form`
width: 344px;       
align-self: center; 
display: flex;
flex-direction: column;
gap: 8px;
`

export const StepField = styled.div`
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
  box-sizing: border-box;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #4b4b4b;

  outline: none;

  &.error {
    border: 2px solid #ffffff;
  }
}
`

export const StepRow = styled.div`
display: flex;
gap: 34px;

    > ${StepField} {
        width: 155px;
    }
`

export const StepRowCard = styled.div`
display: flex;
gap: 29px;

    > ${StepField}:first-child {
        width: 228px;
    }

    > ${StepField}:last-child {
        width: 87px;
    }
`

export const StepBtnPrimary = styled.button`
width: 100%;        
height: 24px;
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
box-sizing: border-box;
`

export const StepBtnSecondary = styled(StepBtnPrimary)`
margin-top: 8px;
`
export const StepText = styled.p`
margin: 0 0 16px;
color: #ffebd9;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 22px;

strong {
    font-weight: 700;
}
`

export const Warning = styled.p`
width: 344px;
align-self: center;
margin: 8px 0 0;
color: #ffebd9;
font-family: 'Roboto', sans-serif;
font-size: 12px;
font-weight: 400;
zine-height: 16px;
text-align: center;
`

export const FieldError = styled.span`
  margin-top: 4px;
  color: #ffebd9;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 16px;
`