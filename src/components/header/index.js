import './headerStyle.css'
import logo from '../../icons/logo.png'
export default function Header (){

return(
    <div>
        <div class="warrap">
        <div class="header">
            <div class="header__logo"> <img  src={logo} alt="" class="header__logo" /> </div>
            <div class="header__text"> 
                <a href="" class="header__text-"> Home sdsd</a>
                <a href="" class="header__text-"> Courses</a>
                <a href="" class="header__text-"> Careers</a>
                <a href="" class="header__text-"> Blog</a>
                <a href="" class="header__text-"> About Us</a>
                <button class="header__buttom-fist"> Login </button>
                <button class="header__buttom-two"> Sign Up </button>
            </div>
        </div>
    </div>
    </div>
)
}