import React from 'react';

import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
    return  (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/37452899?s=460&u=df29f595d49ec70b0fd7154bacf1b1a2ffb31611&v=4" alt="Yoshimitsu"/>
                        <div>
                            <strong>Yoshimitsu</strong>
                            <span>Físico Alquimista</span>
                        </div>
                    </header>

                    <p>
                        Mestre do paranaue de comer cu de curioso, há dez anos no mercado regional e internacional de comer cu de curioso
                        <br/>
                        Louco de pedra, mas com o coração em paz!
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
            </main>
        </div>
    )
}

export default TeacherList;