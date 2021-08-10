import React, { Component } from 'react';
import '../css/form.css';

export class CustomSelect extends Component {

     constructor(props)
     {
          super(props);

          this.state = {
               segment:"",
               fname : "",
               lname : "",
               age : "",
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

          }
     
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
     
            fetch('https://webhook.site/6184e17f-688f-4db6-8631-f47538c13fd9', {
                method: 'POST',
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify(data)
              }).
              then(function(response) {
                console.log(response)
                return response.json();
              });

          }

     render() {


          const data = [
               "First name","LastName","Age"
          ]

          return (
               <div>

                    <form onSubmit = {this.handleSubmit}>
                                  
                                   <div className="segment_class">
                                             <input type="text" placeholder="Enter the segment name"  name="segment"
                                             onChange={this.handled.bind(this)}  value={this.state.segment} />
                                   </div>

                              {
                                   this.state.users.map((userInfo) => 
                                        {
                                             return(
                                                 <div className="form-group">
                                                       <select name={userInfo.names} onChange={this.HandleChange} >
                                                            
                                                                 <option>Add segment</option>
                                                                 <option value="First Name">First Name</option>
                                                                 <option value="Last Name">Last Name</option>
                                                                 <option value="age">Age</option>
                                                            
                                                       </select>

                                                  </div>

                                             )
                                        })
                              }

                              <button type="submit">Submit</button>

                    </form>
               </div>
          )
     }
}

export default CustomSelect
