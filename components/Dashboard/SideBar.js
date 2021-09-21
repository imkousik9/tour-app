import SideBarOption from './SideBarOption';

function SideBar({ select, setSelect, slug }) {
  return (
    <div className="flex-3 sticky top-16 max-h-screen bg-gray-100">
      <SideBarOption
        name="All Bookings"
        active={select === 'All Bookings'}
        onClick={() => setSelect('All Bookings')}
      />
      <SideBarOption
        name="Add Tour"
        active={slug ? false : select === 'Add Tour'}
        onClick={() => setSelect('Add Tour')}
      />
      <SideBarOption
        name="Tour List"
        active={select === 'Tour List'}
        onClick={() => setSelect('Tour List')}
      />
    </div>
  );
}

export default SideBar;
