function SideBarOption({ name, active, ...props }) {
  return (
    <h2
      onClick={props.onClick}
      className={`px-3 py-2 mb-1 cursor-pointer transition-all font-medium hover:bg-green-50  ${
        active && 'bg-green-50 border-l-4 border-green-600 text-green-600'
      } `}
    >
      {name}
    </h2>
  );
}

export default SideBarOption;
