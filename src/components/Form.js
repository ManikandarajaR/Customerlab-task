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
               gender:"",
               age:"",
               acname:"",
               city:"",
               states : ""
           };

     }

     HandleChange = (e) =>
     {
          this.setState({[e.target.name]: e.target.value});
          console.log(e.target.value);
     }

     handleSubmit = (e) =>
     {

          let data = {
               segment_name: this.state.segement,

               schema: [
               {
                    first_name: this.state.fname
               },
               {
                    last_name: this.state.lname
               },
               {
                    gender: this.state.gender
               },
               {
                    ager: this.state.age
               },
               {
                    acname: this.state.acname
               },
               {
                    city: this.state.city
               },
               {
                    states:this.state.states
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
                                             <input value={this.state.value} onChange={this.HandleChange} name="segement" placeholder ="Segment name" className="segment" />
                                               <p>To save your segement you need to add the schemas to build the query</p>
                                       </div>
                                        
                                   <div className="desc">
                                                  <p><i class="fas fa-circle green"></i> - User Traits</p>
                                                  <p> <i class="fas fa-circle red"></i> - Group Traits</p>
                                   </div>

                                   <div className="dropdowns">

                                                  <div className="form-group">
                                                       <i class="fas fa-circle green"></i> 
                                                       <input value={this.state.value} 
                                                       onChange={this.HandleChange} name="fname"
                                                       placeholder ="First Name" className="inputs"/>
                                                       <i class="fas fa-minus"></i>
                                                  </div>

                                                  <div className="form-group">
                                                       <i class="fas fa-circle green"></i> 
                                                       <input value={this.state.value} 
                                                       onChange={this.HandleChange} name="lname"
                                                       placeholder ="Last Name" className="inputs"/>
                                                       <i class="fas fa-minus"></i>
                                                  </div>

                                                  <div className="form-group">
                                                       <i class="fas fa-circle green"></i> 
                                                       <input value={this.state.value} 
                                                       onChange={this.HandleChange} name="gender"
                                                       placeholder ="Gender" className="inputs"/>
                                                       <i class="fas fa-minus"></i>
                                                  </div>
                                                  <div className="form-group">
                                                       <i class="fas fa-circle green"></i> 
                                                       <input value={this.state.value}
                                                        onChange={this.HandleChange} name="age"
                                                       placeholder ="Age" className="inputs"/>
                                                       <i class="fas fa-minus"></i>
                                                  </div>
                                                  <div className="form-group">
                                                       <i class="fas fa-circle green"></i> 
                                                       <input value={this.state.value} onChange={this.HandleChange} name="acname"
                                                        placeholder ="Account Name" className="inputs"/>
                                                       <i class="fas fa-minus"></i>
                                                  </div>
                                                  <div className="form-group">
                                                       <i class="fas fa-circle green"></i> 
                                                       <input value={this.state.value} 
                                                       onChange={this.HandleChange} name="city"      
                                                       placeholder ="City" className="inputs"/>
                                                       <i class="fas fa-minus"></i>
                                                  </div>
                                                  <div className="form-group">
                                                       <i class="fas fa-circle green"></i> 
                                                       <input value={this.state.value}
                                                       onChange={this.HandleChange} name="states"
                                                       placeholder ="State" className="inputs"/>
                                                       <i class="fas fa-minus"></i>
                                                  </div>
                                                  <div className="form-control center">
                                                            <i class="fas fa-plus"></i>
                                                            <a href="#">Add new schema</a>
                                                  </div>
                                             </div>
                              </div>
                                             <div className="footer">
                                                  <button className="submit" type="submit">Save the segment</button>
                                                  <button  className="close" 
                                                  onClick={closed}>close</button>
                                               </div>
                                        
               </form>

     

               </div>



            
          )
     }
}

export default Form
