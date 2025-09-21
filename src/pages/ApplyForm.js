import React, { useState } from "react";
import styled from "styled-components";

/* ---------- SHARED STYLED COMPONENTS ---------- */
export const FormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 40px;
  position: relative;
  background: #f6f6f6;

  &:before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url("/more2.png");
    background-repeat: repeat;
    background-attachment: fixed;
    background-size: 200px 200px;
    opacity: 0.08;
    z-index: 0;
  }
`;

export const FormBox = styled.form`
  position: relative;
  z-index: 1;
  background: rgba(255,255,255,0.95);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 900px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;

  img {
    width: 90px;
    height: 90px;
    margin-right: 15px;
  }

  h2 {
    margin: 0;
    font-size: 1.8rem;
    color: #0077cc;
  }
`;

export const SectionTitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 10px;
  color: #0077cc;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  background: #0077cc;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #005fa3;
  }
`;

export const SuccessMsg = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  background: #e6ffed;
  color: #1a7f37;
  font-weight: bold;
  text-align: center;
  border: 1px solid #a3e4b5;
`;

/* --- Tabs --- */
const Switcher = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #ddd;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => (props.active ? "#0077cc" : "#555")};
  border-bottom: ${(props) =>
    props.active ? "3px solid #0077cc" : "3px solid transparent"};
  transition: all 0.3s ease;

  &:hover {
    color: #0077cc;
  }
`;

/* ---------- ADMISSION FORM ---------- */
function AdmissionForm({ handleSubmit, submitted, photoPreview, handlePhotoChange }) {
  return (
    <FormContainer>
      <FormBox 
        action="https://formspree.io/f/xpwjbrwy"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="New Submission: Admission Application" />

         <input type="hidden" name="formType" value="Admission Application" />

        <Header>
          <img src="/more2.png" alt="School Logo" />
          <h2>MORE THAN CONQUERORS SCHOOL OF THEOLOGY</h2>
        </Header>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          STUDENT ADMISSION APPLICATION FORM
        </h3>

        {/* SECTION A */}
        <SectionTitle>SECTION A: PERSONAL INFORMATION</SectionTitle>
        <Input type="text" name="fullName" placeholder="Surname    Middle Name    First Name" required /> 
        <p style={{ fontWeight: "bold"}}>Date Of Birth</p>
        <Input type="date" name="dob" required />
        <Select name="gender" required>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </Select>

        {/* SECTION B */}
        <SectionTitle>SECTION B: ACADEMIC BACKGROUND</SectionTitle>
        <Input type="text" name="qualification" placeholder="Highest Academic Qualification" />
        <Input type="file" name="certificate" />

        {/* SECTION C */}
        <SectionTitle>SECTION C: PROGRAM OF STUDY</SectionTitle>
        <Select name="program" required>
          <option value="">Select Level</option>
          <option>Certificate in Theology</option>
          <option>Diploma in Theology</option>
          <option>Bachelors in Theology</option>
          <option>Masters in Theology</option>
          <option>English</option>
          <option>Management</option>
          <option>Other</option>
        </Select>
        <Select name="mode" required>
          <option value="">Mode of Study</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Online</option>
        </Select>
        <p style={{ fontWeight: "bold"}}>When do you intend to start?</p>
        <Input type="date" name="startDate" />

        {/* SECTION D */}
        <SectionTitle>SECTION D: SPIRITUAL BACKGROUND</SectionTitle>
        <Select name="bornAgain" required>
          <option value="">Are you born again?</option>
          <option>Yes</option>
          <option>No</option>
        </Select>
        <Select name="baptized" required>
          <option value="">Have you been baptized?</option>
          <option>Yes</option>
          <option>No</option>
        </Select>
        <Input type="text" name="church" placeholder="Name of Church" />
        <Input type="text" name="denomination" placeholder="Denomination" />
        <Input type="text" name="pastor" placeholder="Pastor’s Name" />
        <Input type="text" name="churchAddress" placeholder="Church Address" />
        <Input type="text" name="role" placeholder="Your Role in the Church (if any)" />

        {/* SECTION E */}
        <SectionTitle>SECTION E: MINISTRY EXPERIENCE</SectionTitle>
        <TextArea name="ministry" rows="3" placeholder="Provide details of your involvement in ministry"></TextArea>

        {/* SECTION F */}
        <SectionTitle>SECTION F: REFERENCES</SectionTitle>
        <Input type="text" name="refPastor" placeholder="Pastoral Reference" />
        <Input type="text" name="refAcademic" placeholder="Academic/Professional Reference" />

        {/* SECTION G */}
        <SectionTitle>SECTION G: REQUIRED DOCUMENTS</SectionTitle>
        <div>
          <label>Copy of National ID / Passport</label>
          <Input type="file" name="id_passport" required />
        </div>
        <div>
          <label>Copy of Academic Certificate</label>
          <Input type="file" name="certificate" required />
        </div>
        <div>
          <label>Recommendation Letter from Pastor</label>
          <Input type="file" name="recommendation_letter" required />
        </div>

        {/* Passport photo with preview */}
        <div style={{ marginBottom: "15px" }}>
          <label>Passport-size Photograph</label>
          <input
            type="file"
            name="passport_photo"
            accept="image/*"
            onChange={handlePhotoChange} 
            required
          />
          <div style={{
            width: "120px", height: "150px",
            border: "2px dashed #ccc", borderRadius: "8px",
            marginTop: "10px", display: "flex",
            justifyContent: "center", alignItems: "center",
            background: "#f9f9f9", overflow: "hidden",
          }}>
            {photoPreview ? (
              <img src={photoPreview} alt="Passport Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span style={{ color: "#888", fontSize: "0.9rem" }}>Photo Here</span>
            )}
          </div>
        </div>

        {/* SECTION H */}
        <SectionTitle>SECTION H: DECLARATION</SectionTitle>
        <p>I hereby declare that the information provided is true and complete.</p>
        <TextArea name="declaration" placeholder="Type your full name as signature" rows="2" required />
        <Input type="date" name="declarationDate" required />

        <Button type="submit">Submit Application</Button>
        {submitted && <SuccessMsg>Thank you! Your application has been submitted.</SuccessMsg>}
      </FormBox>
    </FormContainer>
  );
}


