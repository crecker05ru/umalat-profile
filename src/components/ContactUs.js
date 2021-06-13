import React, {useState} from "react"

export  const ContactUs = () => {
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
    
     const  handleSubmit = (event) => {
         event.preventDefault();
        console.log(name,email,message);
      }
 return (
     <div>
                <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={name} onChange={onNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={message} onChange={onMessageChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     </div>
 )
 
}