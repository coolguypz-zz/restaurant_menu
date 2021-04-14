import React from 'react';
import "../style/category.css";

const Category = ({ category, filterItems }) => {

    return (
        <div className="category">
            <div className="categories">
                {category.map((v, i) => {
                    return (
                        <div key={i} className="category-button"
                                onClick={() => filterItems(v)}>
                                {v}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Category;

