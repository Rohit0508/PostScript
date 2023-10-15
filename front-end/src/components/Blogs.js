import React ,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Navbar2 from "./Navbar2";

export default function DisplayBlogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalblogs, setTotalblogs]= useState(0);

  useEffect(() => {
    getblogs();
  }, [currentPage]);
// to get the blogs from backend *************
    const getblogs=async()=>{
        let data=await fetch(`http://localhost:4000/api/v1/blogs?page=${currentPage}&pageSize=10`);
        data= await data.json();
        console.log(data);
        
        setTotalPages(data.totalPages);
        setTotalblogs(data.totalblogs);
        
        
    }
   

  return (
    <><div className="blog-container">
      <div className="blogs">
        <section>
          <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
            <MDBRow className="justify-content-center">
              <MDBCol md="12" lg="10">
                <MDBCard className="text-dark">
        {/* dont alter this Card this is to show total blogs ***** */}
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h4" className="mb-0">
                     Total Blogs: {totalblogs}
                    </MDBTypography>
                    <p className="fw-light mb-4 pb-2">
                      Latest post section by users
                    </p>
                  </MDBCardBody>

                  <hr className="my-0" />
                  <hr className="my-0" />

                
                  {/* start from here and use this cardbody fill and map data */}

                  <MDBCardBody className="p-4">
                    <div className="d-flex flex-start">
                      <MDBCardImage
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                        alt="avatar"
                        width="60"
                        height="60" />
                      <div>
                        <MDBTypography tag="h6" className="fw-bold mb-1">
                          Lara Stewart
                        </MDBTypography>
                        <div className="d-flex align-items-center mb-3">
                          <p className="mb-0">
                            March 15, 2021
                            <span className="badge bg-success">Approved</span>
                          </p>
                          <a href="#!" className="link-muted">
                            <MDBIcon fas icon="pencil-alt ms-2" />
                          </a>
                          <a href="#!" className="text-success">
                            <MDBIcon fas icon="redo-alt ms-2" />
                          </a>
                          <a href="#!" className="link-danger">
                            <MDBIcon fas icon="heart ms-2" />
                          </a>
                        </div>
                        <p className="mb-0">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical Latin
                          literature from 45 BC, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Hampden-Sydney
                          College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and
                          going through the cites.
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                  
                  <hr className="my-0" />
                  <MDBCardBody className="p-4">
                    <div className="d-flex flex-start">
                      <MDBCardImage
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                        alt="avatar"
                        width="60"
                        height="60" />
                      <div>
                        <MDBTypography tag="h6" className="fw-bold mb-1">
                          Lara Stewart
                        </MDBTypography>
                        <div className="d-flex align-items-center mb-3">
                          <p className="mb-0">
                            March 15, 2021
                            <span className="badge bg-success">Approved</span>
                          </p>
                          <a href="#!" className="link-muted">
                            <MDBIcon fas icon="pencil-alt ms-2" />
                          </a>
                          <a href="#!" className="text-success">
                            <MDBIcon fas icon="redo-alt ms-2" />
                          </a>
                          <a href="#!" className="link-danger">
                            <MDBIcon fas icon="heart ms-2" />
                          </a>
                        </div>
                        <p className="mb-0">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical Latin
                          literature from 45 BC, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Hampden-Sydney
                          College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and
                          going through the cites.
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                  <hr className="my-0" />
                  <MDBCardBody className="p-4">
                    <div className="d-flex flex-start">
                      <MDBCardImage
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                        alt="avatar"
                        width="60"
                        height="60" />
                      <div>
                        <MDBTypography tag="h6" className="fw-bold mb-1">
                          Lara Stewart
                        </MDBTypography>
                        <div className="d-flex align-items-center mb-3">
                          <p className="mb-0">
                            March 15, 2021
                            <span className="badge bg-success">Approved</span>
                          </p>
                          <a href="#!" className="link-muted">
                            <MDBIcon fas icon="pencil-alt ms-2" />
                          </a>
                          <a href="#!" className="text-success">
                            <MDBIcon fas icon="redo-alt ms-2" />
                          </a>
                          <a href="#!" className="link-danger">
                            <MDBIcon fas icon="heart ms-2" />
                          </a>
                        </div>
                        <p className="mb-0">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical Latin
                          literature from 45 BC, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Hampden-Sydney
                          College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and
                          going through the cites.
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                  <hr className="my-0" />
                  <MDBCardBody className="p-4">
                    <div className="d-flex flex-start">
                      <MDBCardImage
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                        alt="avatar"
                        width="60"
                        height="60" />
                      <div>
                        <MDBTypography tag="h6" className="fw-bold mb-1">
                          Lara Stewart
                        </MDBTypography>
                        <div className="d-flex align-items-center mb-3">
                          <p className="mb-0">
                            March 15, 2021
                            <span className="badge bg-success">Approved</span>
                          </p>
                          <a href="#!" className="link-muted">
                            <MDBIcon fas icon="pencil-alt ms-2" />
                          </a>
                          <a href="#!" className="text-success">
                            <MDBIcon fas icon="redo-alt ms-2" />
                          </a>
                          <a href="#!" className="link-danger">
                            <MDBIcon fas icon="heart ms-2" />
                          </a>
                        </div>
                        <p className="mb-0">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical Latin
                          literature from 45 BC, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Hampden-Sydney
                          College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and
                          going through the cites.
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                  <hr className="my-0" />
                  <MDBCardBody className="p-4">
                    <div className="d-flex flex-start">
                      <MDBCardImage
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                        alt="avatar"
                        width="60"
                        height="60" />
                      <div>
                        <MDBTypography tag="h6" className="fw-bold mb-1">
                          Lara Stewart
                        </MDBTypography>
                        <div className="d-flex align-items-center mb-3">
                          <p className="mb-0">
                            March 15, 2021
                            <span className="badge bg-success">Approved</span>
                          </p>
                          <a href="#!" className="link-muted">
                            <MDBIcon fas icon="pencil-alt ms-2" />
                          </a>
                          <a href="#!" className="text-success">
                            <MDBIcon fas icon="redo-alt ms-2" />
                          </a>
                          <a href="#!" className="link-danger">
                            <MDBIcon fas icon="heart ms-2" />
                          </a>
                        </div>
                        <p className="mb-0">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical Latin
                          literature from 45 BC, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Hampden-Sydney
                          College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and
                          going through the cites.
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>

                  <hr className="my-0" />
                  <MDBCardBody className="p-4">
                    <div className="d-flex flex-start">
                      <MDBCardImage
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                        alt="avatar"
                        width="60"
                        height="60" />
                      <div>
                        <MDBTypography tag="h6" className="fw-bold mb-1">
                          Lara Stewart
                        </MDBTypography>
                        <div className="d-flex align-items-center mb-3">
                          <p className="mb-0">
                            March 15, 2021
                            <span className="badge bg-success">Approved</span>
                          </p>
                          <a href="#!" className="link-muted">
                            <MDBIcon fas icon="pencil-alt ms-2" />
                          </a>
                          <a href="#!" className="text-success">
                            <MDBIcon fas icon="redo-alt ms-2" />
                          </a>
                          <a href="#!" className="link-danger">
                            <MDBIcon fas icon="heart ms-2" />
                          </a>
                        </div>
                        <p className="mb-0">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical Latin
                          literature from 45 BC, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Hampden-Sydney
                          College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and
                          going through the cites.
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>

                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

      </div>
      {/* side bar*********************** */}
      <div>
        hello
      </div>
    </div></>
  );
}