export const convertHexToRgba = ({ hexColor, opacity }: { hexColor: string, opacity: number }): string => {
  // Remover el símbolo "#" del color hexadecimal
  const hex = hexColor.replace("#", "");

  // Convertir los valores de color de hexadecimal a decimal
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  // Calcular los valores de opacidad en el rango de 0 a 1
  const alpha = opacity / 100;

  // Crear el string en formato RGBA
  const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return rgba;
};