/* ---------- ORDINATION FORM (shortened for clarity) ---------- */
function OrdinationForm({ handleSubmit, submitted }) {
  return (
    <FormContainer>
      <FormBox
        action="https://formspree.io/f/xpwjbrwy"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="New Submission: Ordination Application" />
        <input type="hidden" name="formType" value="Ordination Application" />

        <Header>
          <img src="/more2.png" alt="Logo" />
          <h2>MORE THAN CONQUERORS SCHOOL OF THEOLOGY</h2>
        </Header>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          ORDINATION APPLICATION FORM
        </h3>

        <SectionTitle>Personal Information</SectionTitle>
       <Input type="text" name="fullName" placeholder="Surname    Middle Name    First Name" required /> 
        <p style={{ fontWeight: "bold"}}>Date Of Birth</p>
        <Input type="date" name="dob" required />
        <Input name="age" placeholder="Age" />
        <Select name="gender">
          <option value="">Gender</option><option>Male</option><option>Female</option>
        </Select>

        <SectionTitle>Ministry Information</SectionTitle>
        <Input name="churchAffiliation" placeholder="Church Affiliation" />
        <Input name="currentRole" placeholder="Current Ministry Role" />
        <Input name="yearsInMinistry" placeholder="Years in Ministry" />
        <TextArea name="salvationTestimony" rows="3" placeholder="Salvation Testimony" />

        <SectionTitle>References</SectionTitle>
        <Input name="ref1Name" placeholder="Reference #1 Name" required />
        <Input name="ref1Phone" placeholder="Reference #1 Phone" />
        <Input name="ref1Name" placeholder="Reference #2 Name" required />
        <Input name="ref1Phone" placeholder="Reference #2 Phone" />

        <SectionTitle>Declaration</SectionTitle>
        <p>I hereby declare that the information provided is true and complete.</p>
         <TextArea name="declaration" placeholder="Type your full name as signature" rows="2" required />
        <Input type="date" name="applicationDate" required />

        <Button type="submit">Submit Application</Button>
        {submitted && <SuccessMsg>Thank you! Your ordination application has been submitted.</SuccessMsg>}
      </FormBox>
    </FormContainer>
  );
}

