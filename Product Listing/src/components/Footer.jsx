export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </div>
      </div>
    </footer>
  );
}
