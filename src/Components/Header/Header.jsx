import logoImg from '../../assets/icons/flower.svg'
import styles from '../Header/header.module.scss'
import Navigation from '../Navigation/Navigation';

function Header() {

    return (
    <header className={styles.wrapper} id="home">
		<h1 className={styles.title}>
			Amili look shop
			<p className={styles.titleText}> одежда для женщин</p>
		</h1>
		<div className={styles.container}>
			<div className={styles.header}>
				<a className={styles.logo} href="/">
						<img src={logoImg} alt="logo" className={styles.logoImg} />
                        <div className={styles.logoInfo}>
                            <p className={styles.logoTitle}>Amili look shop</p>
                            <p className={styles.logoTitleText}>одежда для женщин</p>
                        </div>
				</a>
            < Navigation />
			</div>
		</div>
	</header>
    );
}

export default Header;

//  <button class="burger_menu-btn" id="burger">
// <span></span><span></span><span></span>
// </button>
// <p id="catalog_link"><a href="./catalog.html">Каталог</a></p>


// //Бургер меню
// document.getElementById("burger").addEventListener("click", function () {
//     document.querySelector(".header").classList.toggle("open");
//     document.body.classList.toggle("noscroll");
//   });
//   const links = Array.from(document.querySelector(".menu__items").children);
//   links.forEach((link) => {
//     link.addEventListener("click", closeOnClick);
//   });
//   function closeOnClick() {
//     document.querySelector(".header").classList.remove("open");
//     document.body.classList.remove("noscroll");
//   }

//Бургер меню
// nav {
//     display: flex;
//     justify-content: space-between;
//     width: 70%;
//     align-items: center;
//   }

//   .burger_menu-btn {
//     background-color: $color-primary;
//     width: 40px;
//     height: 38px;
//     border: none;
//     position: relative;
//     display: none;
//     z-index: 103;
//     padding-right: 30px;
//   }
//   .burger_menu-btn span {
//     position: absolute;
//     width: 30px;
//     height: 3px;
//     background-color: black;
//     left: 6px;
//     transition: transform 0.5s, opacity 0.5s, background-color 0.5s;
//   }
//   .burger_menu-btn span:nth-child(1) {
//     transform: translateY(-10px);
//   }
//   .burger_menu-btn span:nth-child(3) {
//     transform: translateY(10px);
//   }

//   .header.open .burger_menu-btn span:nth-child(1) {
//     transform: translateY(0) rotate(45deg);
//   }
//   .header.open .burger_menu-btn span:nth-child(2) {
//     opacity: 0;
//   }
//   .header.open .burger_menu-btn span:nth-child(3) {
//     transform: translateY(0) rotate(-45deg);
//   }

//   #catalog_link {
//     display: none;
//   }
//   #favorites_link {
//     display: none;
//   }
//   #basket_link {
//     display: none;
//   }
//   .open-favourites-burger {
//     display: none;
//     cursor: pointer;
//   }