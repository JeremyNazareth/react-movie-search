import { useState } from "react"
import styles from "../components/modules/components/FilterCheckBox.module.css"

const FilterCheckbox = (() =>{

    const [selected, setSelected] = useState(false);

    return(
        <>
            <div className={`${selected ? styles.selected: styles.notSelected}`}>
                
            </div>
        </>
    )
})


export default FilterCheckbox