import React, { useState } from 'react'
import banner from "../Image/banner.png";
import logo from "../Image/logo.png";
import github from "../Image/github-icon.png"
import navbar from "../Image/navbars.png"
import "./Main.css";

import { useSpeechSynthesis } from 'react-speech-kit';
//import { keyboard } from '@testing-library/user-event/dist/keyboard';

function Main() {

    const string = "HOLA MUNDO";
    const { speak } = useSpeechSynthesis();
    const [values, setValues] = useState("");

    // function presionar_tecla() {
    //     tecla_esc = eve
    // }

    function onPress() {

        speak({ text: values });
    };

    return (
        <div className='main'>
            <div className='banner-container'>
                <img src={banner} alt="" className='banner' />
                <div className='container-logo'>
                    <img src={github} alt="" loading='lazy' className='github' />
                    <img src={navbar} alt="" loading='lazy' className='navbar' />
                    <img src={logo} alt="" loading='lazy' className='logo' />
                    <div className='play-button'>
                        <h1 className=' text-play'>
                            JUGAR
                        </h1>
                    </div>
                </div>
            </div>
            <div className='main-container'>
                <div className='info'>
                    <div className='group'>
                        <h2>Testing V0.1</h2>
                    </div>
                    <div className='group'>
                        <textarea rows={5} value={string} ></textarea>
                    </div>
                    <div className='group'>
                        <textarea rows={5} value={values} onChange={(e) => setValues(e.target.value)}></textarea>
                    </div>
                    <div className='group'>
                        <button onClick={onPress}>
                            ESPACIO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main