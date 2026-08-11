import { useState } from 'react'

export default function ConsultationModal({
  isOpen,
  onClose,
}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyfc-C0YxxCizhjZSWCFPQjArrKantKg0RKlFWE9DJy1zEckwWfpMwALpqm9k1znb2ItA/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            type: 'consultation',
            name,
            phone,
          }),
        }
      )

      alert('Дякуємо! Ми звʼяжемося з вами.')

      setName('')
      setPhone('')
      onClose()
    } catch (error) {
      console.error(error)
      alert('Помилка відправки')
    }
  }

  return (
    <>
      <div
        className="modalOverlay"
        onClick={onClose}
      ></div>

      <div className="consultationModal">
        <button
          className="closeModal"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>Підібрати рішення</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ваше імʼя"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="tel"
            placeholder="Номер телефону"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            required
          />

          <button type="submit">
            Передзвоніть мені
          </button>
        </form>
      </div>
    </>
  )
}