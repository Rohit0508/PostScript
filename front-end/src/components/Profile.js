import React, { useEffect } from "react";
// import avatar from "./images/abc.jpeg"
import {  Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

  
import Navbar2 from "./Navbar2";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBListGroup,
    MDBListGroupItem,
    MDBInput
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";


const Profile = () => {

    //  Function to activate update button..........
    function toggleInput() {
        var collection = document.getElementsByClassName("common-class");
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].hasAttribute("readonly")) {
                collection[i].removeAttribute("readonly");
            }
            else {
                collection[i].setAttribute("readonly", "");
            }
        }
    };

    // method to handle image file uploaded .....................
    const handlefileupload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertbase64(file);
        console.log(base64);
        setPostImage(base64);
        // console.log(postImage.myfile);  
    };

    // method to convert imagefile into base64 binary data.......................
    function convertbase64(file) {
        return new Promise((resolve, reject) => {
            const filereader = new FileReader();
            filereader.readAsDataURL(file);
            filereader.onload = () => {
                resolve(filereader.result);
            };
            filereader.onerror = (error) => {
                reject(error);
            }
        });
    };



    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [college, setCollege] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [linkedin, setLinkedIn] = React.useState("");
    const [github, setGit] = React.useState("");
    

    const [postImage, setPostImage] = React.useState("");

    const params = useParams();

    useEffect(() => {
        console.warn(params);
        getdetails();
    }, []);

    // to show the saved information of user in profile page from db........

    const getdetails = async () => {
        console.warn(params.id);
        let result = await fetch(`http://localhost:4000/api/v1/profile/${params.id}`
        );
        // convert this JSON data to javascript object ......
        result = await result.json();
        console.log("hello:",result);
       
        setName(result.name);
        setEmail(result.email);
        setCollege(result.college);
        setAddress(result.address);
        setPhone(result.phone);
        setGit(result.github);
        setLinkedIn(result.linkedin);
        setPostImage(result.postImage);
    }

    // api integration to save entered details................ 
    const savedetail = async () => {
        console.warn(name, email, phone, college, address, linkedin, github);
        try {
          let result = await fetch(`http://localhost:4000/api/v1/profile/${params.id}`, {
            method: "PUT",
            body: JSON.stringify({
              name,
              email,
              phone,
              college,
              address,
              linkedin,
              github,
              postImage,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (result.ok) {
            console.log("Profile updated successfully");
          } else {
            console.log("Failed to update profile");
          }
        } catch (error) {
          console.error("Error updating profile:", error);
        }
      };
      

        // after saving details to change mode to readonly...............

       

    return (
        <><Navbar2 />
            <section style={{ backgroundColor: '#eee' }}>
                <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBCol>
                            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4 flex-row-reverse">
                                <MDBBreadcrumbItem>
                                    <Button onClick={toggleInput} id="updateButton" variant="primary">Update</Button>{' '}
                                    <Button onClick={savedetail} id="saveButton" variant="primary">Save</Button>{' '}


                                </MDBBreadcrumbItem>

                            </MDBBreadcrumb>


                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">

                                    <label htmlFor="9899">
                                        <MDBCardImage
                                            src={postImage }
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: '150px' }}
                                            fluid />

                                    </label>

                                    <p className="text-muted mb-1">{name}</p>
                                    <p className="text-muted mb-4">{address}</p>
                                    <div className="d-flex justify-content-center mb-2">

                                        <input className="file-upload" id="9899" type="file"
                                            name="myfile" accept=".jpeg,.png,.jpg" onChange={(e) => { handlefileupload(e); }} />


                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                            {/* Social details of the users............ */}
                            <MDBCard className="mb-4 mb-lg-0">
                                <MDBCardBody className="p-0">
                                    <MDBListGroup className="rounded-3">
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 ">
                                            {/* <MDBIcon fas icon="globe fa-lg text-warning" /> */}
                                            <label className="label" htmlFor="999"><Link to={linkedin}><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "#4d56d7" }} /></Link></label>
                                            <MDBCardText><input readOnly id="999" className="inputtag common-class" type="url" name="linkedin link" placeholder="LinkedIn Profile" onChange={(e) => setLinkedIn(e.target.value)} value={linkedin} /> </MDBCardText>
                                        </MDBListGroupItem>

                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3 ">

                                            <label className="label" htmlFor="905"><Link to={github}><FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "rgb(55, 55 ,59)" }} /></Link></label>
                                            <MDBCardText><input readOnly id="905" className="inputtag common-class" type="url" name="Github link" placeholder="Github Profile" onChange={(e) => setGit(e.target.value)} value={github} /> </MDBCardText>
                                        </MDBListGroupItem>
                                    </MDBListGroup>

                                </MDBCardBody>
                            </MDBCard>

                            {/* Ended.................... */}



                        </MDBCol>

                        <MDBCol lg="8">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Full Name</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            {/* <MDBCardText className="text-muted">Johnatan Smith</MDBCardText> */}
                                            <MDBInput id="inputField" className="text-muted common-class" placeholder="Give your Name" type='text'
                                                onChange={(e) => setName(e.target.value)} value={name} readOnly />
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Email</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            {/* <MDBCardText className="text-muted">example@example.com</MDBCardText> */}
                                            <MDBInput className="text-muted common-class" placeholder="Provide your email" type='text'
                                                onChange={(e) => setEmail(e.target.value)} value={email} readOnly />
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Phone</MDBCardText>

                                        </MDBCol>
                                        <MDBCol sm="9">
                                            {/* <MDBCardText className="text-muted">(097) 234-5678</MDBCardText> */}
                                            <MDBInput className="text-muted common-class" placeholder="Phone" type='text'
                                                onChange={(e) => setPhone(e.target.value)} value={phone} readonly />
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>College Name</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            {/* <MDBCardText className="text-muted">(098) 765-4321</MDBCardText> */}
                                            <MDBInput className="text-muted common-class" placeholder="Your College NAme" type='text'
                                                onChange={(e) => setCollege(e.target.value)} value={college} readOnly />
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Address</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            {/* <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText> */}
                                            <MDBInput className="text-muted common-class" placeholder="Give your Address" type='text'
                                                onChange={(e) => setAddress(e.target.value)} value={address} readOnly />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>



                </MDBContainer>
            </section></>
    );
}

export default Profile;