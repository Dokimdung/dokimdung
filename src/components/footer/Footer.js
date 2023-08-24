import './FooterStyle.css'
import logototc from '../../icons/logo.png'
import group114 from '../../icons/Group 114.png'

export default function Footer() {
    return (
        <div style={{background: '#252641', marginTop: '70px'}}>
            <div style={{display: 'flex'}}>
                <div className={'flex items-center'}>
                    <img src={logototc} alt={""} style={{marginTop: '50px'}}/>
                    <div style={{border: '1px solid  white', width: 2, height: '80px', marginLeft: 20, marginTop: 50}}/>
                    <h3 style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#fff',
                        marginTop: '50px',
                        marginLeft: 30
                    }}> Virtual Class for Zoom </h3>
                </div>
            </div>
            <h3 style={{fontSize: '26px', fontWeight: '600', color: '#B2B3CF', marginTop: '50px'}}> Subscribe to get our
                Newsletter</h3>
            <div className={"footer__button"} style={{textAlign: "center"}}>
                <input
                    defaultValue={'Your Email'}
                    style={{
                        borderRadius: '80px',
                        width: '300px',
                        height: '40px',
                        border: '1px solid #B2B3CF',
                        color: '#000',
                        textAlign: 'left',
                        padding: 7
                    }}
                    type="text"
                />

                <button style={{
                    borderRadius: '80px',
                    width: '100px',
                    height: '40px',
                    border: '1px solid #B2B3CF',
                    color: '#fff',
                    margin: '20px'
                }}> Subscribe
                </button>
            </div>
            <div>
                <img src={group114} alt={""} style={{marginTop: '50px'}}/>
            </div>
            <div>
                <h3 style={{fontSize: '22px', fontWeight: '400', color: '#B2B3CF'}}> © 2021 Class Technologies
                    Inc. </h3>
            </div>


        </div>
    )
}