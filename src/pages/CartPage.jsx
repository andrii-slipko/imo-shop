import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../redux/cartSlice'

export default function CartPage() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleSubmit = async (e) => {
  e.preventDefault()

  const order = {
    name,
    phone,
    items,
    totalPrice,
  }

  try {
  await fetch('https://script.google.com/macros/s/AKfycbyfc-C0YxxCizhjZSWCFPQjArrKantKg0RKlFWE9DJy1zEckwWfpMwALpqm9k1znb2ItA/exec', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(order),
  })

  alert('Замовлення прийнято! Ми звʼяжемося з вами.')

  dispatch(clearCart())
  setName('')
  setPhone('')
} catch (error) {
  console.error(error)
  alert('Помилка відправки замовлення')
}
}

  if (items.length === 0) {
    return (
      <section className="cartPage">
        <h1>Кошик</h1>
        <p>Кошик порожній</p>
      </section>
    )
  }

  return (
    <section className="cartPage">
      <h1>Кошик</h1>

      <div className="cartList">
        {items.map((item) => (
          <div className="cartItem" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div>
              <h3>{item.title}</h3>
              <p>{item.price.toLocaleString('uk-UA')} ₴</p>

              <div className="quantity">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
            </div>

            <button
              className="deleteBtn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Видалити
            </button>
          </div>
        ))}
      </div>

      <form className="orderForm" onSubmit={handleSubmit}>
        <h2>Оформлення замовлення</h2>

        <input
          type="text"
          placeholder="Ваше імʼя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Номер телефону"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <div className="cartTotal">
          <h2>Разом: {totalPrice.toLocaleString('uk-UA')} ₴</h2>
          <button type="submit">Оформити замовлення</button>
        </div>
      </form>
    </section>
  )
}