/* ---------- HONORARY DOCTORATE FORM ---------- */
function DoctorateForm({ handleSubmit, submitted }) {
  return (
    <FormContainer>
      <FormBox
        action="https://formspree.io/f/xpwjbrwy"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="New Submission: Honorary Doctorate Application" />
        <input type="hidden" name="formType" value="Honorary Doctorate Application" />

        <Header>
          <img src="/more2.png" alt="Logo" />
          <h2>MORE THAN CONQUERORS SCHOOL OF THEOLOGY</h2>
        </Header>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          HONORARY DOCTORATE AWARD APPLICATION FORM
        </h3>

        <SectionTitle>SECTION A — PERSONAL INFORMATION</SectionTitle>
        <Input name="fullName" placeholder="Full Name (as on certificate)" required />
        <p style={{ fontWeight: "bold"}}>Date Of Birth</p>
        <Input type="date" name="dob" required />
        <Select name="gender" required>
          <option value="">Gender</option><option>Male</option><option>Female</option>
        </Select>
      
        <Input name="nationality" placeholder="Nationality" />
        <TextArea name="residentialAddress" rows="2" placeholder="Residential Address" />
        <Input type="email" name="email" placeholder="Email Address" required />
        <Input name="phone" placeholder="Phone Number" required />

        <SectionTitle>SECTION B — PROFESSIONAL / MINISTRY BACKGROUND</SectionTitle>
        <Input name="currentOccupation" placeholder="Current Occupation / Ministry Role" />
        <Input name="organization" placeholder="Organization / Ministry Name" />
        <Input name="yearsOfService" placeholder="Years of Service in Ministry / Profession" />
        <TextArea name="biography" rows="5" placeholder="Brief Biography" />

        <SectionTitle>SECTION C — CONTRIBUTIONS & ACHIEVEMENTS</SectionTitle>
        <TextArea name="achievements" rows="4"
          placeholder="Notable achievements, leadership roles, publications, humanitarian works, spiritual impact" />

        <SectionTitle>SECTION D — RECOMMENDATION</SectionTitle>
         <p style={{ fontWeight: "bold"}}>Recommended by someone?</p>
        <Select name="recommended">
         
          <option value=""></option>
          <option>Yes</option><option>No</option>
        </Select>
        <Input name="recommenderName" placeholder="Name of Recommender" />
        <Input name="recommenderTitle" placeholder="Position / Title" />
        <Input name="recommenderContact" placeholder="Contact Information" />

        <SectionTitle>SECTION E — DECLARATION</SectionTitle>
        <p style={{lineHeight: "1.8"}}>I hereby declare that the information provided in this application is true and accurate to the best of my knowledge.
          I understand that this honorary doctorate is conferred in recognition of my contributions and is not an academic 
          application earned through formal course work.</p>
        <Input name="applicantSignature" placeholder="Type your full name as signature" required />
        <Input type="date" name="applicationDate" required />

        <Button type="submit">Submit Application</Button>
        {submitted && <SuccessMsg>Thank you! Your honorary doctorate application has been submitted.</SuccessMsg>}
      </FormBox>
    </FormContainer>
  );
}

/* ---------- MAIN SWITCHER ---------- */
export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [formType, setFormType] = useState("admission");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setSubmitted(true);
      form.reset();
      setPhotoPreview(null);
    }
  };

  return (
    <div>
      <Switcher>
        <TabButton
          active={formType === "admission"}
          onClick={() => { setFormType("admission"); setSubmitted(false); }}
        >
          Student Admission
        </TabButton>
        <TabButton
          active={formType === "ordination"}
          onClick={() => { setFormType("ordination"); setSubmitted(false); }}
        >
          Ordination
        </TabButton>
        <TabButton
          active={formType === "doctorate"}
          onClick={() => { setFormType("doctorate"); setSubmitted(false); }}
        >
          Honorary Doctorate
        </TabButton>
      </Switcher>

      {formType === "admission" && (
        <AdmissionForm
          handleSubmit={handleSubmit}
          submitted={submitted}
          photoPreview={photoPreview}
          handlePhotoChange={handlePhotoChange}
        />
      )}
      {formType === "ordination" && (
        <OrdinationForm
          handleSubmit={handleSubmit}
          submitted={submitted}
        />
      )}
      {formType === "doctorate" && (
        <DoctorateForm
          handleSubmit={handleSubmit}
          submitted={submitted}
        />
      )}
    </div>
  );
}














// import React, { useState } from "react";
// import styled from "styled-components";

// // ---------------- STYLED COMPONENTS ----------------
// export const FormContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: start;
//   padding: 40px;
//   position: relative;
//   background: #f6f6f6;

//   &:before {
//     content: "";
//     position: absolute;
//     top: 0; left: 0; right: 0; bottom: 0;
//     background-image: url("/more2.png");
//     background-repeat: repeat;
//     background-attachment: fixed;
//     background-size: 200px 200px;
//     opacity: 0.08;
//     z-index: 0;
//   }
// `;

