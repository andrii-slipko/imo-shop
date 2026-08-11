import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerBrand">
          <h2>IMO</h2>
          <p>
            Обладнання для сонячної енергетики, резервного живлення
            та енергонезалежності дому й бізнесу.
          </p>
        </div>

        <div className="footerColumn">
          <h4>Меню</h4>
          <NavLink to="/">Головна</NavLink>
          <NavLink to="/catalog">Товари</NavLink>
          <NavLink to="/about">Про компанію</NavLink>
          <NavLink to="/contacts">Контакти</NavLink>
        </div>

        <div className="footerColumn">
          <h4>Категорії</h4>
          <NavLink to="/catalog?category=Сонячні модулі">Сонячні модулі</NavLink>
          <NavLink to="/catalog?category=Інвертори">Інвертори</NavLink>
          <NavLink to="/catalog?category=Акумулятори">Акумулятори</NavLink>
        </div>

        <div className="footerColumn">
          <h4>Контакти</h4>
          <a href="tel:+380637284844">+380 (63) 728 48 44</a>
          <a href="mailto:info@imoshop.com">info@imoshop.com</a>
          <a href="https://t.me/IMO_SHOP_UA" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </div>

      <div className="footerBottom">
        <span>© 2026 IMO. Всі права захищені.</span>
        <span>Energy solutions for Ukraine</span>
      </div>
    </footer>
  )
}