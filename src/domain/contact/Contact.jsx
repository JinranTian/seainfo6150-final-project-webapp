import React, { useState } from 'react';

export default function Contact()
{
    document.body.style.backgroundColor="white";

    let [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    let [viewing, setViewing] = useState(false);

    let handleChange = (e, field) =>
    {
        let temp = data;
        temp[field] = e.target.value;
        setData(temp);
        console.log(data)
    }

    let handleSubmit = (e) =>
    {
        e.preventDefault();
        var birthday = new Date(data.birthday);
        if (birthday > new Date(Date.now()))
        {
            return alert("Please check your birthdate - you cannot be born after today")
        }
        setViewing(true);
    }

    return viewing ? (
        <div className={"p-10"}>
            <h4>Thanks for contacting us, {data.firstName} {data.lastName}</h4>
            <hr/>
            <p>Here's what we've learned about you;</p>
            <div className={"card bg-white"}>
                <h4>Personal</h4>
                <hr/>
                <small>First Name</small>
                <p>{data.firstName}</p>
                <small>Last Name</small>
                <p>{data.lastName}</p>
                <small>Email Address</small>
                <p>{data.email}</p>
                <small>Phone Number</small>
                <p>{data.phone}</p>
                {data.birthday ?
                <>
                    <small>Birthdate</small>
                    <p>{data.birthday}</p>
                </> : ''}
                {data.gender ?
                    <>
                        <small>Gender</small>
                        <p>{data.gender}</p>
                    </> : ''}
            </div>
            {(data.website || data.employment || data.salary) ? (
                <div className={"card bg-white"}>
                    <h4>Business</h4>
                    <hr/>
                    {data.website ?
                        <>
                            <small>Website</small><br/>
                            <a href={data.website}>{data.website}</a><br/>
                        </> : ''}
                    {data.employment ?
                        <>
                            <small>Employment Status</small>
                            <p>{data.employment}</p>
                        </> : ''}
                    {data.salary ?
                        <>
                            <small>Salary Range</small>
                            <p>{data.salary}</p>
                        </> : ''}
                </div>
            ) : ''}
            <h4>We will be in touch.</h4>
        </div>
    ) : (
        <div className={"p-10"}>
            <h2>Contact Us</h2>
            <div className={"card bg-white d-flex flex-column"}>
                <form onSubmit={handleSubmit} className={"contact-form"}>
                    <label htmlFor={"name"}>First Name*</label><br/>
                    <input required type={"text"} id={"name"} onChange={(e) => handleChange(e, 'firstName')}/><br/>
                    <label htmlFor={"namel"}>Last Name*</label><br/>
                    <input required type={"text"} id={"namel"} onChange={(e) => handleChange(e, 'lastName')}/><br/>
                    <label htmlFor={"email"}>Email Address*</label><br/>
                    <input required type={"email"} id={"email"} onChange={(e) => handleChange(e, 'email')} /><br/>
                    <label htmlFor={"phone"}>Phone Number*</label><br/>
                    <input required type={"tel"} id={"phone"} onChange={(e) => handleChange(e, 'phone')} /><br/>
                    <label htmlFor={"url"}>Website</label><br/>
                    <input type={"url"} id={"url"} onChange={(e) => handleChange(e, 'website')} /><br/>
                    <label htmlFor={"birthday"}>Birthdate</label><br/>
                    <input type={"date"} id={"birthday"} onChange={(e) => handleChange(e, 'birthday')} /><br/>
                    <label htmlFor={"gender"}>Gender</label><br/>
                    <select id={"gender"} onChange={(e) => handleChange(e, 'gender')}>
                        <option value disabled selected>-- SELECT --</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                        <option value={"Other"}>Other / Prefer not to say</option>
                    </select><br/>
                    <label htmlFor={"employment"}>Employment Status</label><br/>
                    <select id={"employment"} onChange={(e) => handleChange(e, 'employment')}>
                        <option selected disabled value>-- SELECT --</option>
                        <option value={"Employed"}>Employed</option>
                        <option value={"Unemployed"}>Unemployed</option>
                    </select><br/>
                    <label>Salary Band</label><br/>
                    <input type={"radio"} name={"band"} id={"banda"} value={"<$10,000"} onChange={(e) => handleChange(e, 'salary')}/>
                    <label htmlFor={"banda"}> &lt;&#36;10,000</label><br/>
                    <input type={"radio"} name={"band"} id={"bandb"} value={"<$50,000"} onChange={(e) => handleChange(e, 'salary')}/>
                    <label htmlFor={"bandb"}> &lt;&#36;50,000</label><br/>
                    <input type={"radio"} name={"band"} id={"bandc"} value={">$50,000"} onChange={(e) => handleChange(e, 'salary')}/>
                    <label htmlFor={"bandc"}> &gt;&#36;50,000</label><br/>
                    <input type={"submit"} value={"Post"} />
                </form><br/>
                <small>Fields marked with a '*' are required.</small>
            </div>
        </div>
    )
}