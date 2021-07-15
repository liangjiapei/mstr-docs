---
layout: default
title: REST API Families
nav_order: 4
permalink: /mstr-docs/docs/REST-API-Families
---

# MicroStrategy REST API Families
{: .no_toc }
The current release includes the following families of MicroStrategy REST APIs.

## In This Article
{: .no_toc .text-delta }

1. TOC
{:toc}

---

The [MicroStrategy REST API Explorer](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/) lets you drill down into the individual APis. You can see HTTP headers and input and output information for each request, and enter values to try out the APIs.

### [Authentication API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication)

The Authentication API family allows developers to authenticate users against the Intelligence Server or third-party servers.

* [Login API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Authentication/postLogin)

Developers can use the Login API for authentication—to create and terminate sessions. Users are authenticated against the Intelligence Server that is configured as the default in the REST server configuration. Each successful authentication attempt returns an authorization token which can be used to authorize subsequent requests. The authorization token must be used in conjunction with an HTTP session in order to authorize the caller.

* [Sessions API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Authentication/sessionSessionIdGet)

Developers can use the Sessions API to obtain information about the active session such as user privileges, information about the currently authenticated user, and whether the session is still alive.

* [Identity Token API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Authentication/getIdentityTokenInfo)

Developers can use the Identity Token API to authenticate using third-party applications. Once a user has been authenticated with the Login API, an identity token can be requested and passed to another application. The third-party application can then make a request to authenticate on behalf of the user, generating a new authorization token and an HTTP session.

### [Attribute API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes)

The Attribute API family allows developers to obtain an attribute's definition, create a attribute object, and update the definition of an existing attribute.
