# Project 46: Breaking changes in API functions

## Debrief

### What made you smile?
* It's easier now to just return an object instead of calling request.send with a 200 status code by default.

### What did you find confusing?
* Realm stops if there is some error in the code. After that, the Webview will not restart, and we have to do a "Full restart" every time.

```
Process failed with code "1" and signal "null"
```

{% img src="./images/Screenshot 2025-05-09 at 11.30.08.png" alt="Screenshot 2025-05-09 at 11.30.08.png" withLightbox=true width="" height="" /%}
* Why is Request defined as a first argument even though it's only used to get a body? Maybe move the body to the context the same way as all other properties were moved to the context?
* Sometimes when we call a function, it returns old data (need to wait up to one minute).
* Error in the webview log, even though the type is correct.
```
[11:19:42:193]: [1] Expected ";" but found "weatherResponse"

1 | import type { ApiFunctionsContext } from '@redocly/config';
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
2 |
3 | export default async function (

at ./@api/weather.ts:1:1
```
* Sometimes we see `colorScheme=dark` in the URL query, but it shouldn't be there.
* It would be much easier to call API function from code by showing play button above the function (similar to test extensions do).
{% img src="./images/Screenshot 2025-05-09 at 13.05.47.png" alt="Screenshot 2025-05-09 at 13.05.47.png" withLightbox=true width="" height="" /%}
