
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Navigate from '../../components/Navigate';
import HeaderPage from '../../components/HeaderPage';
import Footer from '../../components/Footer';
import React, { useEffect } from 'react';
import axios from "axios";

export default function postJob() {
  const [gridList, setGridList] = React.useState<any>([]);
  useEffect(() => {
    axios.get("http://localhost:8001/api/admin/all-active-jobs?pageNo=0&pageSize=20", {
      headers: {
        "Content-Type": "application/json"
        //Authorization: ``,
      },
    }).then((res: any) => {
      setGridList(res.data.body)
      // debugger
    });
  }, []);


  const [formData, setFormData] = React.useState({
    jobTitle: "",
    location: "",
    sector: "",
    subSector: "",
    industrialName: "",
    contractType: "",
    consultant: "",
    jobReferences: "",
    jobNature: "",
    jobDescription: ""
  });

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }


  const onSubmit = (e: any) => {
    e.preventDefault();

    const jobData = {
      jobTitle: formData.jobTitle,
      location: formData.location,
      sector: formData.sector,
      subSector: formData.subSector,
      industrialName: formData.industrialName,
      contractType: formData.contractType,
      consultant: formData.consultant,
      jobReferences: formData.jobReferences,
      jobNature: formData.jobNature,
      jobDescription: formData.jobDescription
    };
    let responsea = axios.post("http://localhost:8001/api/admin/job-post", jobData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaXRlc3QiLCJpYXQiOjE2OTQ5NTUzNTEsImV4cCI6MTY5NTA0MTc1MX0.1sBovw0nDeqO1bXvAyGH-7R09wDiO4b66wS1Rre4o0Q`,
      },
    }).then((response: any) => {
      console.log(response);
    });
  }


  return (
    <>

      <div>
        <HeaderPage Key="12123"/>
        <Navigate Key="1212324"/>
        <div className='container'>
          <form onSubmit={onSubmit}>
            <div className="form-row row">
              <div className="form-group col-md-4">
                <label>Job Title</label>
                <input type="text" id="jobTitle" name="jobTitle" className="form-control" onChange={handleInput} />
              </div>
              <div className="form-group col-md-4">
                <label>Location</label>
                <input type="text" id="location" name="location" className="form-control" onChange={handleInput} />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-4">
                <label>Sector</label>
                <input type="text" id="sector" name="sector" className="form-control" onChange={handleInput} />
              </div>
              <div className="form-group col-md-4">
                <label>Sub Sector</label>
                <input type="text" id="subSector" name="subSector" className="form-control" onChange={handleInput} />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-4">
                <label>Industrial Name</label>
                <input type="text" id="industrialName" name="industrialName" className="form-control" onChange={handleInput} />
              </div>
              <div className="form-group col-md-4">
                <label>Contract Type</label>
                <input type="text" id="contractType" name="contractType" className="form-control" onChange={handleInput} />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-4">
                <label>Consultant</label>
                <input type="text" id="consultant" name="consultant" className="form-control" onChange={handleInput} />
              </div>
              <div className="form-group col-md-4">
                <label>Job References</label>
                <input type="text" id="jobReferences" name="jobReferences" className="form-control" onChange={handleInput} />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-4">
                <label>Job Nature</label>
                <input type="text" id="jobNature" name="jobNature" className="form-control" onChange={handleInput} />
              </div>
              <div className="form-group col-md-4">
                <label>Job Description</label>
                <input type="text" id="jobDescription" name="jobDescription" className="form-control" onChange={handleInput} />
              </div>
            </div>
            <button type="submit">Job Post</button>
          </form>
          <div>
          </div>
        </div>
        <Footer />
      </div>

      <table>
        <thead>
          <tr>

          </tr>
        </thead>
        <tbody>
          {gridList.map((grid: any) => {
            return (
              <tr>
                <td>{grid.jobTitle}</td>
                <td>{grid.jobTitle}</td>
                <td>{grid.jobTitle}</td>
                <td>{grid.jobTitle}</td>
                <td>{grid.jobTitle}</td>
                <td>{grid.jobTitle}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </>
  )
}
