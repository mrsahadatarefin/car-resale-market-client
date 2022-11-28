import React, { useState } from "react";

const AddProducts = () => {
    const [formState, setFormState] = useState({
        name: "",
        image: "",
        price: 0,
        description: "",
        

      })
      const handleOnChange = e => {
        const {name, value} = e.target;
        setFormState({...formState, [name]: value})
      }
      const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        // console.log(form)
        const name = form.name.value;
        const image = form.imageUrl.value;
        const price = form.price.value;
        const description = form.description.value;
        const category = form.category.value;

        const order = {
          name,
          image,
          price,
          description,
          category
        };
       
    }
        console.log(formState)
    
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h1 className="text-3xl font-bold text-center mt-10"> ADD product</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <input
            type="text"
            name="name"
            placeholder="product name"
            className="input input-ghost w-full   input-bordered"
            required
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="image"
            placeholder="image url"
            className="input input-ghost w-full  input-bordered "
            required
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            className="input input-ghost w-full   input-bordered"
            required
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            className="input input-ghost w-full input-bordered  "
            required
            onChange={handleOnChange}
          />
          <div >
          <select  onChange={handleOnChange} name="category" className="select select-ghost w-full input-bordered ">
            <option disabled selected>
            select category
            </option>
            <option>electric car</option>
            <option>Ferrari car</option>
            <option>rolls royce</option>
          </select>
          </div>
        </div>
        <input className="btn mt-10 m-10" type="submit" value="ADD Service" />
      </form>
    </div>
  );
};

export default AddProducts;
