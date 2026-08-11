import { useState } from 'react'
import ConsultationModal from '../components/ConsultationModal/ConsultationModal'

export default function ContactsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="contactsHero">
        <p>Контакти</p>
        <h1>Звʼяжіться з IMO</h1>
        <span>
          Допоможемо підібрати інвертор, акумулятор, сонячні модулі або
          повне рішення для резервного живлення.
        </span>
      </section>

      <section className="contactsPage">
        <div className="contactsGrid">
          <a href="tel:+380637284844" className="contactCard">
            <span>Телефон</span>
            <h3>+380 (63) 728 48 44</h3>
            <p>Натисніть, щоб зателефонувати</p>
          </a>

          <a
            href="https://t.me/IMO_SHOP_UA"
            target="_blank"
            rel="noreferrer"
            className="contactCard"
          >
            <span>Telegram</span>
            <h3>@IMO_SHOP_UA</h3>
            <p>Швидкий звʼязок у месенджері</p>
          </a>

          <a href="mailto:info@imoshop.com" className="contactCard">
            <span>Email</span>
            <h3>info@imoshop.com</h3>
            <p>Для комерційних запитів</p>
          </a>
        </div>

        <div className="contactsCTA">
          <div>
            <p>Потрібна консультація?</p>
            <h2>Залиште номер — ми передзвонимо</h2>
            <span>
              Розкажіть коротко про задачу, а ми допоможемо підібрати
              оптимальне обладнання.
            </span>
          </div>

          <button onClick={() => setIsModalOpen(true)}>
            Отримати консультацію
          </button>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}