import styles from "./Header.module.css"
import { RiSearchLine } from "react-icons/ri";
import { Button } from "@mui/material"

const menu =[
    {
        name: " Каталог",
        link: "/contacts"
    },
     {
        name: " О компаний",
        link: "/about-company"
    },
     {
        name: "Блог",
        link: "/blog"
    },
     {
        name: "Новости",
        link: "/news"
    },
]


const Header = () => {
  return (
    <header className = {styles.header}>
        <div className = {styles.headertop}>
        <div className = {styles.headerbottom}></div>
        <div className = {styles.headerlogo}>
            <img src="public/logo.png" alt="" />
            <div>
                <h2>TYNDYK TRELER</h2>
                <p>Кыялыныздагы эс алуу</p>
            </div>
        </div>
        <div className = {styles.headernav}>
            {menu.map(item => <a key={item.nema} href={item.link}>{item.name}</a>) }
        </div>
        <div className = {styles.headersearch}>
            <input type="text" placeholder="поиск" />
            <span/>
            <RiSearchLine size={20}/>
            <span/>
        </div>
        <div className = {styles.headerorder_call}>
            <Button sx={{
                borderRadius:"40px",
                bgcolor:"#2D9CDB",
                textTransform: "none",
                color: "#f2f2f2"
            }} size="large" variant="containeb">Заказать звонок</Button>
        </div>
        <div className = {styles.header__info}>
            <h2>
                <a href="tel:+996 555 555">+996 555 555</a>
            </h2>
            <p>9:00 - 19:00</p>
        </div>
        </div>
    </header>
  )
}

export default Header