[Link](#tab-code-samples-1)

{% tabs %}
  {% tab label="API Authentification Methods" %}
  {% /tab %}
  {% tab label="Code samples" %}
  {% /tab %}
  {% tab label="Tab 3" %}
  {% /tab %}
{% /tabs %}

{% tabs %}
  {% tab label="Tabs" %}
    {% tabs %}
      {% tab label="API Authentification Methods" %}
        {% table %}
          - Authentication Method | 
          - Pros
          - Cons
          - Best Use Case

          ---

          - API Key
          - Simple, easy to implement
          - Limited security, no expiration mechanism
          - Basic services, internal apps
            
          --- 

          - OAuth
          - Granular control, secure, widely used
          - Complex to implement, requires extra infrastructure
          - Third-party integrations, user-based apps

          ---

          - JWT
          - Stateless, scalable, flexible
          - Token expiration issues, revocation management
          - Distributed systems, microservices
        {% /table %}
      {% /tab %}
      {% tab label="Code samples" %}
        {% code-snippet
          file="./snippet.py"
          language="python"
          title="example.py"
        /%}

        {% code-snippet
          file="./snippet.js"
          language="javascript"
          title="example.js"
        /%}

        {% code-snippet
          file="./snippet.java"
          language="java"
          title="example.java"
        /%}
      {% /tab %}
        {% tab label="Tab 3" %}
        {% img src="../images/catalog-screenshot.png" /%}
      {% /tab %}
    {% /tabs %}
  {% /tab %}
  {% tab label="Test tab" %}
  {% /tab %}
{% /tabs %}