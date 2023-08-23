import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import initialImage from '../assets/initial.png'

function AddMembers() {
    const navigate = useNavigate()
    const [fileUrl, setFileUrl] = useState(initialImage);
    const [fname, setName] = useState("");
    const [jtitle, setTitle] = useState("");

    function handleImage(e) {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const dataUrl = e.target.result;
                setFileUrl(dataUrl)
            }

            reader.readAsDataURL(file)
            console.log(file);
        }
    }

    const handleSubmit = (e) => {

        // eslint-disable-next-line eqeqeq
        if (fname != '' || jtitle != '') {
            e.preventDefault();
            let uniqueId = localStorage.length;
            let memberId = uniqueId + 1;
            localStorage.setItem(
                memberId, JSON.stringify({ name: fname, title: jtitle, file: fileUrl })
            )
        } else {
            alert('Please make sure you have filled your names and job title')
        }

        navigate('/');
    }

    return (

        <>
            <div className='back'>
                <Link to='/'><i class='fa fa-arrow-left back-btn' aria-hidden='true'></i></Link>
            </div>
            <div className='addcontainer'>
                <form onSubmit={handleSubmit} action=''>
                    <div className='member_img'>
                        <img src={fileUrl} alt="" />
                        <input className='imgFile' accept='image/jpeg,image/png,image/jpg' type='file' onChange={handleImage} /><i className='fa fa-plus changeImage' aria-hidden='true'></i>
                    </div>

                    <div className='member_input'>
                        <input type='text' className='textbox' onChange={e => setName(e.target.value)} placeholder='Full Names' />

                        <input type='text' className='textbox' onChange={e => setTitle(e.target.value)} placeholder='Job Title' />

                        <button className='submit button'>Add Member</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddMembers