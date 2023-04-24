import classes from "./MenuPage.module.css";
import SubHeader from "../Layout/SubHeader";
import { useState, useEffect } from "react";
import axios from "axios";

const MenuPage = () => {
  const [mealId, setMealId] = useState("");
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealPrice, setMealPrice] = useState("");
  const [mealTag, setMealTag] = useState("");
  const [mealPicture, setMealPicture] = useState("");
  const [editMeals, setEditMeals] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);

  const AddMealsHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/menu", {
        id: mealId,
        name: mealName,
        description: mealDescription,
        price: mealPrice,
        tag: mealTag,
        picture: mealPicture,
      });

      alert("Add successsful.");
      setMealId("");
      setMealName("");
      setMealDescription("");
      setMealPrice("");
      setMealTag("");
      setMealPicture("");
    } catch (error) {
      alert("Add failed. Try again later.");
      console.error(error);
    }
  };

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await axios.get("/api/menu");

        if (response.status === 200) {
          const allMeals = await response.data.data;

          const editMeals = allMeals.map((meal, index) => (
            <option key={index} value={meal.id}>
              {meal.name}
            </option>
          ));
          setEditMeals(editMeals);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getMenu();
  }, [mealId]);

  const handleEditMealChange = async (event) => {
    setSelectedMeal(event.target.value);
    try {
      const response = await axios.get(`/api/menu/${event.target.value}`);
      if (response.status === 200) {
        const mealData = await response.data.data;
        setMealId(mealData.id);
        setMealName(mealData.name);
        setMealDescription(mealData.description);
        setMealPrice(mealData.price);
        setMealTag(mealData.tag);
        setMealPicture(mealData.picture);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const EditMealsHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/menu/${selectedMeal}`, {
        id: mealId,
        name: mealName,
        description: mealDescription,
        price: mealPrice,
        tag: mealTag,
        picture: mealPicture,
      });

      alert("Update successsful.");

      setMealId("");
      setMealName("");
      setMealDescription("");
      setMealPrice("");
      setMealTag("");
      setMealPicture("");
    } catch (error) {
      alert("Update failed. Try again later.");
      console.error(error);
    }
  };

  const deleteMealHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`/api/menu/${selectedMeal}`);
      alert("Meal deleted successfully.");
      setMealId("");
      setMealName("");
      setMealDescription("");
      setMealPrice("");
      setMealTag("");
      setMealPicture("");
    } catch (error) {
      alert("Meal deletion failed. Try again later.");
      console.error(error);
    }
  };

  return (
    <div className={classes.body}>
      <SubHeader />

      <h1 className={classes.h1}>Add menu meals</h1>
      <div className={classes.editMenu}>
        <form onSubmit={EditMealsHandler}>
          <label htmlFor="meals">Edit Meals</label>
          <select name="meals" id="meals" onChange={handleEditMealChange}>
            {editMeals}
          </select>

          <button className={classes.button}>Guardar</button>
        </form>
      </div>

      <form className={classes.form} onSubmit={AddMealsHandler}>
        <label htmlFor="id">Meal ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={mealId}
          onChange={(event) => setMealId(event.target.value)}
          placeholder="m1,m2,m..."
        />

        <label htmlFor="name">Meal Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={mealName}
          onChange={(event) => setMealName(event.target.value)}
          placeholder="Barbecue Chicken with Succotash, Shortcut Chicken Enchiladas, ..."
        />

        <label htmlFor="description">Meal Description:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          value={mealDescription}
          onChange={(event) => setMealDescription(event.target.value)}
          placeholder="Kosher salt, penne pasta, ground beef chuck, grated parmesan cheese, breadcrumbs..."
        />

        <label htmlFor="price">Meal Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={mealPrice}
          onChange={(event) => setMealPrice(event.target.value)}
          placeholder="19.99"
        />

        <label htmlFor="tag">Meal Tag:</label>
        <input
          type="text"
          id="tag"
          name="tag"
          value={mealTag}
          onChange={(event) => setMealTag(event.target.value)}
          placeholder="Pasta dishes, Chicken dishes,..."
        />

        <label htmlFor="pic">Meal Picture:</label>
        <input
          type="text"
          id="pic"
          name="pic"
          value={mealPicture}
          onChange={(event) => setMealPicture(event.target.value)}
          placeholder="https://drive.google.com/uc?export=view&id="
        />
        <button className={classes.button}>Submit</button>
      </form>
      <button className={classes.button} onClick={deleteMealHandler}>Borrar</button>
    </div>
  );
};

export default MenuPage;
