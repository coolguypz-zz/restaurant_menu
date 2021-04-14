import React from 'react'
import "../style/menu.css"


const Menu = ({items}) => {

    return (
        <div className="menu-section-center">
            {
                items.map((menuItem) => {
                    const { id, title, img, desc,price } = menuItem;
                    return (
                        <div key={id} className="menu-item">
                            <div className="info">
                                <div className= "title">{title}</div>
                                <div className="price">$ {price}</div>
                            </div>
                            <div className="line"></div>
                            <img src={img} alt={title} />
                            <div className="desc">{desc}</div>
                        </div>
                    )
                })
            }
        </div>

    )

}

export default Menu;
