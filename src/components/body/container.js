import './bodyStyle.css'
import ContainerFrame from "./ContainerFrame";
import ContainerAll from "./ContainerAll";
import Question from "./Question";


export default function Body() {
    return (
        <div class=" container">
            <ContainerFrame />
            <ContainerAll/>
            <Question/>
        </div>


    )
}
