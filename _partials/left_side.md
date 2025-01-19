### Part One: Left Side

This partial file should surface on the left side of the page.

{% cards cardMinWidth=180 %}

  {% card title="Icon card" layout="vertical" align="start" icon="/images/cards-markdoc/vault-boy.png" variant="outlined" %}
    Layout = `vertical`

    Align = `start`
  {% /card %}

  {% card title="Icon card" layout="vertical" align="start" icon="/images/cards-markdoc/vault-boy.png" variant="outlined" %}
    Layout = `center`

    Align = `center`
  {% /card %}

  {% card title="Icon card" layout="vertical" align="end" variant="outlined" icon="/images/cards-markdoc/vault-boy.png" %}
    Layout = `vertical`

    Align = `end`
  {% /card %}

{% /cards %}