import { useState } from "react";
import LoadingButton from "./LoadingButton";


const labelClass = "text-xl";
const inputClass =
  "text-base block bg-light border-2 border-solid border-black rounded-md p-2 dark:bg-dark dark:border-light";


const ButtonLoading = () => {
  return (
    <button
      className="flex items-center bg-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-dark border-2 border-solid border-transparent !border-dark cursor-wait
      md:p-2 md:px-4 md:text-base lg:mx-auto relative w-[200px] h-[50px]
      "
      type="submit"
    >
      <LoadingButton />
    </button>
  );
};

function EmailMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);
  const [backwardInfo, setBackwardInfo] = useState("");

  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleClick = async () => {
    let emailErr = false;
    let messageErr = false;
    setBackwardInfo('')
    if (!isValidEmail(email)) {
      setEmailError("please input correct email");
      emailErr = true;
    } else {
      setEmailError("");
    }
    if (message === "") {
      setMessageError("please input message");
      messageErr = true;
    } else {
      setMessageError("");
    }
    if (emailErr || messageErr) return;
    setLoading(true);
    fetch("http://localhost:3001/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sentEmail: {
          name,
          email,
          message,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          if (res.message === "email sent") {
            setBackwardInfo("Email has been sent");
          } else {
            setBackwardInfo("Due to a server error the email was not sent");
          }
        }, 1000);
      });
  };

  return (
    <div className="">
      <div className="my-2 font-semibold text-2xl lg:text-center lg:mt-16">
        Email me
      </div>
      <div>
        <div className="form-group">
          <div>
            {/* first row line */}
            <div className="flex w-full lg:justify-center lg:flex-col lg:mx-auto lg:w-1/2 md:w-3/4">
              <div className="form-group my-2 lg:text-center">
                <label htmlFor="name" className={`${labelClass}`}>
                  Your name
                </label>
                <input
                  className={`${inputClass} w-[95%] lg:w-full`}
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group my-2 lg:text-center">
                <label htmlFor="email" className={`${labelClass} `}>
                  Your email*
                </label>
                <input
                  className={`${inputClass} !w-full`}
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div className="text-red-500 font-semibold text-sm ">{`${emailError}`}</div>
              </div>
            </div>
            {/* message */}
            <div className="form-group mt-2 w-full lg:text-center">
              <label htmlFor="message" className={`${labelClass} lg:mx-auto`}>
                Your message*
              </label>
              <textarea
                className={`${inputClass} !w-full lg:!w-1/2 lg:mx-auto h-[120px] md:!w-3/4`}
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>

            <div className="text-red-500 font-semibold text-sm mb-6 lg:text-center">{`${messageError}`}</div>

            <div className="text-primary font-bold text-base mb-6 lg:text-center dark:text-secondary">{`${backwardInfo}`}</div>

            {loading ? (
              <ButtonLoading />
            ) : (
              <button
                className="flex items-center justify-center bg-dark text-light p-2.5 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
      md:p-2 md:px-4 md:text-base lg:mx-auto relative w-[200px] h-[50px]
      "
                onClick={handleClick}
                type="submit"
              >
                Send an email
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailMe;
