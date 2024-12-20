# Project One - API Showdown

I spent some time determining the best approach to structure this project, where to place the Open API spec files, initially I had these in the root directory but felt that
this would be cluttering - resulting in the apis/ directory structure.
Adding basic guides into this directory structure made sense too

Working with the sidebar & navigation items was fun, documentation was clear and very quick to get up and running.
Switching between/combining with the left sidebar and top nav was straight forward. 

When adding the catalog I originally split the configuration out into multiple sections, discussing with my buddy I was able to combine into one key directory 
declaration.
- worked with buddy on adding a secondary redocly.yaml file in a new directory to apply metadata to all spec files in that directory.

Extending the museum API to included a get method "/dino-details"
- adding references to parameters 
- examples of tthe request payloads
- also worked with buddy to remove the security on this request by updating the OpenAPI spec.  


Added a CNAME to the project, the one provided in the documentation didn't seem to work so I used one of my own domains and added a CNAME and TXT record.

