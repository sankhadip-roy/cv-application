import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { useEffect } from 'react'
import { Button } from "@material-tailwind/react";

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
        <div className="bg-white shadow-lg rounded-lg p-8">
            <div className='mb-6'>
                <h1 className='text-4xl text-gray-800 font-playfair font-bold mb-2'>
                    {props.generalInfoOut.firstName} {props.generalInfoOut.lastName}
                </h1>
                <h2 className='text-2xl text-gray-600 font-playfair'>
                    {props.generalInfoOut.job}
                </h2>
            </div>
            <div className='grid grid-cols-2 gap-4 mb-6'>
                <div className="flex items-center">
                    <FaEnvelope className="text-gray-500 mr-2" />
                    <span className='text-gray-600'>{props.generalInfoOut.email}</span>
                </div>
                <div className="flex items-center">
                    <FaPhone className="text-gray-500 mr-2" />
                    <span className='text-gray-600'>{props.generalInfoOut.phone}</span>
                </div>
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-gray-500 mr-2" />
                    <span className='text-gray-600'>{props.generalInfoOut.location}</span>
                </div>
            </div>
            <div className='text-gray-700 mb-8'>{props.generalInfoOut.description}</div>
            <hr className="border-gray-300 mb-8" />
            <div className='mb-8'>
                <h3 className='text-2xl text-gray-800 font-varela-round mb-4 flex items-center'>
                    <FaBriefcase className="mr-2" />
                    Work Experience
                </h3>
                {props.workExpOut.map((workItem, index) => (
                    <div className='bg-gray-50 rounded-md p-4 mb-4 relative' key={index} id={index}>
                        <Button
                            color="red"
                            size="sm"
                            className='absolute top-2 right-2 p-1 opacity-0 hover:opacity-100 transition-opacity'
                            onClick={handleRemoveWorkExp}
                            variant="text"
                        >
                            <MdClose />
                        </Button>
                        <h4 className='text-lg font-bold text-gray-800'>{workItem.jobTitle}</h4>
                        <p className='text-gray-600'>{workItem.company} | {workItem.yrStart} to {workItem.yrEnd}</p>
                        <p className='text-gray-500 text-sm mb-2'>{workItem.address}</p>
                        <p className='text-gray-700'>{workItem.description}</p>
                    </div>
                ))}
            </div>
            <hr className="border-gray-300 mb-8" />
            <div>
                <h3 className='text-2xl text-gray-800 font-varela-round mb-4 flex items-center'>
                    <FaGraduationCap className="mr-2" />
                    Educational Background
                </h3>
                {props.eduInfoOut.map((educItem, index) => (
                    <div className='bg-gray-50 rounded-md p-4 mb-4 relative' key={index} id={index}>
                        <Button
                            color="red"
                            size="sm"
                            className='absolute top-2 right-2 p-1 opacity-0 hover:opacity-100 transition-opacity'
                            onClick={handleRemoveWorkExp}
                            variant="text"
                        >
                            <MdClose />
                        </Button>
                        <h4 className='text-lg font-bold text-gray-800'>{educItem.school}</h4>
                        <p className='text-gray-600'>{educItem.course} | {educItem.yrStart} to {educItem.yrEnd}</p>
                        <p className='text-gray-500 text-sm'>{educItem.address}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}