// export const FormBox = styled.form`
//   position: relative;
//   z-index: 1;
//   background: rgba(255 ,255, 255, 0.9);
//   padding: 30px;
//   border-radius: 15px;
//   box-shadow: 0 6px 15px rgba(0,0,0,0.1);
//   width: 100%;
//   max-width: 800px;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px;
//   text-align: center;

//   img {
//     width: 90px;
//     height: 90px;
//     margin-right: 15px;
//   }

//   h2 {
//     margin: 0;
//     font-size: 1.8rem;
//     color: #0077cc;
//   }
// `;

// export const SectionTitle = styled.h3`
//   margin-top: 20px;
//   margin-bottom: 10px;
//   color: #0077cc;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin: 8px 0;
//   border-radius: 8px;
//   border: 1px solid #ccc;
// `;

// export const Select = styled.select`
//   width: 100%;
//   padding: 12px;
//   margin: 8px 0;
//   border-radius: 8px;
//   border: 1px solid #ccc;
// `;

// export const TextArea = styled.textarea`
//   width: 100%;
//   padding: 12px;
//   margin: 8px 0;
//   border-radius: 8px;
//   border: 1px solid #ccc;
// `;

// export const Button = styled.button`
//   width: 100%;
//   padding: 14px;
//   margin-top: 20px;
//   background: #0077cc;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: background 0.3s;

//   &:hover {
//     background: #005fa3;
//   }
// `;

// export const SuccessMsg = styled.div`
//   margin-top: 20px;
//   padding: 15px;
//   border-radius: 8px;
//   background: #e6ffed;
//   color: #1a7f37;
//   font-weight: bold; 
//   text-align: center;
//   border: 1px solid #a3e4b5;
// `;

// const Switcher = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
//   gap: 10px;
// `;

// const TabButton = styled.button`
// background: none;
// border: none;
// outline: none;
// padding:12px 24px;
// margin: 0;
// font-size: 1rem;
// font-weight: bold;
// cursor: pointer;
// color: ${(props) => (props.active ? "#0077cc" : "#555")};
// border-bottom: ${(props) => (props.active ? "#3px solid #0077cc" : "3px solid transparent")};
// transition: all 0.3s ease;

// &:hover {
// color: #0077cc;
// }
//   // padding: 10px 20px;
//   // border: none;
//   // border-radius: 8px;
//   // cursor: pointer;
//   // background: ${(props) => (props.active ? "#0077cc" : "#ccc")};
//   // color: white;
//   // font-weight: bold;

//   // &:hover {
//   //   background: ${(props) => (props.active ? "#005fa3" : "#999")};
//   // }
// `;

// // ---------------- ADMISSION FORM ----------------
// function AdmissionForm({ handleSubmit, submitted, photoPreview, handlePhotoChange }) {
//   return (
//     <FormContainer>
//       <FormBox 
//         action="https://formspree.io/f/xpwjbrwy"
//         method="POST"
//         encType="multipart/form-data"
//         onSubmit={handleSubmit}
//       >
//         <input type="hidden" name="_subject" value="New Submission: Admission Application" />

//          <input type="hidden" name="formType" value="Admission Application" />

//         <Header>
//           <img src="/more2.png" alt="School Logo" />
//           <h2>MORE THAN CONQUERORS SCHOOL OF THEOLOGY</h2>
//         </Header>
//         <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
//           STUDENT ADMISSION APPLICATION FORM
//         </h3>

//         {/* SECTION A */}
//         <SectionTitle>SECTION A: PERSONAL INFORMATION</SectionTitle>
//         <Input type="text" name="fullName" placeholder="Surname    Middle Name    First Name" required /> 
//         <p style={{ fontWeight: "bold"}}>Date Of Birth</p>
//         <Input type="date" name="dob" required />
//         <Select name="gender" required>
//           <option value="">Gender</option>
//           <option>Male</option>
//           <option>Female</option>
//         </Select>

//         {/* SECTION B */}
//         <SectionTitle>SECTION B: ACADEMIC BACKGROUND</SectionTitle>
//         <Input type="text" name="qualification" placeholder="Highest Academic Qualification" />
//         <Input type="file" name="certificate" />

