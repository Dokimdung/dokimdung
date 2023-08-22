import './headerStyle.css'
import logo from '../../icons/logo.png'
import watch from "../../icons/Group 448.png";
import rightt from "../../icons/anhfooter.png";
import group1 from "../../icons/Group 7.png";
import group2 from "../../icons/Group 9.png";
import group3 from "../../icons/Group 10.png";
import group4 from "../../icons/Group 13.png";

export default function Header() {

    return (
        <div style={{background: '#49bbbd', width: '100%', height: '100vh'}}>
            <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{}}>
                    <img src={logo} alt="" className="header__logo"/>
                </div>
                <div style={{marginRight: 20}}>
                    <a href="" className="header__text-"> Home</a>
                    <a href="" className="header__text-"> Courses</a>
                    <a href="" className="header__text-"> Careers</a>
                    <a href="" className="header__text-"> Blog</a>
                    <a href="" className="header__text-"> About Us</a>
                    <button className="header__buttom-fist"> Login</button>
                    <button className="header__buttom-two"> Sign Up</button>
                </div>
            </div>


            <div className="body">
                <div className="body_left">
                    <a href={""} className="body_left-Stu"> Studying </a>
                    <a href={""} className=" body_left-on"> Online is now much easier</a>
                    <a href="" class="boby_left-text">TOTC is an interesting platform that will teach you in more an
                        interactive way</a>
                    <div className=" body_left-nav">
                        <button className={"body_left-join"}> Join for free</button>
                        <img src={watch} alt="" className="body__left-watch"/>
                    </div>
                </div>
                <div className="body_right">
                    <img src={rightt} alt={""} className="body_right-rightt"/>
                    <img src={group1} alt={""} className="body_right-group1"/>
                    <img src={group2} alt={""} class="body_right-group2"/>
                    <img src={group3} alt={""} class="body_right-group3"/>
                    <img src={group4} alt={""} class="body_right-group4"/>
                </div>
            </div>
        </div>
    )
}