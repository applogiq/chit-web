const config = {
  production: {
    url: "https://www.applogiq.org/",
    apiUrl: " https://y124ycg870.execute-api.ap-southeast-1.amazonaws.com/prod/",
    // bucketName: "applogiq-official-website"
  },
  developement: {
    url: "https://www.demo.applogiq.org/",
    apiUrl: " https://w0jw9t60c5.execute-api.ap-southeast-1.amazonaws.com/dev/",
    //   bucketName: "applogiq-official-website-development"
  },
  local: {
    url: "http://localhost:4000/",
    apiUrl: "http://192.168.29.152:5000/api/v1/",
    //   bucketName: "applogiq-official-website-development"
  },
};

const environment = "local";

const hostConfig = {
  WEB_URL: config[environment].url,
  IMAGE_URL: `https://${config[environment].bucketName}.s3.amazonaws.com`,
  API_URL: config[environment].apiUrl,
  S3_BUCKET: `${config[environment].bucketName}`,
  // intervals: 500
};

const intervals = {
  reload: 1500,
};

export { hostConfig, intervals };
