import { useState, useEffect } from 'react';

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  const [showAvatarImage, setShowAvatarImage] = useState(false);

  useEffect(() => {
    let timerId;

    if (menuOpened) {
      timerId = setTimeout(() => {
        setShowAvatarImage(true);
      }, 600);
    } else {
      setShowAvatarImage(false);
    }

    return () => clearTimeout(timerId);
  }, [menuOpened]);

  const isMobileVersion = window.innerWidth < 768;

  return (
    <>
      <button
        onClick={() => {
          setMenuOpened(!menuOpened);
        }}
        className="z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md flex flex-col justify-center items-center"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all duration-300 ${
            menuOpened ? 'rotate-45 translate-y-1' : 'mb-1'
          }`}
        ></div>
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all duration-300 ${
            menuOpened ? 'opacity-0' : 'my-1'
          }`}
        ></div>
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all duration-300 ${
            menuOpened ? '-rotate-45 -translate-y-1' : ''
          }`}
        ></div>
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 overflow-hidden flex flex-col ${
          menuOpened ? 'w-80' : 'w-0'
        }`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton
            label="About"
            onClick={() => {
              onSectionChange(0);
            }}
          />
          <MenuButton
            label="Skills"
            onClick={() => {
              onSectionChange(1);
            }}
          />
          <MenuButton
            label="Project"
            onClick={() => {
              onSectionChange(2);
            }}
          />
          <MenuButton
            label="Contact"
            onClick={() => {
              onSectionChange(4);
            }}
          />
        </div>
        {showAvatarImage && (
          <div className="relative inline-block p-3 bg-gray-100 rounded-2xl ml-5 mb-10">
            <img
              src="avatarka.png"
              alt="Avatar"
              className="w-12 h-12 rounded-full object-cover mr-2 float-left"
            />
            <div className="ml-14 font-bold">
              Мой Telegram: <br /> KortiNox
            </div>
            <div className="absolute border-solid border-gray-100 border-r-8 border-t-8 border-l-0 border-b-0  bottom-[-13px] left-10" />
          </div>
        )}
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};
