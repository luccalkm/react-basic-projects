import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const listAllCategories = [
  'all',
  ...new Set(items.map((item) => item.category)),
]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(listAllCategories)

  const filterItems = (category) => {
    if (category.toLowerCase() === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
