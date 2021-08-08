import React ,  { useState }  from 'react'
import '../css/button.css'
import Modal from './modal';

 function Button() { 

      const [isOpen,  setOpen] = useState(false);

     return (
          <div>
               <section>
                    <div className="btn">
                              <button onClick={ () => setOpen(true)} >Save segement</button>
                    </div> 
    
               </section> 
               
               <Modal open = {isOpen}  onClose={()=> setOpen(false)}>

               </Modal>

          </div>    
     )
}
export default Button;