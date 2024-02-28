import { useState } from "react";
import Icon1 from '../images/add.png'
import { Button, Input, Textarea } from "@material-tailwind/react";

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
                <img src={Icon1} className="h-5  p-1 -mr-2 mb-0.5 ml-1" />
                <div className="text-xs p-1">&nbsp;&nbsp;  {props.eduInfo ? 'Add School' : 'Add Work'}</div>
            </div>
            <div className="input-area" style={{ display: !changeToInput ? 'none' : 'flex' }}>
                <div className="input-column">
                    <div className="p-1">
                        <Input name='school-job-name' label={props.eduInfo ? "Name of Institution" : "Job Title / Position"} onChange={handleChange} />
                    </div>
                    <div className="p-1">
                        <Input name='diploma-company-name' label={props.eduInfo ? "Diploma / Course" : 'Company Name'} onChange={handleChange} />
                    </div>
                </div>
                <div className="p-1">
                    <Input name='address-location' label="Address / Location" onChange={handleChange} />
                </div>
                <div className="p-1">
                    {!props.eduInfo ?

                        <Textarea name="description" label="Give details of your job" onChange={handleChange} /> : ''
                    }
                </div>
                <div className="flex justify-evenly">
                    <label htmlFor="year-start" className="my-1 p-1 text-xs">Year Started: </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" id="year-start" name="yr-start" style={{ width: '23%', fontSize: '12px' }} onChange={handleChange} />
                    <label htmlFor="year-end" className=" my-1 p-1 text-xs">Year Ended: </label>
                    <input className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" id='year-end' name="yr-end" style={{ width: '23%', fontSize: '12px' }} onChange={handleChange} />
                </div>
                <Button size="sm" variant="gradient" className="rounded-full ml-2" onClick={handleSubmit}>Add</Button>
            </div>
        </>
    )

}