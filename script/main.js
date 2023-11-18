
function display(val){
    document.getElementById('textarea').value += val
}
function solve(){
    let x =  document.getElementById('textarea').value

    let y = eval(x)

    document.getElementById('textarea').value=y

    return y
}
function clearscreen(){
    document.getElementById('textarea').value=""
}
function delescreen(){
    document.getElementById('delete').addEventListener('click',()=>{
        
        let inputField = document.getElementById('textarea')
        const inputValue = inputField.value;

        if (inputValue.length > 0) {
            const newValue = inputValue.slice(0, -1); // Remove the last character
            inputField.value = newValue;
          } else {
            alert("The input field is empty!");
          }
        })
    }
delescreen()




// TEXTAREA

const textarea = document.getElementById('textarea');
      
function adjustFontSize() {
  const contentLength = textarea.value.length;
  const maxHeight = 400;  // Maximum height of the textarea (adjust as needed)
  const maxWidth = textarea.offsetWidth; // Maximum width of the textarea
  const approximateCharacterWidth = 10; // Adjust this based on your font-family and font-size

  // Calculate the font size based on content length and dimensions
  const fontSize = Math.sqrt((maxHeight * maxWidth) / (contentLength * approximateCharacterWidth));

  // Set the font size of the textarea
  textarea.style.fontSize = Math.min(fontSize, 50) + 'px'; // Limit font size to the initial size or smaller
}

// Adjust font size as the user types
textarea.addEventListener('input', adjustFontSize);

// Initial adjustment on page load
window.addEventListener('load', adjustFontSize);
  