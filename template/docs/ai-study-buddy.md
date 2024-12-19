# Building Your AI Study Buddy

Welcome! Now that you've learned how to run your Vertex.js app, explore files, and add pages, let's build something more exciting: an **AI Study Buddy**.

This AI Study Buddy will let you:
- Paste in study material (text notes).
- Use an LLM (Large Language Model) to summarize that material.
- Ask follow-up questions to clarify concepts.
- Generate practice questions to test your understanding.

## Prerequisites

1. Make sure you've run the project:
   - `npm install`
   - `npm run dev`
   
   Open `http://localhost:3000` and ensure you see the welcome page.

2. Use Cursor (Ctrl+L/Cmd+L to open Chat) to ask questions:
   - "How do I add a new route?"
   - "How do I call an API in the loader function?"

3. Get an API key for an LLM provider (e.g., OpenAI).  
   For now, just get the key. We'll show you how to add it as an environment variable later.

## Steps

### Step 1: Create a Route for Inputting Study Material
- Create a new route file, e.g., `app/routes/study-input.tsx`.
- This page should have a simple form where you paste in text and submit it.
- Ask Cursor: "How do I create a form in a route and store the submitted data?"

You’ll store the text in memory for now. Once you submit, you can show a confirmation message.

### Step 2: Storing and Listing Materials
- Create a data structure (maybe a simple array in a module) to hold multiple study entries.
- Another route, `app/routes/study-list.tsx`, that lists all your saved study materials.
- Ask Cursor: "How do I share data between routes?" It might suggest using a simple in-memory JS module at first.

### Step 3: Summarizing with the LLM
- Add a button next to each study material entry in `study-list.tsx` that takes you to a `app/routes/study-summary.tsx` route.
- On that route, in a loader or action, call the LLM’s API to summarize the text.
- Ask Cursor: "How do I call an external API in a loader and display the results?"

You’ll need to:
- Store your LLM API key in an environment variable.
- Fetch the summary from the LLM’s API when the page loads.
- Display the summary to the user.

### Step 4: Asking Follow-Up Questions
- On the summary page, add a small form to let the user type a question.
- Submit that question to the same LLM API, passing the original material as context.
- Display the answer below the summary.
- Ask Cursor: "How do I handle form submissions and call the LLM on demand?"

### Step 5: Generating Practice Questions
- Add a button to generate practice questions.
- The LLM returns a list of questions. Display them on the page.
- The user can then reveal answers by clicking a button, calling the LLM again if needed, or you can just provide Q&A together.

### Step 6: Experiment & Polish
- Tweak the prompt sent to the LLM for summaries and questions to get better results.
- Add styling, maybe a homepage link to `study-input` and `study-list`.

### Step 7: Celebrate & Extend
- You’ve integrated an LLM into your learning process!
- Consider extending by adding a route to store your “favorite summaries” or add personal notes to each study item.
- The key point: you’ve learned how routes, loaders, forms, and external APIs work.

## Getting Help
At every step, ask Cursor things like:
- "How do I add a new route for study-input?"
- "Show me an example of calling an external API in a loader."
- "How do I store environment variables?"

By following these steps, you build confidence and create a truly useful, AI-powered learning assistant. Good luck!
