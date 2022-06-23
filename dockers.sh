echo 'Building / Running Dockers'

docker build . -t kingy/testnode16 -f 16.Dockerfile
docker run -d --name testnode16 -p 3003:3000 kingy/testnode16
echo 'Node 16 http://localhost:3003'