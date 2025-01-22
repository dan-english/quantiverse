---
questions:
  - question: Did you learn how to add a custom Markdoc tag?
    answers:
      - Yes
      - No
      - Maybe
    correctAnswerIndex: 1
  - question: How many places do you need to adjust to configure custom Markdoc tags?
    answers:
      - '0'
      - '1'
      - '2'
      - '3'
      - '4'
    correctAnswerIndex: 4
---

# Hello

Here is my quiz.

{% quiz questions=$frontmatter.questions /%}