import "./ContactPage.css"
import { Col, Row } from 'react-bootstrap'
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

const ContactPage = () => {
    const [state, handleSubmit] = useForm("mvojenkr");
    const [hasContacted, setHasContacted] = useState(undefined)
    if (!hasContacted && state.succeeded) {
        setHasContacted(
            'Message succesfully sent. I will contact you as soon as possible :)'
        )
    }

    return (
        <div className="contactPage-container">
            <Row className='contact-card justify-content-center contactForm' role="region" aria-label='Contact me'>
                <Col md='7' xs='11' className='text-center'>
                    <div className="card-3d-wrap">
                        <h3 role="heading" aria-level="1">
                            <span>Contact</span>
                        </h3>
                        {!state.succeeded ? (
                            <form onSubmit={handleSubmit} className='form-group'>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="form-style"
                                    placeholder='Your email'
                                    aria-label='Your email'
                                />
                                <ValidationError
                                    prefix='Email'
                                    field="email"
                                    errors={state.errors}
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    style={{ overflow: 'hidden', paddingBottom: '170px' }}
                                    className="form-style mt-3"
                                    placeholder='How can I help you?'
                                    aria-label='How can I help you?'
                                />
                                <ValidationError
                                    prefix='Message'
                                    field="message"
                                    errors={state.errors}
                                />
                                <button type="submit" disabled={state.submitting} className="btn mt-4 mb-2">
                                    Submit
                                </button>
                            </form>
                        ) : (
                            <div className='form-style pt-2 pb-5' role="status" aria-live="polite">
                                {hasContacted}
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContactPage