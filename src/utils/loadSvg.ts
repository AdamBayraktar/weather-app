window.onload = function () {
  // After the page is fully loaded, insert the SVG into the body or container
  const svg = `
      <svg viewBox="0 0 500 200" >
  <path d="M0,50 Q250,0 500,50" />
</svg>
      <svg viewBox="0 0 500 200" >
  <path d="M0,00 Q50,0 500,150" />
</svg>
      <svg viewBox="0 0 500 200" >
  <path d="M0,20 Q1000,100 00,100" />
</svg>
      <svg viewBox="0 0 500 200" >
  <path d="M0,150 Q250,0 00,50" />
</svg>
      <svg viewBox="0 0 500 200" >
  <path d="M0,200 Q50,0 500,150" />
</svg>
      <svg viewBox="0 0 500 200" >
  <path d="M220,220 Q1000,100 00,100" />
</svg>
<svg viewBox="0 0 500 200" >
  <line x1="350" y1="-100" x2="250" y2="400" />
</svg>
<svg viewBox="0 0 500 200" >
  <line x1="0" y1="-200" x2="450" y2="300" />
</svg>
<svg viewBox="0 0 500 200" >
  <line x1="300" y1="11" x2="250" y2="10" />
</svg>
<svg viewBox="0 0 500 200" >
  <line x1="400" y1="0" x2="350" y2="30" />
</svg>
      `;

  document.querySelector("#svg")!.innerHTML += svg;
};
