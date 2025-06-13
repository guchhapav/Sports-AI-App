# Sports News
This app is built to utilize a small AI model to summarize trending headlines personalized to the user. 

### Architecture

The entire project is built using a ports and adapters architecture paradigm.

The front-end is built in react with the backend being built in Python with Fast API. For user information postgres is going to be used.

The entire project is containerized in docker for any sort of development or deployment. 

### Deployment and Usage

You will have to add a .env file with your own OPEN_AI_API key for now! Planning to eventually add a tiny model within the app to minimize outgoing API calls.