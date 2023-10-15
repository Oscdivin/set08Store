import { Outlet } from "react-router-dom";
import MainSider from "../static/MainSider";
import { useSelector } from "react-redux/es/exports";
// import { useSelector } from "react-redux/es/exports";
// import Header from "./Header";

const Layout = () => {
  const toggle = useSelector((state: any) => state.toggleState);

  // w-[${toggle ? "calc(100vw-70px)" : "calc(100vw-160px)" }]

  return (
      <div>
      {/* <Header/> */}

    <div className="flex">
      <MainSider />
      <div className="w-[100vw] flex justify-end ">
        <div
          className={`
          pl-0 transition-all duration-300
          `}
          style={{
            width: `${toggle ? "calc(100vw - 70px)" 
            : "calc(100vw - 160px"}`,
            transition: "all 350m",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
            </div>
  );
};

export default Layout;
