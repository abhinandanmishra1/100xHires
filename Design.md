# System Design
API endpoints

### 1. **User Management APIs**
- **Register User**
    - **Method**: POST
    - **Endpoint**: `/api/users/register` 
    - **Description**: Create a new user account.
- **Login User**
    - **Method**: POST
    - **Endpoint**: `/api/users/login` 
    - **Description**: Authenticate a user and retrieve a token.
- **Get User Profile**
    - **Method**: GET
    - **Endpoint**: `/api/users/profile` 
    - **Description**: Retrieve user profile information.
- **Update User Profile**
    - **Method**: PUT
    - **Endpoint**: `/api/users/profile` 
    - **Description**: Update user profile information.
### 2. **Application Management APIs**
- **Create Application**
    - **Method**: POST
    - **Endpoint**: `/api/applications` 
    - **Description**: Submit a new job or scholarship application.
- **Get Applications**
    - **Method**: GET
    - **Endpoint**: `/api/applications` 
    - **Description**: Retrieve all applications for the authenticated user.
- **Update Application**
    - **Method**: PUT
    - **Endpoint**: `/api/applications/{applicationId}` 
    - **Description**: Update application details.
- **Delete Application**
    - **Method**: DELETE
    - **Endpoint**: `/api/applications/{applicationId}` 
    - **Description**: Remove an application from the list.
- **Track Application Status**
    - **Method**: GET
    - **Endpoint**: `/api/applications/{applicationId}/status` 
    - **Description**: Get the status of a specific application.
### 3. **AI Functionality APIs**
- **Generate Cover Letter**
    - **Method**: POST
    - **Endpoint**: `/api/ai/generate-cover-letter` 
    - **Description**: Generate a personalized cover letter based on user data and job description.
- **Generate Response**
    - **Method**: POST
    - **Endpoint**: `/api/ai/generate-response` 
    - **Description**: Generate a response to interview questions using user data.
### 4. **Job Listings APIs**
- **Fetch Job Listings**
    - **Method**: GET
    - **Endpoint**: `/api/jobs` 
    - **Description**: Retrieve job listings from integrated job portals based on user-defined tags.
### 5. **Notification APIs**
- **Send Email Notification**
    - **Method**: POST
    - **Endpoint**: `/api/notifications/email` 
    - **Description**: Send an email notification to the user regarding application updates or reminders.


## Database Schema
Structured schema for each collection in the MongoDB application, along with the relationships between them. This design emphasizes non-redundancy and ease of updates by utilizing ObjectId references.



Here is the updated Design.md file with JSON schema types as TypeScript:

### 1. **Users Collection**
```js
{
  userId: string; // Unique identifier for each user
  firstName: string; // First name of the user
  lastName: string; // Last name of the user
  email: string; // Unique email for each user
  passwordHash: string; // Hashed password for the user
  profilePicture?: string; // URL to profile picture
  createdAt: Date; // Timestamp when the user was created
  updatedAt: Date; // Timestamp when the user was last updated
}
```

### 2. **Applications Collection**
```js
{
  applicationId: string; // Unique identifier for each application
  userId: string; // Reference to the user who made the application
  jobListingId: string; // Reference to the job listing being applied for
  applicationStatus: 'Applied' | 'Interview' | 'Offer' | 'Rejected'; // Status of the application
  coverLetter?: string; // Cover letter content
  submittedAt: Date; // Timestamp when the application was submitted
  updatedAt: Date; // Timestamp when the application was last updated
}
```

### 3. **Job Listings Collection**
```js
{
  jobListingId: string; // Unique identifier for each job listing
  title: string; // Title of the job listing
  description: string; // Description of the job listing
  requirements: string; // Requirements for the job listing
  tags: string[]; // Tags for the job listing
  createdAt: Date; // Timestamp when the job listing was created
  updatedAt: Date; // Timestamp when the job listing was last updated
}
```

### 4. **Notifications Collection**
```js
{
  notificationId: string; // Unique identifier for each notification
  userId: string; // Reference to the user who received the notification
  applicationId?: string; // Reference to the application related to the notification
  message: string; // Message content of the notification
  isRead: boolean; // Whether the notification has been read
  createdAt: Date; // Timestamp when the notification was created
}
```

Let me know if you'd like me to make any further changes!