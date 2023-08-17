import './bodyStyle.css'
import watch from '../../icons/Group 448.png'
import rightt from '../../icons/anhfooter.png'
import group1 from '../../icons/Group 7.png'
import group2 from '../../icons/Group 9.png'
import group3 from '../../icons/Group 10.png'
import group4 from '../../icons/Group 13.png'

export default function Body() {

    return (
        <div class="body">
            <div class="body_left">
                <a href={""} class="body_left-Stu"> Studying </a>
                <a href={""} class=" body_left-on"> Online is now much easier</a>
                <p> TOTC is an interesting platform that will teach you in more an interactive way</p>
                <div class=" body_left-nav">
                    <button class={"body_left-join"}> Join for free</button>
                    <img src={watch} alt="" class="body__left-watch"/>
                </div>
            </div>
            <div class="body_right">
                <img src={rightt} alt={""} class="body_right-rightt"/>
                <img src={group1} alt={""} class="body_right-group1"/>
                <img src={group2} alt={""} class="body_right-group2"/>
                <img src={group3} alt={""} class="body_right-group3"/>
                <img src={group4} alt={""} class="body_right-group4"/>
            </div>
        </div>
    )

}