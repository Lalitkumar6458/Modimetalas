import {useState,useEffect} from "react";
import emailjs from '@emailjs/browser';
import "./contactHome.css";


const ContactHome = () => {

  const[name,setName]= useState('')
  const[email,setEmail]= useState('')
  const[phone,setPhone]= useState('')
  const[message,setMessage]= useState('')

  const[btntext,setBtntext]= useState('Submit')
  const[nameBorder,setNameBorder]= useState(false)
  const[emailBorder,setEmailBorder]= useState(false)
  const[phoneBorder,setPhoneBorder]= useState(false)
  const[messageBorder,setMessageBorder]= useState(false)
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
values.fullName=name
values.email=email
values.phone=phone
values.message=message

if(name===''){
  setNameBorder(true)
}else if(email===''){
  setEmailBorder(true)
}else if(phone===''){
  setPhoneBorder(true)
}else if(message===''){
  setMessageBorder(true)
}else{
  setBtntext('Sending....')
  emailjs.send('service_c856y0d', 'template_r58sifb', values, 'TbJ69shjd3CH_cpzA')
    .then(response => {


      alert('Sent Message Successfully to Modi Metals!', response)
    
      setValues({
        fullName: '',
        email: '',
        role: '',
        message: ''
      });
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setStatus('SUCCESS');
      setBtntext('Submit')
    }, error => {
     
      alert('FAILED...',error)
    });

}
  
  
  }
  setTimeout(() => {
    setNameBorder(false)
    setEmailBorder(false)
    setPhoneBorder(false)
    setMessageBorder(false)
  }, 8000);

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
        setNameBorder(false)
      }, 3000);
    }
  }, [status]);

  // const handleChange = (e) => {
  //   setValues(values => ({
  //     ...values,
  //     [e.target.name]: e.target.value
  //   }))
  // }






  return (
    <section className="contact_us_home">
      <div className="heading">
        <div className="line_before"></div>
        <h3 className="headinng_text">GET IN TUCH</h3>
        <div className="line_after"></div>
      </div>
      <div className="container  mt-5">
        <div className="row contact_us align-items-center justify-content-center gap-5">
          <div className="col-md-6 contact_Address">
            <i className="fa-solid fa-location-dot"></i>

            <div className="line-arrow">
              <ul>
                <li>
                  <a className="animated-arrow" href="#hgt">
                    <span className="the-arrow -left">
                      <span className="shaft"></span>
                    </span>
                    <span className="main">
                      <span className="text">Location</span>
                      <span className="the-arrow -right">
                        <span className="shaft"></span>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-100 email">
              <span class="fa-solid fa-envelope mx-2 mb-1"></span>
              <h4>EMAIL :</h4>
              <div className="">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sales@modimetals.in"  style={{textDecoration:'none'}}><h5>sales@modimetals.in</h5></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=modimetals1@gmail.com"  style={{textDecoration:'none'}}><h5>modimetals1@gmail.com</h5></a>
              </div>
           
            </div>
            <div className="w-100 phone my-3">
              <span class="fa-solid fa-phone mx-3 mb-1"></span>
              <h4>
              <span>PHONE:</span>
                <div className="number">
                <a href="tel:+91 9137130839" style={{textDecoration:'none'}}>  <h4>+91 9137130839 </h4></a>
                <a href="tel:+91 9321271527" style={{textDecoration:'none'}}>  <h4>+91 9321271527</h4></a>
                </div>
              </h4>
            </div>
            <div className="w-100 address">
              <span class="fa-solid fa-location-crosshairs"></span>
              <h4>
                {" "}
                <span>ADDRESS:</span>{" "}
                <p>
                  {" "}
                  3rd Floor, Shop no.28 3rd, Prabhakar Building Lane Kamathipura
                  Mumbai, Maharashtra 400008 India
                </p>
              </h4>
            </div>
            <div className="w-100 social mt-3">
            <span class="fa-solid fa-square-share-nodes mx-2"></span>
              <h4>Social Media:</h4>
              <div className="share">
              <a href="https://www.linkedin.com/in/modi-metals-5a1ba9200" className="fa-brands fa-linkedin-in" target="_blank" rel="noreferrer"></a>
            <a href="https://twitter.com/MODI_METALS?t=_5ujRniaI6uWXLPosEmdJw&s=09" className="fab fa-twitter" target="_blank" rel="noreferrer"></a>
            <a href="https://www.instagram.com/invites/contact/?i=1x8zwnbbom1f1&utm_content=mh9pec9" className="fab fa-instagram" target="_blank"></a>
            <a  href='https://wa.me/+919321271527' className="fa-brands fa-whatsapp" target="_blank"></a>
          </div>
           
            </div>
          </div>
          <div className="col-md-6 contact_Address massage">
            <i class="fa-solid fa-comment-sms"></i>
            <div className="line-arrow">
              <ul>
                <li>
                  <a className="animated-arrow" href="#hgt">
                    <span className="the-arrow -left">
                      <span className="shaft"></span>
                    </span>
                    <span className="main">
                      <span className="text">Drop Your Inquiry</span>
                      <span className="the-arrow -right">
                        <span className="shaft"></span>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit}>
            <div className=" w-100 inputbox" style={{borderColor:nameBorder?'red':null}}>
               <input type='text' value={name} onChange={event => setName(event.target.value)}   placeholder="Enter Your Name"/>
            </div>
            <div className=" w-100 inputbox user_email" style={{borderColor:emailBorder?'red':null}}>
            <input type='email' value={email}  onChange={event => setEmail(event.target.value)}  placeholder="Enter Email"/>
            </div>
            <div className=" w-100 inputbox user_phone" style={{borderColor:phoneBorder?'red':null}}>
            <input  type='number'  value={phone}  onChange={event => setPhone(event.target.value)}  placeholder="Enter Phone No."/>
            </div>
            <div className=" w-100 textBox massage" style={{borderColor:messageBorder?'red':null}}>

            <textarea type='text' value={message} onChange={event => setMessage(event.target.value)} placeholder="Type your Message Here"/>
            </div>
           
            <button type="submit" >{btntext}</button>
           
          </form >
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;
