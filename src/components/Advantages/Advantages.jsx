import './Advantages.css'

const advantages = [
  {
    icon: '⚡',
    title: 'Підбір під задачу',
    text: 'Допомагаємо підібрати обладнання під будинок, бізнес або готову СЕС.',
  },
  {
    icon: '🔋',
    title: 'Комплексні рішення',
    text: 'Інвертори, акумулятори, панелі та комплектуючі в одному місці.',
  },
  {
    icon: '🛡️',
    title: 'Гарантія та підтримка',
    text: 'Працюємо з перевіреними брендами та допомагаємо після покупки.',
  },
  {
    icon: '🚚',
    title: 'Швидка доставка',
    text: 'Відправляємо обладнання по Україні зручним для клієнта способом.',
  },
]

export default function Advantages() {
  return (
    <section className="advantages">
      <div className="sectionHead">
        <p>Переваги</p>
        <h2>Чому обирають IMO</h2>
      </div>

      <div className="advantagesGrid">
        {advantages.map((item) => (
          <div className="advantageCard" key={item.title}>
            <div className="advantageIcon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}