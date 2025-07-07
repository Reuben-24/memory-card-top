export default function Footer() {
  return (
    <footer className="site-footer">
      <ul className="footer-links">
        <li>
          <a href="https://github.com/Reuben-24" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0a8 8 0 00-2.53 15.6c.4.07.55-.17.55-.38V13.6c-2.23.48-2.7-1.08-2.7-1.08a2.13 2.13 0 00-.89-1.16c-.73-.5.06-.49.06-.49.81.06 1.24.83 1.24.83a2.11 2.11 0 002.88.83c.06-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.01.07-2.1 0 0 .68-.21 2.21.82.65-.18 1.33-.27 2-.27s1.35.09 2 .27c1.52-1.03 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.52.56.83 1.28.83 2.15 0 3.06-1.87 3.75-3.64 3.95.29.25.54.74.54 1.5v2.22c0 .21.15.45.55.38A8 8 0 008 0z"/>
            </svg>
            <p>Creator GitHub Profile</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/Reuben-24/memory-card-top" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/>
            </svg>
            <p>GitHub Repo</p>
          </a>
        </li>
      </ul>

      <div className="footer-copyright">
        © {new Date().getFullYear()} Reuben Faltiska. All rights reserved.
      </div>
    </footer>
  );
}