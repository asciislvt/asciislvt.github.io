let i = 0;
let message = "";

export default function typeWriter(element, text = '', speed = 100) {
  if (i < text.length) {
    message += text.charAt(i);
    element.innerHTML = message;
    i++;

    setTimeout(typeWriter, speed, element, text, speed);
  }
}
