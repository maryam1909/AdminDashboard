// App.jsx (no Tailwind CSS)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const lightTheme = {
  body: '#ffffff',
  text: '#121212',
};

const darkTheme = {
  body: '#121212',
  text: '#ffffff',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: Arial, sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Sidebar = ({ theme, setTheme }) => (
  <div style={{ width: 250, background: '#2d3748', color: '#fff', padding: 20, display: 'flex', flexDirection: 'column' }}>
    <h2 style={{ fontSize: 24, marginBottom: 30 }}>Admin</h2>
    <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Link to="/">Dashboard</Link>
      <Link to="/kanban">Kanban</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/reports">Reports</Link>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginTop: 20, padding: 10, background: '#3182ce', color: '#fff', border: 'none', borderRadius: 5 }}
      >
        Toggle Theme
      </button>
    </nav>
  </div>
);

const Header = () => (
  <div style={{ marginBottom: 30, borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
    <h1 style={{ fontSize: 28 }}>Admin Dashboard</h1>
  </div>
);

const Dashboard = () => {
  const data = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 500 },
    { name: 'Apr', users: 700 },
  ];
  return (
    <div>
      <h2 style={{ fontSize: 20, marginBottom: 20 }}>User Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const Kanban = () => {
  const [tasks] = useState([
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "progress" },
    { id: 3, title: "Task 3", status: "done" },
  ]);
  const columns = ["todo", "progress", "done"];
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      {columns.map(col => (
        <div key={col} style={{ flex: 1, background: '#eee', padding: 10, borderRadius: 5 }}>
          <h3 style={{ fontSize: 18, marginBottom: 10 }}>{col.toUpperCase()}</h3>
          {tasks.filter(t => t.status === col).map(task => (
            <div key={task.id} style={{ background: '#fff', padding: 10, marginBottom: 10, borderRadius: 5, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>{task.title}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

const CalendarPage = () => {
  const localizer = momentLocalizer(moment);
  const events = [{ title: 'Meeting', start: new Date(), end: new Date() }];
  return (
    <div style={{ height: 600 }}>
      <BigCalendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: '100%' }} />
    </div>
  );
};

const Reports = () => {
  const data = [
    { name: 'John', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane', email: 'jane@example.com', role: 'Editor' },
  ];
  return (
    <div>
      <h2 style={{ fontSize: 20, marginBottom: 20 }}>Users Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: 10 }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: 10 }}>Email</th>
            <th style={{ border: '1px solid #ccc', padding: 10 }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, idx) => (
            <tr key={idx}>
              <td style={{ border: '1px solid #ccc', padding: 10 }}>{user.name}</td>
              <td style={{ border: '1px solid #ccc', padding: 10 }}>{user.email}</td>
              <td style={{ border: '1px solid #ccc', padding: 10 }}>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Sidebar theme={theme} setTheme={setTheme} />
          <div style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
