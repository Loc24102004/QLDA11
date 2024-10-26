import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import "../app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  location: string;
  status: string;
  userName: string;
  email: string;
  phoneNumber: string;
}

export default function UserProfile() {
  const router = useRouter();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    status: '',
    userName: '',
    email: '',
    phoneNumber: '',
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  useEffect(() => {
    const fetchedData: FormData = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      gender: 'Male',
      location: 'New York',
      status: 'Active',
      userName: 'johndoe123',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    };
    setFormData(fetchedData);
    setProfileImage("/profile.JPG");
  }, []);

  return (
    <div className="profile-page container d-flex justify-content-start align-items-start mt-5">
      <div className="d-flex justify-content-between">
        <button onClick={toggleTheme} className="btn btn-custom border bg-white mb-3">
          {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
      </div>
      <div className="profile-sidebar mt-2 p-3 col-md-3 text-center">
        <div className="d-flex justify-content-center position-relative">
        <img
          src={profileImage || "/images/profile.JPG"} // Use relative path from public folder
          alt="Profile"
          className="img-fluid rounded-circle mb-3"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />

        </div>
        <p className="p-1">{formData.userName}</p>
        <button className="btn btn-dark w-auto">Become an Author</button>
      </div>

      <div className="profile-settings col-md-9">
        <h2 className='mb-4'>User Profile</h2>
        <div className="p-3" style={{ border: '1px solid #ccc' }}>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <p className="border rounded p-2">{formData.userName}</p>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label className="form-label">First Name</label>
              <p className="border rounded p-2">{formData.firstName}</p>
            </div>
            <div className="col">
              <label className="form-label">Last Name</label>
              <p className="border rounded p-2">{formData.lastName}</p>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <p className="border rounded p-2">{formData.gender}</p>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <div className="input-group">
              <input
                type={showEmail ? "text" : "password"}
                className="form-control pe-5"
                value={formData.email}
                readOnly
              />
              <i
                className={`bi ${showEmail ? "bi-eye" : "bi-eye-slash"} position-absolute top-50 end-0 translate-middle-y px-3 cursor-pointer`}
                onClick={() => setShowEmail(!showEmail)}
                style={{ fontSize: "1.25rem", zIndex: 10 }}
              ></i>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <div className="input-group">
              <input
                type={showPhoneNumber ? "text" : "password"}
                className="form-control"
                value={formData.phoneNumber}
                readOnly
              />
              <i
                className={`bi ${showPhoneNumber ? "bi-eye" : "bi-eye-slash"} position-absolute top-50 end-0 translate-middle-y px-3 cursor-pointer`}
                onClick={() => setShowPhoneNumber(!showPhoneNumber)}
                style={{ fontSize: "1.25rem", zIndex: 10 }}
              ></i>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <p className="border rounded p-2">{formData.dateOfBirth}</p>
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <p className="border rounded p-2">{formData.status}</p>
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <p className="border rounded p-2">{formData.location}</p>
          </div>

          <div className="d-flex justify-content-start mt-4">
            <button
              type="button"
              className="btn btn-danger w-auto me-2"
              onClick={() => router.push('/edit_user_profile')}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-dark w-auto"
              onClick={() => router.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
