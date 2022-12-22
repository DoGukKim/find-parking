import { ButtonHTMLAttributes, DOMAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

type ButtonVariation = {
  variety: 'text' | 'contained' | 'outlined'
  size: 'small' | 'medium' | 'large'
}

type ButtonProps = DOMAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<ButtonVariation>

const Button = ({
  children,
  variety = 'contained',
  size = 'medium',
  ...buttonAttributes
}: ButtonProps) => {
  return (
    <Wrapper {...buttonAttributes} variety={variety} size={size}>
      {children}
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button<ButtonVariation>`
  margin: 10px 0;

  width: 100%;
  border-radius: 6px;
  background-color: transparent;
  border: none;

  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          height: 60px;
        `
      case 'medium':
        return css`
          height: 40px;
        `
      default:
        return css`
          height: 30px;
        `
    }
  }}

  ${({ theme, variety }) => {
    switch (variety) {
      case 'contained':
        return css`
          background-color: ${theme.color.blue500};
          color: ${theme.color.white};
        `
      case 'outlined':
        return css`
          border: 1px solid ${theme.color.blue500};
          color: ${theme.color.blue500};
        `
      default:
        return css`
          color: ${theme.color.blue500};
        `
    }
  }}


  &:is(:hover, :focus) {
    ${({ theme, variety }) => {
      switch (variety) {
        case 'contained':
          return css`
            background-color: ${theme.color.blue600};
          `
        case 'outlined':
        case 'text':
          return css`
            background-color: ${theme.color.blue50};
          `
      }
    }}
  }

  &:active {
    ${({ theme, variety }) => {
      switch (variety) {
        case 'contained':
          return css`
            background-color: ${theme.color.blue700};
          `
        case 'outlined':
        case 'text':
          return css`
            background-color: ${theme.color.blue100};
          `
      }
    }}
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.grey500};
    cursor: default;
  }
`
