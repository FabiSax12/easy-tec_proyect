function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' } as const;
  return date.toLocaleDateString('es-ES', options);
}

export {formatDate}