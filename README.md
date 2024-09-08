# Geeta API

Geeta API is a RESTful API that provides access to chapters and shlokas from the Bhagavad Gita in **Hindi**. The API returns chapter details such as names, meanings, summaries, and individual shlokas with their corresponding meanings.

## Features

- Retrieve a list of all chapters with their Hindi names, meanings, and summaries.
- Get details for a specific chapter in Hindi.
- Fetch all shlokas from a given chapter in Hindi.
- Retrieve a specific shloka by chapter and verse in Hindi with its meaning.

## API Endpoints

### 1. List All Chapters

```
GET /adhyay/
```
Returns a list of all chapters in the Bhagavad Gita, including the chapter name, its meaning, and a brief summary in Hindi.

**Response Example:**

```json
[
  {
    "chapter": 1,
    "name": "अर्जुन विषाद योग",
    "meaning": "अर्जुन के विषाद का योग",
    "summary": "इस अध्याय में अर्जुन युद्ध के मैदान में शोक और भ्रम से घिर जाते हैं..."
  },
  ...
]
```

### 2. Get Details of a Specific Chapter

```
GET /adhyay/{chapter_number}
```
Returns the details of the specified chapter in Hindi.

**Path Parameters:**
- `chapter_number`: The number of the chapter (1-18)

**Response Example:**

```json
{
  "chapter": 1,
  "name": "अर्जुन विषाद योग",
  "meaning": "अर्जुन के विषाद का योग",
  "summary": "इस अध्याय में अर्जुन युद्ध के मैदान में शोक और भ्रम से घिर जाते हैं..."
}
```

### 3. List All Shlokas from a Chapter

```
GET /shlok/{chapter_number}
```
Returns a list of all shlokas from the specified chapter in Hindi.

**Path Parameters:**
- `chapter_number`: The number of the chapter (1-18)

**Response Example:**

```json
[
  {
    "shloka": "धृतराष्ट्र उवाच...",
    "meaning": "धृतराष्ट्र ने कहा:..."
  },
  ...
]
```

### 4. Get a Specific Shloka by Chapter and Verse

```
GET /shlok/{chapter_number}/{verse_number}
```
Returns a specific shloka and its meaning in Hindi.

**Path Parameters:**
- `chapter_number`: The number of the chapter (1-18)
- `verse_number`: The number of the verse in the chapter

**Response Example:**

```json
{
  "shloka": "धृतराष्ट्र उवाच...",
  "meaning": "धृतराष्ट्र ने कहा:..."
}
```
