import React, { Component } from 'react'
import '../css/form.css';
 
class Form extends React.Component {

     constructor(props)
     {
          super(props);

          this.state = {
               segment: "",
               fname:"",
               lname:"",
               age:"",
               users : [
                    {
                         id:1,
                        names : "fname",
                    },
                    {
                         id:2,
                        names : "lname",
                    },
                    {
                         id:3,
                        names : "age",
                    }

               ]
           };

     }

     handled = (e) =>
     {
         var text = e.target.value;
         console.log(text);

          this.setState(
               {
                    segment : text
               }
          )

     }


     HandleChange = (e) =>
     {
          this.setState({[e.target.name]: e.target.value});
          console.log(e.target.value);
     }

     handleSubmit = (e) =>
     {

          let data = {
          
                    segement_name : this.state.segment,
                    schema : [
                         {
                              first_name : this.state.fname
                         },
                         {
                              last_name : this.state.lname,
                         },
                         {
                              age : this.state.age
                         }
     
                    ]
               }
     
            fetch('https://webhook.site/1f900d3c-4229-4c58-a301-c115806e4f80', {
                method: 'POST',
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(data)
              }).
              then(function(response) {
                console.log(response)
                return response.json();
              });
     }

     render(closed) {

          const success = () =>{
                    alert('data saved successfully')
          }
          return (
               <div>
                    
                              <form onSubmit={this.handleSubmit}>     

                              <div className="form">
                                   
                                        <div className="group">
                                             <label className="label">
                                                  Enter the Name of the Segment
                                             </label>  
                                             <input value={this.state.value} onChange={this.handled.bind(this)}
                                                  name="segement" placeholder ="Segment name" className="segment" />
                                               <p>To save your segement you need to add the schemas to build the query</p>
                                       </div>
                                        
                                   <div className="desc">
                                                  <p><i class="fas fa-circle green"></i> - User Traits</p>
                                                  <p> <i class="fas fa-circle red"></i> - Group Traits</p>
                                   </div>

                                   {
                                   this.state.users.map((userInfo) => 
                                        {
                                             return(
                                                 <div className="form-group">
                                                      <i class="fas fa-circle green"></i>
                                                       <select name={userInfo.names} onChange={this.HandleChange} 
                                                       className="inputs">
                                                       <option>Add segment</option>
                                                       <option value="First Name">First Name</option>
                                                       <option value="Last Name">Last Name</option>
                                                       <option value="age">Age</option>
                                                            
                                                       </select>
                                                       <i class="fas fa-minus"></i>

                                                  </div>

                                             )
                                        })
                              }

                                               
                                                  <div className="form-control center">
                                                            <i class="fas fa-plus"></i>
                                                            <a href="#">Add new schema</a>
                                                  </div>
                                             </div>
                     
                                             <div className="footer">
                                                  <button className="submit" type="submit" onClick={success}>Save the segment</button>
                                                  <button  className="close" 
                                                  onClick={closed}>close</button>
                                               </div>   
               </form>

     

               </div>



            
          )
     }
}

export default Form
