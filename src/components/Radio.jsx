const RadioButton = ({ id, name, label, ...rest }) => {
  return (
    <div className="flex gap-4">
      <input
        id={id}
        name={name}
        className="h-5 w-5 accent-black cursor-pointer  rounded-full border border-black text-black  before:rounded-full  before:opacity-0 before:transition-opacity hover:before:opacity-10"
        type="radio"
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default RadioButton;