//         {/* SECTION C */}
//         <SectionTitle>SECTION C: PROGRAM OF STUDY</SectionTitle>
//         <Select name="program" required>
//           <option value="">Select Level</option>
//           <option>Certificate in Theology</option>
//           <option>Diploma in Theology</option>
//           <option>Bachelors in Theology</option>
//           <option>Masters in Theology</option>
//           <option>English</option>
//           <option>Management</option>
//           <option>Other</option>
//         </Select>
//         <Select name="mode" required>
//           <option value="">Mode of Study</option>
//           <option>Full Time</option>
//           <option>Part Time</option>
//           <option>Online</option>
//         </Select>
//         <p style={{ fontWeight: "bold"}}>When do you intend to start?</p>
//         <Input type="date" name="startDate" />

//         {/* SECTION D */}
//         <SectionTitle>SECTION D: SPIRITUAL BACKGROUND</SectionTitle>
//         <Select name="bornAgain" required>
//           <option value="">Are you born again?</option>
//           <option>Yes</option>
//           <option>No</option>
//         </Select>
//         <Select name="baptized" required>
//           <option value="">Have you been baptized?</option>
//           <option>Yes</option>
//           <option>No</option>
//         </Select>
//         <Input type="text" name="church" placeholder="Name of Church" />
//         <Input type="text" name="denomination" placeholder="Denomination" />
//         <Input type="text" name="pastor" placeholder="Pastor’s Name" />
//         <Input type="text" name="churchAddress" placeholder="Church Address" />
//         <Input type="text" name="role" placeholder="Your Role in the Church (if any)" />

//         {/* SECTION E */}
//         <SectionTitle>SECTION E: MINISTRY EXPERIENCE</SectionTitle>
//         <TextArea name="ministry" rows="3" placeholder="Provide details of your involvement in ministry"></TextArea>

//         {/* SECTION F */}
//         <SectionTitle>SECTION F: REFERENCES</SectionTitle>
//         <Input type="text" name="refPastor" placeholder="Pastoral Reference" />
//         <Input type="text" name="refAcademic" placeholder="Academic/Professional Reference" />

//         {/* SECTION G */}
//         <SectionTitle>SECTION G: REQUIRED DOCUMENTS</SectionTitle>
//         <div>
//           <label>Copy of National ID / Passport</label>
//           <Input type="file" name="id_passport" required />
//         </div>
//         <div>
//           <label>Copy of Academic Certificate</label>
//           <Input type="file" name="certificate" required />
//         </div>
//         <div>
//           <label>Recommendation Letter from Pastor</label>
//           <Input type="file" name="recommendation_letter" required />
//         </div>

//         {/* Passport photo with preview */}
//         <div style={{ marginBottom: "15px" }}>
//           <label>Passport-size Photograph</label>
//           <input
//             type="file"
//             name="passport_photo"
//             accept="image/*"
//             onChange={handlePhotoChange} 
//             required
//           />
//           <div style={{
//             width: "120px", height: "150px",
//             border: "2px dashed #ccc", borderRadius: "8px",
//             marginTop: "10px", display: "flex",
//             justifyContent: "center", alignItems: "center",
//             background: "#f9f9f9", overflow: "hidden",
//           }}>
//             {photoPreview ? (
//               <img src={photoPreview} alt="Passport Preview"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//             ) : (
//               <span style={{ color: "#888", fontSize: "0.9rem" }}>Photo Here</span>
//             )}
//           </div>
//         </div>

//         {/* SECTION H */}
//         <SectionTitle>SECTION H: DECLARATION</SectionTitle>
//         <p>I hereby declare that the information provided is true and complete.</p>
//         <TextArea name="declaration" placeholder="Type your full name as signature" rows="2" required />
//         <Input type="date" name="declarationDate" required />

//         <Button type="submit">Submit Application</Button>
//         {submitted && <SuccessMsg>Thank you! Your application has been submitted.</SuccessMsg>}
//       </FormBox>
//     </FormContainer>
//   );
// }

// // ---------------- ORDINATION FORM ----------------
// function OrdinationForm({ handleSubmit, submitted }) {
//   return (
//     <FormContainer>
//       <FormBox 
//         action="https://formspree.io/f/YOUR_NEW_FORM_ID"
//         method="POST"
//         encType="multipart/form-data"
//         onSubmit={handleSubmit}
//       >
//         <input type="hidden" name="_subject" value="New Submission: Ordination Application" />

