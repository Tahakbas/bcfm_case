# bcfm_case

## Build Image

> cd (CodeFilePath)
  
> docker build . -t (username)/(image_name)
  
- Example: docker build . -t tahakbas/bcfm_case_image
  
## Run the Image
> docker run -p 3000:3000 -d (username)/(image_name)
  
## Test
- Open links in your browser
> http://localhost:3000

> http://localhost:3000/temperature?city=ankara

**Or**

- Go inside the container
> docker exec -it (container_id) /bin/bash

> curl -i localhost:3000

> curl -i localhost:3000/temperature?city=ankara
