import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <main>
      <div className="px-32 pt-16">
        <Outlet />
      </div>
    </main>
  );
};

export default MainTemplate;
