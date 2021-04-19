clear
git pull

npm install
npm run build

sudo docker build -t cufee/am-web .

sudo docker stop am-web
sudo docker rm am-web

sudo docker run -d --restart unless-stopped --name am-web -p 5111:3111 cufee/am-web:latest
