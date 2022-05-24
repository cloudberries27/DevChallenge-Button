import './App.css';
import React from "react";
import Button from "./components/button";

function App() {
  const [shadow, setShadow] = React.useState(true);
  const [disable, setDisable] = React.useState(true);
  const [textdisable, setTextDisable] = React.useState(true);
  const [icon, setIcon] = React.useState("favorite");

  return (
    <div>
      <h1>Buttons</h1>
      <div className='buttons'>
        <p>&lt;Button/&gt;<br/>
        <Button/></p>
        <p>&lt;Button variant="outline"/&gt;<br/>
        <Button variant="outline"/></p>
        <p>&lt;Button variant="text"/&gt;<br/>
        <Button variant="text"/></p>
        <p>&lt;Button disableShadow/&gt;<br/>
        Disable Shadow? <input type="checkbox" checked={shadow} onClick={()=>setShadow(!shadow)}/></p>
        {shadow ? <Button disableShadow/> : <Button/>}
        <p>&lt;Button disabled/&gt;<br/>
        Disable Button? <input type="checkbox" checked={disable} onClick={()=>setDisable(!disable)}/></p>
        {disable ? <Button disabled/> : <Button/>}
        <p>&lt;Button variant="text" disabled/&gt;<br/>
        Disable Text Button? <input type="checkbox" checked={textdisable} onClick={()=>setTextDisable(!textdisable)}/></p>
        {textdisable ? <Button variant="text" disabled/> : <Button variant="text"/>}
        <p>Select Icon: <select onChange={(e)=>setIcon(e.target.value)}>
          <option value="favorite">Heart</option>
          <option value="star">Star</option>
          <option value="bolt">Lightning Bolt</option>
          <option value="cake">Birthday Cake</option>
          <option value="cloud">Cloud</option>
          </select></p>
        <p>&lt;Button startIcon="{icon}"/&gt;</p>
        <Button startIcon={icon}/>
        <p>&lt;Button endIcon="{icon}"/&gt;</p>
        <Button endIcon={icon}/>
        <p>&lt;Button size="sm"/&gt;</p>
        <Button size="sm"/>
        <p>&lt;Button size="md"/&gt;</p>
        <Button size="md"/>
        <p>&lt;Button size="lg"/&gt;</p>
        <Button size="lg"/>
        <p>&lt;Button color="default"/&gt;</p>
        <Button color="default"/>
        <p>&lt;Button color="primary"/&gt;</p>
        <Button color="primary"/>
        <p>&lt;Button color="secondary"/&gt;</p>
        <Button color="secondary"/>
        <p>&lt;Button color="danger"/&gt;</p>
        <Button color="danger"/>
      </div>
    </div>
  );
}

export default App;
