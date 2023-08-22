	import './bodyStyle.css'
    import frame from '../../icons/Frame 55.png'
    import group1 from '../../icons/Group 79.png'
    import group2 from '../../icons/Group 80.png'
    import group3 from '../../icons/Group 81.png'
export default function  Body () {
    return (
        <div class =" container">
             <div class="container_frame">
             <h3> Our Success</h3>
        <a href=""class ="container_frame-text">  Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </a>
            <img src={frame} alt=""   class ="container_frame-img"/>
                 </div>
            <div class ="container_all">
                <a href="" class ="container_all-in">
                    All-In-One
                </a>
                <a href="" class ="container_all-cl">
                    Cloud Software
                </a>
                  <a href="" class ="container_all-text " > TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office. </a>
            </div>
                 <div class =" container_button">
                     < button class="container_button-line">
                         < img src={group1} alt="" class="container_button-line7 "/>
                         <a href="" class ="container_button-text ">
                             Online Billing, Invoicing, & Contracts
                         </a>

                        <a href="" class ="container_button-all "> Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts </a>
                     </button>
                     < button class ="container_button-line">
                         < img src={group2} alt="" class="container_button-line0 " />
                         <a href="" class ="container_button-text ">
                             Easy Scheduling & Attendance Tracking
                         </a>
                              <a href="" class = "container_button-all"> Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance </a>
                     </button>
                     < button class="container_button-line" >
                         < img src={group3} alt="" class="container_button-line1 "/>
                         <a href="" class ="container_button-text">
                             Customer Tracking
                         </a>
                              <a href="" class ="container_button-all"> Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization  </a>
                     </button>
                 </div>
        </div>
    )
}
