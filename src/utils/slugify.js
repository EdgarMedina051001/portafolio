export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Elimina acentos
      .replace(/\s+/g, "-") // Reemplaza espacios con "-"
      .replace(/[^\w-]+/g, "") // Elimina caracteres no válidos
      .replace(/--+/g, "-") // Reemplaza múltiples guiones
      .trim();
  }