# This is a personal project to use the MERN stack.

You can run the project with the next commad: 
`pnpm dev`

Or run individualy the backend and the front:
`pnpm --filter 'backend' dev`

`pnpm --filter 'frontend' dev`


.env file example:
```
PORT=3000
# DB Connection Data
USER_DB=****
PASSWORD_DB=****
CLUSTER_DB=cluster0.*****.mongodb.net
COLLECTION_NAME=url-shorter
```