import * as React from "react"
import './index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAward, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, faCheckSquare, faCoffee,faAward)
// markup
const IndexPage = () => {
  return (
      <body>
          <main className="main__row">
            <div className="item__column left block white">
              <div className="item-about">
                <div className="item-about__text text">“Самый четкий инвестор и продавец трусов”
                </div>
                <div className="item-about__header">
                  <i><FontAwesomeIcon icon="coffee" size="3x" /></i>
                  <h1 className="header">Абдурагимов Умалат</h1>
                </div>
              </div>
            </div>
            <div className="image__column image">   
               <div className="portfolio-image">
               </div>
            </div>
            <div className="item__column block ">
              <div className="item-achievements purple">
                <i><FontAwesomeIcon icon="award" size="3x" /></i>
                <div className="item-achievement__text text">“Список достижений:”
                </div>
                <div className="item-achievements__readme-button">
                  <a >Read More</a>
                </div>
              </div>
            </div>
            <div className="image__column image">   
               <div className="main-image">
               </div>
            </div>
            <div className="image__column image">   
               <div className="second-image">
               </div>
            </div>   

            <div className="image__column image">   
               <div className="third-image">
               </div>
            </div>
            <div className="item__column block-right">
              <div className="description  orange">
                <div className="description__header"><h2>Описание работ</h2></div>
                <p className="description__text text">Текст</p>
                <p className="description__bottom-text">Нижний текст</p>
              </div>
            </div> 
            <div className="image__column image">   
               <div className="fourth-image">
               </div>
            </div> 
            
            <div className="item__column">
              <div className="contact-us white">
                <div className="contact-us__header">Обратная связь</div>
                <div className="contact-us__form">
                  <form action="index.html" method="POST">
                    <div className="contact-us__input name__input input"> <input type="text" id="contact_name" name="contact_name" placeholder="Имя" required /></div>
                    <div className="contact-us__input email__input input"> <input type="email" id="contact_email" name="contact_email" placeholder="Email" required/></div>
                    <div className="contact-us__input message__textarea"> <textarea rows="5" id="contact_message" name="contact_message" placeholder="Сообщение" required></textarea></div>
                    <div className="contact-us__input send__button"> <button type="submit"className="button">Отправить</button></div>
                  </form>
                </div>
                <div className="contact-us__response">
                  <div className="response purple">
                    <div className="response__header">Заголовок описания </div>
                    <p className="response__text">Текст описания</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
      <footer className="footer">
        <div className="footer__container">
          <h2 className="footer__copyrights">Copyright 2021</h2>
          <h2 className="footer__author">Анвар</h2>
        </div>
      </footer>
      </body>
  )
}

export default IndexPage
