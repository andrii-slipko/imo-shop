import Advantages from '../components/Advantages/Advantages'

export default function AboutPage() {
  return (
    <>
      <section className="aboutHero">
        <p>Про компанію</p>
        <h1>IMO — рішення для енергонезалежності дому та бізнесу</h1>
        <span>
          Допомагаємо підібрати обладнання для сонячних електростанцій,
          резервного живлення та накопичення енергії.
        </span>
      </section>

      <section className="aboutText">
        <h2>Що ми робимо</h2>
        <p>
          Ми працюємо з обладнанням для сонячної енергетики: інверторами,
          акумуляторами, сонячними модулями та комплектуючими. Наша задача —
          не просто продати товар, а допомогти клієнту підібрати рішення під
          конкретну задачу.
        </p>
      </section>

      <Advantages />
    </>
  )
}