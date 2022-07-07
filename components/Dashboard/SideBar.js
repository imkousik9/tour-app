import SideBarOption from './SideBarOption';

function SideBar({ path }) {
  return (
    <div className="sticky top-16 max-h-screen flex-3 bg-gray-100">
      <SideBarOption
        name="All Bookings"
        isActive={path === 'bookings'}
        path="/dashboard/bookings"
      />
      <SideBarOption
        name="Tour List"
        isActive={path === 'tours'}
        path="/dashboard/tours"
      />
      <SideBarOption
        name="Add Tour"
        isActive={path === 'add-tour'}
        path="/dashboard/add-tour"
      />
    </div>
  );
}

export default SideBar;