//         <input type="hidden" name="formType" value="Ordination Application" />
//         <Header>
//           <img src="/more2.png" alt="School Logo" />
//           <h2>MORE THAN CONQUERORS SCHOOL OF THEOLOGY</h2>
//         </Header>
//         <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
//           ORDINATION APPLICATION FORM
//         </h3>

//         {/* SECTION A */}
//         <SectionTitle>SECTION A: PERSONAL INFORMATION</SectionTitle>
//         <Input type="text" name="fullName" placeholder="Surname    Middle Name    First Name" required /> 
//         <p style={{ fontWeight: "bold"}}>Date Of Birth</p>
//         <Select name="gender" required>
//           <option value="">Gender</option>
//           <option>Male</option>
//           <option>Female</option>
//         </Select>
//         <Input type="text" name="phone" placeholder="Phone Number" required />
//         <Input type="email" name="email" placeholder="Email Address" required />

//         {/* SECTION B */}
//         <SectionTitle>SECTION B: SPIRITUAL BACKGROUND</SectionTitle>
//         <Select name="bornAgain" required>
//           <option value="">Are you born again?</option>
//           <option>Yes</option>
//           <option>No</option>
//         </Select>
//         <Select name="baptized" required>
//           <option value="">Have you been baptized?</option>
//           <option>Yes</option>
//           <option>No</option>
//         </Select>
//         <Input type="text" name="church" placeholder="Current Church" required />
//         <Input type="text" name="pastor" placeholder="Senior Pastor’s Name" />

//         {/* SECTION C */}
//         <SectionTitle>SECTION C: MINISTRY EXPERIENCE</SectionTitle>
//         <TextArea
//           name="ministryExperience"
//           rows="4"
//           placeholder="Describe your ministry experience"
//           required
//         />
//         <Input type="text" name="ordinationRole" placeholder="Position sought (e.g. Pastor, Evangelist)" required />

//         {/* SECTION D */}
//         <SectionTitle>SECTION D: REFERENCES</SectionTitle>
//         <Input type="text" name="refPastor" placeholder="Pastoral Reference" required />
//         <Input type="text" name="refLeader" placeholder="Church Leader Reference" required />

//         {/* SECTION E */}
//         <SectionTitle>SECTION E: REQUIRED DOCUMENTS</SectionTitle>
//         <div>
//           <label>Recommendation Letter from Pastor</label>
//           <Input type="file" name="recommendation_letter" required />
//         </div>
//         <div>
//           <label>Passport-size Photograph</label>
//           <Input type="file" name="passport_photo" accept="image/*" required />
//         </div>

//         {/* SECTION F */}
//         <SectionTitle>SECTION F: DECLARATION</SectionTitle>
//         <p>I hereby declare that the information provided is true and complete.</p>
//         <TextArea name="declaration" placeholder="Type your full name as signature" rows="2" required />
//         <Input type="date" name="declarationDate" required />

//         <Button type="submit">Submit Application</Button>
//         {submitted && <SuccessMsg>Thank you! Your ordination application has been submitted.</SuccessMsg>}
//       </FormBox>
//     </FormContainer>
//   );
// }

// // ---------------- MAIN SWITCHER ----------------
// export default function ApplyForm() {
//   const [submitted, setSubmitted] = useState(false);
//   const [photoPreview, setPhotoPreview] = useState(null);
//   const [formType, setFormType] = useState("admission");

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setPhotoPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const data = new FormData(form);
//     const res = await fetch(form.action, {
//       method: form.method,
//       body: data,
//       headers: { Accept: "application/json" },
//     });
//     if (res.ok) {
//       setSubmitted(true);
//       form.reset();
//       setPhotoPreview(null);
//     }
//   };

//   return (
//     <div>
//       <Switcher>
//         <TabButton
//           active={formType === "admission"}
//           onClick={() => { setFormType("admission"); setSubmitted(false); }}
//         >
//           Student Admission
//         </TabButton>
//         <TabButton
//           active={formType === "ordination"}
//           onClick={() => { setFormType("ordination"); setSubmitted(false); }}
//         >
//           Ordination
//         </TabButton>
//       </Switcher>

//       {formType === "admission" && (
//         <AdmissionForm
//           handleSubmit={handleSubmit}
//           submitted={submitted}
//           photoPreview={photoPreview}
//           handlePhotoChange={handlePhotoChange}
//         />
//       )}
//       {formType === "ordination" && (
//         <OrdinationForm
//           handleSubmit={handleSubmit}
//           submitted={submitted}
//         />
//       )}
//     </div>
//   );
// }











