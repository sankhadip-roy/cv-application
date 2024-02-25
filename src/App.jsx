import { useState } from 'react'
import './styles/App.css'
import GeneraralInfo from './components/GeneralInfo'
import CVOutput from './components/CVOutput'
import Experience from './components/Experience'

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

    const generatePDF = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className='container'>
                <main className='main'>
                    <form className='input-container'>
                        <legend className="no-underline decoration-sky-500  text-sky-500">General Information</legend>
                        <GeneraralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} setGeneralInfoOut={setGeneralInfoOut} />
                        <hr /><br />
                        <legend className="no-underline decoration-sky-500  text-sky-500">Previous Work Experience</legend>
                        <Experience workExp={workExp} setWorkExp={setWorkExp} setWorkExpOut={setWorkExpOut} />
                        <hr /><br />
                        <legend className="no-underline decoration-sky-500  text-sky-500">Educational Experience</legend>
                        <Experience eduInfo={eduInfo} setEduInfo={setEduInfo} setEduInfoOut={setEduInfoOut} />
                        <hr /><br />
                        <button onClick={generatePDF} className="pdf-btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span className='text-xs'>PDF</span>
                        </button>

                    </form>
                    <section className='output-container'>
                        <CVOutput generalInfoOut={generalInfoOut} eduInfoOut={eduInfoOut} workExpOut={workExpOut} setEduInfoOut={setEduInfoOut} setWorkExpOut={setWorkExpOut} />
                    </section>
                </main>
                <footer className='footer text-sm hover:text-base' >2024 {String.fromCharCode(169)} Sankhadip Roy</footer>
            </div>
        </>
    )
}

export default App