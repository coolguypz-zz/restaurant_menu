import React, { useState } from 'react'
import menuItems from "./menuItems"
import Menu from "./components/menu"
import Category from './components/category';
import "./style/index.css"

let allCategory = ["all", ...new Set(menuItems.map(v => v.category))].sort();

function App() {
    const [menu, setMenu] = useState(menuItems);
    const [category, setCategory] = useState(allCategory);

    const filterItems = (category) => {
        if (category == "all") {
            setMenu(menuItems);
            return
        }
            const newItems = menuItems.filter(item => item.category == category);
            setMenu(newItems);
    }

    return (
        <div className="menu">
            <Category category={category} filterItems={filterItems} />
            <Menu items={menu} />
        </div>
    )
}


export default App;
