# Project Twenty Two: Protect API operations


Looked at this : `requiresLogin: true` but won't work with RBAC

This seems like it would be security at the open API sepc?


```https://redocly.com/blog/updates-2021-09```

`authenticated-user`?


stumbled on
https://redocly.com/docs/realm/author/reference/openapi-extensions/x-rbac#options
searched for "user login" and saw `options`


Also had to work out I needed this turned on.
https://redocly.com/docs/realm/config/openapi/show-extensions


In the downloaded file the endpoint is there but no details:
```
  /store/inventory: {}
```


Remeber to log out for testing :/