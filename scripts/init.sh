#!/bin/bash

RED = '\033[0;31m'
GREEN = '\033[0;32m'
BLUE = '\033[0;34m'
DEFAULT = '\033[0m'



ln -s /app/config/nginx /etc/nginx


echo -e "${BLUE}Checking if nginx is installed... ${DEFAULT}"
if ! [ -x "$(command -v nginx)" ]; then
  echo -e "${RED}Error: nginx is not installed. ${DEFAULT}"
  echo -e "${BLUE}Installing nginx... ${DEFAULT}"
  apk add nginx
  echo -e "${GREEN}Nginx installed! ${DEFAULT}"
else
  echo -e "${GREEN}Nginx is already installed! ${DEFAULT}"
fi

echo -e "${BLUE}Checking if certbot is installed... ${DEFAULT}"
if ! [ -x "$(command -v certbot)" ]; then
  echo -e "${RED}Error: certbot is not installed. ${DEFAULT}"
  echo -e "${BLUE}Installing certbot... ${DEFAULT}"
  apk add certbot
  echo -e "${GREEN}Certbot installed! ${DEFAULT}"
else
  echo -e "${GREEN}Certbot is already installed! ${DEFAULT}"
fi

node server.js