import type { ReactNode } from 'react'
import ButtonSvg from '../../assets/svg/ButtonSvg'

type ButtonProps = {
  className?: string
  href?: string
  onClick?: () => void
  children: ReactNode
  px?: string
  white: string
}

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white
}: ButtonProps) => {
  const buttonClasses = `button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`

  const spanClasses = `relative z-10`

  const renderButton = () => (
    <button className={buttonClasses} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  )

  const renderLink = () => (
    <a href={href} className={buttonClasses}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  )

  return href ? renderLink() : renderButton()
}

export default Button
