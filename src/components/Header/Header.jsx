import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const items = useSelector((state) => state.cart.items)
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="header">
      <div className="headerTop">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          IMO
        </NavLink>

      <nav className="nav">
  <NavLink to="/">Головна</NavLink>
  <NavLink to="/catalog">Товари</NavLink>
  <NavLink to="/about">Про компанію</NavLink>
  <NavLink to="/contacts">Контакти</NavLink>

  <NavLink to="/cart" className="cartLink">
  <span>Кошик</span>

  {totalQuantity > 0 && (
    <span className="cartBadge">{totalQuantity}</span>
  )}
</NavLink>
</nav>

        <a
  href="tel:+380637284844"
  className="headerPhone"
>
  +380 (63) 728 48 44
  <span>вхідний номер</span>
</a>

        <button className="burger" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      </div>

      

      <div className={`menuOverlay ${isOpen ? 'active' : ''}`} onClick={closeMenu} />

      <nav className={`mobileMenu ${isOpen ? 'open' : ''}`}>
        <button className="closeMenu" onClick={closeMenu}>✕</button>
        <NavLink to="/" onClick={closeMenu}>Головна</NavLink>
        <NavLink to="/catalog" onClick={closeMenu}>Товари</NavLink>
        <NavLink to="/about" onClick={closeMenu}>Про компанію</NavLink>
        <NavLink to="/contacts" onClick={closeMenu}>Контакти</NavLink>
        <NavLink to="/cart" onClick={closeMenu}>Кошик ({totalQuantity})</NavLink>
      </nav>
    </header>
  )
}