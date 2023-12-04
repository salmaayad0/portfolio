import { useRef, useState } from "react";
import emailIcon from "../assets/icon-email.png"
import Notification from "./Notification";
import Reveal from './Reveal'
import Button from './Button'
import emailjs from '@emailjs/browser';

const NAME_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;
const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const ContactForm = () => {

    const form = useRef<any>();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [triger, setTriger] = useState<boolean>(false);
    const [err, setErr] = useState<string>('');

    const clearForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const validname = NAME_REGEX.test(name);
        const validemail = EMAIL_REGEX.test(email);

        try {
            if (!validemail || !validname) { 
                setTriger(true)
                setErr('invalid name or email'); 
            }
            else {
                emailjs.sendForm('service_163y2d3', 'template_z079dmm', form.current, 'UT9G2zYE_OtcvfzgJ')
                    .then((result) => {
                        if ( result.text === "OK") {
                            setTriger(true)
                            setErr('')
                        }
                    }, (error) => {
                        setTriger(true)
                        setErr(error.text)
                    });

                clearForm(); }
            
        } catch (error) { setErr('server error, try agian') }
        }
    

    return (
        <>
            <form onSubmit={handleSubmit} ref={form}
                className="flex-1 flex flex-col gap-6 w-full max-w-[696px] mb-16"
            >
                <Reveal>
                    <div
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <div className="flex flex-col gap-1.5 flex-1 md:w-1/2 w-full">
                            <label
                                className="text-textPrimary text-base sm:text-lg font-bold"
                                htmlFor='name'
                            >Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                autoComplete="off"
                                placeholder='Name'
                                value={name}
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="bg-accent rounded-2xl py-3 pl-2 text-textPrimary text-base sm:text-lg
                   placeholder-textSecondary outline-none resize-none border-[1px] border-transparent
                   focus:border-hoverSecondary "
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 md:w-1/2 w-full">
                            <label
                                className="text-textPrimary text-base sm:text-lg font-bold"
                                htmlFor='email'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                autoComplete="off"
                                placeholder='E-mail'
                                value={email}
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-accent rounded-2xl py-3 pl-2 text-textPrimary text-base sm:text-lg
                        placeholder-textSecondary outline-none resize-none border-[1px] border-transparent
                         focus:border-hoverSecondary "
                            />
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="flex flex-col gap-1.5 flex-1 w-full">
                            <label
                                className="text-textPrimary text-base sm:text-lg font-bold"
                                htmlFor="message"
                            >
                                message
                            </label>
                            <textarea
                                id="message"
                                rows={9}
                                placeholder="please enter your message"
                                value={message}
                                name="message"
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="bg-accent rounded-2xl py-4 px-3 text-textPrimary text-base sm:text-lg
                       placeholder-textSecondary outline-none resize-none border-[1px]
                         border-transparent focus:border-hoverSecondary"
                            ></textarea>
                        </div>

                    </div>
                </Reveal>

                <Reveal>
                    <Button icon={emailIcon} secondary>
                        Send
                    </Button>
                </Reveal>
            </form>
            {
                err ? (
                    <Notification triger={triger} color handleClose={() => setTriger(false)}>
                         {err}
                    </Notification>
                )

                : ( 
                 <Notification triger={triger} handleClose={() => setTriger(false)}>
                            message sent successfully
                </Notification>
                )
            }

        </>
    )
}

export default ContactForm