import { useState } from "react";

const AddItem = () => {
  const [formIterate, setFormIterate] = useState(1);
  console.log(formIterate);
  return (
    <div className="container mx-auto pt-28 pb-40 px-36">
      <h2 className="font-bold text-lg text-white">Add Item</h2>
      <form>
        <div className=" flex gap-3">
          <input
            type="text"
            className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-3/4"
            placeholder="Title"
          />
          <input
            type="file"
            className="mb-3 border border-white rounded-md file:h-full bg-zinc-700 w-1/4"
          />
        </div>
        <input
          type="text"
          className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-full"
          placeholder="Year"
        />
        <select className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-full">
          <option value="default" className="hidden">
            Category
          </option>
          <option value="shows">Shows</option>
          <option value="movie">Movie</option>
        </select>
        <textarea
          className="mb-3 border border-white rounded-md py-1 px-3 bg-zinc-700 w-full"
          placeholder="Description"
        ></textarea>
        {Array(formIterate)
          .fill()
          .map(() => (
            <FormItemLink className={"mb-5"} />
          ))}
        <button
          type="button"
          onClick={() => setFormIterate(formIterate + 1)}
          className="mb-3 border border-white rounded-md py-1 w-full bg-zinc-700 text-center"
        >
          +
        </button>
      </form>
    </div>
  );
};

export const FormItemLink = ({ className, modal }) => {
  return (
    <div className={` ${className}`}>
      {modal ? <h2 className="font-bold text-xl mb-5">Add Video</h2> : ""}
      <div className={`flex gap-3 mb-3 `}>
        <input
          type="text"
          className="border border-white rounded-md bg-zinc-700 px-3 py-1 w-3/4"
          placeholder="Title Episode"
        />
        <input
          type="file"
          className="border border-white rounded-md file:h-full bg-zinc-700 w-1/4"
        />
      </div>
      <input
        type="text"
        className="border border-white rounded-md bg-zinc-700 px-3 py-1 w-full mb-3"
        placeholder="Link Item"
      />

      {modal && (
        <div className="w-full flex justify-end">
          <button className="w-1/4 px-3 py-1 rounded-md bg-red-700 text-white">
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default AddItem;
