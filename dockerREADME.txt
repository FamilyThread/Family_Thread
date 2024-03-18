Build the DockerFile
    docker build -t familythread .
Run the docker container
    docker run -d --rm -p 5173:5173 --name FamilyThreadContainer familythread
