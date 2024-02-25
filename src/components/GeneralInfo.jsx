export default function GeneralInfo({ generalInfo, setGeneralInfo, setGeneralInfoOut }) {
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setGeneralInfo({ ...generalInfo, firstName: e.target.value })
                break;
            case 'lastName':
                setGeneralInfo({ ...generalInfo, lastName: e.target.value })
                break;
            case 'job':
                setGeneralInfo({ ...generalInfo, job: e.target.value })
                break;
            case 'email':
                setGeneralInfo({ ...generalInfo, email: e.target.value })
                break;
            case 'phone':
                setGeneralInfo({ ...generalInfo, phone: e.target.value })
                break;
            case 'location':
                setGeneralInfo({ ...generalInfo, location: e.target.value })
                break;
            case 'description':
                setGeneralInfo({ ...generalInfo, description: e.target.value })
                break;
        }
        e.preventDefault();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setGeneralInfoOut(generalInfo)
    }

    return (
        <div className="input-area">
            <div className="input-coloumn">
                <input className="text-xs p-2.5 m-0.5" type="text" name='firstName' placeholder="First Name..." onChange={handleChange} />
                <input className="text-xs p-2.5 m-0.5" type="text" name='lastName' placeholder="Last Name..." onChange={handleChange} />
            </div>
            <div className="input-coloumn">
                <input className="text-xs p-2.5 m-0.5" type="text" name="job" placeholder="Position / Job applying for?" onChange={handleChange} />
                <input className="text-xs p-2.5 m-0.5" type="email" name="email" placeholder="E-mail Address" onChange={handleChange} />
            </div>
            <div className="input-column">
                <input className="text-xs p-2.5 m-0.5" type="text" name="phone" placeholder="Phone No." onChange={handleChange} />
                <input className="text-xs p-2.5 m-0.5" type="text" name="location" placeholder="Address / Location" onChange={handleChange} />
            </div>
            <div className="input-coloumn">
                <textarea className="block p-2.5 w-full text-xs rounded-lg border border-gray-300" type='text' name="description" placeholder="Description" onChange={handleChange}></textarea>
            </div>
            <button onClick={handleSubmit} className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold p-1.5 rounded-full"> Submit</button>
        </div>
    )
}