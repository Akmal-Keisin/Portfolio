# Portfolio API Documentation

This API provides read-only access to the portfolio content, designed for consumption by an Astro frontend.

## Base URL
`/api`

## General Structure

### Pagination
List endpoints return a standard Laravel paginated response. The actual items will be inside the `data` array, accompanied by `links` and `meta` for pagination controls.

```json
{
  "data": [
    // Array of resources
  ],
  "links": {
    "first": "http://domain.com/api/resource?page=1",
    "last": "http://domain.com/api/resource?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http://domain.com/api/resource",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

---

## 1. Projects
Manage and display portfolio projects.

### List Projects
Returns a paginated list of completed projects, ordered by newest first.

*   **URL:** `/api/projects`
*   **Method:** `GET`
*   **Query Params:** 
    *   `page` (optional, integer) - Page number for pagination.

**Response Example (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "title": "E-Commerce Dashboard",
      "slug": "e-commerce-dashboard",
      "description": "<p>Full description of the project.</p>",
      "excerpt": "A modern dashboard built with Vue.",
      "thumbnail": "/storage/projects/thumbnail.jpg",
      "live_url": "https://demo.com",
      "repo_url": "https://github.com/user/repo",
      "status": "completed",
      "featured": true,
      "tech_stacks": [
        {
          "id": 1,
          "name": "Vue.js",
          "slug": "vuejs",
          "description": "Progressive JavaScript Framework",
          "projectCount": 5,
          "createdAt": "Monday, May 11, 2026",
          "updatedAt": "Monday, May 11, 2026"
        }
      ],
      "created_at": "2026-05-11T10:00:00.000000Z",
      "updated_at": "2026-05-11T10:00:00.000000Z"
    }
  ],
  "links": { ... },
  "meta": { ... }
}
```

### Project Detail
Returns a single project based on its slug.

*   **URL:** `/api/projects/{slug}`
*   **Method:** `GET`

**Response Example (200 OK):**
```json
{
  "id": 1,
  "title": "E-Commerce Dashboard",
  "slug": "e-commerce-dashboard",
  "description": "<p>Full description of the project.</p>",
  "excerpt": "A modern dashboard built with Vue.",
  "thumbnail": "/storage/projects/thumbnail.jpg",
  "live_url": "https://demo.com",
  "repo_url": "https://github.com/user/repo",
  "status": "completed",
  "featured": true,
  "tech_stacks": [
    {
      "id": 1,
      "name": "Vue.js",
      "slug": "vuejs",
      "description": "Progressive JavaScript Framework",
      "projectCount": 5,
      "createdAt": "Monday, May 11, 2026",
      "updatedAt": "Monday, May 11, 2026"
    }
  ],
  "created_at": "2026-05-11T10:00:00.000000Z",
  "updated_at": "2026-05-11T10:00:00.000000Z"
}
```

---

## 2. Articles
Blog posts and articles.

### List Articles
Returns a paginated list of published articles, ordered by newest first.

*   **URL:** `/api/articles`
*   **Method:** `GET`
*   **Query Params:** 
    *   `page` (optional, integer)

