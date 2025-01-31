import re
# Import the regular expression module to use for pattern matching

from django.core.files.base import ContentFile
# Import ContentFile to handle file content for saving

from django.core.files.storage import default_storage
# Import default_storage to interact with the default file storage system in Django

def list_entries():
    '''
    Returns a list of all names of encyclopedia entries.
    '''
    _, filenames = default_storage.listdir('entries')
    # Get the list of filenames in the 'entries' directory from default storage

    return list(sorted(re.sub(r'\.md$', '', filename)
                for filename in filenames if filename.endswith('.md')))
    # Remove the '.md' extension from filenames and return the sorted list of entry names

def save_entry(title, content):
    '''
    Saves an encyclopedia entry, given its title and Markdown
    content. If an existing entry with the same title already exists,
    it is replaced.
    '''
    filename = f'entries/{title}.md'
    # Create the file path for the entry based on its title

    if default_storage.exists(filename):
        default_storage.delete(filename)
        # If the file already exists, delete it

    default_storage.save(filename, ContentFile(content))
    # Save the new content for the entry

def get_entry(title):
    '''
    Retrieves an encyclopedia entry by its title. If no such
    entry exists, the function returns None.
    '''
    try:
        f = default_storage.open(f'entries/{title}.md')
        # Try to open the file for the given entry title

        return f.read().decode('utf-8')
        # Return the content of the file as a UTF-8 decoded string
    except FileNotFoundError:
        return None
        # If the file does not exist, return None