import { useState } from 'react'
import ConsultationModal from '../ConsultationModal/ConsultationModal'
import './Hero.css'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="hero">
        <div className="heroContent">
         
          <button
            className="heroButton"
            onClick={() => setIsModalOpen(true)}
          >
            Оформити
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