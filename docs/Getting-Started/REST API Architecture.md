---
layout: default
title: REST API Architecture
parent: Getting Started
nav_order: 3
permalink: /mstr-docs/docs/Getting-Started/REST-API-Architecture
---

# REST API Architecture
The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol. You can use the REST framework to perform actions such as:

* Authentication
* Embedding a dossier
* Configuring a clustered environment

The REST framework is scalable, allowing you to configure a clustered environment that supports multiple instances of REST servers communicating with an Intelligence Server cluster.

The REST Framework layer is built on top of the existing WebObjects and XML API layers. It provides a comprehensive set of APIs that allow developers to quickly and easily customize MicroStrategy BI functionality.

<img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="/images/REST_architecture.png">

* REST Framework Layer: The REST Framework Layer exposes an interface to fetch and manipulate data using HTTP requests such as GET, POST, DELETE, and so on.
* WebObjects Layer: The BI function layer that contains the Java classes that interpret and initiate distinct units of BI functionality (such as pivot, sort, subtotal, drill, and so on). This layer also constructs the aggregated XML API calls to the XML API layer.
* XML API Layer: The communication objects layer that manages the high-throughput XML communication that accesses Intelligence Server methods.
