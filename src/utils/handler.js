export default function handleResponse(res, error, statusCode, data, message) {
  res.status(statusCode).send({
    statusCode,
    message,
    error,
    data,
  });
}
