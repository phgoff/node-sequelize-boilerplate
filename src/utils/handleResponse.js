export default function handleResponse(res, code, result, message, data, option = {}) {
  res.status(code === 204 ? 200 : code).send({
    code,
    result,
    message,
    data,
    ...option,
  });
}
