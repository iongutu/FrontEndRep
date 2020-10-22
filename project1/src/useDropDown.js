import React, {useState} from 'react'


const useDropDown = (label,defaultState, option) =>{
    const [state,setState] = useState(defaultState);
    const id =`use-dropdown-${label.replace(" ", "")}`
    const DropDown= () => (
        <label htmlFor={id}>
            {label}
            <select
                id={id}
                value={state}
                onChange={e=>setState(e.target.value)}
                onBlur={e=>setState(e.target.value)}
                disabled={option.length===0}
                >
                <option>All</option>
                {option.map(item => (
                        <option key={item} value = {item}>
                    {item}
                    </option>
                    ))
                }
            </select>

        </label>
    )

    return [state, DropDown,setState];
}
export default useDropDown
