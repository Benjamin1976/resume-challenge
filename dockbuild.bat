@REM use to build and upgrade an image
docker image build -t resume-challenge-image:latest .

@REM use to take the image with my username 
docker image tag resume-challenge-image beenjammin76/resume-challenge-image

@REM use topush the image to the docker hub repo
docker push beenjammin76/resume-challenge-image