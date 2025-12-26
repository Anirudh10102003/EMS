

const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Login Page",
        description: "Create UI for login page using React and Tailwind",
        date: "2025-01-10",
        category: "Design"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve responsive issue in navbar",
        date: "2025-01-05",
        category: "Development"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate login API with frontend",
        date: "2025-01-08",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    firstName: "Amit",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Dashboard UI",
        description: "Build employee dashboard layout",
        date: "2025-01-12",
        category: "UI"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write Unit Tests",
        description: "Add unit tests for task component",
        date: "2025-01-06",
        category: "Testing"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Optimize Images",
        description: "Reduce image size for better performance",
        date: "2025-01-09",
        category: "Optimization"
      }
    ]
  },

  {
    id: 3,
    firstName: "Suresh",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Task API",
        description: "Develop REST API for task management",
        date: "2025-01-11",
        category: "Backend"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Schema",
        description: "Design schema for task table",
        date: "2025-01-04",
        category: "Database"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy Server",
        description: "Deploy backend to cloud",
        date: "2025-01-07",
        category: "DevOps"
      }
    ]
  },

  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Documentation",
        description: "Write project documentation",
        date: "2025-01-13",
        category: "Documentation"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review pull requests",
        date: "2025-01-06",
        category: "Review"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Refactor Components",
        description: "Improve component structure",
        date: "2025-01-09",
        category: "Refactor"
      }
    ]
  },

  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Setup Project",
        description: "Initialize React project with Vite",
        date: "2025-01-14",
        category: "Setup"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Install Dependencies",
        description: "Install required npm packages",
        date: "2025-01-05",
        category: "Setup"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Configure ESLint",
        description: "Fix ESLint configuration errors",
        date: "2025-01-08",
        category: "Configuration"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Ravi",
    email: "admin@example.com",
    password: "123"
  }
];

export const SetLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const GetLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
