import React from "react";

const Sidebar = ({ categories }) => {
  console.log(categories);
  return (
    <aside className=" md:w-1/5 rounded-lg shadow-md transition hover:shadow-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4">
      <h3 className="text-2xl text-center">Courses Categories</h3>
      <ul className="mt-6">
        {categories?.map((category) => (
          <li
            className="py-4 px-6 hover:bg-gray-100 cursor-pointer hover:dark:bg-gray-700 "
            key={category.id}
          >
            <button className="font-semibold text-lg dark:text-gray-300 text-gray-800">
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
