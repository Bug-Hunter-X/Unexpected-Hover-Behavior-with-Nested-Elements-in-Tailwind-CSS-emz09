```javascript
// Solution: Use more specific selectors or the @apply directive
<div class="bg-gray-100 p-4 rounded shadow">
  <div class="hover:bg-gray-200">
    <h2 class="text-2xl font-bold">My Component</h2>
    <p class="text-gray-700">This is some text.</p>
  </div>
</div>
// Or with @apply (requires proper configuration):
<div class="bg-gray-100 p-4 rounded shadow">
  <div class="@apply hover:bg-gray-200">
    <h2 class="text-2xl font-bold">My Component</h2>
    <p class="text-gray-700">This is some text.</p>
  </div>
</div>
```