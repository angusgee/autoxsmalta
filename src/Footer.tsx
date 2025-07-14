export default function Footer() {
  return (
    <footer className="bg-[#242424] text-white py-8 font-[Inter]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">AutoXS Malta</p>
            <p className="text-sm">28, Tal Millieri Apts</p>
            <p className="text-sm">Hal-Ghaxaq, GXQ 1511</p>
            <p className="text-sm">MALTA</p>
            <div className="mt-4">
              <p className="text-sm">Imports: <a href="tel:+35699472443" className="hover:text-blue-300">+356 99472443</a></p>
              <p className="text-sm">Distribution: <a href="tel:+35679273579" className="hover:text-blue-300">+356 79273579</a></p>
              <p className="text-sm">Sales: <a href="tel:+35699859227" className="hover:text-blue-300">+356 9985 9227</a></p>
              <p className="text-sm">Email: <a href="mailto:info@autoxsmalta.com" className="hover:text-blue-300">info@autoxsmalta.com</a></p>
            </div>
            <div className="mt-4 flex items-center">
              <span className="mr-2">Follow us:</span>
              <a href="https://www.facebook.com/AutoXSMalta" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="/logo-fb.png" alt="Facebook" className="h-6 object-contain" />
              </a>
            </div>
          </div>

          {/* Brand Logos */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-4">Our Brands</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex justify-center">
                <img src="/logo-nerta.png" alt="Nerta Logo" className="h-12 object-contain" />
              </div>
              <div className="flex justify-center">
                <img src="/logo-armorall.png" alt="Armor All Logo" className="h-12 object-contain" />
              </div>
              <div className="flex justify-center">
                <img src="/logo-stp.png" alt="STP Logo" className="h-12 object-contain" />
              </div>
            </div>
          </div>

          {/* Company Logo and Copyright */}
          <div className="flex flex-col justify-center items-center md:items-end">
            <img src="/logo-autoxs.png" alt="AutoXS Malta" className="h-16 object-contain mb-4" />
            <p className="text-sm text-gray-400">Copyright © 2013-2025 AutoXS Malta</p>
            <p className="text-xs text-gray-500 mt-2">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}