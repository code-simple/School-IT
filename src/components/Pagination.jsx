import Link from "next/link";

const Pagination = (props) => {
  return (
    <div className="flex justify-center rounded-md pb-16 pt-7">
      <ul className="inline-flex -space-x-px font-semibold">
        <li>
          <Link
            href="#"
            className="px-3 py-3 ml-0  font-bold text-gray-500  border-2 border-[#C4C4C4] rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  text-gray-500  border-2 border-[#C4C4C4] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            1
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  text-gray-500  border-2 border-[#C4C4C4] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            2
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  border-2 border-[#C4C4C4] text-gray-500  hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            3
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  text-gray-500  border-2 border-[#C4C4C4] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            4
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  text-gray-500  border-2 border-[#C4C4C4] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            5
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="px-3 py-3  text-gray-500  border-2 font-bold border-[#C4C4C4] rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
