# This is a series of instructions for Docker, ORDER IS SUPER IMPORTANT

# INSTRUCTION 1: Start with a baselevel container. THIS IS THE STARTING POINT
  # I want to use node 16, but I am looking for a less strict config because I don't know exactly what I need, hence stretch
  # This has node, npm, a node user, etc. 
  # Th is node container has a CMD command already, but it will be overridden by a CMD in this file
FROM node:16-stretch

# INSTRUCTION 2: INSTALL NODEMON
RUN npm i -g nodemon

# INSTRUCTION 2: 
  # The node container above comes with a node user to prevent root user level access
  # This "node" is not equal to the node from above, it references a user group within that container
USER node

# INSTRUCTION 3: create a directory, UNDER THE node USER, for your working directory
  # This step will prevent permission errors, because solely running instruction 4 without instruction 3 creates the folder under the root user
  # We will not have access to the root owned folder without INSTRUCTION 3
RUN mkdir /home/node/lacava-frontend

# INSTRUCTION 4: Copy from source to destination
  # This is the home directory of the node user ("/home/node")
  # I am adding the frontend-code directory on the fly
  # all commands after this will be based in this directory
    # WORKDIR will create a directory if it does not exist
WORKDIR /home/node/lacava-frontend


# INSTRUCTION 5: copy the package-lock and package.json into the working dir
  # This step takes advantage of Docker caching, if I make small changes to the code without changing dependencies, it will skip this step and the next step becuase nothing has changed in these files.
  # This makes rebuilds a lot faster 
COPY --chown=node:node package-lock.json package.json ./

# INSTRUCTION 6: Install dependencies inside the container
  # This command will adhere to anything that is in the package-lock file
  # similar to npm i. It is faster, and is locked into more specific versions
RUN npm ci


# INSTRUCTION 5: Copy from source to destination
  # chown takes a user:group
  # WHAT DO I WANT TO COPY?
    # Move everything over into the container
    # ". ." = "Everything from here goes into everything over there"
COPY --chown=node:node . .

CMD ["npm", "start"]


# NOTES 

# docker run --init --rm "container name"
  # This will allow me to use control c to stop the server and will automatically remove the container
# docker run --init --rm --publish 3000:3000 "container name"
  # publish will expose port 3000
# bind server host to "0.0.0.0", not "localhost"


# IF I WANT TO SWITCH TO:
  # NODE ALPINE - this base container is much much smaller and comes without things that you don't need

# INSTRUCTION 1: Start with a baselevel container.
# FROM node:16-alpine

# USE CODE ABOVE

# BUILD OWN NODE CONTAINER WITH ALPINE THAT IS SUPER SMALL: https://frontendmasters.com/courses/complete-intro-containers/alpine-node-js-container/#
# DOCKERFILE FOR PRODUCTION LEVEL BUILD, REMVOES ALL TOOLS YOU NEED FOR BUILD, KEEPS WHAT YOU NEED FOR PRODUCTION: https://frontendmasters.com/courses/complete-intro-containers/multi-stage-builds/#