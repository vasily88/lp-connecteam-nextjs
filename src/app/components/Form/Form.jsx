import { useState } from 'react';
import Image from 'next/image';

import './Form.css';

const Form = ({ dataForm }) => {

    const [formData, setFormData] = useState({
        inputTxt0: '',
        inputTxt1: '',
        inputTxt2: '',
        options3: '',
        options4: '',
        textarea5: '',
    })

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData && Object.values(formData).every(field => field.trim() !== "")) {
            setMessage('Form sent successfully!');
            console.log(formData);
        } else {
            setMessage('Form is missing required fields.');
            console.log(formData);
        }
    };

    const handleButtonClick = (e, btnIndex) => {
        e.preventDefault();
        const value = e.target.getAttribute('data-value');
        setFormData({
            ...formData,
            [`options${btnIndex}`]: value,
        });

        const buttons = document.querySelectorAll(`.btnSelect`);
        buttons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    };


    return (
        <form className='form' onSubmit={handleSubmit}>
            <p className="titleForm">
                {dataForm.title}
            </p>

            <div className="containerFields">
                {
                    dataForm.fields.map((field, index) => {
                        if (field.type === "text") {
                            return (
                                <div key={index} className={`field field_text ${field.size}`}>
                                    <label className='label' htmlFor={`inputTxt${index}`}>
                                        {field.name}*
                                    </label>
                                    <input
                                        type="text"
                                        id={`inputTxt${index}`}
                                        name={`inputTxt${index}`}
                                        value={formData[`inputTxt${index}`]}
                                        onChange={handleChange}
                                        className={`input ${field.size} __className_143007`}
                                        maxLength={25}
                                    />
                                </div>
                            )
                        } else if (field.type === "options" && field.layout === "select") {
                            return (
                                <div key={index} className={`field field_select ${field.size}`}>
                                    <label className='label' htmlFor={`options${index}`}></label>
                                    <select
                                        name={`options${index}`}
                                        id={`options${index}`}
                                        value={formData[`options${index}`]}
                                        onChange={handleChange}
                                        className={`select ${field.size} __className_143007`}
                                    >
                                        <option value="">{field.name}*</option>
                                        {
                                            field.options.map((option, index) => {
                                                return (
                                                    <option className='__className_143007' key={index} value={option.value}>{option.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            )
                        } else if (field.type === "options" && field.layout === "buttons") {
                            return (
                                <div key={index} className={`field field_buttons ${field.size}`}>
                                    <label className='label' htmlFor={`options${index}`}>
                                        {field.name}*
                                    </label>
                                    <div className="buttonsForSelect flex-center">
                                        {
                                            field.options.map((btn, btnIndex) => {
                                                return (
                                                    <button
                                                        key={btnIndex}
                                                        className='btnSelect flex-center'
                                                        data-value={btn.value}
                                                        onClick={(e) => handleButtonClick(e, index)}
                                                    >
                                                        {btn.label}
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        } else if (field.type === "textarea") {
                            return (
                                <div key={index} className={`field field_textarea ${field.size}`}>
                                    <label className='label' htmlFor={`textarea${index}`}>
                                        {field.name}*
                                    </label>
                                    <textarea
                                        id={`textarea${index}`}
                                        name={`textarea${index}`}
                                        value={formData[`textarea${index}`]}
                                        onChange={handleChange}
                                        className={`textarea ${field.size} __className_143007`}
                                        maxLength={500}
                                    />
                                </div>
                            )
                        } else {
                            return null;
                        }
                    })
                }
            </div>

            <button aria-label={`button send form`} type="submit" className='btnSubmit flex-center'>
                <span className='__className_ddd55e'>{dataForm.submitLabel}</span>
                <Image
                    className='buttonArrow'
                    src='./images/arrow.svg'
                    alt='arrow'
                    width={21}
                    height={19}
                />
            </button>

            {message ?
                <p className={message === 'Form sent successfully!' ? 'messageForm success' : 'messageForm'}>
                    {message}
                </p>
                : ''}

        </form>
    )
}

export default Form;
