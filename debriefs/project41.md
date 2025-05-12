
# Tabs

## What made you smile?
- Tabs work well. There were no issues regarding finding the docs and creating the tabs.
  

## What did you find confusing?
- Just trying to answer on the "Things to try" questions.
1. If you use the same tab set twice on a page (e.g. language selectors), does the selected value stay in sync?
   No. The .md file treats separate tab as the indepedent content and don't syncronize them. After an investigation we didn't find the solution for syncing them up.
2. Can you deep link to a specific tab? If so, how does it work?
   No. We can (by using id), but the tab should be clicked in order to show the needed content.
3. What happens if a user hits “back” in the browser — does the tab remember its state?
   No, the tab returns to it's initial state.
4. Does your tab layout hold up in mobile view?
   Rather yes. It hold up pretty good, but to see the whole content the user should scroll the screen.


- When do tabs improve the experience? When do they make things worse?
  They improve the experience for the same context but different environments, approaches. They make things worse if combine unrelated content (for example, Kitchen API and Changelog), so it will be impossible ti take a link to the specific content, OR if you structure logical parts of the whole text into tabs. (it's not readable).
- Did anything feel clunky?
  We wouldn't say so. If the user use tabs deliberately, there will be no problem with tabs. 
- Any layout bugs or surprises?
  Nothing was found.