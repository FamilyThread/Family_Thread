React Related Things:
    Run the React App for quick testing:
    (This is the one you should use the most for your testing)
        npm run dev
        http://localhost:5173/Home

Only run the frontend:
    Build the DockerFile [You only have to do this once]
        docker build -t 380sp24-ft .
    Run the docker container [You have to run this every time you want to preview it]
        docker run -d --rm -p 5173:5173 --name FamilyThreadContainer 380sp24-ft
    Stop the container
        docker container stop [name]
    Remove the image
        docker image stop 380sp24-ft

Docker Compose [frontend, backend]:

