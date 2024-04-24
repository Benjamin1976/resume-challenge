const cloud = "aws";
const awsURLs = [
  "https://6u7p0s026e.execute-api.us-east-1.amazonaws.com/dev",
  "https://6u7p0s026e.execute-api.us-east-1.amazonaws.com/dev",
];
const azureURLs = [
  "https://k7ib9cxbs4.execute-api.us-east-1.amazonaws.com/test/DynamoDBManager",
  "https://bens-resume-challenge-api.azure-api.net/bens-resume-challenge-http-api?name=Weanie",
  "https://bens-resume-challenge-visits.azurewebsites.net/api/get-visits",
  "https://bens-resume-challenge-visits.azurewebsites.net/api/post-visits",
];

export const urls = cloud === "aws" ? awsURLs : azureURLs;
