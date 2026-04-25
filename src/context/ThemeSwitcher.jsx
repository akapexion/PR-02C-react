import { Moon, Sun } from 'lucide-react'
import React, { useContext } from 'react'
import { themeContext } from './ThemeContext'

const ThemeSwitcher = () => {
    const {theme, setTheme} = useContext(themeContext);

    const handleTheme = () => {
    if(theme == "light"){
        setTheme("dark");
    }
    else {
        setTheme("light");
    }
    }

  return (
    <>  
        {theme == "light" ?
        <Moon onClick={handleTheme} className={`${theme == "light" ? "text-black" : "text-white"}`} />
        :
        <Sun onClick={handleTheme} className={`${theme == "light" ? "text-black" : "text-white"}`}/>
        }
    </>
  )
}

export default ThemeSwitcher
