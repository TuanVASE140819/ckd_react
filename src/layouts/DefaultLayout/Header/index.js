import { Button, Navbar } from 'flowbite-react';

function Header() {
  return (
  <div className="container mx-auto pt-5">
      <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://ckdvietnam.com/upload/logo/logo-14.png" className="mr-3 h-6 sm:h-9" alt="CKD COS VIETNAM" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* search  input */}
        <div className="relative w-64">
          <input type="text" className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium" placeholder="Search..." />
          <div className="absolute top-0 left-0 inline-flex items-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
        </div>a
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Giới thiệu</Navbar.Link>
        <Navbar.Link href="#">Thương hiệu</Navbar.Link>
        <Navbar.Link href="#">Khuyến mãi</Navbar.Link>
        <Navbar.Link href="#">Sản phẩm</Navbar.Link>
        <Navbar.Link href="#">Sự kiện</Navbar.Link>
        <Navbar.Link href="#">Tin tức</Navbar.Link>
        <Navbar.Link href="#">Liện hệ</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  </div>
  );
}

export default Header;