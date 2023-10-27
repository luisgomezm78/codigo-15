export default function SelectFour({
  title,
  option1,
  value1,
  option2,
  value2,
  option3,
  value3,
  option4,
  value4,
  value,
}) {
  return (
    <>
      <div className="flex flex-col items-left">
        <label htmlFor="">{title}</label>
        <select
          id=""
          class=" bg- border border-red-200 text-gray-900 text-xs rounded focus:ring-red-500 focus:border-red-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          onClick={value}
        >
          <option selected>Seleccione</option>
          <option value={value1}>{option1}</option>
          <option value={value2}>{option2}</option>
          <option value={value3}>{option3}</option>
          <option value={value4}>{option4}</option>
        </select>
      </div>
    </>
  );
}
