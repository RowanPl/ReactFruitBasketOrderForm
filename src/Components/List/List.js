import React from "react";
import Button from "../Button/Button";


function List({setFruitCount,fruitName , fruitCount }){

    return (

            <li> {fruitName}
            <Button type="button"
                    disabled={fruitCount === 0}
                    clickHandler={() => setFruitCount(fruitCount - 1)}>
                -
            </Button>
            <p>{fruitCount}</p>
            <Button type="button" clickHandler={() => setFruitCount(fruitCount + 1)}>
                +
            </Button>
            </li>

    );
}

export default List;