import {NavLink, NavLinkProps} from "react-router";

export const CustomNavLink = (props: NavLinkProps) => {
    return <NavLink
        {...props}
        className={({ isActive }) => `
            px-4 py-2 rounded-md font-medium cursor-pointer
            ${isActive ? "bg-primary text-white" : "bg-default text-gray-700"}
            ${props.className}
        `}
    >
        {props.children}
    </NavLink>
}