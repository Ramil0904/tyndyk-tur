import style from './Header.module.css'

const menu = [
    {
        name: "Каталог",
        link: "/catalog"
    },
    {
        name: "О компании",
        link: "/abaut-company"
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
    <header className='styles.header'>
        <div className='styles.header__top'>
        <div className='styles.header__bottom'></div>
        <div className='styles.header__logo'>
            <img src="../../../public/logo.png" alt="" />
            <div>
                <h2>TYNDYK TREVEL</h2>
                <p>Кыялыныздагы эс алуу</p>
            </div>
        </div>
        <div className='stayles.header__nav'>
            {menu.map(item => <a key={item.name} href={item.link}>{item.name}</a>)}
        </div>
        <div className='stayles.header__search'></div>
        <div className='stayles.header__order_call'></div>
        <div className='stayles.header__info'></div>
        </div>
    </header>
  )
}

export default Header