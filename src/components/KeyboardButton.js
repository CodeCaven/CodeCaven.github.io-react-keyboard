function KeyboardButton(props) {
    return (
      <button className={props.class} value={props.keyboardButtonValue} onClick={props.handleClick}>
        {props.keyboardButtonValue}
      </button>
    )
  }
  
export default KeyboardButton;

// NOTE: React uses "className" over "class"
// NOTE: components must start with UpperCase (for use in tags)
// All React components must act like pure functions with respect to their props (can't change them, hence 'state')
// Can use classes or functions with same results, state examples use classes in tutorials