// import React, { useState } from "react";
// import styled from "styled-components";


// export const FormContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: start;
//   padding: 40px;
//   position: relative;
//   background: #f6f6f6;
//   // background: linear-gradient(135deg, #f6d365, #fda085);
//   &:before {
//   content: "";
//   position: absolute;
//   top: 0; left: 0; right: 0; bottom: 0;
//   background-image: url("/more2.png");
//   background-repeat: repeat;
//   background-attachment: fixed;
//   background-size: 200px 200px;
//   opacity: 0.08;
//   z-index: 0;
//   }
// `;

// export const FormBox = styled.form`
// position: relative;
// z-index: 1;
//   background: rgba(255 ,255, 255, 0.9);
//   padding: 30px;
//   border-radius: 15px;
//   box-shadow: 0 6px 15px rgba(0,0,0,0.1);
//   width: 100%;
//   max-width: 800px;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px;
//   text-align: center;

//   img {
//     width: 90px;
//     height: 90px;
//     margin-right: 15px;
//   }

//   h2 {
//     margin: 0;
//     font-size: 1.8rem;
//     color: #0077cc;
//   }
// `;

// export const SectionTitle = styled.h3`
//   margin-top: 20px;
//   margin-bottom: 10px;
//   color: #0077cc;
// `;

// export const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin: 8px 0;
//   border-radius: 8px;
//   border: 1px solid #ccc;
// `;

// export const Select = styled.select`
//   width: 100%;
//   padding: 12px;
//   margin: 8px 0;
//   border-radius: 8px;
//   border: 1px solid #ccc;
// `;

// export const TextArea = styled.textarea`
//   width: 100%;
//   padding: 12px;
//   margin: 8px 0;
//   border-radius: 8px;
//   border: 1px solid #ccc;
// `;

// export const Button = styled.button`
//   width: 100%;
//   padding: 14px;
//   margin-top: 20px;
//   background: #0077cc;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: background 0.3s;

//   &:hover {
//     background: #005fa3;
//   }
// `;

// export const SuccessMsg = styled.div`
// margin-top: 20px;
// padding: 15px;
// border-radius: 8px;
// background: #e6ffed;
// color: #1a7f37;
// font-weight: bold; 
// text-align: center;
// border: 1px olid #a3e4b5;
// `;


// export default function ApplyForm() {

//   const [ submitted, setSubmitted] = useState (false);

//   const [photoPreview, setPhotoPreview] = useState(null);

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPhotoPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const data = new FormData(form);
//     const res = await fetch(form.action, {
//       method: form.method,
//       body: data,
//       headers: { 
//         Accept: "application/json"
//       },
//     });
//     if (res.ok){
//       setSubmitted(true);
//       form.rest();
//       setPhotoPreview(null);
//     }
//   };

//   return (
//     <FormContainer>
//       <FormBox 
//         action="https://formspree.io/f/xpwjbrwy"
//         method="POST"
//         encType="multipart/form-data"
//         onSubmit={handleSubmit}
//       >
//         <Header>
//           <img src="/more2.png" alt="School Logo" />
//           <h2>MORE THAN CONQUERORS SCHOOL OF THEOLOGY</h2>
//         </Header>
//         <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
//           STUDENT ADMISSION APPLICATION FORM
//         </h3>

//         {/* Example: Section A */}
//         <SectionTitle>SECTION A: PERSONAL INFORMATION</SectionTitle>
//         <Input type="text" name="fullName" placeholder="Surname                                                    
//          Middle Name                                       First Name" required /> 
//         <p style={{ fontWeight: "bold"}}>Date Of Birth
//         </p>
//         <Input type="date" name="dob" placeholder="Date of Birth" required />
//         <Select name="gender" required>
//           <option value="">Gender</option>
//           <option>Male</option>
//           <option>Female</option>
//         </Select>
//         {/* SECTION B: ACADEMIC BACKGROUND */}
//         <SectionTitle>SECTION B: ACADEMIC BACKGROUND</SectionTitle>
//         <Input type="text" name="qualification" placeholder="Highest Academic Qualification" />
//         <Input type="file" name="certificate" />

