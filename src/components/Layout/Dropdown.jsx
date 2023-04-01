import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DropdownButton({ margin, array }) {
    const shownStates = array.map((food) => {
        return {
            id: food.id,
            shownState: false,
        };
    });
    const [food, setFood] = useState(shownStates);
    /* console.log(food);
    console.log(DUMMY_MEALS.filter((obj) => obj.id === food[1].id)); */
    const seeMeal = (id) => {
        console.log(id);
        let i = food.findIndex((obj) => obj.id === id);
        const newStates = food.map((item) =>
            item.id === food[i].id
                ? { id: food[i].id, shownState: true }
                : { id: item.id, shownState: false }
        );
        //setFood([...food, (food[i].shownState = true)]);
        setFood(newStates);
    };

    const seeDefault = () => {
        const defaultState = food.map((obj) => {
            return { id: obj.id, shownState: false };
        });
        setFood(defaultState);
    };
    /* useEffect(() => {
        console.log(food.filter((obj) => obj.shownState === true));
    }, [food]); */
    return (
        <Dropdown className={margin}>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={seeDefault}>All</Dropdown.Item>
                {array.map((item) => (
                    <Dropdown.Item
                        id={item.id}
                        key={item.id}
                        onClick={(e) => seeMeal(e.target.id)}
                    >
                        {item.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownButton;
