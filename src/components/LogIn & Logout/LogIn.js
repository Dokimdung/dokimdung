import loginns from '../../icons/Rectangle 77.png'
import groups from '../../icons/Group.png'

const LogIn=()=>{
    return(
        <div >
        <div style={{display:'flex', marginTop:'80px',marginLeft:'80px'}} >
            <div >
            <img src={loginns} alt={""}  class={"relative"} />
            <div  style={{color:'#000'}} class={"absolute"} >
                <h3> Lorem Ipsum is simply  </h3>
                <p> Lorem Ipsum is simply </p>
            </div>
            </div>
            <div style={{marginLeft:'80px', fontWeight:'400', color:' #5B5B5B', marginTop:'50px'}}>
              <h3 style={{fontSize:'16px', fontWeight:'400', color:' #5B5B5B',marginBottom:'50px',}}> Welcome to lorem..!</h3>
                <button style={{background:'#afe8ea',border:'1px soild #afe8ea',borderRadius:'80px',width:'300px', height:'40px',textAlign:'center' }}>
                    <button style={{ background:'#49BBBD',border:'1px soild #49BBBD',borderRadius:'80px',width:'120px',height:'30px', fontSize:'16px',margin:'10px'}} > Login</button>
                    <button style={{ background:'#49BBBD',border:'1px soild #49BBBD',borderRadius:'80px',width:'120px',height:'30px', fontSize:'16px'}}> Register </button>
                </button>
                <p style={{marginTop:'50px',textAlign:'center'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                 <h3 style={{fontSize:'16px', fontWeight:'400', color:' #5B5B5B',textAlign:'left' ,marginTop:'50px',}} > User name</h3>
                <input
                    defaultValue={'Enter your User name'}
                    style={{
                        borderRadius: '80px',
                        width: '300px',
                        height: '40px',
                        border: '1px solid #7fcecf',
                        textAlign: 'left',
                        padding: 7
                    }}
                    type="text"/>
                <h3 style={{fontSize:'16px', fontWeight:'400', color:' #5B5B5B', marginTop:'50px',textAlign:'left'}}> Password</h3>
                <div style={{display:'flex'}}>
                <input
                    defaultValue={'Enter your Password'}
                    style={{
                        borderRadius: '80px',
                        width: '300px',
                        height: '40px',
                        border: '1px solid #7fcecf',
                        textAlign: 'left',
                        padding: 7
                    }}
                    type="password" />
                <img src={groups} alt={""} style={{ marginLeft:'-45px'}}/>
                </div>
            </div>
        </div>
        </div>
    )
}
export default LogIn;