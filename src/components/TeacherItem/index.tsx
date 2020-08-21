import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/37452899?s=460&u=df29f595d49ec70b0fd7154bacf1b1a2ffb31611&v=4" alt="Yoshimitsu"/>
                <div>
                    <strong>Yoshimitsu</strong>
                    <span>Físico Alquimista</span>
                </div>
            </header>

            <p>
                Pós graduado em assaltos e criminosidades avançadas, há mais de 15 anos explodindo corações com física classíca e morderna !
                <br/>
                Venha aprender com um criminoso de respeito.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 79,65</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;