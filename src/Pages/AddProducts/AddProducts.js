import React from "react";

const AddProducts = () => {
  return (
    <div>
      <form>
        <h1 className="text-3xl font-bold text-center mt-10"> ADD product</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <input
            type="text"
            name="name"
            placeholder="product name"
            className="input input-ghost w-full   input-bordered"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="image url"
            className="input input-ghost w-full  input-bordered "
            required
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            className="input input-ghost w-full   input-bordered"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            className="input input-ghost w-full input-bordered  "
            required
          />
          <div >
          <select className="select select-ghost w-full input-bordered ">
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
