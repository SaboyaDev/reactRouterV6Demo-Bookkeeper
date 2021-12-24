import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Welcome to Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/">Home</Link> | <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
      <br />
    </div>
  );
}
