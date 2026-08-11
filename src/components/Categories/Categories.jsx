import { Link } from 'react-router-dom'
import './Categories.css'

const categories = [
  {
    title: 'Сонячні модулі',
    subtitle: 'Панелі для дому та бізнесу',
    value: 'Сонячні модулі',
    image: './src/assets/FEM.png',
  },
  {
    title: 'Інвертори',
    subtitle: 'Гібридні та мережеві рішення',
    value: 'Інвертори',
    image: './src/assets/INV.png',
  },
  {
    title: 'Акумулятори',
    subtitle: 'Накопичення та резерв живлення',
    value: 'Акумулятори',
    image: './src/assets/AKB.png',
  },
]

export default function Categories() {
  return (
    <section className="homeCategories">
      <div className="sectionHead">
        
        <h2>Основні категорії</h2>
      </div>

      <div className="categoryGrid">
        {categories.map((item) => (
          <Link
            to={`/catalog?category=${encodeURIComponent(item.value)}`}
            className="categoryCard"
            key={item.value}
          >
            <img src={item.image} alt={item.title} />

            <div className="categoryOverlay"></div>

            <div className="categoryContent">
              <span>{item.subtitle}</span>

              <div>
                <h3>{item.title}</h3>
                <p>Перейти →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}