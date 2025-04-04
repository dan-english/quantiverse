# Lost Invention Mission Walkthrough

## Mission Objective

Travel back to the year 1889 and retrieve the blueprint for Nikola Tesla’s lost invention before it’s destroyed in a mysterious fire.

## Story Setup

Your mission begins in 1889, just days before Nikola Tesla's laboratory is set to be engulfed in flames. Historical records indicate that Tesla was working on a device that could revolutionize the world, but the blueprints were lost in the fire. You’ve been tasked with retrieving a copy of these blueprints to bring them back to the present.

{% code-walkthrough
  filesets=[
    { 
      "files": ["./_filesets/ts/anchor.ts", "./_filesets/ts/timeline.ts", "./_filesets/ts/travel.ts"],
      "downloadAssociatedFiles": ["./_filesets/ts/package.json", "./_filesets/ts/README.md"],
      "when": { "language": "TypeScript" }
    },
    { 
      "files": ["./_filesets/py/anchor.py", "./_filesets/py/timeline.py", "./_filesets/py/travel.py"],
      "downloadAssociatedFiles": ["./_filesets/py/requirements.txt", "./_filesets/py/README.md"],
      "when": { "language": "Python" }
    }
  ]
  filters={
    "language": {
      "label": "Language",
      "items": [
        { "value": "TypeScript" },
        { "value": "Python" }
      ]
    }
  }
%}

  ## Steps

  ### Step 1: Establish a Temporal Anchor

  {% step id="step-1" heading="Set up a temporal anchor" %}
    Set up a temporal anchor in the present to return to after completing the mission.
    {% input id="api-key" placeholder="Your API Key" label="API Key" /%}
    {% input id="base-url" placeholder="Base API URL" label="Base API URL" /%}
  {% /step %}

  ### Step 2: Create the timeline to navigate to 1889

  {% step id="step-2" heading="Create the timeline" %}
    Use Warp’s timeline preparation API to set the destination.
  {% /step %}

  ### Step 3: Navigate to 1889

  {% step id="step-3" heading="Navigate to 1889" %}
    Use Warp’s time navigation API to travel back to the exact date of the fire.
  {% /step %}

  ### Step 4: Retrieve the Blueprints

  {% step id="step-4" heading="Retrieve the Blueprints" %}
    Interact with the events of the past to retrieve the blueprints. Once you find the item, you'll need to register it or you won't be able to travel back with the item.
  {% /step %}

  ### Step 5: Avoid Paradoxes

  {% step id="step-5" heading="Avoid Paradoxes" %}
    Check that the item is safe to travel with back to the future to prevent a catastrophic paradox.
  {% /step %}

  ### Step 6: Return to the Present

  {% step id="step-6" heading="Return to the Present" %}
    Safely return to the present with the retrieved blueprint.
  {% /step %}

{% /code-walkthrough %}

## Outcome

You successfully retrieve the blueprints, but there’s a twist—the fire was no accident. This discovery sets the stage for the next chapter, where you must find out who wanted Tesla’s invention destroyed and why.
