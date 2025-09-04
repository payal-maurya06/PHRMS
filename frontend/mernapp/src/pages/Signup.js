import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from "../utils";


function Signup() {

    const [role, setRole] = useState("");
    const [signupInfo, setSignupInfo] = useState(
        {   //common fields
            name: '',
            email: '',
            password: '',
            contactNo: '',
            role: '',
            //Patient-specific fields
            age: '',
            gender: '',
            medicalHistory: '',

            //Doctor-specific fields
            specialization: '',
            licenseNumber: '',
            yearsofexp: '',

            //Admin-specific fiels
            hospitalname: '',
            hospitalcode: '',
            roleType: '',
            departmentName: '',
            departmentCode: '',
            verificationCode: ''

        }
    );

    const navigate = useNavigate();

    /*  const handleChange = (e) => {
         const { name, value } = e.target;
         console.log(name, value);
         const copySignupInfo = { ...signupInfo };
         copySignupInfo[name] = value;
         setSignupInfo(copySignupInfo);
     } */

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo({ ...signupInfo, [name]: value });
    };

    console.log('SignupInfo -> ', signupInfo)

    const handleSignup = async (e) => {
        e.preventDefault();
try{
        let payload = {
            name: signupInfo.name,
            email: signupInfo.email,
            password: signupInfo.password,
            contactNo: signupInfo.contactNo,
            role: signupInfo.role,
        };

        if (signupInfo.role === "patient") {
            payload = { ...payload, age: signupInfo.age, gender: signupInfo.gender, medicalHistory: signupInfo.medicalHistory };
        } else if (signupInfo.role === "doctor") {
            payload = { ...payload, specialization: signupInfo.specialization, licenseNumber: signupInfo.licenseNumber, yearsOfExp: signupInfo.yearsOfExp };
        } else if (signupInfo.role === "admin") {
            payload = { ...payload, hospitalName: signupInfo.hospitalName, hospitalCode: signupInfo.hospitalCode, roleType: signupInfo.roleType, departmentName: signupInfo.departmentName, departmentCode: signupInfo.departmentCode, verificationCode: signupInfo.verificationCode };
        }

        const response = await fetch("http://localhost:8080/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        const { success, message, error } = result;
        if (success) {
            handleSuccess(message);
            setTimeout(() => {
                navigate('/login')
            }, 1000)
        } else if (error) {
            const details = error?.details[0].message;
            handleError(details);
        } else if (!success) {
            handleError(message);
        }
        console.log(result);
    } catch (err) {
        handleError(err.message || "Something went wrong");
    }
};

return (
    <div className='container'>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>



            { /*common fields*/}
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    onChange={handleChange}
                    type='text'
                    name='name'
                    autoFocus
                    placeholder='Enter your name...'
                    value={signupInfo.name}
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    onChange={handleChange}
                    type='email'
                    name='email'
                    placeholder='Enter your email...'
                    value={signupInfo.email}

                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    onChange={handleChange}
                    type='password'
                    name='password'

                    placeholder='Enter your password...'
                    value={signupInfo.password}

                />
            </div>
            <div>
                <label htmlFor="contactNo">Contact No</label>
                <input
                    onChange={handleChange}
                    type="tel"
                    name="contactNo"
                    placeholder="Enter your contact number..."
                    pattern='[0-9]{10}'
                    maxLength="10"
                    value={signupInfo.contactNo}
                />
            </div>

            {/* Role Dropdown */}
            <div>
                <label htmlFor="role">Select Role</label>
                <select
                    name="role"
                    value={signupInfo.role}
                    onChange={(e) => {
                        handleChange(e);
                        setRole(e.target.value);
                    }}
                >
                    <option value="">-- Select Role --</option>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>




            {/* patient fields*/}
            {role === "patient" && (
                <>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input
                            onChange={handleChange}
                            type="number"
                            name="age"
                            placeholder="Enter your age"
                            value={signupInfo.age}
                        />
                    </div>


                    <div>
                        <label className="gender-label">Gender</label>
                        <div className="gender-options">
                            <label className="gender-item" htmlFor="male">
                                <input
                                    id="male"
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={signupInfo.gender === "Male"}
                                    onChange={handleChange}
                                />
                                Male
                            </label>

                            <label className="gender-item" htmlFor="female">
                                <input
                                    id="female"
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={signupInfo.gender === "Female"}
                                    onChange={handleChange}
                                />
                                Female
                            </label>

                            <label className="gender-item" htmlFor="other">
                                <input
                                    id="other"
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={signupInfo.gender === "Other"}
                                    onChange={handleChange}
                                />
                                Other
                            </label>
                        </div>
                    </div>



                    <div>
                        <label htmlFor="medicalHistory">Medical History</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="medicalHistory"
                            placeholder="Enter medical history"
                            value={signupInfo.medicalHistory}
                        />
                    </div>
                </>
            )}

            {/* Doctor Fields */}
            {role === "doctor" && (
                <>
                    <div>
                        <label htmlFor="specialization">Specialization</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="specialization"
                            placeholder="Enter specialization"
                            value={signupInfo.specialization}
                        />
                    </div>
                    <div>
                        <label htmlFor="licenseNumber">License Number</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="licenseNumber"
                            placeholder="Enter license number"
                            value={signupInfo.licenseNumber}
                        />
                    </div>
                    <div>
                        <label htmlFor="yearsOfExp">Years of Experience</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="yearsOfExp"
                            placeholder="Enter years of Experience"
                            value={signupInfo.yearsofexp}
                        />
                    </div>
                </>
            )}

            {/* Admin Fields */}
            {role === "admin" && (
                <>
                    <div>
                        <label htmlFor="hospitalName">Hospital/Clinic Name</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="hospitalName"
                            placeholder="Enter hospital/clinic name"
                            value={signupInfo.hospitalName}
                        />
                    </div>
                    <div>
                        <label htmlFor="hospitalCode">Hospital Code / Registration ID</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="hospitalCode"
                            placeholder="Enter hospital code"
                            value={signupInfo.hospitalCode}
                        />
                    </div>
                    <div>
                        <label htmlFor="roleType">Role Type</label>
                        <select
                            name="roleType"
                            value={signupInfo.roleType}
                            onChange={handleChange}
                        >
                            <option value="">-- Select Admin Type --</option>
                            <option value="hospitalAdmin">Hospital Admin</option>
                            <option value="departmentAdmin">Department Admin</option>
                        </select>
                    </div>

                    {/* Show department fields only if Department Admin */}
                    {signupInfo.roleType === "departmentAdmin" && (
                        <>
                            <div>
                                <label htmlFor="departmentName">Department Name</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="departmentName"
                                    placeholder="Enter department name"
                                    value={signupInfo.departmentName}
                                />
                            </div>
                            <div>
                                <label htmlFor="departmentCode">Department Code (optional)</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="departmentCode"
                                    placeholder="Enter department code"
                                    value={signupInfo.departmentCode}
                                />
                            </div>
                        </>
                    )}

                    <div>
                        <label htmlFor="verificationCode">Verification Code / Authorization Key</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="verificationCode"
                            placeholder="Enter verification code"
                            value={signupInfo.verificationCode}
                        />
                    </div>
                </>
            )}

            <button type='submit'>Signup</button>
            <span>Already have an account ?
                <Link to='/login'>Login</Link>
            </span>
        </form>
        <ToastContainer />

    </div>
)
}

export default Signup
