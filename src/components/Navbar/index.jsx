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
    <>
      <nav className="w-full flex flex-row justify-between">
        <div className="flex items-center gap-3">
          <IconHome size="25" color="#0D7AB5" />
          <label className="text-md font-semibold text-blue-100">
            Acme Homes
          </label>
        </div>
        <div
          className="rounded-full font-semibold bg-grey-100 w-10 h-10 text-white-100 flex justify-center items-center cursor-pointer"
          onClick={() => setToggleUserInfo(!toggleUserInfo)}
        >
          {user.firstName[0].toUpperCase()}
          {user.lastName[0].toUpperCase()}
        </div>
      </nav>
      {toggleUserInfo && (
        <div ref={userInfoRef} className="absolute right-5 w-72 z-50">
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
    </>
  );
};
