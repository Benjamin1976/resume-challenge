const cloud = "aws";
const awsURLs = [
  "https://ggru6yy316.execute-api.us-east-1.amazonaws.com/dev/",
  "https://ggru6yy316.execute-api.us-east-1.amazonaws.com/dev/",
];
const azureURLs = [
  "https://bens-resume-challenge-visits.azurewebsites.net/api/get-visits",
  "https://bens-resume-challenge-visits.azurewebsites.net/api/post-visits",
];

export const urls = cloud === "aws" ? awsURLs : azureURLs;
