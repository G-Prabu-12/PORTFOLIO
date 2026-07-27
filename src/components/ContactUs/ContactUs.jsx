


import React, { useState } from "react";
import './ContactUs.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser";


const initialValues = {
  name: "",
  mobile: "",
  email: "",
  message: "",
};

const initialTouched = {
  name: false,
  mobile: false,
  email: false,
  message: false,
};

const MOBILE_PATTERN = /^[0-9]{10}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "required";
  } else if (values.name.trim().length < 3) {
    errors.name = "minlength";
  }

  if (!values.mobile.trim()) {
    errors.mobile = "required";
  } else if (!MOBILE_PATTERN.test(values.mobile.trim())) {
    errors.mobile = "pattern";
  }

  if (!values.email.trim()) {
    errors.email = "required";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "pattern";
  }

  if (!values.message.trim()) {
    errors.message = "required";
  }

  return errors;
};

function ContactUs(){

 const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState(initialTouched);
  const [submitStatus, setSubmitStatus] = useState("idle"); 

  const errors = validate(values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const trackClick = (label) => {
    // Hook this up to your analytics tool of choice
    console.log(label);
  };

  const submitForm = async () => {
  setTouched({
    name: true,
    mobile: true,
    email: true,
    message: true,
  });

  if (Object.keys(errors).length > 0) {
    return;
  }

  setSubmitStatus("sending");
debugger;
  try {
    await emailjs.send(
      "prabhusumathi12@gmail.com",
      "template_fgfa89t",
      {
        from_name: values.name,
        from_email: values.email,
        mobile: values.mobile,
        message: values.message,
      },
      "PyYo0RmpTz4SBtlYg"
    );

    setSubmitStatus("success");
    setValues(initialValues);
    setTouched(initialTouched);
  } catch (err) {
    console.error(err);
    setSubmitStatus("error");
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };


  return (
    <section className="get" id="contact" aria-label="Contact">
      <div className="container-lg container-fluid">
        <div className="row d-flex align-items-center justify-content-center">
          {/* Left: Contact form */}
          <div className="col-md-6">
            <div className="info_get">
              <div className="info_tit">
                <h6>Connect with me</h6>
              </div>
              <div className="info_sub">
                <p>
                  Let's collaborate and bring innovative ideas to life. Reach
                  out anytime — I'm just a message away!
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      aria-label="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <div className="text-danger mt-1">
                        {errors.name === "required" && (
                          <small>Name is required</small>
                        )}
                        {errors.name === "minlength" && (
                          <small>Minimum 3 characters required</small>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      aria-label="Mobile Number"
                      value={values.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.mobile && touched.mobile && (
                      <div className="text-danger mt-1">
                        {errors.mobile === "required" && (
                          <small>Mobile number is required</small>
                        )}
                        {errors.mobile === "pattern" && (
                          <small>Enter valid 10 digit mobile number</small>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Id"
                      aria-label="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <div className="text-danger mt-1">
                        {errors.email === "required" && (
                          <small>Email is required</small>
                        )}
                        {errors.email === "pattern" && (
                          <small>Enter valid email</small>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="How can I help?"
                  aria-label="Message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                {errors.message && touched.message && (
                  <div className="text-danger mt-1">
                    <small>Message is required</small>
                  </div>
                )}

                <div
                  className="d-flex align-items-center justify-content-start"
                  style={{ gap: "16px" }}
                >
                  <div
                    className="web_button d-flex align-items-start justify-content-start"
                    onClick={submitForm}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") submitForm();
                    }}
                    aria-label="Submit contact form"
                  >
                    <span className="web_button__label">
                      {submitStatus === "sending" ? "Sending..." : "Submit"}
                    </span>
                  </div>

                  {submitStatus === "success" && (
                    <span className="contact-form-status contact-form-status--success">
                      Message sent successfully!
                    </span>
                  )}
                  {submitStatus === "error" && (
                    <span className="contact-form-status contact-form-status--error">
                      Couldn't send — please try again.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right: Contact details */}
          <div className="col-md-6">
            <div className="right_con">
              <div className="right_con_tit">
                <h6>Contact Details</h6>
              </div>
              <div className="right_con_sub">
                <p>
                  Have an idea or project in mind? I'd love to hear from you!
                  Let's connect, share ideas, and create something truly
                  impactful together.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="con d-flex align-items-start justify-content-start">
                    <img
                      src="public/images/add.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <div className="fe">
                      <p>Location</p>
                      <h6>Chennai, India</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="con d-flex align-items-start justify-content-start">
                    <img
                      src="public/images/mobile.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <div className="fe">
                      <p>Mobile</p>
                      <h6>+91 9025716235</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="con d-flex align-items-start justify-content-start">
                    <img
                      src="public/images/avi.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <div className="fe">
                      <p>Availability</p>
                      <h6>Daily 09 am – 09 pm</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="con d-flex align-items-start justify-content-start">
                    <img
                      src="public/images/email.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <div className="fe">
                      <p>Email</p>
                      <a
                        href="mailto:prabhusumathi@gmail.com"
                        onClick={() => trackClick("Email Link Click")}
                      >
                        <h6>prabhusumathi@gmail.com</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className="d-flex align-items-center justify-content-between social">
                <p>Social media</p>
                <div className="icones">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                    onClick={() => trackClick("GitHub Icon Click")}
                  >
                    <img
                      src="public/images/git.svg"
                      className="img-fluid"
                      alt="GitHub"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                    onClick={() => trackClick("LinkedIn Icon Click")}
                  >
                    <img
                      src="public/images/lin.svg"
                      className="img-fluid"
                      alt="LinkedIn"
                    />
                  </a>
                  <a
                    href="https://www.behance.net/"
                    target="_blank"
                    rel="noopener"
                    aria-label="Behance"
                    onClick={() => trackClick("Behance Icon Click")}
                  >
                    <img
                      src="public/images/lin1.svg"
                      className="img-fluid"
                      alt="Behance"
                    />
                  </a>
                  <a
                    href="tel:+919025716235"
                    aria-label="Phone"
                    onClick={() => trackClick("Phone Icon Click")}
                  >
                    <img
                      src="public/images/wh.svg"
                      className="img-fluid"
                      alt="Phone"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;