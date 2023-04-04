import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

//Componente para agregar el boton de filtrado en el header
function DropdownButton({ margin, array, food, setFood }) {
    //Funcion para cambiar el estado a true de la comida que se clickee en el boton de filtrado
    const seeMeal = (id) => {
        //Encontrando el index que tiene el item de la lista que se clickee, para eso, en el componente agregamos
        //un id que lo identificara al clickearlo y es igual al del array DUMMY_MEALS
        let i = food.findIndex((obj) => obj.id === id);

        //Cambiando el valor a true el estado del almuerzo que clickeamos, recorremos el array de estados (food), si el id del elemento actual es igual al id del item que identificamos encontrando el index, entonces ese item sera igual a un objeto con el id del elemento que encontramos y un shownState true, de lo contrario, sera igual al id del item, y un shownState false.
        const newStates = food.map((item) =>
            item.id === food[i].id
                ? { id: food[i].id, shownState: true }
                : { id: item.id, shownState: false }
        );
        setFood(newStates);
    };

    //Funcion para devolver todos los estados vinculados a los almuerzos a falso, para que se muestren todos
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
                {
                    //Iterando en el array DUMMY_MEALS para hacer el boton de filtrado con los nombres de los alimentos
                }
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
