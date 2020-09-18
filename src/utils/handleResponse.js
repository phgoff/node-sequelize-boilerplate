export function handleSuccess(res, statusCode, data, message) {
  return res.status(statusCode).send({
    statusCode,
    message,
    data,
  });
}

export function handleError(res, statusCode, message) {
  return res.status(statusCode).send({
    statusCode,
    error: true,
    message,
  });
}
