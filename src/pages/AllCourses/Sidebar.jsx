import React from "react";

const Sidebar = ({ categories }) => {
  console.log(categories);
  return (
    <aside className=" md:w-1/5 rounded-lg shadow-md transition hover:shadow-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4">
      <h3 className="text-2xl text-center text-blue-600 dark:text-blue-500  font-medium">
        Courses Categories
      </h3>
      <ul className="mt-6">
        {categories?.map((category) => (
          <li
            className=" my-4 hover:bg-blue-50 cursor-pointer hover:dark:bg-gray-700 hover:text-blue-700 hover:rounded-md"
            key={category.id}
          >
            <button className="py-3 px-5 font-semibold text-lg dark:text-gray-300 text-gray-800 hover:text-blue-700 hover:dark:text-blue-500 rounded">
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
