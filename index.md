# Home

## Quantiverse Home Page

{% partial file="/_partials/training-warning.md" /%}


# Current language: {% $lang %}




{% split %}
{% partial
    file="/_partials/left_side.md"
/%}
---

{% partial
    file="/_partials/right_side.md"
/%}
{% /split %}

---



{% cards cardMinWidth=180 %}

  {% card title="BBC Link Card"  to="http://bbc.co.uk"  layout="horizontal" align="start" icon="./images/cards-markdoc/vault-boy.png" variant="outlined" %}
    BBC
  {% /card %}


  {% card title="Museum Link Card" to="/products/museum/about"  layout="horizontal" align="center" icon="./images/cards-markdoc/vault-boy.png" variant="outlined" %}
  Museum API
  {% /card %}


{% /cards %}