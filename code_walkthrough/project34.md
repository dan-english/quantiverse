{% code-walkthrough
  filesets=[
    {
      "files": ["./redocly.yaml"],
      "downloadAssociatedFiles": ["./package.json"],
     "when": {
        "redocly": "Config"
      }  
   },
   {
      "files": ["./index.md"],
      "downloadAssociatedFiles": ["./package.json"],
      "when": {
        "page": "Description"
      } 
   }
  ]
  filters={
    "redocly": {
      "label": "redocly.yaml",
      "items": [{"value": "Config"}]
    },
    "page": {
      "label": "Home Page",
      "items": [{"value": "Description"}]
    }
  }
%}
  # Code Walkthrough Project 34

  The guide below leads you through the steps on starting your project.

  {% step id="logo" heading="How to add logo" when={ "redocly": "Config" }  %}
    This step shows you how to add Logo to your documentation.
  {% /step %}
  {% step id="navbar" heading="How to add Navbar" when={ "redocly": "Config" }  %}
    This step shows you how to add Navbar to your documentation.
  {% /step %}
    {% step id="rbac" heading="How to configure RBAC" when={ "redocly": "Config" }  %}
    This step shows you how to configure the RBAC.
  {% /step %}
    {% step id="moni" heading="How to set up the Monitoring" when={ "redocly": "Config" }  %}
    This step shows you how to set up API monitoring.
  {% /step %}
   {% step id="heading" heading="How add Heading 2" when={ "page": "Description" }  %}
    This step shows you how add the Heading 2 in `.md` file.
  {% /step %}
  {% step id="quotes" heading="How add Quotes" when={ "page": "Description" }  %}
    This step shows you how add Quotes in `.md` file.
  {% /step %}
  {% step id="list" heading="How add Numbered list" when={ "page": "Description" }  %}
    This step shows you how add Numbered list in `.md` file.
  {% /step %}
  {% step id="bold" heading="How add Bold text" when={ "page": "Description" }  %}
    This step shows you how add Bold text in `.md` file.
  {% /step %}
{% /code-walkthrough %}