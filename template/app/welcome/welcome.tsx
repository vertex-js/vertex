// Hello and welcome!
//
// You are currently looking at a code file that defines what will appear on a page in a web application.
// Don't worry if you don't know what a "web application" is or how this works. We'll go step-by-step.
//
// The text you're reading right now is called a "comment." Comments are notes for you, not the computer.
// They help explain what's going on. Feel free to ask Cursor (your AI assistant) to explain anything you see here.
//
// Before we do anything else, we need to view this application in a web browser so you can see the result of this code.
// But you might not know how to run this project yet. That's perfectly fine!
//
// Step 1: Ask Cursor How to Run the Project
// -----------------------------------------
// Press Ctrl+L (Windows/Linux) or Cmd+L (macOS) to open Cursor Chat if it's not already open.
// In the chat, type: "How do I run this project so I can see it in my browser?"
// Cursor will give you instructions, likely something like:
//
//   1. Run `npm install` to install the necessary dependencies.
//   2. Run `npm run dev` to start the development server.
//   3. Open the suggested URL (like http://localhost:3000) in your browser.
//
// Follow Cursor’s instructions step-by-step. If you get stuck, just ask more questions like:
// "I tried running `npm run dev` and got stuck. What do I do next?"
//
// Once you've successfully started the server and opened the page in your browser, you should see the text that this code creates.
//
// Step 2: Understanding What You're Seeing
// ----------------------------------------
// After the server is running and you've opened the page in your browser, you'll see a welcome message.
// That message comes from this code. Think of this file as a blueprint for what shows up on the screen.
//
// If you're curious: ask Cursor, "What does this code do?" or "Explain the Welcome component."
// Cursor can describe in simple terms what's happening here.
//
// Step 3: Exploring the Codebase with Cursor
// ------------------------------------------
// Once you understand the basics (how to run the project and what this file does), you can explore other parts of the code.
//
// - @Files: In the chat, you can type something like "@Files package.json" to see what’s inside that file.
// - @Code: If you want to focus on a part of a file, highlight some code in the editor and press Ctrl+Shift+L to show just that snippet in Chat.
//
// Ask Cursor: "How do I use @Files and @Code?" if you need more guidance.
//
// Step 4: Building On Your Knowledge
// ----------------------------------
// After you've seen how to run the project and look at files, you might want to learn how to add new pages or fetch data.
// Just ask Cursor: "How do I add a new page?" or "How do I fetch data in this app?" and it will guide you.
//
// Over time, you’ll learn:
// - How to add new pages.
// - How to modify what shows up on the screen.
// - How to load data from a file.
// - And eventually, how to build a full-stack web app.

export function Welcome() {
  return (
    <main className='p-4 space-y-4 max-w-prose mx-auto'>
      <h1 className='text-2xl font-bold'>Welcome to Your First Web App!</h1>

      <p>
        If you are seeing this in your browser, congratulations—you’ve started
        the project successfully! If not, open Cursor and ask:{" "}
        <em>“How do I run this project?”</em>
      </p>

      <p>
        This page is defined by a code file. The code acts like instructions for
        what appears here. By changing the code, you change what you see in your
        browser.
      </p>

      <h2 className='text-xl font-semibold'>What Now?</h2>
      <p>
        Ask Cursor something simple like:{" "}
        <em>“What does this Welcome component do?”</em> Cursor will explain it
        in plain language.
      </p>

      <h2 className='text-xl font-semibold'>Exploring the Codebase</h2>
      <p>
        Once you're comfortable asking basic questions, try exploring other
        files. For example, type:
      </p>
      <ul className='list-disc list-inside'>
        <li>
          <code>@Files routes.ts</code> - to see how different pages are set up
        </li>
        <li>
          <code>@Files package.json</code> - to learn about the project’s setup
        </li>
      </ul>
      <p>
        Then you can highlight a small part of any file’s code and press
        Ctrl+Shift+L to see just that part in the chat. Ask Cursor:{" "}
        <em>“What does this snippet mean?”</em>
      </p>

      <h2 className='text-xl font-semibold'>Keep Learning</h2>
      <p>
        As you get more comfortable, you can learn how to add pages, fetch data,
        and more—just by asking Cursor. For now, start with the basics:
      </p>
      <ul className='list-disc list-inside'>
        <li>Get the app running in your browser.</li>
        <li>Ask Cursor what this file and component do.</li>
        <li>Explore other files with @Files.</li>
      </ul>

      <p>
        Step by step, you’ll build up your skills. Remember: if you’re stuck or
        confused, just ask Cursor for help!
      </p>
    </main>
  );
}
