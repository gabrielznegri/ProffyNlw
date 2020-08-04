import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://yt3.ggpht.com/a-/AOh14GjFXiTuNht_X6VEwloIw4HoCPUsCxHMBk7AEJzutQ=s88-c-k-c0xffffffff-no-rj-mo" alt="Gabriel" />

                <div>
                    <strong>Gabriel</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                TESTE
            <br /><br />
            TESTE
          </p>

            <footer>
                <p>
                    Preço/hora
              <strong>R$80,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;