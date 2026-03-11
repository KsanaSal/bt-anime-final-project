// import UserIcon from "@/app/assets/icons/UserIcon";
import { ReactNode } from "react";

type ButtonIconProps = {
    icon: ReactNode;
    bgColor?: string;
    borderColor?: string;
    border?: string;
    className?: string;
};

const ButtonIcon = ({
    icon,
    bgColor = "",
    borderColor = "",
    border = "",
    className = "",
}: ButtonIconProps) => {
    return (
        <button
            type="button"
            className={`rounded rounded-2 ${bgColor} p-1 ${border} ${borderColor} font-medium uppercase h-7.5 w-7.5 flex items-center justify-center hover:text-(--accent) hover:scale-110 hover:shadow-(--boxPrimaryLight) transform transition duration-200 ease-in-out`}
        >
            {icon}
        </button>
    );
};

export default ButtonIcon;
