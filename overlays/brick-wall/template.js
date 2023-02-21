export default ({
  height,
  width,
  color,
}) => `
  <svg height="${height}" width="${width}" viewBox="0 0 512 512">
    <path d="M494 18.02l-101 .103V119h101zm-119 .12l-238 .247V119h238zm-256 .266L18 18.51V119h101zM18 137v110h229V137zm247 0v110h229V137zM18 265v110h101V265zm119 0v110h238V265zm256 0v110h101V265zM18 393v100.98l229-.236V393zm247 0v100.727l229-.237V393z" fill="${color}" fill-opacity="1" />
  </svg>
`;
