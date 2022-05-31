import React from 'react'

import style from "./style.module.scss"

function Form() {
  return (
    <div className={style.formWrapper}>
        <div className={style.container}>
            <form>
                <label>
                    <input name="name" id="name" type="text" required />
                    <div className={style.labelText}>Name</div>
                </label>
                <label>
                    <input name="secondName" id="secondName" type="text" required />
                    <div className={style.labelText}>Second Name</div>
                </label>
                <label>
                    <input type="text" name="age" id="age" required />
                    <div className={style.labelText}>Age</div>
                </label>
                <label>
                    <input type="text" name="address" id="address" required />
                    <div className={style.labelText}>Address</div>
                </label>
                <button type="submit" value="Submit">Submit</button>
            </form> 
        </div>
    </div>
  )
}

export default Form