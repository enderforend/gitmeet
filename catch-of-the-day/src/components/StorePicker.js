import React from 'react'


class StorePicker extends React.Component{
  render() {
    let varName = 'Stariy'
    return(
      <form className="store-selector">  
        {/* Comments */ }
        <h2>Please enter a store</h2>
        <input type="text" required placeholder = "Enter Store Name"/>
        <button type="submit">Visit Store >></button>
      </form>
    )
  }
}

export default StorePicker