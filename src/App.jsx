import { useState } from 'react'
import './styles/App.css'
import GeneraralInfo from './components/GeneralInfo'
import CVOutput from './components/CVOutput'
import Experience from './components/Experience'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from "@material-tailwind/react";
const App = () => {
    // general information
    const [generalInfo, setGeneralInfo] = useState({ firstName: '', lastName: '', job: '', email: '', phone: '', location: '', description: '' })
    const [generalInfoOut, setGeneralInfoOut] = useState({ firstName: '', lastName: '', job: '', email: '', phone: '', location: '', description: '' })
    // educational information
    const [eduInfo, setEduInfo] = useState([{ school: '', course: '', address: '', yrStart: '', yrEnd: '' }]);
    const [eduInfoOut, setEduInfoOut] = useState([]);
    // work related information
    const [workExp, setWorkExp] = useState([{ jobTitle: '', course: '', address: '', yrStart: '', yrEnd: '', description: '' }])
    const [workExpOut, setWorkExpOut] = useState([]);

    const generatePdf = () => {
        const input = document.getElementById('divToConvert');
        console.log("a");
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgWidth = 210;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('converted-document.pdf');
            });
    };

    return (
        <>
            <div className='flex flex-col items-center justify-between'>
                <main className='main'>
                    <form className='input-container border-2 border-sky-500 rounded-md p-5'>
                        <legend className="m-1 mb-3 block font-sans text-2xl antialiased font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-400 to-blue-400 bg-clip-text">General Information</legend>
                        <GeneraralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} setGeneralInfoOut={setGeneralInfoOut} />
                        <br />
                        <legend className="m-1 mb-3 block font-sans text-xl antialiased font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-400 to-blue-400 bg-clip-text">Previous Work Experience</legend>
                        <Experience workExp={workExp} setWorkExp={setWorkExp} setWorkExpOut={setWorkExpOut} />
                        <br />
                        <legend className="m-1 mb-3 block font-sans text-xl antialiased font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-400 to-blue-400 bg-clip-text">Educational Experience</legend>
                        <Experience eduInfo={eduInfo} setEduInfo={setEduInfo} setEduInfoOut={setEduInfoOut} />
                        <br />
                    </form>
                    <section className='input-container border-2 border-sky-500 rounded-md p-5' id="divToConvert">
                        <CVOutput generalInfoOut={generalInfoOut} eduInfoOut={eduInfoOut} workExpOut={workExpOut} setEduInfoOut={setEduInfoOut} setWorkExpOut={setWorkExpOut} />
                    </section>
                    <Button className="w-20 h-9 justify-items-center text-center mt-1" onClick={generatePdf} variant="gradient" size='sm'><div className=' flex'> <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg><p>Pdf</p> </div></Button>
                </main>
                <footer className='footer text-sm hover:text-base' >2024 {String.fromCharCode(169)} Sankhadip Roy</footer>
            </div>
        </>
    )
}

export default App