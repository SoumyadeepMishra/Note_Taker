# 📝 NoteTaking App

A full-stack modern note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides a seamless experience for creating, reading, updating, and deleting notes with a beautiful and responsive user interface.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://note-taker-wm64.onrender.com)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D%2014.0.0-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-19.2.0-blue.svg)](https://reactjs.org/)

## 🌟 Features

- ✅ **CRUD Operations**: Create, Read, Update, and Delete notes
- 🎨 **Modern UI**: Beautiful dark-themed interface built with Tailwind CSS
- ⚡ **Real-time Updates**: Instant feedback on all operations
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🔄 **Context API**: Efficient state management using React Context
- 🚀 **Fast Performance**: Optimized with Vite for lightning-fast development
- 🔒 **Data Persistence**: MongoDB database for reliable data storage
- 🎯 **RESTful API**: Well-structured backend with Express.js
- 📅 **Timestamps**: Automatic creation and update timestamps
- 🎭 **Lucide Icons**: Beautiful icon library for enhanced UX

## 🏗️ Architecture

```
NoteTaking App
│
├── frontend/                 # React Frontend Application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar.jsx   # Navigation bar
│   │   │   ├── Footer.jsx   # Footer component
│   │   │   ├── Notecard.jsx # Individual note card
│   │   │   └── Noteform.jsx # Note creation/edit form
│   │   ├── context/         # React Context for state management
│   │   │   └── NoteContext.jsx
│   │   ├── pages/           # Application pages
│   │   │   ├── Home.jsx     # Home page with note list
│   │   │   └── Createnote.jsx # Create note page
│   │   ├── api/             # API configuration
│   │   │   └── url.js       # Axios instance setup
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   └── public/              # Static assets
│
└── backend/                 # Node.js Backend Application
    ├── controllers/         # Request handlers
    │   └── note.controller.js
    ├── models/             # MongoDB schemas
    │   └── note.model.js
    ├── routes/             # API routes
    │   └── note.route.js
    └── index.js            # Server entry point
```

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.13.0** - Client-side routing
- **Axios 1.13.4** - HTTP client
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Lucide React 0.563.0** - Icon library
- **ESLint** - Code linting

### Backend
- **Node.js** - Runtime environment
- **Express.js 5.2.1** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 9.1.4** - MongoDB ODM
- **CORS 2.8.6** - Cross-origin resource sharing
- **dotenv 17.2.3** - Environment variable management
- **Nodemon 3.1.11** - Development auto-restart

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd "NoteTaking App"
```

### 2. Backend Setup

#### Install Dependencies
```bash
cd backend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `backend` directory:

```env
PORT=4000
MONGO_URL=mongodb://localhost:27017/noteapp
# Or use MongoDB Atlas connection string:
# MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/noteapp?retryWrites=true&w=majority
```

#### Start Backend Server
```bash
npm start
```

The backend server will run on `http://localhost:4000`

### 3. Frontend Setup

#### Install Dependencies
```bash
cd frontend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `frontend` directory:

```env
VITE_BACKEND_URL=http://localhost:4000/api/v1/noteapp/
```

#### Start Frontend Development Server
```bash
npm run dev
```

The frontend application will run on `http://localhost:5173`

## 📡 API Endpoints

### Base URL
```
http://localhost:4000/api/v1/noteapp
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/create-note` | Create a new note |
| GET | `/get-notes` | Retrieve all notes |
| PUT | `/update-note/:id` | Update a specific note |
| DELETE | `/delete-note/:id` | Delete a specific note |

### Request/Response Examples

#### Create Note
```http
POST /api/v1/noteapp/create-note
Content-Type: application/json

{
  "title": "My First Note",
  "content": "This is the content of my note"
}
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "My First Note",
  "content": "This is the content of my note",
  "createdAt": "2026-02-03T10:30:00.000Z",
  "updatedAt": "2026-02-03T10:30:00.000Z"
}
```

## 🗄️ Database Schema

### Note Model

```javascript
{
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: Date,
  updatedAt: Date
}
```

## 🎨 UI Components

### Core Components
- **Navbar**: Application navigation with branding
- **Footer**: Footer with copyright information
- **Notecard**: Displays individual notes with edit/delete actions
- **Noteform**: Form component for creating and editing notes

### Pages
- **Home**: Displays all notes in a grid layout
- **Createnote**: Dedicated page for creating new notes

## 🔧 Development

### Available Scripts

#### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

#### Backend
```bash
npm start        # Start server with nodemon
npm test         # Run tests (to be implemented)
```

## 📦 Building for Production

### Frontend
```bash
cd frontend
npm run build
```

The build files will be in the `frontend/dist` directory.

### Backend
The backend is ready for production. Ensure:
- Environment variables are properly configured
- MongoDB connection string is set
- Server is configured to run on appropriate port

## 🚢 Deployment

### Frontend (Recommended: Vercel, Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Update environment variables with production API URL

### Backend (Recommended: Render, Railway, Heroku)
1. Ensure `.env` is not committed (use `.gitignore`)
2. Configure environment variables on the hosting platform
3. Deploy the `backend` directory
4. Set start command: `node index.js`

### Current Deployment
- **Frontend**: Deployed and configured
- **Backend**: Deployed on Render at `https://note-taker-wm64.onrender.com`

## 🔒 Environment Variables

### Backend (.env)
```env
PORT=4000
MONGO_URL=your_mongodb_connection_string
```

### Frontend (.env)
```env
VITE_BACKEND_URL=your_backend_api_url
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Style

- Follow ESLint configuration for JavaScript/React
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused
- Follow REST API conventions

## 🐛 Known Issues

- None at the moment

## 🗺️ Roadmap

- [ ] Add user authentication
- [ ] Implement note categories/tags
- [ ] Add search functionality
- [ ] Implement rich text editor
- [ ] Add note sharing capabilities
- [ ] Dark/Light theme toggle
- [ ] Export notes as PDF/Markdown
- [ ] Add unit and integration tests

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Soumyadeep**

## 🙏 Acknowledgments

- React team for the amazing library
- MongoDB for the flexible database
- Tailwind CSS for the utility-first CSS framework
- Vite for the blazing fast build tool
- Lucide for the beautiful icons

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

Made with ❤️ by Soumyadeep
