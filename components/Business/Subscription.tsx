import { useState } from "react"
import Subs from './SubsYearly'


const Subscription = () => {
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);
    };


    return (
        <section  id="subscription-header">
            <div className="status-toggles" onClick={toggle} style={{ cursor: 'pointer' }}>
                <label style={{ marginRight: '19px', fontWeight: isActive ? 'normal' : 'bold', color: isActive ? 'grey' : '#0644BE' }}>
                    Monthly
                </label>
                <div className={`toggle-indicator ${isActive ? 'active' : ''}`} style={{
                    display: 'inline-block',
                    width: '49px',
                    height: '25px',
                    marginTop: '3rem',
                   
                    backgroundColor: isActive ? '#0644BE' : '#0644BE',
                    borderRadius: '12px',
                    position: 'relative',
                    transition: 'background-color 0.3s',
                }}>
                    <div style={{
                        width: '28px',
                        height: '22px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '1px',
                        left: isActive ? '20px' : '1px',
                        transition: 'left 0.3s',
                    }}></div>
                </div>
                <label style={{ marginLeft: '18px', fontWeight: isActive ? 'bold' : 'normal', color: isActive ? '#0644BE' : 'grey' }}>
                    Annual
                </label>
            </div>
            <div className="pricing">
                {isActive ? (
                    <div  id="sub-dark">
                        {/* <Subscribe2 /> */}
                    </div>
                ) : (
                    <div  id='sub-dark'>
                        <Subs/>
                    </div>
                )}
            </div>
        </section>
    )
}
export default Subscription;

