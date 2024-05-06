const cloud = "aws";
const awsURLs = [
  "https://api-benjamin1976.imaginators.cloud/",
  "https://api-benjamin1976.imaginators.cloud/",
];
const azureURLs = [
  "https://bens-resume-challenge-visits.azurewebsites.net/api/get-visits",
  "https://bens-resume-challenge-visits.azurewebsites.net/api/post-visits",
];

export const urls = cloud === "aws" ? awsURLs : azureURLs;
