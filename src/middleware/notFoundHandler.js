// Middleware для несуществующих маршрутов (після всіх маршрутів)
export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: 'Route not found' });
};
