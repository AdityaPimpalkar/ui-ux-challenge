import { useEffect } from "react";
import { useRef, useState } from "react";
import Card from "../Card";
import { IconHome } from "@tabler/icons-react";

export const Navbar = ({ user }) => {
  const [toggleUserInfo, setToggleUserInfo] = useState(false);
  const userInfoRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setToggleUserInfo(false);
    });
    return () => {
      document.removeEventListener("mousedown", () => setToggleUserInfo(false));
    };
  }, [toggleUserInfo, userInfoRef]);

  return (
    <div className="relative">
      <nav className="w-full flex flex-row justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <IconHome size="30" color="#0D7AB5" />
          <label className="text-md font-semibold text-blue-100 lg:text-lg xl:text-xl 2xl:text-2xl cursor-pointer">
            Acme Homes
          </label>
        </div>
        <div
          className="rounded-full font-semibold bg-grey-100 w-10 h-10 text-white-100 hover:shadow-xl flex justify-center items-center cursor-pointer lg:w-14 lg:h-14 lg:text-lg"
          onClick={() => setToggleUserInfo(!toggleUserInfo)}
        >
          {user.firstName[0].toUpperCase()}
          {user.lastName[0].toUpperCase()}
        </div>
      </nav>
      {toggleUserInfo && (
        <div ref={userInfoRef} className="absolute right-0 w-72 z-10">
          <Card
            title={`${user.firstName} ${user.lastName}`}
            subTitle={`${user.email}`}
            footerLeftContent={
              <a href="/" className="underline text-black-100">
                View profile
              </a>
            }
            footerRightContent={
              <button className="px-5 py-2 bg-blue-100 rounded-2xl text-white-100 font-semibold hover:shadow-xl">
                Sign out
              </button>
            }
          />
        </div>
      )}
    </div>
  );
};
