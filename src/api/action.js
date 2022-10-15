/** ********************************* Import config files ************************************* */
import { toast } from "react-toastify";
import { hostConfig } from "../config";

const responseStatusHandler = (response) => {
  switch (response.status) {
    case 400:
      // return toast.error(response.statusText);
      return toast.error("Email id Already existing");
    case 401:
      return { error: "Unauthorized" };
    case 402:
      return { error: "Payment Required" };
    case 403:
      return { error: "Forbidden" };
    case 404:
      return { error: "Not Found" };
    case 405:
      return { error: "Method Not Allowed" };
    case 406:
      return { error: "Not Acceptable" };
    case 408:
      return { error: "Request Timeout" };
    case 409:
      return { error: "User Already Exist" };
    case 410:
      return { error: "permanently deleted from server" };
    case 500:
      return { error: "Internal Server Error" };
    case 501:
      return { error: "Not Implemented" };
    case 502:
      return { error: "Bad Gateway" };
    case 503:
      return { error: "Service Unavailable" };
    case 504:
      return { error: " Gateway Timeout" };
    case 511:
      return { error: " Network Authentication Required" };
    case 200:
    case 201:
      return response;
    default:
      return false;
  }
};

/** ****************************** Error Handler *********************************** */
const errorHandler = (error) => error;

let token;

if (typeof window !== "undefined") {
  token = localStorage.getItem("accessToken");
}
/** ****************************** Create Api *********************************** */
export const postDataApi = (requestUrl, params) => {
  return fetch(`${hostConfig.API_URL}${requestUrl}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) =>
      result.status === 200 || result.status === 201 ? result.json() : result
    )
    .catch((err) => {
      errorHandler(err);
    });
};

/** ****************************** List Api by Query *********************************** */
export const getListByApi = (requestUrl, params) => {
  let getParams = "?";
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken");
  }

  //check all the params
  if (
    params &&
    params.rowsPerPage &&
    params.rowsPerPage !== null &&
    params.rowsPerPage !== undefined
  ) {
    getParams += `limit=${params.rowsPerPage}`;
  }

  if (
    params &&
    params.currentPage &&
    params.currentPage !== null &&
    params.currentPage !== undefined
  ) {
    getParams += `&page=${params.currentPage}`;
  }

  if (
    params &&
    params.sort &&
    params.sort !== null &&
    params.sort !== undefined
  ) {
    getParams += `&sort=${params.sort}`;
  }

  if (params && params._id && params._id !== null && params._id !== undefined) {
    getParams += `&_id=${params._id}`;
  }

  if (
    params &&
    params.isActive !== null &&
    params.isActive !== "" &&
    params.isActive !== undefined
  ) {
    getParams += `&isActive=${params.isActive}`;
  }

  if (
    params &&
    params.userId &&
    params.userId !== null &&
    params.userId !== undefined
  ) {
    getParams += `&userId=${params.userId}`;
  }

  if (
    params &&
    params.query &&
    params.query !== null &&
    params.query !== undefined
  ) {
    getParams += `&query=${params.query}`;
  }

  return fetch(`${hostConfig.API_URL}${requestUrl}${getParams}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** List Api By Id*********************************** */
export const viewDataByApi = (requestUrl, dataId, params) => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken");
  }
  let getParams = "?";
  if (
    params &&
    params.userId &&
    params.userId !== null &&
    params.userId !== undefined
  ) {
    getParams += `&userId=${params.userId}`;
  }
  return fetch(`${hostConfig.API_URL}${requestUrl}/${dataId}${getParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** Update Api *********************************** */
export const putDataApi = (requestUrl, params, id) => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken");
  }
  return fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** Update by Id Api *********************************** */
export const putDataByIdApi = (
  requestUrl,
  params,
  id,
  roleId,
  role,
  method
) => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken");
  }
  let getParams = "";
  if (roleId && roleId && roleId !== null && roleId !== undefined) {
    getParams += `/${roleId}`;
  }

  if (role && role !== null && role !== "" && role !== undefined) {
    getParams += `?role=${role}`;
  }

  if (method && method !== null && method !== "" && method !== undefined) {
    getParams += `&method=${method}`;
  }
  return fetch(`${hostConfig.API_URL}${requestUrl}/${id}${getParams}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** Delete by Id Api *********************************** */
export const deleteDataByIdApi = (requestUrl, id) => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken");
  }

  return fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** Delete Api *********************************** */
export const deleteDataApi = (requestUrl, params) => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken");
  }
  return fetch(`${hostConfig.API_URL}${requestUrl}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
};

/** ****************************** Change password Api *********************************** */
export const changePasswordDataApi = (
  requestUrl,
  params,
  id,
  changePasswordToken
) => {
  return fetch(`${hostConfig.API_URL}${requestUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bearer ${changePasswordToken}`,
    },
    body: JSON.stringify(params),
  })
    .then((response) => responseStatusHandler(response))
    .then((result) =>
      result.status === 200 || result.status === 201 || result.status === 400
        ? result.json()
        : result
    )
    .catch((error) => {
      errorHandler(error);
    });
};
