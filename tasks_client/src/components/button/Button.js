import React from 'react'
import Button from 'react-bootstrap/Button'

const _Button = ({ className, onClick, type, title, variant }) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {title}
    </Button>
  )
}

export default _Button
