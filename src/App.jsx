import { useState } from "react";
import "./styles/App.css";
import GeneraralInfo from "./components/GeneralInfo";
import CVOutput from "./components/CVOutput";
import Experience from "./components/Experience";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@material-tailwind/react";

const App = () => {
  // general information
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    job: "",
    email: "",
    phone: "",
    location: "",
    description: "",
  });
  const [generalInfoOut, setGeneralInfoOut] = useState({
    firstName: "",
    lastName: "",
    job: "",
    email: "",
    phone: "",
    location: "",
    description: "",
  });
  // educational information
  const [eduInfo, setEduInfo] = useState([
    { school: "", course: "", address: "", yrStart: "", yrEnd: "" },
  ]);
  const [eduInfoOut, setEduInfoOut] = useState([]);
  // work related information
  const [workExp, setWorkExp] = useState([
    {
      jobTitle: "",
      course: "",
      address: "",
      yrStart: "",
      yrEnd: "",
      description: "",
    },
  ]);
  const [workExpOut, setWorkExpOut] = useState([]);

  const generatePdf = () => {
    const input = document.getElementById("divToConvert");
    console.log("a");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("converted-document.pdf");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-1 sm:px-6 lg:px-8">
          <div className="main">
            <form className="input-container bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">General Information</h2>
                <GeneraralInfo
                  generalInfo={generalInfo}
                  setGeneralInfo={setGeneralInfo}
                  setGeneralInfoOut={setGeneralInfoOut}
                />
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Previous Work Experience</h2>
                <Experience
                  workExp={workExp}
                  setWorkExp={setWorkExp}
                  setWorkExpOut={setWorkExpOut}
                />
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Educational Experience</h2>
                <Experience
                  eduInfo={eduInfo}
                  setEduInfo={setEduInfo}
                  setEduInfoOut={setEduInfoOut}
                />
              </section>
            </form>
            <section
              className="input-container bg-white shadow-md rounded-lg p-6 border border-gray-200"
              id="divToConvert"
            >
              <CVOutput
                generalInfoOut={generalInfoOut}
                eduInfoOut={eduInfoOut}
                workExpOut={workExpOut}
                setEduInfoOut={setEduInfoOut}
                setWorkExpOut={setWorkExpOut}
              />
            </section>
          </div>
          <div className="mt-6 text-center">
            <Button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={generatePdf}
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Generate PDF
            </Button>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow-md mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            2024 &copy; Sankhadip Roy
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
