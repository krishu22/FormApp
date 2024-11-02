import { useState } from "react"

function App() {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""
  })

  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData((prev) => ({...prev, [name]: type==="checkbox"?checked:value}))
  }

  function submitHandler(event){
   event.preventDefault();
    console.log("Printing the form data :");
    console.log(formData);
  }

  return (
    
    <div>

        <form onSubmit={submitHandler}>

            <label htmlFor="firstName">First Name</label> 
            <input type="text" name="firstName" id="firstName" placeholder="Krisha" value={formData.firstName} onChange={changeHandler} /> 

            <label htmlFor="lastName">Last Name</label> 
            <input type="text" name="lastName" id="lastName" placeholder="Garg" value={formData.lastName} onChange={changeHandler} /> 

            <label htmlFor="email">Email Address</label> 
            <input type="text" name="email" id="email" placeholder="kg22@gmail.com" value={formData.email} onChange={changeHandler} /> 

            <label htmlFor="country">Country</label>
            <select id="country" name="country" value={formData.country} onChange={changeHandler}>
              <option>India</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>

            <label htmlFor="streetAddress">Street Address</label> 
            <input type="text" name="streetAddress" id="streetAddress" placeholder="1234 Main Street" value={formData.streetAddress} onChange={changeHandler} /> 

            <label htmlFor="city">City</label> 
            <input type="text" name="city" id="city" placeholder="Asansol" value={formData.city} onChange={changeHandler} /> 

            <label htmlFor="state">State / Province</label> 
            <input type="text" name="state" id="state" placeholder="West Bengal" value={formData.state} onChange={changeHandler} /> 

            <label htmlFor="postalCode">ZIP / Postal Code</label> 
            <input type="text" name="postalCode" id="postalCode" placeholder="713301" value={formData.postalCode} onChange={changeHandler} /> 


            <fieldset>
              <legend>By Email</legend>

              <div>
                <input id="comments" name="comments" type="checkbox" value={formData.comments} onChange={changeHandler} />
                <div>
                  <label htmlFor="comments">Comments</label>
                  <p>Get notified when someone posts a comment on a posting.</p>
                </div>
              </div>

              <div>
                <input id="candidates" name="candidates" type="checkbox" value={formData.candidates} onChange={changeHandler} />
                <div>
                  <label htmlFor="candidates">Candidates</label>
                  <p>Get notified when a candidate applies for a job.</p>
                </div>
              </div>

              <div>
                <input id="offers" name="offers" type="checkbox" value={formData.offers} onChange={changeHandler} />
                <div>
                  <label htmlFor="offers">Offers</label>
                  <p>Get notified when a candidate accepts or rejects an offer.</p>
                </div>
              </div>

            </fieldset>

          
            <fieldset> 
              <legend>Push Notifications</legend> 
              <p>These are delivered via SMS to your mobile phone.</p>

              <input type="radio" id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler} />
              <label htmlFor="pushEverything">Everything</label> 

              <input type="radio" id="pushEmail" name="pushNotifications" value="Same as email" onChange={changeHandler} />
              <label htmlFor="pushEmail">Same as email</label>

              <input type="radio" id="pushNothing" name="pushNotifications" value="No Push Notifications" onChange={changeHandler} />
              <label htmlFor="pushEverything">No Push Notifications</label>
               
            </fieldset>

            <button>Save</button>

        </form>

    </div>

  );

}

export default App;
