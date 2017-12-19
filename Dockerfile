FROM ubuntu
MAINTAINER Jeff Arn

# Install packages for Node.js
RUN apt-get update
RUN apt-get install -y build-essential wget git
RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN apt-get clean

# Clone application within image
RUN git clone https://github.com/Repjarms/groupme-dashboard.git /root/test-repo
RUN cd /root/test-repo; npm i
