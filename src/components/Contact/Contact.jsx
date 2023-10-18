import "./Contact.css";
import React, { useEffect, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useForm} from 'react-hook-form';
const Spline = React.lazy(() => import('@splinetool/react-spline'));


const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contact" class="">
            <div class="container contact_container">
                <div>
                    <h2>Contact</h2>
                    <div class="typewritter contact">
                        <p>let's stay connected!</p>
                    </div>
                </div>
                <div class="contact_inner_container form_container" data-aos="fade-right">
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/5107bf949989fa79828ccaa2f1d44fd5"
                        method="POST"
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name", { 
                                required: true, 
                                maxLength: 100,
                                message: "This field is required."
                            })}
                        />  
                        <div class="error">
                            {errors.name && (
                                <p>
                                    {errors.name.type === 'required' && "This field is required."}
                                    {errors.name.type === 'maxLength' && "Max length is 100 char."}
                                </p>
                            )}
                        </div>

                        <input
                            type="text"
                            placeholder="Email"
                            {...register("email", { 
                                required: true, 
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        <div class="error">
                            {errors.email && (
                                <p>
                                    {errors.email.type === 'required' && "This field is required."}
                                    {errors.email.type === 'pattern' && "Invalid email address."}
                                </p>
                            )}
                        </div>

                        <textarea
                            type="text"
                            placeholder="Message"
                            rows="4"
                            cold="50"
                            {...register("message", { 
                                required: true, 
                                maxLength: 2000,
                            })}
                        />
                        <div class="error">
                            {errors.message && (
                                <p>
                                    {errors.message.type === 'required' && "This field is required."}
                                    {errors.message.type === 'maxLength' && "Max length is 2000 char."}
                                </p>
                            )}
                        </div>

                        <button
                            type="Submit"

                        >
                            Send me a message
                        </button>
                        <input type="hidden" name="_next" value="https://longhangyu-matthew.github.io/react-portfolio/"></input>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;