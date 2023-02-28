import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <main>
      <div className="px-8 lg:px-32 py-16">
        <Outlet />
      </div>
    </main>
  );
};

export default MainTemplate;
