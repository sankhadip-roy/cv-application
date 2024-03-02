import { Button, Input, Textarea } from "@material-tailwind/react";
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
            <div className="input-column">
                <div className="p-1">
                    <Input label="First Name" name='firstName' onChange={handleChange} />
                </div>
                <div className="p-1">
                    <Input label="Last Name" name='lastName' onChange={handleChange} />
                </div>
            </div>
            <div className="p-1">
                <Input label="Position applying for ?" name='job' onChange={handleChange} />
            </div>
            <div className="input-column">
                <div className="p-1">
                    <Input name="email" label="Email" onChange={handleChange} />
                </div>
                <div className="p-1">
                    <Input name="phone" label="Phone" onChange={handleChange} />
                </div>
            </div>

            <div className="p-1">
                <Input name="location" label="Address / Location" onChange={handleChange} />
            </div>
            <div className="p-1">
                <Textarea name="description" label="Message" onChange={handleChange} />
            </div>
            <Button className="ml-2" onClick={handleSubmit} variant="gradient" size="sm">Add</Button>
        </div>
    )
}