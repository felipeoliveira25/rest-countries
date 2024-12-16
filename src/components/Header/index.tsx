import { HeaderContainer, HeaderTitle, ToggleThemeContainer, ToggleThemeText } from "./style"
import { IoMoonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


interface HeaderProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const Header = ({theme, toggleTheme}: HeaderProps) => {

    return(
        <HeaderContainer>
            <HeaderTitle>Where in the world</HeaderTitle>
            <ToggleThemeContainer onClick={toggleTheme}>
                <div >
                    {theme === "light" ? <LuSun/> : <IoMoonSharp/>}
                </div>
                <ToggleThemeText>{theme === "light" ? "Light Mode" : "Dark Mode"}</ToggleThemeText>
            </ToggleThemeContainer>
        </HeaderContainer>
    )
}