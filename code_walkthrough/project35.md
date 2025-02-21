{% code-walkthrough
  filesets=[
    {
      "files": ["./index.page.tsx"],
     "when": {
        "pages": "React"
      }  
   },
   {
      "files": ["./index.md"],
      "when": {
        "pages": "Markdown"
      } 
   }
  ]
  filters={
    "pages": {
      "label": "Page type",
      "items": [{"value": "React"}, {"value": "Markdown"}]
    }
  }
%}

  # Code Walkthrough Project 35

  The guide below leads you through the steps on starting your project.

  {% step id="styled-component" heading="How to add styled component" when={ "pages": "React" }  %}
    This step shows you how to add styled component in your React page.
  {% /step %}
  {% step id="create-page" heading="How to create React page" when={ "pages": "React" }  %}
    This step shows you how to create React page.
  {% /step %}
    {% step id="import" heading="How to import elements" when={ "pages": "React" }  %}
    This step shows you how to import elements.
  {% /step %}
    {% step id="export" heading="How to export page" when={ "pages": "React" }  %}
    This step shows you how to export.
  {% /step %}
   {% step id="heading" heading="How add Heading 2" when={ "pages": "Markdown" }  %}
    This step shows you how add the Heading 2 in `.md` file.
  {% /step %}
  {% step id="quotes" heading="How add Quotes" when={ "pages": "Markdown" }  %}
    This step shows you how add Quotes in `.md` file.
  {% /step %}
  {% step id="list" heading="How add Numbered list" when={ "pages": "Markdown" }  %}
    This step shows you how add Numbered list in `.md` file.
  {% /step %}
  {% step id="bold" heading="How add Bold text" when={ "pages": "Markdown" }  %}
    This step shows you how add Bold text in `.md` file.
  {% /step %}
{% /code-walkthrough %}