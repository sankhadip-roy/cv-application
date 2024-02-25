import Icon1 from '../images/mail.png'
import Icon2 from '../images/phone.png'
import Icon3 from '../images/location.png'

import { useEffect } from 'react'

export default function CVOutput(props) {
    useEffect(() => {
        console.log(props.eduInfoOut)
    }, [props.workExpOut])
    const handleRemoveWorkExp = (e) => {
        if (e.target.parentNode.parentNode.className === 'output-work-exp') {
            props.setWorkExpOut(details =>
                details.filter((item, index) => e.target.parentNode.id != index))
        }
        if (e.target.parentNode.parentNode.className === 'output-educ-exp') {
            props.setEduInfoOut(details =>
                details.filter((item, index) => e.target.parentNode.id != index)
            )
        }
    }
    return (
        <>
            <div className='output-header'>
                <div className='flex flex-col'>
                    <span className='text-navy font-playfair font-normal text-21'>
                        {props.generalInfoOut.firstName} <b>{props.generalInfoOut.lastName}</b>
                    </span>
                    <span className='font-playfair text-base font-normal'>
                        <b>{props.generalInfoOut.job}</b>
                    </span>
                </div>
                <div className='contact-details'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', columnGap: '2px' }}>
                        <span style={{ fontSize: '10px', textAlign: 'right' }}>{props.generalInfoOut.email}</span>
                        <img src={Icon1} style={{ width: '17.5px', margin: '2px' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', columnGap: '2px' }}>
                        <span style={{ fontSize: '10px', textAlign: "right" }}>{props.generalInfoOut.phone}</span>
                        <img src={Icon2} style={{ width: '15px', margin: '2px' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', columnGap: '2px' }}>
                        <span style={{ fontSize: '10px', textAlign: "right" }}>{props.generalInfoOut.location}</span>
                        <img src={Icon3} style={{ width: '13.5px', margin: '2px' }} />
                    </div>
                </div>
            </div>
            <div className='output-header-description'>{props.generalInfoOut.description}</div>
            <hr />
            <div className='output-work-exp'>
                <span style={{ fontFamily: 'Varela Round', fontSize: '21px', fontWeight: '400' }}>Work Experience</span>
                {props.workExpOut.map((workItem, index) =>
                    <>
                        <ul className='work-exp-ul' key={index} id={index}>
                            <button className='remove-btn text-xs' onClick={handleRemoveWorkExp}>Remove</button>
                            <div>
                                <li style={{ fontsize: '18px', fontWeight: '700', listStyleType: 'none' }}>{workItem.jobTitle} | {workItem.company} ({workItem.yrStart} to {workItem.yrEnd})</li>
                                <li style={{ fontsize: '16px', fontWeight: '400', listStyleType: 'none' }}>{workItem.address}</li>
                                <ul style={{ fontSize: '14px' }}>
                                    <li>{workItem.description}</li>
                                </ul>
                            </div>
                        </ul>
                    </>
                )}
            </div>
            <hr />
            <div className='output-educ-exp'>
                <span style={{ fontFamily: 'Varela Round', fontsize: '21px', fontWeight: '400' }}>Educational Background</span>
                {props.eduInfoOut.map((educItem, index) =>
                    <>
                        <ul className='work-exp-ul' key={index} id={index}>
                            <button className='remove-btn text-xs' onClick={handleRemoveWorkExp}>Remove</button>
                            <div>
                                <li style={{ fontsize: '18px', fontWeight: '700', listStyleType: 'none' }}>{educItem.school} ({educItem.yrStart} to {educItem.yrEnd})</li>
                                <li style={{ fontsize: '16px', fontWeight: '400', listStyleType: 'none' }}>{educItem.course}</li>
                                <ul style={{ fontSize: '14px' }}>
                                    <li>Address: {educItem.address}</li>
                                </ul>
                            </div>
                        </ul>
                    </>
                )}
            </div>
        </>
    )
}