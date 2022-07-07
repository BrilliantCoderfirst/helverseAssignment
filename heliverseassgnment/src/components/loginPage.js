import React from 'react';
import './loginPage.css';

export default function loginPage() {

    let current = 1;

    function nextBtnFirst(event) {
        event.preventDefault();
        const slidePage = document.querySelector(".slide-page");
        slidePage.style.marginLeft = "-25%";
        const progressText = document.querySelectorAll(".step p");
        const progressCheck = document.querySelectorAll(".step .check");
        const bullet = document.querySelectorAll(".step .bullet");
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    };
    function nextBtnSec(event) {
        event.preventDefault();
        const slidePage = document.querySelector(".slide-page");
        slidePage.style.marginLeft = "-50%";
        const progressText = document.querySelectorAll(".step p");
        const progressCheck = document.querySelectorAll(".step .check");
        const bullet = document.querySelectorAll(".step .bullet");
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    };
    function nextBtnThird(event) {
        event.preventDefault();
        const slidePage = document.querySelector(".slide-page");
        slidePage.style.marginLeft = "-75%";
        const progressText = document.querySelectorAll(".step p");
        const progressCheck = document.querySelectorAll(".step .check");
        const bullet = document.querySelectorAll(".step .bullet");
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    };
    function submitBtn(event) {
        const progressText = document.querySelectorAll(".step p");
        const progressCheck = document.querySelectorAll(".step .check");
        const bullet = document.querySelectorAll(".step .bullet");
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        setTimeout(function () {
            alert("Your Form Successfully Signed up");
        }, 800);
    };

    function prevBtnSec(event) {
        event.preventDefault();
        const slidePage = document.querySelector(".slide-page");
        slidePage.style.marginLeft = "0%";
        const progressText = document.querySelectorAll(".step p");
        const progressCheck = document.querySelectorAll(".step .check");
        const bullet = document.querySelectorAll(".step .bullet");
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    };
    function prevBtnThird(event) {
        event.preventDefault();
        const slidePage = document.querySelector(".slide-page");
        slidePage.style.marginLeft = "-25%";
        const progressText = document.querySelectorAll(".step p");
        const progressCheck = document.querySelectorAll(".step .check");
        const bullet = document.querySelectorAll(".step .bullet");
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    };
    function prevBtnFourth(event) {
        event.preventDefault();
        const slidePage = document.querySelector(".slide-page");
        slidePage.style.marginLeft = "-50%";
        const progressText = document.querySelectorAll(".step p");
        const progressCheck = document.querySelectorAll(".step .check");
        const bullet = document.querySelectorAll(".step .bullet");
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    };

    return (
        <>
            <form action="#">
                <div className="container">
                    <header>Signup Form</header>
                    <div className="progress-bar">
                        <div className="step">
                            <p>
                                Name
                            </p>
                            <div className="bullet">
                                <span>1</span>
                            </div>
                            <div className="check fas fa-check"></div>
                        </div>
                        <div className="step">
                            <p>
                                Contact
                            </p>
                            <div className="bullet">
                                <span>2</span>
                            </div>
                            <div className="check fas fa-check"></div>
                        </div>
                        <div className="step">
                            <p>
                                Birth
                            </p>
                            <div className="bullet">
                                <span>3</span>
                            </div>
                            <div className="check fas fa-check"></div>
                        </div>
                        <div className="step">
                            <p>
                                Submit
                            </p>
                            <div className="bullet">
                                <span>4</span>
                            </div>
                            <div className="check fas fa-check"></div>
                        </div>
                    </div>
                    <div className="form-outer">
                        <form action="#">
                            <div className="page slide-page">
                                <div className="title">
                                    Basic Info:
                                </div>
                                <div className="field">
                                    <div className="label">
                                        First Name
                                    </div>
                                    <input type="text" ></input>
                                </div>
                                <div className="field">
                                    <div className="label">
                                        Last Name
                                    </div>
                                    <input type="text"></input>
                                </div>
                                <div className="field">
                                    <button className="firstNext next" onClick={nextBtnFirst}>Next</button>
                                </div>
                            </div>
                            <div className="page">
                                <div className="title">
                                    Contact Info:
                                </div>
                                <div className="field">
                                    <div className="label">
                                        Email Address
                                    </div>
                                    <input type="text"></input>
                                </div>
                                <div className="field">
                                    <div className="label">
                                        Phone Number
                                    </div>
                                    <input type="Number"></input>
                                </div>
                                <div className="field bta">
                                    <button className="prev-1 prev" onClick={prevBtnSec}>Previous</button>
                                    <button className="next-1 next" onClick={nextBtnSec}>Next</button>
                                </div>
                            </div>
                            <div className="page">
                                <div className="title">
                                    Date of Birth:
                                </div>
                                <div className="field">
                                    <div className="label">
                                        Date
                                    </div>
                                    <input type="text"></input>
                                </div>
                                <div className="field">
                                    <div className="label">
                                        Gender
                                    </div>
                                    <select>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="field bta">
                                    <button className="prev-2 prev" onClick={prevBtnThird}>Previous</button>
                                    <button className="next-2 next" onClick={nextBtnThird}>Next</button>
                                </div>
                            </div>
                            <div className="page">
                                <div className="title">
                                    Login Details:
                                </div>
                                <div className="field">
                                    <div className="label">
                                        Username
                                    </div>
                                    <input type="text"></input>
                                </div>
                                <div className="field">
                                    <div className="label">
                                        Password
                                    </div>
                                    <input type="password"></input>
                                </div>
                                <div className="field bta">
                                    <button className="prev-3 prev" onClick={prevBtnFourth}>Previous</button>
                                    <button className="submit" onClick={submitBtn}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </form>
        </>
    )
}