**Response Example (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Getting Started with Astro",
      "slug": "getting-started-with-astro",
      "excerpt": "Learn how to build fast websites.",
      "content": {
        "type": "doc",
        "content": [
          { "type": "paragraph", "content": [ { "type": "text", "text": "Hello World" } ] }
        ]
      },
      "author": "John Doe",
      "category": {
        "id": 1,
        "name": "Web Development",
        "description": "Articles about web dev.",
        "articleCount": 10,
        "createdAt": "Monday, May 11, 2026",
        "updatedAt": "Monday, May 11, 2026"
      },
      "tags": [
        {
          "id": 1,
          "name": "Astro",
          "description": "A web framework.",
          "articleCount": 5,
          "createdAt": "Monday, May 11, 2026",
          "updatedAt": "Monday, May 11, 2026"
        }
      ],
      "createdAt": "Monday, May 11, 2026",
      "updatedAt": "Monday, May 11, 2026"
    }
  ],
  "links": { ... },
  "meta": { ... }
}
```

### Article Detail
Returns a single article based on its slug.

*   **URL:** `/api/articles/{slug}`
*   **Method:** `GET`

**Response Example (200 OK):**
```json
{
  "id": 1,
  "title": "Getting Started with Astro",
  "slug": "getting-started-with-astro",
  "excerpt": "Learn how to build fast websites.",
  "content": {
    "type": "doc",
    "content": [
      { "type": "paragraph", "content": [ { "type": "text", "text": "Hello World" } ] }
    ]
  },
  "author": "John Doe",
  "category": {
    "id": 1,
    "name": "Web Development",
    "description": "Articles about web dev.",
    "articleCount": 10,
    "createdAt": "Monday, May 11, 2026",
    "updatedAt": "Monday, May 11, 2026"
  },
  "tags": [
    {
      "id": 1,
      "name": "Astro",
      "description": "A web framework.",
      "articleCount": 5,
      "createdAt": "Monday, May 11, 2026",
      "updatedAt": "Monday, May 11, 2026"
    }
  ],
  "createdAt": "Monday, May 11, 2026",
  "updatedAt": "Monday, May 11, 2026"
}
```

---

## 3. Categories
Article categories.

### List Categories
Returns a paginated list of all categories.

*   **URL:** `/api/categories`
*   **Method:** `GET`
*   **Query Params:** 
    *   `page` (optional, integer)

**Response Example (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Web Development",
      "description": "Articles about web dev.",
      "articleCount": 10,
      "createdAt": "Monday, May 11, 2026",
      "updatedAt": "Monday, May 11, 2026"
    }
  ],
  "links": { ... },
  "meta": { ... }
}
```

### Category Detail
Returns a single category based on its slug.

*   **URL:** `/api/categories/{slug}`
*   **Method:** `GET`

**Response Example (200 OK):**
```json
{
  "id": 1,
  "name": "Web Development",
  "description": "Articles about web dev.",
  "articleCount": 10,
  "createdAt": "Monday, May 11, 2026",
  "updatedAt": "Monday, May 11, 2026"
}
```

---

## 4. Tags
Article tags.

### List Tags
Returns a paginated list of all tags.

*   **URL:** `/api/tags`
*   **Method:** `GET`
*   **Query Params:** 
    *   `page` (optional, integer)

**Response Example (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Laravel",
      "description": "PHP Framework",
      "articleCount": 15,
      "createdAt": "Monday, May 11, 2026",
      "updatedAt": "Monday, May 11, 2026"
    }
  ],
  "links": { ... },
  "meta": { ... }
}
```

### Tag Detail
Returns a single tag based on its slug.

*   **URL:** `/api/tags/{slug}`
*   **Method:** `GET`

**Response Example (200 OK):**
```json
{
  "id": 1,
  "name": "Laravel",
  "description": "PHP Framework",
  "articleCount": 15,
  "createdAt": "Monday, May 11, 2026",
  "updatedAt": "Monday, May 11, 2026"
}
```

---

## 5. Tech Stacks
Technologies used in projects.

### List Tech Stacks
Returns a paginated list of all tech stacks.

*   **URL:** `/api/tech-stacks`
*   **Method:** `GET`
*   **Query Params:** 
    *   `page` (optional, integer)

**Response Example (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Vue.js",
      "slug": "vuejs",
      "description": "Progressive JavaScript Framework",
      "projectCount": 5,
      "createdAt": "Monday, May 11, 2026",
      "updatedAt": "Monday, May 11, 2026"
    }
  ],
  "links": { ... },
  "meta": { ... }
}
```

### Tech Stack Detail
Returns a single tech stack based on its slug.

*   **URL:** `/api/tech-stacks/{slug}`
*   **Method:** `GET`

**Response Example (200 OK):**
```json
{
  "id": 1,
  "name": "Vue.js",
  "slug": "vuejs",
  "description": "Progressive JavaScript Framework",
  "projectCount": 5,
  "createdAt": "Monday, May 11, 2026",
  "updatedAt": "Monday, May 11, 2026"
}
```

---

## 6. Messages
Send contact form messages from the portfolio website.

### Send Message
Submit a new contact message.

*   **URL:** `/api/messages`
*   **Method:** `POST`
*   **Body (JSON):**
    *   `name` (string, required) - Sender's full name.
    *   `email` (string, required) - Sender's email address.
    *   `subject` (string, required) - Message subject.
    *   `message` (string, required) - Full message content.

**Response Example (201 Created):**
```json
{
  "message": "Your message has been sent successfully!"
}
```
