import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🙏 Devotional</h3>
            <p className="text-gray-400">Explore spiritual content in multiple languages</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/chalisa" className="hover:text-white transition">Chalisa</Link></li>
              <li><Link to="/mantra" className="hover:text-white transition">Mantra</Link></li>
              <li><Link to="/aarti" className="hover:text-white transition">Aarti</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/donate" className="hover:text-white transition">Donate</Link></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">© 2026 Devotional Site | Powered by 62 West Studio</p>
        </div>
      </div>
    </footer>
  );
}
