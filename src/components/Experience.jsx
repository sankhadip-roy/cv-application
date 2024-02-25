import { useState } from "react";
import Icon1 from '../images/add.png'

export default function Experience(props) {
    const [changeToInput, setChangeToInput] = useState(false)

    const handleChange = (e) => {
        if (props.workExp) {
            switch (e.target.name) {
                case 'school-job-name':
                    props.setWorkExp({ ...props.workExp, jobTitle: e.target.value })
                    break;
                case 'diploma-company-name':
                    props.setWorkExp({ ...props.workExp, company: e.target.value })
                    break;
                case 'address-location':
                    props.setWorkExp({ ...props.workExp, address: e.target.value })
                    break;
                case 'description':
                    props.setWorkExp({ ...props.workExp, description: e.target.value })
                    break;
                case 'yr-start':
                    props.setWorkExp({ ...props.workExp, yrStart: e.target.value })
                    break;
                case 'yr-end':
                    props.setWorkExp({ ...props.workExp, yrEnd: e.target.value })
                    break;
            }
        }
        if (props.eduInfo) {
            switch (e.target.name) {
                case 'school-job-name':
                    props.setEduInfo({ ...props.eduInfo, school: e.target.value })
                    break;
                case 'diploma-company-name':
                    props.setEduInfo({ ...props.eduInfo, course: e.target.value })
                    break;
                case 'address-location':
                    props.setEduInfo({ ...props.eduInfo, address: e.target.value })
                    break;
                case 'yr-start':
                    props.setEduInfo({ ...props.eduInfo, yrStart: e.target.value })
                    break;
                case 'yr-end':
                    props.setEduInfo({ ...props.eduInfo, yrEnd: e.target.value })
                    break;
            }
        }
        e.preventDefault();
    }

    const handleClickAdd = (e) => {
        if (e.target.parentNode.id === 'add-school' || e.target.parentNode.id === 'add-work') {
            setChangeToInput(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setChangeToInput(false);

        if (props.workExp) {
            props.setWorkExpOut(prev => [...prev, { jobTitle: props.workExp.jobTitle, company: props.workExp.company, address: props.workExp.address, yrStart: props.workExp.yrStart, yrEnd: props.workExp.yrEnd, description: props.workExp.description }])
        }
        if (props.eduInfo) {
            props.setEduInfoOut(prev => [...prev, { school: props.eduInfo.school, course: props.eduInfo.course, address: props.eduInfo.address, yrStart: props.eduInfo.yrStart, yrEnd: props.eduInfo.yrEnd }])
        }
    }
    return (
        <>
            <div className="add-exp" id={props.eduInfo ? 'add-school' : 'add-work'} onClick={handleClickAdd} style={{ display: changeToInput ? 'none' : 'flex' }}>
                <img src={Icon1} className="h-5 p-1" />
                <div className="text-xs p-1">&nbsp;&nbsp;  {props.eduInfo ? 'Add School' : 'Add Work'}</div>
            </div>
            <div className="input-area" style={{ display: !changeToInput ? 'none' : 'flex' }}>
                <div className="input-column">
                    <input className="text-xs p-2.5 m-0.5" type="text" name='school-job-name' placeholder={props.eduInfo ? "Nameof School / Institution / University" : "Job Title / Position"} onChange={handleChange} />
                </div>
                <div className="input-column">
                    <input className="text-xs p-2.5 m-0.5" type="text" name='diploma-company-name' placeholder={props.eduInfo ? "Diploma / Course" : 'Company Name'} onChange={handleChange} />
                </div>
                <div className="input-column">
                    <input className="text-xs p-2.5 m-0.5" type="text" name="address-location" placeholder="Address / Location" onChange={handleChange} />
                </div>
                {!props.eduInfo ?
                    <textarea className="block p-2.5 w-full text-xs rounded-lg border border-gray-300" type='text' name="description" placeholder="Give details of your job" onChange={handleChange} /> : ''
                }
                <div className="input-column">
                    <label htmlFor="year-start" className="p-1" style={{ fontSize: '14px' }}>Year Started: </label>
                    <input className="p-1" type="date" id="year-start" name="yr-start" style={{ width: '23%', fontSize: '12px' }} onChange={handleChange} />
                    <label htmlFor="year-end" className="p-1" style={{ fontSize: '14px' }}>Year Ended: </label>
                    <input className="p-1" type="date" id='year-end' name="yr-end" style={{ width: '23%', fontSize: '12px' }} onChange={handleChange} />
                </div>
                <button onClick={handleSubmit} className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold p-1.5 rounded-full">Submit</button>
            </div>
        </>
    )

}