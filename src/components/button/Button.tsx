import { ButtonHTMLAttributes, DOMAttributes } from 'react'
import styled from '@emotion/styled'
import { Theme } from '@emotion/react'
import { CSSObject } from '@emotion/serialize'

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
    <StyledButton {...buttonAttributes} variety={variety} size={size}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button<ButtonVariation>(
  {
    width: '100%',
    borderRadius: '6px',
    backgroundColor: 'transparent',
    border: 'none',
  },
  ({ size }) => SIZE[size],
  ({ variety, theme }) => VARIETY[variety](theme),
  ({ theme }) => ({
    ':disabled': {
      backgroundColor: theme.color.grey500,
      cursor: 'default',
    },
  })
)

const SIZE: { [key in ButtonVariation['size']]: CSSObject } = {
  large: {
    height: '60px',
  },
  medium: {
    height: '40px',
  },
  small: {
    height: '30px',
  },
}

const VARIETY: {
  [key in ButtonVariation['variety']]: (theme: Theme) => CSSObject
} = {
  contained: (theme: Theme) => ({
    color: theme.color.white,
    backgroundColor: theme.color.blue500,

    ':is(:hover, :focus)': {
      backgroundColor: theme.color.blue600,
    },
    ':active': {
      backgroundColor: theme.color.blue700,
    },
  }),
  outlined: (theme: Theme) => ({
    border: `1px solid ${theme.color.blue500}`,
    color: theme.color.blue500,

    ':is(:hover, :focus)': {
      backgroundColor: theme.color.blue50,
    },
    ':active': {
      backgroundColor: theme.color.blue100,
    },
  }),
  text: (theme: Theme) => ({
    color: theme.color.blue500,

    ':is(:hover, :focus)': {
      backgroundColor: theme.color.blue50,
    },
    ':active': {
      backgroundColor: theme.color.blue100,
    },
  }),
}
