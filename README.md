# Unexpected Hover Behavior with Nested Elements in Tailwind CSS

This repository demonstrates an uncommon bug encountered when using Tailwind CSS hover styles on nested elements.  The issue specifically arises when applying specific parent container classes, leading to unexpected behavior where hover styles don't correctly cascade down to inner elements.

The `bug.js` file shows the code that replicates the problem. The `bugSolution.js` file provides a potential workaround that should correctly apply the hover styles.

**Problem:** Hover styles do not work as expected when applied to inner elements within a specific parent structure.  This is not the typical issue of specificity conflicts and the issue is subtle to trace.

**Solution:**  The solution often involves adding more specific selectors, or using the `@apply` directive to ensure that styles apply correctly.

This repository aims to help others avoid this uncommon but frustrating issue.