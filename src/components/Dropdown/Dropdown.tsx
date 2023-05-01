import React, { MouseEventHandler, useEffect, useState } from 'react'
import IconDropdown from 'assets/header/icon-dropdown.svg'
import IconPlusMobile from 'assets/header/icon-header-plus-mobile.svg'
import IconMinusMobile from 'assets/header/icon-header-minus-mobile.svg'
import { NavLink } from 'react-router-dom'
import { PagesRoutes } from 'routes'

export interface PathOption {
  name: string
  path: PagesRoutes
}

interface DropdownProps {
  text: string
  options: PathOption[]
  clickHandler: MouseEventHandler<any>
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  text,
  clickHandler,
}) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!active) return

    const hideDropdown: any = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (
        !target.classList.contains('nav__dropdown-inner') &&
        !target.classList.contains('nav__dropdown')
      ) {
        setActive(false)
      }
    }

    document.body.addEventListener('click', hideDropdown)

    return () => document.body.removeEventListener('click', hideDropdown)
  }, [active])

  const showDropdown: MouseEventHandler<HTMLSpanElement> = (e) => {
    e.stopPropagation()

    setActive(true)
  }

  return (
    <a className="desktop" style={active ? { height: '100%' } : undefined}>
      <span
        className="nav__dropdown-inner"
        onClick={active ? () => setActive(false) : showDropdown}>
        {text}
        <img src={IconDropdown} className="desktop-image-mobile" alt="" />
        <img
          src={active ? IconMinusMobile : IconPlusMobile}
          className="image-mobile"
        />
      </span>

      {active && (
        <span className="nav__dropdown">
          {options.map((op) => (
            <NavLink to={op.path} key={op.name} onClick={clickHandler}>
              {op.name}
            </NavLink>
          ))}
        </span>
      )}
    </a>
  )
}
