import React  from 'react';
import '../css/modal.css';
import '../css/form.css';
import Form from './Form';

function Modal({open,onClose})
{
     if(!open) return null;

     return (

               <div className="box">
                     <div className="modal">
                              <div className="nav-modal">
                                             <ul>
                                                  <li>
                                                       <i class="fas fa-less-than"></i>
                                                       <a>Saving Segment</a>
                                                  </li>
                                        </ul>
                              </div>

                              <Form close={onClose}/>


                              
               </div>
            </div>
     )
}
export default Modal;