import { useState } from "react";

interface CircleProps {
  buttonId: string;
  toggle: (buttonId: string) => void;
}

const Circle = ({ buttonId, toggle }: CircleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the default anchor behavior
    setIsOpen(!isOpen);
    toggle(buttonId);
  };

  const plusSign = () => {
    return (
      <>
        <path
          d="M23.75 18.75H21.25V16.25C21.25 15.9185 21.1183 15.6005 20.8839 15.3661C20.6495 15.1317 20.3315 15 20 15C19.6685 15 19.3505 15.1317 19.1161 15.3661C18.8817 15.6005 18.75 15.9185 18.75 16.25V18.75H16.25C15.9185 18.75 15.6005 18.8817 15.3661 19.1161C15.1317 19.3505 15 19.6685 15 20C15 20.3315 15.1317 20.6495 15.3661 20.8839C15.6005 21.1183 15.9185 21.25 16.25 21.25H18.75V23.75C18.75 24.0815 18.8817 24.3995 19.1161 24.6339C19.3505 24.8683 19.6685 25 20 25C20.3315 25 20.6495 24.8683 20.8839 24.6339C21.1183 24.3995 21.25 24.0815 21.25 23.75V21.25H23.75C24.0815 21.25 24.3995 21.1183 24.6339 20.8839C24.8683 20.6495 25 20.3315 25 20C25 19.6685 24.8683 19.3505 24.6339 19.1161C24.3995 18.8817 24.0815 18.75 23.75 18.75Z"
          fill="#19191B"
        />
      </>
    );
  };

  const minusSign = () => {
    return (
      <>
        <path d="M16 18h 9v 3h -9h" fill="#19191B" />
      </>
    );
  };

  return (
    <button
      onClick={handleClick}
      className="text-green-100 hover:text-green-200 transition duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx={20} cy={20} r={20} fill="currentColor" />
        {isOpen ? minusSign() : plusSign()}
      </svg>
    </button>
  );
};

export default Circle;
