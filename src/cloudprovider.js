const cloud = "aws";
const awsURLs = [
  "https://asqrkxqdcf.execute-api.us-east-1.amazonaws.com/dev/",
  "https://asqrkxqdcf.execute-api.us-east-1.amazonaws.com/dev/",
];
const azureURLs = [
  "https://bens-resume-challenge-visits.azurewebsites.net/api/get-visits",
  "https://bens-resume-challenge-visits.azurewebsites.net/api/post-visits",
];

export const urls = cloud === "aws" ? awsURLs : azureURLs;