//         {/* SECTION C: PROGRAM OF STUDY */}
//         <SectionTitle>SECTION C: PROGRAM OF STUDY</SectionTitle>
//         <Select name="program" required>
//           <option value="">Select Level</option>
//           <option>Certificate in Theology</option>
//           <option>Diploma in Theology</option>
//           <option>Bachelors in Theology</option>
//           <option>Masters in Theology</option>
//           <option>English</option>
//           <option>Management</option>
//           <option>Other</option>
//         </Select>
//         <Select name="mode" required>
//           <option value="">Mode of Study</option>
//           <option>Full Time</option>
//           <option>Part Time</option>
//           <option>Online</option>
//         </Select>
//         <p style={{ fontWeight: "bold"}}>When do you intend to start?
//         </p>
//         <Input type="date" name="startDate" placeholder="Preferred Start Date" />

//         {/* SECTION D: SPIRITUAL BACKGROUND */}
//         <SectionTitle>SECTION D: SPIRITUAL BACKGROUND</SectionTitle>
//         <Select name="bornAgain" required>
//           <option value="">Are you born again?</option>
//           <option>Yes</option>
//           <option>No</option>
//         </Select>
//         <Select name="baptized" required>
//           <option value="">Have you been baptized?</option>
//           <option>Yes</option>
//           <option>No</option>
//         </Select>
//         <Input type="text" name="church" placeholder="Name of Church" />
//         <Input type="text" name="denomination" placeholder="Denomination" />
//         <Input type="text" name="pastor" placeholder="Pastor’s Name" />
//         <Input type="text" name="churchAddress" placeholder="Church Address" />
//         <Input type="text" name="role" placeholder="Your Role in the Church (if any)" />

//         {/* SECTION E: MINISTRY EXPERIENCE */}
//         <SectionTitle>SECTION E: MINISTRY EXPERIENCE</SectionTitle>
//         <TextArea name="ministry" rows="3" placeholder="If applicable, provide details of your involvement in ministry"></TextArea>

//         {/* SECTION F: REFERENCES */}
//         <SectionTitle>SECTION F: REFERENCES</SectionTitle>
//         <Input type="text" name="refPastor" placeholder="Pastoral Reference" />
//         <Input type="text" name="refAcademic" placeholder="Academic/Professional Reference" />

//       {/* SECTION G: REQUIRED DOCUMENTS */}
// <SectionTitle>SECTION G: REQUIRED DOCUMENTS</SectionTitle>

// <div style={{ marginBottom: "15px", textAlign: "left" }}>
//   <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
//     Copy of National ID / Passport
//   </label>
//   <Input type="file" name="id_passport" required />
// </div>

// <div style={{ marginBottom: "15px", textAlign: "left" }}>
//   <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
//     Copy of Academic Certificate
//   </label>
//   <Input type="file" name="certificate" required />
// </div>

// <div style={{ marginBottom: "15px", textAlign: "left" }}>
//   <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
//     Recommendation Letter from Pastor
//   </label>
//   <Input type="file" name="recommendation_letter" required />
// </div>

// {/* Passport photo with preview */}
// <div style={{ marginBottom: "15px", textAlign: "left" }}>
//   <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
//     Passport-size Photograph
//   </label>

//   <input
//     type="file"
//     name="passport_photo"
//     accept="image/*"
//     onChange={handlePhotoChange} 
//     required
//   />

//   <div
//     style={{
//       width: "120px",
//       height: "150px",
//       border: "2px dashed #ccc",
//       borderRadius: "8px",
//       marginTop: "10px",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       background: "#f9f9f9",
//       overflow: "hidden",
//     }}
//   >
//     {photoPreview ? (
//       <img
//         src={photoPreview}
//         alt="Passport Preview"
//         style={{ width: "100%", height: "100%", objectFit: "cover" }}
//       />
//     ) : (
//       <span style={{ color: "#888", fontSize: "0.9rem" }}>Photo Here</span>
//     )}
//   </div>
// </div>
//         {/* SECTION H: DECLARATION */}
//         <SectionTitle>SECTION H: DECLARATION</SectionTitle>
//         <p style={{ lineHeight: "1.6"}}>I hereby declare that the information provided in this application is true
//         and complete. I understand that any false information may result in the 
//         cancellation of my admission.
//         </p>

//         <TextArea name="declaration" placeholder="Type your full name as signature" rows="2" required />
//         <Input type="date" name="declarationDate" placeholder="Date" required />

//         <Button type="submit">Submit Application</Button>
//         {submitted && (
//           <SuccessMsg>
//             Thank you! Your application has been submitted successfully. We will
//             contact you shortly.
//           </SuccessMsg>
//          )}
//       </FormBox>
//     </FormContainer>
//   );
// }