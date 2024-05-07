import { useState } from "react";

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");
    const textColor = Number(color[1]) < 8 ? "#DDDDDD" : "#444444";

    function handleColorChange(ev){
        setColor(ev.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color, borderColor: textColor}}>
                <p style={{color: textColor}}>Seleted color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" onChange={handleColorChange} value={color}/>
        </div>
    );
}

export default ColorPicker;