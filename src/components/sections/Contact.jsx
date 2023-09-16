import SectionTitle from '../SectionTitle';
import Form from '../Form';

const Contact = () => {

    return (
        <section className='bg-white py-20' id='contact'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <article>
                    <SectionTitle text='Connect with Me' />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        Feel free to reach out and get in touch! Whether you have a project in mind, a question to ask, 
                        or just want to say hello, I'd love to hear from you. Use the form provided to send me a message. 
                        I look forward to connecting with you and exploring potential opportunities.
                    </p>
                </article>

                <Form />

            </div>
        </section>
    );
};
export default Contact;