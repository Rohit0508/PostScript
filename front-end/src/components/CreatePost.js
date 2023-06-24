import React, { useRef, useState, useEffect } from "react";
import { Card, CardBody, Container, Form, Input, Label, Button } from "reactstrap";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";
import Navbar2 from "./Navbar2";
import { json } from "react-router-dom";
const CreatePost = () => {

    const editor = useRef(null);
    let userId, username;

    const [post, setPost] = useState({
        title: '',
        content: '',
        category: '',
    });
    const [postImage, setPostImage] = React.useState("");

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

        
    //field changed function
    const fieldChanged = (event) => {
        // console.log(event.target.value)
        setPost({ ...post, [event.target.name]: event.target.value })
    }
    // for jodit editor 
    const contentFieldChanaged = (data) => {
        setPost({ ...post, 'content': data })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const auth = localStorage.getItem('user');//to check wether the user is already signedup or not 
        console.log(JSON.parse(auth).user._id);

        userId = JSON.parse(auth).user._id;
        username = JSON.parse(auth).user.name;

        // event.preventDefault();
        // console.log(post)
        if (post.title.trim() === '') {
            // toast.error("post  title is required !!")
            alert("not title")
            return;
        }

        if (post.content.trim() === '') {
            // toast.error("post content is required !!")
            alert("not content")
            return
        }

        if (post.category === '') {
            // toast.error("select some category !!")
            alert("not category")
            return;
        }

        // API Call to send the data *********  
        const { title, content, category } = post;
        const res = await fetch("http://localhost:4000/api/v1/write", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title, category, content, userId, username
            })
        });
        const data = await res.json();
        console.log(data.success);
        if (data.success) {

            alert("posted successfully !")
            // setPost({
            //     title: '',
            //     content: '',
            //     categoryId: ''
            // })


        }

    }



    return (
        <><Navbar2 /><Container>
            {JSON.stringify(post)}
            <div className="wrapper">
                <Card className="shadow" style={{ marginBottom: "30px", marginTop: "40px" }}>
                    <CardBody>
                        <h3>
                            What's going in your mind ?
                        </h3>

                        <Form onSubmit={handleSubmit} id="myform">
                            <div className="my-3">
                                <Label for="title">Post title</Label>
                                <Input
                                    type="text"
                                    id="title"
                                    placeholder="Enter here"
                                    className="rounded-0"
                                    name="title"
                                    onChange={fieldChanged} />
                            </div>

                            <div className="my-3">
                                <Label for="content">Post Content</Label>
                                
                                <JoditEditor
                                    ref={editor}
                                    value={post.content}
                                    onChange={(newContent) => contentFieldChanaged(newContent)} />

                            </div>

                            <div className="mt-3">
                                <Label for="image">Select Post banner</Label>
                                <Input id="image" type="file" name="myfile" onChange={(e) => { handlefileupload(e); }} />
                                {/* <input className="file-upload" id="9899" type="file"
                                            name="myfile" accept=".jpeg,.png,.jpg" onChange={(e) => { handlefileupload(e); }} /> */}
                            </div>


                            <div className="my-3">
                                <Label for="category">Post Cotegory</Label>
                                <Input
                                    type="select"
                                    id="cotegory"
                                    placeholder="Enter here"
                                    className="rounded-0"
                                    name="category"
                                    onChange={fieldChanged}
                                    defaultValue={0}
                                >
                                    <option disabled value={0}>--Select category--</option>
                                    <option>
                                        web
                                    </option>
                                    <option>
                                        app
                                    </option>
                                    <option>
                                        dsa
                                    </option>

                                </Input>
                            </div>

                            <Container className="text-center">
                                <Button type="submit" className="rounded-0" color="primary">CreatePost</Button>

                            </Container>



                        </Form>

                    </CardBody>
                </Card>
            </div>

        </Container></>
    )
}

export default CreatePost;