import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const Pizza = () => {
// Pizza State
    const [ pizzaValues, setPizzaValues ] = useState({
        name:'',
        size:'',
        toppings: {
            truffle: '',
            wagyu:'',
            caviar:'',
            gold:'',
        },
        special:'',
    });
// Errors
    const [ errors, setErrors ] = useState({
        name:'',
        size:'',
        toppings: {
            truffle: '',
            wagyu:'',
            caviar:'',
            gold:'',
        },
        special:'',
    });
    const formSchema = Yup.object().shape({
        name: Yup
            .string()
            .min(3, "Name must be at least 3 characters long")
            .required(),
        size: Yup
            .string()
            .oneOf(['small', 'medium', 'large'])
            .required('You must select a size'),
        special: Yup
            .string()
            .min(3, "Name must be at least 3 characters long")
            .required()    
      });
      

//
const handleChange = (e) => {
    e.persist();
  Yup.reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then((valid) => {
      console.log("valid");
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    })
    .catch((err) => {
      console.log("err: ", err.errors[0]);
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
      });
    });

  setPizzaValues({
    ...pizzaValues,
    [e.target.name]: e.target.value
  });
}; 


const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting ", pizzaValues);
        setPizzaValues({
            name:'',
            size:'',
            toppings: {
                truffle: '',
                wagyu:'',
                caviar:'',
                gold:'',
            },
            special:'',
        });
      };

      const handleCheckboxChange = event => {
        const { name, checked } = event.target
        setPizzaValues({
            ...pizzaValues,
            toppings: {
                ...pizzaValues.toppings,
                [name]: checked,
            }
          })
      }
//
    return (
// Form to orderx   
        <form onSubmit={handleSubmit}>
        <div>
            <label>
                Who's ordering? 
                <input
                type='text'
                name='name'
                placeholder='your name'
                value={pizzaValues.name}
                onChange={handleChange}/>
            </label>
        </div>
        <div>
            <label>
                How big? 
                <select
                onChange={handleChange}
                value={pizzaValues.size}
                name='size'
                >
                <option value="">Please select a size: </option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
                </select>
            </label>
        </div>
        <div>
           <label>
            Tartufo <input 
                type="checkbox" 
                name="truffle"
                checked={pizzaValues.toppings.truffle}
                onChange={handleCheckboxChange}
            />
        </label>
        <label>
            Wagyu <input 
                type="checkbox" 
                name="wagyu"
                checked={pizzaValues.toppings.wagyu}
                onChange={handleCheckboxChange}
            />
        </label>
        <label>
            Caviar <input 
                type="checkbox"
                name="caviar"
                checked={pizzaValues.toppings.bacon}
                onChange={handleCheckboxChange} 
            />
        </label>
        <label>     
            Gold Flakes <input 
                type="checkbox"
                name="gold"
                checked={pizzaValues.toppings.gold}
                onChange={handleCheckboxChange} 
            />
        </label>   
        </div>
        <div>
            <label>
                <textarea 
                placeholder='Add a special request and we shall deliver.'
                name='special'
                onChange={handleChange}
                value={pizzaValues.special}
                />
            </label>
        </div>
        <button type='submit'>Im Ready to Order</button>
        </form>
    );
};

export default Pizza;