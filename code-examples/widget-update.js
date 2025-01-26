try {
  GreatWidget.settings({
    "weather": {
      "city": "Horishni Plavni",
      "value": "celsius"
    },
    "clicks: "on",
    "maya": true,
  })
} catch (e) {
  // handle errors here
  console.error("Great widget not found!");
}
