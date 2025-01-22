# CS50 Project 1 - Wiki

A custom design project for CS50's Web Programming with Python and JavaScript course, which is a simple clone of Wikipedia. The project utilizes Django, HTML, and CSS.

## Demo

Demo site: [https://wiki-cs50.vercel.app](https://wiki-cs50.vercel.app)

A short video where I go through the required specifications of the project: [https://youtu.be/VMSHx8HTh2w](https://youtu.be/VMSHx8HTh2w)

---

## Project Requirements

### Website Structure

Your site must include the following core features:

1. **Entry Page**:
   - Visiting `/wiki/TITLE`, where `TITLE` is the title of an encyclopedia entry, should display the contents of that entry.
   - If an entry exists:
     - Display the content of the entry.
     - The title of the page should include the name of the entry.
   - If an entry does not exist:
     - Display an error page indicating the page was not found.

2. **Index Page**:
   - Update `index.html` to list all encyclopedia entries as clickable links.
   - Clicking on an entry name should navigate directly to the corresponding entry page.

3. **Search Functionality**:
   - A search box should be provided in the sidebar for users to query encyclopedia entries.
   - If the query matches an entry name:
     - Redirect the user to the corresponding entry’s page.
   - If the query does not match exactly:
     - Display a search results page listing all entries where the query appears as a substring.
     - For example, searching for "Py" should include "Python" in the results.
   - Clicking on any result should take the user to that entry’s page.

4. **New Page**:
   - Provide a "Create New Page" link in the sidebar.
   - This should navigate to a page where users can create a new encyclopedia entry:
     - Input fields for the title and Markdown content.
     - A button to save the new page.
   - If the provided title matches an existing entry:
     - Display an error message.
   - Otherwise:
     - Save the new entry and navigate to its page.

5. **Edit Page**:
   - Each entry page should include a link to edit the entry.
   - The edit page should:
     - Display a textarea pre-populated with the existing Markdown content.
     - Include a button to save changes.
   - After saving changes:
     - Redirect back to the updated entry page.

6. **Random Page**:
   - Include a "Random Page" link in the sidebar.
   - Clicking the link should navigate to a random encyclopedia entry.

7. **Markdown to HTML Conversion**:
   - Convert Markdown content to HTML before rendering it on entry pages.
   - You may use the `python-markdown2` package for conversion, installable via `pip3 install markdown2`.

---

## Additional Notes

- **Consistency**: Ensure that the layout, styling, and navigation maintain a cohesive design across the site.
- **Error Handling**: Provide clear feedback for invalid inputs or missing entries.
- **Extensibility**: The design and code should allow for future enhancements without significant rework.

---

## Running the Application

To start the application, follow these steps:

1. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   
2. Start the application
   ```bash
   python manage.py runserver