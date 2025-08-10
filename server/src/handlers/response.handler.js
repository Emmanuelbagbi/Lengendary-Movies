const responseWithData = (res, statusCode, data) => res.status(statusCode).json(data);

const error = (res, err) => {
  console.error("❌ Backend Error:", err); // Log full error to console
  return responseWithData(res, 500, {
    status: 500,
    message: err?.message || "Oops! Something wrong!",
    stack: err?.stack // optional: show in frontend too while debugging
  });
};


const badrequest = (res, message) => responseWithData(res, 400, {
  status: 400,
  message
});

const ok = (res, data) => responseWithData(res, 200, data);

const created = (res, data) => responseWithData(res, 201, data);

const unauthorize = (res) => responseWithData(res, 401, {
  status: 401,
  message: "Unathorized"
});

const notfound = (res) => responseWithData(res, 404, {
  status: 404,
  message: "Resource not found"
});

export default {
  error,
  badrequest,
  ok,
  created,
  unauthorize,
  notfound
};