---
layout: default
title: REST API
nav_order: 0
permalink: /original
---
# MicroStrategy REST API
{: .fs-10 .fw-300 .mb-lg-5 }

[API Reference](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#/){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 .mb-lg-4 } [View on Github](https://github.microstrategy.com/mshaffer/mstr-docs){: .btn .fs-5 .mb-4 .mb-md-0 .mb-lg-4 }

The MicroStrategy REST API is an application that uses HTTP requests such as POST, DELETE, and GET. It is designed to help developers build data-driven client applications quickly and easily. It does this by providing light-weight JSON data that is easy to consume because it includes raw data without direct formatting. Developers can use the MicroStrategy REST API programmatically in their own code, or in a tool like curl.

The following topics are designed to help you understand and use the MicroStrategy REST API.

### [Getting started](/pages/mshaffer/mstr-docs/docs/Getting-Started/)
{: .mb-lg-4 }


Quick overviews introduce you to the MicroStrategy REST framework, configuring clustered environments, handling exceptions, and the MicroStrategy REST API Explorer, which serves as the REST API reference guide.

### [REST API families](/pages/mshaffer/mstr-docs/docs/REST-API-Families)
{: .mb-lg-4 }

MicroStrategy REST APIs are grouped into API families. These families represent functionality, such as Authentication or Browsing, or categories, such as Cubes or Security Roles.

### [Common REST API workflows](/pages/mshaffer/mstr-docs/docs/Common-REST-API-Workflows)
{: .mb-lg-4 }

Descriptions and quick start guides are provided for common MicroStrategy REST API workflows, such as authentication, folder browsing, filtering data, searching, retrieving data from the Intelligence Server (referred to as the JSON Data API), uploading external data (referred to as the Push Data API), and manage attributes, relationships, facts, tables, filters, prompts, derived elements, and security filters through the Modeling service.

### [REST API samples](/pages/mshaffer/mstr-docs/docs/REST-API-Samples)
{: .mb-lg-4 }

Rest API samples illustrate how REST API calls work with ReactJS, and the ability to create reports on the fly, with ad-hoc object fetching and incremental fetch.
{: .mb-lg-4 }

#### Thank you to the contributors of the REST API documentation:

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>