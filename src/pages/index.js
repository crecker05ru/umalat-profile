import React, {useState} from "react"
import './index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAward, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, faCheckSquare, faCoffee,faAward)
// markup
const IndexPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] =  useState('')
    const [message, setMessage] = useState('')
    const onNameChange = (event) =>  {
      setName({name: event.target.value})
    }
  
    const onEmailChange = (event) => {
      setEmail({email: event.target.value})
    }
  
    const onMessageChange =(event) =>  {
      setMessage({message: event.target.value})
    }
  
    const handleSubmit = (event) => {
       event.preventDefault();
      console.log(name,email,message);
        setName('')
        setEmail('')
        setMessage('')
    }
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
                  <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                    <div className="contact-us__input name__input input"> <input type="text" id="contact_name" name="contact_name" placeholder="Имя" required value={name} onChange={ e => setName(e.target.value)}/></div>
                    <div className="contact-us__input email__input input"> <input type="email" id="contact_email" name="contact_email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)}/></div>
                    <div className="contact-us__input message__textarea"> <textarea rows="5" id="contact_message" name="contact_message" placeholder="Сообщение" required value={message} onChange={e => setMessage(e.target.value)}></textarea></div>
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
