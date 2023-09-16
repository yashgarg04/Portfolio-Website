import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();

    const [successMsg, setSuccessMsg] = useState("");

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const name = watch("name", '');
    const email = watch("email", '');
    const message = watch("message", '');

    // const [showAge, age] = watch(["showAge", "age"], { showAge: true, age: 30 }); // you can also target specific fields by their names

    // console.log("watchFields", { name, message });

    const onSubmit = (data) => {

        console.log(data);
        setSuccessMsg("Your message has been received, Thank You!!");

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
        });

        reset();
    };

    const serviceId = 'service_4ipfg21';
    const templateId = 'template_vdpuw63';
    const publicKey = 'HJzPVg3nzuJF5ibAd';

    return (
                <div className="z-10">
                    <form onSubmit={handleSubmit(onSubmit)} ref={form} className="flex flex-col">
                        {successMsg && <p className="text-emerald-500 text-lg my-4">{successMsg}</p>}
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                            >
                                <h2 className='text-xl tracking-wide font-medium'>Your Name</h2>
                            </label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                className="bg-slate-50 border border-slate-200 placeholder-[#9CA2A9] text-[#9CA2A9] text-md rounded-lg block w-full p-2.5 mt-2"
                                placeholder="Enter your full name here"
                                {...register("name", {
                                    required: "Please provide your name here."}
                                )}
                            />
                            {errors.name && (<p className="text-red-500 mt-0 text-md">* {errors.name.message}</p>)}
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                            >
                                <h2 className='text-xl tracking-wide font-medium'>Your Email</h2>
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                className="bg-slate-50 border border-slate-200 placeholder-[#9CA2A9] text-[#9CA2A9] text-md rounded-lg block w-full p-2.5 mt-2"
                                placeholder="example@gmail.com"
                                {...register("email", {
                                    required: "Please provide your correct email here.", 
                                    pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, 
                                    message: "Email is not valid."}}
                                )}
                            />
                            {errors.email && <p className="text-red-500 mt-0 text-md">* {errors.email.message}</p>}
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                            >
                                <h2 className='text-xl tracking-wide font-medium'>Message</h2>
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-slate-50 border border-slate-200 placeholder-[#9CA2A9] text-[#9CA2A9] text-md rounded-lg block w-full p-2.5 mt-2"
                                placeholder="Let's talk about..."
                                {...register("message", {
                                    required: "Message is required"}
                                )}
                            />
                            {errors.message && (<p className="text-red-500 mt-0 text-md">* {errors.message.message}</p>)}
                        </div>
                        <button
                            type="submit"
                            disabled={(name || email || message) === ''}
                            className="bg-emerald-500 duration-500 text-white text-lg font-medium py-2.5 px-5 rounded-lg w-full my-4 self-center"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
    );
};
export default Form;