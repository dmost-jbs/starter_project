# starter_project


Starting project that implements a post/get request handler via AWS Lambda which stores state in AWS S3. React front which interacts with AWS Lambdas via the Axios Library


Node server GET: https://04r6i3pt7d.execute-api.us-east-1.amazonaws.com/Prod/api/get \n



Node server POST: https://04r6i3pt7d.execute-api.us-east-1.amazonaws.com/Prod/api/post

POST data format: {
    "message": \<String\>
}


The react front application accepts a user input string and has the ability to save that as the current message in the node server + aws s3 bucket. The user is also able to retrieve the latest message from the node server + aws s3 bucket. If there is no current message, then the retrieve button will render an error.


Also includes a simple user account management system on the frontend via redux.
